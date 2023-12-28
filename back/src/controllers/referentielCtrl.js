const {
  Region,
  Mois,
  Type_releve,
  Semaine,
  Superviseur,
  Enqueteur,
  Type_point_vente,
  Point_vente,
  Commune,
  sequelize,
  QueryTypes,
  Section,
  Variete,
  Datas,
  User,
} = require("../models");

module.exports = {
  async accueil(req, res) {
    res.send({ message: "Welcome IHPC" });
  },
  async addRegion(req, res) {
    try {
      const regions = await Region.bulkCreate(req.body);
      res.send({ success: "regions succefly added" });
    } catch (error) {
      console.log("addRegion regions ", error);
      res.status(404).send({ error: "regions existe déja " + error });
    }
  },
  async addTypeReleve(req, res) {
    try {
      const type_releve = await Type_releve.bulkCreate(req.body);
      res.send({ success: "type_releve succefly added" });
    } catch (error) {
      console.log("addTypeReleve type_releve ", error);
      res.status(404).send({ error: "type_releve existe déja " + error });
    }
  },
  async addMois(req, res) {
    try {
      const mois = await Mois.bulkCreate(req.body);
      res.send({ success: "mois succefly added" });
    } catch (error) {
      console.log("addMois mois ", error);
      res.status(404).send({ error: "mois existe déja " + error });
    }
  },
  async addSemaine(req, res) {
    try {
      const semaines = await Semaine.bulkCreate(req.body);
      res.send({ success: "semaines succefly added" });
    } catch (error) {
      console.log("addSemaine semaines ", error);
      res.status(404).send({ error: "semaines existe déja " + error });
    }
  },
  async addSuperviseur(req, res) {
    try {
      const superviseurs = await Superviseur.bulkCreate(req.body);
      res.send({ success: "superviseurs succefly added" });
    } catch (error) {
      console.log("addSuperviseur superviseurs ", error);
      res.status(404).send({ error: "superviseurs existe déja " + error });
    }
  },
  async addEnqueteur(req, res) {
    try {
      const enqueteurs = await Enqueteur.bulkCreate(req.body);
      res.send({ success: "enqueteurs succefly added" });
    } catch (error) {
      console.log("addEnqueteur enqueteurs ", error);
      res.status(404).send({ error: "enqueteurs existe déja " + error });
    }
  },
  async addTypePointVente(req, res) {
    try {
      const type_point_vente = await Type_point_vente.bulkCreate(req.body);
      res.send({ success: "type_point_vente succefly added" });
    } catch (error) {
      console.log("addTypePointVente type_point_vente ", error);
      res.status(404).send({ error: "type_point_vente existe déja " + error });
    }
  },
  async addCommune(req, res) {
    try {
      const communes = await Commune.bulkCreate(req.body);
      res.send({ success: "communes succefly added" });
    } catch (error) {
      console.log("addCommune communes ", error);
      res.status(404).send({ error: "communes existe déja " + error });
    }
  },
  async addPointVente(req, res) {
    try {
      const point_vente = await Point_vente.bulkCreate(req.body);
      res.send({ success: "point_vente succefly added" });
    } catch (error) {
      console.log("addPointVente point_vente ", error);
      res.status(404).send({ error: "point_vente existe déja " + error });
    }
  },
  async addOnePointVente(req, res) {
    try {
      const point_vente = await Point_vente.create(req.body);
      res.send({
        success: "point_venteOne succefly added",
        point_vente: point_vente,
      });
    } catch (error) {
      console.log("point_venteOne point_vente ", error);
      res.status(404).send({ error: "point_venteOne existe déja " + error });
    }
  },
  async addSection(req, res) {
    try {
      const section = await Section.bulkCreate(req.body);
      res.send({ success: "sections succefly added" });
    } catch (error) {
      console.log("addSection sections ", error);
      res.status(404).send({ error: "sections existe déja " + error });
    }
  },
  async addVariete(req, res) {
    try {
      const variete = await Variete.bulkCreate(req.body);
      res.send({ success: "variete succefly added" });
    } catch (error) {
      console.log("addVariete variete ", error);
      res.status(404).send({ error: "varietes existe déja " + error });
    }
  },
  async addDatas(req, res) {
    try {
      const datas = await Datas.bulkCreate(req.body);
      res.send({ success: "datas succefly added", datas: datas });
    } catch (error) {
      console.log("addDatas datas ", error);
      res.status(404).send({ error: "datas existe déja " + error });
    }
  },
  async getAllMois(req, res) {
    console.log(req.session.user);
    try {
      const mois = await Mois.findAll();
      return res.send({ mois: mois });
    } catch (error) {
      console.log("Erreur getAllMois ", error);
      return res.status(404).send({ error: "Error getAllMois " + error });
    }
  },
  async getAllTypeReleve(req, res) {
    try {
      const types_releve = await Type_releve.findAll();
      return res.send({ types_releve: types_releve });
    } catch (error) {
      console.log("Erreur getAllTypeReleve ", error);
      return res.status(404).send({ error: "Error getAllTypeReleve " + error });
    }
  },
  async getAllSemaine(req, res) {
    try {
      const semaines = await Semaine.findAll();
      return res.send({ semaines: semaines });
    } catch (error) {
      console.log("Erreur getAllSemaine ", error);
      return res.status(404).send({ error: "Error getAllSemaine " + error });
    }
  },
  async getAllRegion(req, res) {
    try {
      const regions = await Region.findAll();
      return res.send({ regions: regions });
    } catch (error) {
      console.log("Erreur getAllRegion ", error);
      return res.status(404).send({ error: "Error getAllRegion " + error });
    }
  },
  async getAllEnqueteur(req, res) {
    try {
      const enqueteurs = await sequelize.query(
        "SELECT e.code, e.nom_prenom, e.region, r.libelle from enqueteur e join region r on r.code=e.region order by e.region, e.nom_prenom",
        {
          replacements: {},
          type: QueryTypes.SELECT,
        }
      );
      res.send({ enqueteurs: enqueteurs });
    } catch (error) {
      console.log("Error getEnqueteur Matiere " + error);
      res.status(404).send({ error: "Error getEnqueteur " + error });
    }
  },
  async getAllSuperviseur(req, res) {
    try {
      const superviseurs = await sequelize.query(
        "SELECT e.code, e.nom_prenom, e.region, r.libelle from superviseur e join region r on r.code=e.region order by e.region, e.nom_prenom",
        {
          replacements: {},
          type: QueryTypes.SELECT,
        }
      );
      res.send({ superviseurs: superviseurs });
    } catch (error) {
      console.log("Error getAllSuperviseur Matiere " + error);
      res.status(404).send({ error: "Error getAllSuperviseur " + error });
    }
  },
  async getAllTypePointVente(req, res) {
    try {
      const types_point_vente = await Type_point_vente.findAll();
      return res.send({ types_point_vente: types_point_vente });
    } catch (error) {
      console.log("Erreur getAllTypePointVente ", error);
      return res
        .status(404)
        .send({ error: "Error getAllTypePointVente " + error });
    }
  },
  async getAllCommune(req, res) {
    try {
      const communes = await sequelize.query(
        "SELECT e.code, e.libelle, e.region, r.libelle as libelle_region from commune e join region r on r.code=e.region order by e.region, e.libelle",
        {
          replacements: {},
          type: QueryTypes.SELECT,
        }
      );
      res.send({ communes: communes });
    } catch (error) {
      console.log("Error getAllCommune  " + error);
      res.status(404).send({ error: "Error getAllCommune " + error });
    }
  },
  async getAllPointVente(req, res) {
    try {
      const points_vente = await sequelize.query(
        "SELECT e.code, e.libelle, e.commune, c.libelle as libelle_commune, c.region, r.libelle as libelle_region, v.code, v.libelle as libelle_type_point_vente  from point_vente e join commune c on c.code=e.commune join  region r on r.code=c.region join type_point_vente v on v.code=e.type_point_vente order by c.region, e.commune, e.code",
        {
          replacements: {},
          type: QueryTypes.SELECT,
        }
      );
      res.send({ points_vente: points_vente });
    } catch (error) {
      console.log("Error getAllPointVente  " + error);
      res.status(404).send({ error: "Error getAllPointVente " + error });
    }
  },
  async getMaxPointVente(req, res) {
    try {
      const points_vente = await sequelize.query(
        "select commune, max(code) as max_code from point_vente where commune=:commune group by commune order by commune",
        {
          replacements: { commune: req.params.commune },
          type: QueryTypes.SELECT,
        }
      );
      res.send({ points_vente: points_vente });
    } catch (error) {
      console.log("Error getAllPointVente  " + error);
      res.status(404).send({ error: "Error getAllPointVente " + error });
    }
  },
  async getAllSection(req, res) {
    try {
      const sections = await Section.findAll();
      return res.send({ sections: sections });
    } catch (error) {
      console.log("Erreur getAllSection ", error);
      return res.status(404).send({ error: "Error getAllSection " + error });
    }
  },
  async getAllVariete(req, res) {
    try {
      const varietes = await sequelize.query(
        "SELECT e.code, e.libelle_court, e.libelle_long, e.section, c.libelle as libelle_section from variete e join section c on c.code=e.section order by e.section, e.code",
        {
          replacements: {},
          type: QueryTypes.SELECT,
        }
      );
      res.send({ varietes: varietes });
    } catch (error) {
      console.log("Error getAllVariete  " + error);
      res.status(404).send({ error: "Error getAllVariete " + error });
    }
  },
  async getUserByLoginAndpassword(req, res) {
    if (!req.session.user) req.session.user = "test";
    try {
      const user = await sequelize.query(
        "select * from users where login=:login and password=:password",
        {
          replacements: { login: req.body.login, password: req.body.password },
          type: QueryTypes.SELECT,
        }
      );
      res.send({ user: user });
    } catch (error) {
      console.log("Erruer login ", error);
      res.status(404).send({ error: error });
    }
  },
  async getVarieteBySection(req, res) {
    try {
      const varietes = await sequelize.query(
        "SELECT e.code, e.libelle_court, e.libelle_long, e.section, c.libelle as libelle_section from variete e join section c on c.code=e.section where e.section=:section order by e.section, e.code",
        {
          replacements: { section: req.params.section },
          type: QueryTypes.SELECT,
        }
      );
      res.send({ varietes: varietes });
    } catch (error) {
      console.log("Error getVarieteBySection  ", error);
      res.status(404).send({ error: "Error getVarieteBySection " + error });
    }
  },
  async getCommuneByRegion(req, res) {
    try {
      const communes = await sequelize.query(
        "SELECT * from commune where region=:region order by code",
        {
          replacements: { region: req.params.region },
          type: QueryTypes.SELECT,
        }
      );
      res.send({ communes: communes });
    } catch (error) {
      console.log("Error getCommuneByRegion  ", error);
      res.status(404).send({ error: "Error getCommuneByRegion " + error });
    }
  },
  async getSupervisuerByRegion(req, res) {
    try {
      const superviseurs = await sequelize.query(
        "SELECT * from superviseur where region=:region order by code",
        {
          replacements: { region: req.params.region },
          type: QueryTypes.SELECT,
        }
      );
      res.send({ superviseurs: superviseurs });
    } catch (error) {
      console.log("Error getSupervisuerByRegion  ", error);
      res.status(404).send({ error: "Error getSupervisuerByRegion " + error });
    }
  },
  async getEnqueteurByRegion(req, res) {
    try {
      const enqueteurs = await sequelize.query(
        "SELECT * from enqueteur where region=:region order by code",
        {
          replacements: { region: req.params.region },
          type: QueryTypes.SELECT,
        }
      );
      res.send({ enqueteurs: enqueteurs });
    } catch (error) {
      console.log("Error getEnqueteurByRegion  ", error);
      res.status(404).send({ error: "Error getEnqueteurByRegion " + error });
    }
  },
  async getPointVenteByCommune(req, res) {
    try {
      const point_ventes = await sequelize.query(
        "SELECT * from point_vente where commune=:commune order by code",
        {
          replacements: { commune: req.params.commune },
          type: QueryTypes.SELECT,
        }
      );
      res.send({ point_ventes: point_ventes });
    } catch (error) {
      console.log("Error getPointVenteByCommune  ", error);
      res.status(404).send({ error: "Error getPointVenteByCommune " + error });
    }
  },
  async checkData(req, res) {
    try {
      const datas = await sequelize.query(
        "SELECT * from datas where commune=:commune and mois=:mois and variete=:variete and semaine=:semaine",
        {
          replacements: {
            commune: req.params.commune,
            mois: req.params.mois,
            variete: req.params.variete,
            semaine: req.params.semaine,
          },
          type: QueryTypes.SELECT,
        }
      );
      res.send({ datas: datas });
    } catch (error) {
      console.log("Error checkData  ", error);
      res.status(404).send({ error: "Error checkData " + error });
    }
  },
  async getDataInit(req, res) {
    try {
      const datas = await sequelize.query(
        "SELECT d.id, enqueteur, variete, superviseur, commune, mois, semaine, point_vente, type_releve, date_passage, prix1, quantite1, prix2, quantite2, observation, users, v.libelle_court, v.code from datas d join variete v on v.code=d.variete where v.section=:section and d.commune=:commune and d.mois=:mois and d.semaine=:semaine order by v.code",
        {
          replacements: {
            section: req.params.section,
            commune: req.params.commune,
            mois: req.params.mois,
            semaine: req.params.semaine,
          },
          type: QueryTypes.SELECT,
        }
      );
      res.send({ datas: datas });
    } catch (error) {
      console.log("Error getDataInit  ", error);
      res.status(404).send({ error: "Error getDataInit " + error });
    }
  },
  async updateData(req, res) {
    const data = req.body;
    try {
      for (let i = 0; i < data.length; i++) {
        await sequelize.query(
          "UPDATE public.datas SET  enqueteur=:enqueteur,  superviseur=:superviseur, point_vente=:point_vente, type_releve=:type_releve, date_passage=:date_passage, prix1=:prix1, quantite1=:quantite1, prix2=:prix2, quantite2=:quantite2, observation=:observation, users=:users WHERE id=:id",
          {
            replacements: {
              enqueteur: data[i].enqueteur,
              superviseur: data[i].superviseur,
              point_vente: data[i].point_vente,
              type_releve: data[i].type_releve,
              date_passage: data[i].date_passage,
              prix1: data[i].prix1,
              quantite1: data[i].quantite1,
              prix2: data[i].prix2,
              quantite2: data[i].quantite2,
              observation: data[i].observation,
              users: data[i].users,
              id: data[i].id,
            },
            type: QueryTypes.UPDATE,
          }
        );
      }
      res.send({ success: "Data updated" });
    } catch (error) {
      console.log("Error upadteData  ", error);
      return 2;
    }
  },

  /*async edit(req, res){
        try {
            let matiere=await Matiere.findByPk(req.body.id)
            await matiere.update(req.body)
            res.send({success: 'Matiere successfuly edited'})
        } catch (error) {
            console.log('error edit Matiere '+error);
            res.status(404).send({error: 'Error edit Matiere    '+error})
        }
    },
    async getById(req, res){
        try {
            const matiere=Matiere.findByPk(req.params.id)
            res.send({matiere: matiere})
        } catch (error) {
            console.log('Matiere getById '+error);
            res.status(404).send({error: 'Error getById '+error})
        }
    },

    async getAll(req, res){
        try {
            const matieres=await sequelize.query("SELECT m.id,m.libelle,m.credit,m.volume, m.unite AS id_unite,u.libelle AS libelle_unite,u.titre AS titre_unite,u.libelle_semestre FROM matiere m JOIN v_unite u ON m.unite = u.id",{
                replacements: {},
                type: QueryTypes.SELECT
            })
            res.send({matieres: matieres})
        } catch (error) {
            console.log('Error getAll Matiere '+error);
            res.status(404).send({error: 'Error getAll '+error})
        }
    }*/
};
