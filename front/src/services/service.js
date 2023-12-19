import API from './API'


export default {
     getAllRegion(){
        return API().get('region/liste')
    },
    getAllMois(){
        return API().get('mois/liste')
    },
    getAllSemaine(){
        return API().get('semaine/liste')
    },
    getAllTypeReleve(){
        return API().get('type_releve/liste')
    },
    getAllSuperviseur(){
        return API().get('superviseur/liste')
    },
    getAllEnqueteur(){
        return API().get('enqueteur/liste')
    },
    getAllTypePointVente(){
        return API().get('type_point_vente/liste')
    },
    getAllCommune(){
        return API().get('commune/liste')
    },
    getAllPointVente(){
        return API().get('point_vente/liste')
    },
    getAllSection(){
        return API().get('section/liste')
    },
    getAllVariete(){
        return API().get('variete/liste')
    },
    getVarieteBySection(section){
        return API().get('variete/quest/'+section)
    },
    getCommuneByRegion(region){
        return API().get('commune/'+region)
    },
    getSupervisuerByRegion(region){
        return API().get('superviseur/'+region)
    },
    getEnqueteurByRegion(region){
        return API().get('enqueteur/'+region)
    },
    getPointVenteByCommune(commune){
        return API().get('point_vente/'+commune)
    },


    login(user){
        return API().post('login', user)
    }
}