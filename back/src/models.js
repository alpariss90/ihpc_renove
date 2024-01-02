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
    },
    type_point_vente:{
        type: DataTypes.STRING,
        references:{
            model: Type_point_vente,
            key: 'code'
        }
    }

},{
    freezeTableName: true
})


const Section=sequelize.define('section',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code:{
        type: DataTypes.STRING,
        unique: true
    },
    libelle:{
        type: DataTypes.STRING,
        unique: true
    },
    semaine1:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    semaine2:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    semaine3:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    semaine4:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    type_section:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName: true
})


const Variete=sequelize.define('variete',{
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    code:{
        type: DataTypes.STRING,
        unique:true
    },
    libelle_court:{
        type: DataTypes.TEXT,
        unique: true
    },
    libelle_long:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    section:{
        type: DataTypes.STRING,
        references:{
            model: Section,
            key: 'code'
        }
    }
},{
    freezeTableName: true
})


const User=sequelize.define('users', {
    login: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    is_active:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    nom_prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profil: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.TEXT,
        allowNull: false
    }
})



const Datas=sequelize.define('datas',{
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    enqueteur:{
        type: DataTypes.STRING,
        references:{
            model: Enqueteur,
            key: 'code'
        }
    },
    variete:{
        type: DataTypes.STRING,
        references:{
            model: Variete,
            key: 'code'
        }
    },
    superviseur:{
        type: DataTypes.STRING,
        references:{
            model: Superviseur,
            key: 'code'
        }
    },
    commune:{
        type: DataTypes.STRING,
        references:{
            key: 'code',
            model: Commune
        }
    },
    mois:{
        type: DataTypes.STRING,
        references:{
            model: Mois,
            key: 'code'
        }
    },
    semaine:{
        type: DataTypes.STRING,
        references:{
            key: 'code',
            model: Semaine
        }
    },
    point_vente:{
        type: DataTypes.STRING,
        references:{
            model: Point_vente,
            key: 'code'
        }
    },
    type_releve:{
        type: DataTypes.STRING,
        references:{
            key: 'code',
            model: Type_releve
        }
    },
    date_passage: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    prix1:{
        type: DataTypes.BIGINT,
        allowNull: true
    },
    quantite1:{
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    prix2:{
        type: DataTypes.BIGINT,
        allowNull: true
    },
    quantite2:{
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    observation:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    users:{
        type: DataTypes.STRING,
        references:{
            key: 'login',
            model: User
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
    Region, Mois, Type_releve, Semaine, Superviseur, Enqueteur, 
    Type_point_vente, Point_vente, Commune, sequelize, QueryTypes,
    Section, Variete, Datas, User
}