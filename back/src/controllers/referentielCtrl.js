const {Region, Mois, Type_releve, Semaine, Superviseur, Enqueteur, Type_point_vente, Point_vente, Commune, sequelize, QueryTypes}=require('../models')


module.exports={

    async accueil(req, res){
        res.send({message: 'Welcome IHPC'})
    },
    async addRegion(req, res){
        try {
            const regions=await Region.bulkCreate(req.body)
            res.send({success: 'regions succefly added'})
        } catch (error) {
            console.log("addRegion regions ", error);
            res.status(404).send({error: 'regions existe déja '+error})
        }
    },
    async addTypeReleve(req, res){
        try {
            const type_releve=await Type_releve.bulkCreate(req.body)
            res.send({success: 'type_releve succefly added'})
        } catch (error) {
            console.log("addTypeReleve type_releve ", error);
            res.status(404).send({error: 'type_releve existe déja '+error})
        }
    },
    async addMois(req, res){
        try {
            const mois=await Mois.bulkCreate(req.body)
            res.send({success: 'mois succefly added'})
        } catch (error) {
            console.log("addMois mois ", error);
            res.status(404).send({error: 'mois existe déja '+error})
        }
    },
    async addSemaine(req, res){
        try {
            const semaines=await Semaine.bulkCreate(req.body)
            res.send({success: 'semaines succefly added'})
        } catch (error) {
            console.log("addSemaine semaines ", error);
            res.status(404).send({error: 'semaines existe déja '+error})
        }
    },
    async addSuperviseur(req, res){
        try {
            const superviseurs=await Superviseur.bulkCreate(req.body)
            res.send({success: 'superviseurs succefly added'})
        } catch (error) {
            console.log("addSuperviseur superviseurs ", error);
            res.status(404).send({error: 'superviseurs existe déja '+error})
        }
    },
    async addEnqueteur(req, res){
        try {
            const enqueteurs=await Enqueteur.bulkCreate(req.body)
            res.send({success: 'enqueteurs succefly added'})
        } catch (error) {
            console.log("addEnqueteur enqueteurs ", error);
            res.status(404).send({error: 'enqueteurs existe déja '+error})
        }
    },
    async addTypePointVente(req, res){
        try {
            const type_point_vente=await Type_point_vente.bulkCreate(req.body)
            res.send({success: 'type_point_vente succefly added'})
        } catch (error) {
            console.log("addTypePointVente type_point_vente ", error);
            res.status(404).send({error: 'type_point_vente existe déja '+error})
        }
    },
    async addCommune(req, res){
        try {
            const communes=await Commune.bulkCreate(req.body)
            res.send({success: 'communes succefly added'})
        } catch (error) {
            console.log("addCommune communes ", error);
            res.status(404).send({error: 'communes existe déja '+error})
        }
    },
    async addPointVente(req, res){
        try {
            const point_vente=await Point_vente.bulkCreate(req.body)
            res.send({success: 'point_vente succefly added'})
        } catch (error) {
            console.log("addPointVente point_vente ", error);
            res.status(404).send({error: 'point_vente existe déja '+error})
        }
    }
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

}