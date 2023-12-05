const {sequelize, DataTypes, QueryTypes, transact}=require('./provider')



const Region=sequelize.define('region', {
    code: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    libelle:{
        type: DataTypes.STRING,
        unique: true
    }
},{
    freezeTableName: true
})


const Mois=sequelize.define('mois', {
    code: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    libelle:{
        type: DataTypes.STRING,
        unique: true
    }
},{
    freezeTableName: true
})



const Semaine=sequelize.define('semaine', {
    code: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    libelle:{
        type: DataTypes.STRING,
        unique: true
    }
},{
    freezeTableName: true
})


const Type_releve=sequelize.define('type_releve', {
    code: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    libelle:{
        type: DataTypes.STRING,
        unique: true
    }
},{
    freezeTableName: true
})


const Superviseur=sequelize.define('superviseur', {
    code: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nom_prenom:{
        type: DataTypes.STRING,
    },
    region:{
        type: DataTypes.INTEGER,
        references:{
            model: Region,
            key: 'code'
        }
    }
},{
    freezeTableName: true
})


const Enqueteur=sequelize.define('enqueteur', {
    code: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nom_prenom:{
        type: DataTypes.STRING,
    },
    region:{
        type: DataTypes.INTEGER,
        references:{
            model: Region,
            key: 'code'
        }
    }
},{
    freezeTableName: true
})


const Type_point_vente=sequelize.define('type_point_vente', {
    code: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    libelle:{
        type: DataTypes.STRING,
        unique: true
    }
},{
    freezeTableName: true
})


const Commune=sequelize.define('commune', {
    code: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    libelle:{
        type: DataTypes.STRING,
        unique: true
    },
    region:{
        type: DataTypes.INTEGER,
        references:{
            model: Region,
            key: 'code'
        }
    }
},{
    freezeTableName: true
})



const Point_vente=sequelize.define('point_vente', {
    code: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    libelle:{
        type: DataTypes.STRING
    },
    commune:{
        type: DataTypes.STRING,
        references:{
            model: Commune,
            key: 'code'
        }
    }

},{
    freezeTableName: true
})


/*
Users.hasMany(Etudiant, {foreignKey: 'user'})
Users.hasMany(Semestre, {foreignKey: 'user'})
Users.hasMany(Unite, {foreignKey: 'user'})
Semestre.hasMany(Unite, {foreignKey: 'semestre'})
Unite.hasMany(Matiere, {foreignKey: 'unite'})
*/



module.exports={
    Region, Mois, Type_releve, Semaine, Superviseur, Enqueteur, Type_point_vente, Point_vente, Commune
}