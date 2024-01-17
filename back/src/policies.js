const jwt= require('jsonwebtoken')

module.exports = {
    authenticateToken(req, res, next) {
        // Extract the token from the Authorization header
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
      console.log("authhhhhhhhhhh");
      console.log(authHeader);
      console.log("tokkkkkkkkkk");
      console.log(token);
        if (!token) {
          return res.status(401).json({ message: 'No token provided' });
        }
      
        // Verify and decode the token
        jwt.verify(token, secretKey, (err, decoded) => {
          if (err) {
            return res.status(403).json({ message: 'Invalid token' });
          }
      
          // Add the decoded user information to the request object
          req.user = decoded;
          next();
        });
      }
    
  }