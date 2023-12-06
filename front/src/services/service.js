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
    }
}