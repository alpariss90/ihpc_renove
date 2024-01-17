import API from './API'


/*const headers = {
    'Authorization': 'Bearer my-token',
    'My-Custom-Header': 'foobar'
};*/

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
    getMaxPointVente(commune){
        return API().get('point_vente/max/'+commune)
    },

    addPointVenteOne(point_vente){
        return API().post('point_vente/addOne', point_vente)
    },
    checkData(commune, mois, variete, semaine){
        return API().get('datas/check/'+commune+'/'+mois+'/'+variete+'/'+semaine)
    },
    addDatas(datas){
        return API().post('datas/add', datas)
    },
    getData1(commune, mois, semaine){
        return API().get('datas/get/Quest_O1/'+commune+'/'+mois+'/'+semaine)
    },
    updateData(datas){
        return API().post('datas/update', datas)
    },
    getData2(commune, mois, semaine){
        return API().get('datas/get/Quest_O2/'+commune+'/'+mois+'/'+semaine)
    },
    getData3(commune, mois, semaine){
        return API().get('datas/get/Quest_O3/'+commune+'/'+mois+'/'+semaine)
    },
    getData4(commune, mois, semaine){
        return API().get('datas/get/Quest_HE_S1/'+commune+'/'+mois+'/'+semaine)
    },
    getData5(commune, mois, semaine){
        return API().get('datas/get/Quest_HE_S2/'+commune+'/'+mois+'/'+semaine)
    },
    getData6(commune, mois, semaine){
        return API().get('datas/get/Quest_HE_S3/'+commune+'/'+mois+'/'+semaine)
    },
    getData7(commune, mois, semaine){
        return API().get('datas/get/Quest_HE_S4/'+commune+'/'+mois+'/'+semaine)
    },
    getDataSaisi(quest, commune, mois, semaine){
        return API().get('datas/get-saisi/'+quest+'/'+commune+'/'+mois+'/'+semaine)
    },
    getAllDataSaisi(){
        return API().get('datas/get-saisi/')
    },

    login(user){
        return API().post('login', user)
    },
    register(user){
        return API().post('register', user)
    },
    valideToken(){
        return API().get('valide-token')
    }
}