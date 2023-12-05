const {sequelize, DataTypes, QueryTypes, transact}=require('./provider')



const Region=sequelize.define('region', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
    libelle:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
},{
    freezeTableName: true
})


const Mois=sequelize.define('mois', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    libelle:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
},{
    freezeTableName: true
})



const Semaine=sequelize.define('semaine', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    libelle:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
},{
    freezeTableName: true
})


const Type_releve=sequelize.define('type_releve', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    libelle:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
},{
    freezeTableName: true
})


const Superviseur=sequelize.define('superviseur', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    nom_prenom:{
        type: DataTypes.STRING,
        allowNull: false
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
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    nom_prenom:{
        type: DataTypes.STRING,
        allowNull: false
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
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    libelle:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
},{
    freezeTableName: true
})


const Commune=sequelize.define('commune', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: DataTypes.STRING,
        unique: 'y',
        allowNull: false
    },
    libelle:{
        type: DataTypes.STRING,
        unique: 'x',
        allowNull: false
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
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: DataTypes.STRING,
        unique: 'keyp',
        allowNull: false
    },
    libelle:{
        type: DataTypes.STRING,
        allowNull: false
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