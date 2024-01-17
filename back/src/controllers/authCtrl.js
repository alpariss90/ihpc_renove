const {
    sequelize,
    QueryTypes,
    User,
  } = require("../models");
const jwt= require('jsonwebtoken')
const dotenv=require('dotenv')




dotenv.config()


function genToken(login, profil){
    let jwtSecrteKey = process.env.JWT_SECRET_KEY;
    let data = {
      date: new Date(),
      nom: login,
      profil: profil,
    };
    const token = jwt.sign(data, jwtSecrteKey, { expiresIn: '1h' });

    return token
    //return res.status(200).send({ token: token });
}


module.exports = {
async getUserByLoginAndpassword(req, res) {
    //if (!req.session.user) req.session.user = "test";
    //console.log(req.body);
    try {
      const user = await sequelize.query(
        "select * from users where login=:login and password=:password",
        {
          replacements: { login: req.body.login, password: req.body.password },
          type: QueryTypes.SELECT,
        }
      );
      console.log(user[0].login);
      const token=genToken(user.login, user.password);
      res.send({ login: user[0].login, profil: user[0].profil, token: token });
    } catch (error) {
      console.log("Erruer login ", error);
      res.status(404).send({ error: error });
    }
  },

  


}