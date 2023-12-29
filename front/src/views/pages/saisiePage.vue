<template>
    <layout-template :pageTitre="com_tiltePage" :region="com_region" :commune="com_commune"
        :superviseur="com_superviseur" :enqueteur="com_enqueteur" :mois="com_mois"
         :releve="com_type_releve" :quest="quest" >

        <div class="container-fluid">
            <div class="alert alert-danger" v-if="error != ''">
                <strong>Error!</strong> {{ error }}
                <hr>
            </div>
            <div class="alert alert-success" v-if="success != ''">
                <strong>success!</strong> {{ success }}
                <hr>
            </div>

            <div class="row" v-show="page == 1">
                <div class="col-lg-12 col-sm-12 col-xs-12" style="border-style: solid;padding-bottom: 10px;">
                    <div class="row">
                        <div class="col-lg-1 col-sm-1 col-xs-1">
                            <label>REGION </label>
                            <select class="form-control form-control-sm" name="region" id="region" v-model="region"
                                @change="reloadComSupEnq">
                                <option v-for="r in regions" :key="r.code" :value="r">
                                    {{ r.libelle }}</option>
                            </select>
                        </div>
                        <div class="col-lg-1 col-sm-1 col-xs-1">
                            <label>COMMUNE</label>
                            <select class="form-control form-control-sm" name="dep" id="dep" v-model="commune"
                                @change="getPointVenteByCommune">
                                <option v-for="d in com_liste_commune" :key="d.code" :value="d">{{
                                    d.libelle }}</option>
                            </select>
                        </div>
                        <div class="col-lg-3 col-sm-3 col-xs-3">
                            <label>SUPERVISUER </label>
                            <select class="form-control form-control-sm" name="com" v-model="superviseur">
                                <option v-for="c in com_liste_superviseurs" :key="c.code" :value="c">{{ c.nom_prenom }}
                                </option>
                            </select>
                        </div>
                        <div class="col-lg-3 col-sm-3 col-xs-3">
                            <label>ENQUETEUR </label>
                            <select class="form-control form-control-sm" name="zd" id="zd" v-model="enqueteur">
                                <option v-for="z in com_liste_enqueteurs" :key="z.code" :value="z">{{ z.nom_prenom }}</option>
                            </select>
                        </div>
                        <div class="col-lg-1 col-sm-1 col-xs-1">
                            <label>MOIS </label>
                            <select class="form-control form-control-sm" name="com" v-model="mois">
                                <option v-for="c in com_liste_mois" :key="c.code" :value="c">{{ c.libelle }}
                                </option>
                            </select>
                        </div>
                        <div class="col-lg-1 col-sm-1 col-xs-1">
                            <label>TYPE RELEVE </label>
                            <select class="form-control form-control-sm" name="zd" v-model="type_releve">
                                <option v-for="z in com_liste_type_releve" :key="z.code" :value="z">{{ z.libelle }}</option>
                            </select>
                        </div>
                        <div class="col-lg-2 col-sm-2 col-xs-2" v-show="mois.code > 0 && commune.code > 0">
                            <label>QUESTIONNAIRE</label>
                            <select class="form-control form-control-sm" name="quest" v-model="quest">
                                <option value="Quest_O1" v-if="semaine=='01' || semaine=='02' || semaine=='03' || semaine=='04'">Quest_O1</option>
                                <option value="Quest_O2" v-if="semaine=='01' || semaine=='02' || semaine=='03' || semaine=='04'">Quest_O2</option>
                                <option value="Quest_O3" v-if="semaine=='01' || semaine=='02' || semaine=='03' || semaine=='04'">Quest_O3</option>
                                <option value="Quest_HE_S1" v-if="semaine=='01'">Quest_HE_S1</option>
                                <option value="Quest_HE_S2" v-if="semaine=='02'">Quest_HE_S2</option>
                                <option value="Quest_HE_S3" v-if="semaine=='03'">Quest_HE_S3</option>
                                <option value="Quest_HE_S4" v-if="semaine=='04'">Quest_HE_S4</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <q1-page :commune="commune.code" :mois="mois.code"  :semaine="semaine"
            :type_releve="type_releve.code" :enqueteur="enqueteur.code" :superviseur="superviseur.code"
            v-if="(semaine=='01' || semaine=='02' || semaine=='03' || semaine=='04') && commune.code > 0 && mois.code > 0 && type_releve.code > 0 && quest=='Quest_O1'"></q1-page>

            <q2-page :commune="commune.code" :mois="mois.code"  :semaine="semaine"
            :type_releve="type_releve.code" :enqueteur="enqueteur.code" :superviseur="superviseur.code"
            v-if="(semaine=='01' || semaine=='02' || semaine=='03' || semaine=='04') && commune.code > 0 && mois.code > 0 && type_releve.code > 0 && quest=='Quest_O2'"></q2-page>
            

            <q3-page :commune="commune.code" :mois="mois.code"  :semaine="semaine"
            :type_releve="type_releve.code" :enqueteur="enqueteur.code" :superviseur="superviseur.code"
            v-if="(semaine=='01' || semaine=='02' || semaine=='03' || semaine=='04') && commune.code > 0 && mois.code > 0 && type_releve.code > 0 && quest=='Quest_O3'"></q3-page>

            <h1-page :commune="commune.code" :mois="mois.code"  :semaine="semaine"
            :type_releve="type_releve.code" :enqueteur="enqueteur.code" :superviseur="superviseur.code"
            v-if="(semaine=='01') && commune.code > 0 && mois.code > 0 && type_releve.code > 0 && quest=='Quest_HE_S1'"></h1-page>

            <h2-page :commune="commune.code" :mois="mois.code"  :semaine="semaine"
            :type_releve="type_releve.code" :enqueteur="enqueteur.code" :superviseur="superviseur.code"
            v-if="(semaine=='02') && commune.code > 0 && mois.code > 0 && type_releve.code > 0 && quest=='Quest_HE_S2'"></h2-page>

            <h3-page :commune="commune.code" :mois="mois.code"  :semaine="semaine"
            :type_releve="type_releve.code" :enqueteur="enqueteur.code" :superviseur="superviseur.code"
            v-if="(semaine=='03') && commune.code > 0 && mois.code > 0 && type_releve.code > 0 && quest=='Quest_HE_S3'"></h3-page>

            <h4-page :commune="commune.code" :mois="mois.code"  :semaine="semaine"
            :type_releve="type_releve.code" :enqueteur="enqueteur.code" :superviseur="superviseur.code"
            v-if="(semaine=='04') && commune.code > 0 && mois.code > 0 && type_releve.code > 0 && quest=='Quest_HE_S4'"></h4-page>



        </div>
    </layout-template>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted, computed, watch } from 'vue';
import service from '../../services/service'
import { useRoute } from 'vue-router';
import q1Page from './q1Page'
import q2Page from './q2Page'
import q3Page from './q3Page'
import h1Page from './h1Page'
import h2Page from './h2Page'
import h3Page from './h3Page'
import h4Page from './h4Page'


export default defineComponent({
    name: 'saisiePage',
    components:{q1Page,q2Page,q3Page, h1Page, h2Page, h3Page, h4Page},
    setup() {
        const route = useRoute();
        const state = reactive({
            quest: '',
            varietes1: [],
            varietes2: [],
            varietes3: [],
            varietes4: [],
            region: {},
            commune: {},
            enqueteur: {},
            superviseur: {},
            type_releve: {},
            mois: {},
            point_vente: {},
            regions: [],
            communes: [],
            enqueteurs: [],
            superviseurs: [],
            type_releves: [],
            moiss: [],
            point_ventes: [],
            frame: 1,
            page: 1,
            selectedRow: [],
            error: '',
            success: '',
            type_point_ventes: [],
            point_vente_form: {
                type_point_vente: '',
                code: '',
                libelle: '',
                commune: ''
            },
            userConnected: 'alpariss', //implement after session implementation
            datas1: [],
            datas2: [],
            datas3: [],
            datas4: [],
            semaine: '',
            titlePage: ''

        })

        const getAllType_pointVente = async () => {
            try {
                const response = await service.getAllTypePointVente()
                state.type_point_ventes = response.data.types_point_vente
            } catch (error) {
                console.log("Error getAllType_pointVente ", error);
            }
        }


        const reloadComSupEnq = () => {
            getCommuneByRegion()
            getEnqueteurByRegion()
            getSuperviseurByRegion()
        }


        const getAllRegion = async () => {
            try {
                const response = await service.getAllRegion();
                state.regions = response.data.regions
            } catch (error) {
                console.log('Erreur getAllRegion ', error);
            }
        }

        const getAllMois = async () => {
            try {
                const response = await service.getAllMois();
                state.moiss = response.data.mois
            } catch (error) {
                console.log('Erreur getAllMois ', error);
            }
        }

        const getAllTypeReleve = async () => {
            try {
                const response = await service.getAllTypeReleve();
                state.type_releves = response.data.types_releve
            } catch (error) {
                console.log('Erreur getAllTypeReleve ', error);
            }
        }


        const getCommuneByRegion = async () => {
            try {
                const response = await service.getCommuneByRegion(state.region.code);
                state.communes = response.data.communes
                console.log(state.communes);
            } catch (error) {
                console.log('Erreur getCommuneByRegion ', error);
            }
        }

        const getSuperviseurByRegion = async () => {
            try {
                const response = await service.getSupervisuerByRegion(state.region.code);
                state.superviseurs = response.data.superviseurs
            } catch (error) {
                console.log('Erreur getSuperviseurByRegion ', error);
            }
        }

        const getEnqueteurByRegion = async () => {
            try {
                const response = await service.getEnqueteurByRegion(state.region.code);
                state.enqueteurs = response.data.enqueteurs
            } catch (error) {
                console.log('Erreur getEnqueteurByRegion ', error);
            }
        }

        const getPointVenteByCommune = async () => {
            try {
                const response = await service.getPointVenteByCommune(state.commune.code);
                state.point_ventes = response.data.point_ventes
            } catch (error) {
                console.log('Erreur getPointVenteByCommune ', error);
            }
        }




        /**
         * COMPUTED, HOOKS
         */

        const com_region = computed(() => {
            return state.region.libelle
        })

        const com_commune = computed(() => {
            return state.commune.libelle
        })


        const com_superviseur = computed(() => {
            return state.superviseur.nom_prenom
        })

        const com_enqueteur = computed(() => {
            return state.enqueteur.nom_prenom
        })

        const com_mois = computed(() => {
            return state.mois.libelle
        })

        const com_point_ventes = computed(() => {
            return state.point_ventes
        })


        const com_type_releve = computed(() => {
            return state.type_releve.libelle
        })

        const com_selectedRow = computed(() => {
            return state.selectedRow
        })


        const com_data1 = computed(() => {
            return state.datas1
        })

        const com_tiltePage=computed(()=>{
            if (state.semaine == '01')
                return "Saisie Questionnaire Semaine 1"
            else if (state.semaine == '02')
                return "Saisie Questionnaire Semaine 2"
            else if (state.semaine == '03')
                return "Saisie Questionnaire Semaine 3"
            else if (state.semaine == '04')
                return "Saisie Questionnaire Semaine 4"
            else
                return "CHOIX NOT DISPONIBLE"
        })


        const com_liste_commune=computed(()=>{
            return state.communes.filter(f=>{
                return f.code!="00"
            })
        })

        const com_liste_type_releve=computed(()=>{
            return state.type_releves.filter(f=>{
                return f.code!="00"
            })
        })

        const com_liste_mois=computed(()=>{
            return state.moiss.filter(f=>{
                return f.code!="00"
            })
        })

        const com_liste_enqueteurs=computed(()=>{
            return state.enqueteurs.filter(f=>{
                return f.code!="00"
            })
        })

        const com_liste_superviseurs=computed(()=>{
            return state.superviseurs.filter(f=>{
                return f.code!="00"
            })
        })


   



        watch(() => state.error, () => {
            if (state.error != '') {
                setTimeout(function () { state.error = '' }, 3000);
            }
        })

        watch(() => state.success, () => {
            if (state.success != '') {
                setTimeout(function () { state.success = '' }, 3000);
            }
        })


        watch(() => state.region.code, () => {
           state.commune={}
           state.superviseur={}
           state.enqueteur={}
           state.mois={}
           state.type_releve={}
           state.quest={}
        })

        watch(() => state.commune.code, () => {
           state.superviseur={}
           state.enqueteur={}
           state.mois={}
           state.type_releve={}
           state.quest={}
        })


    
        

       






        onMounted(async () => {
            getAllRegion()
            getAllTypeReleve()
            getAllMois()
            getAllType_pointVente()
            state.semaine = route.params.semaine;
        })


        return {
            ...toRefs(state), com_data1, com_liste_superviseurs, com_liste_enqueteurs,
            com_point_ventes, service, com_liste_mois, com_liste_type_releve,
            com_selectedRow, com_region, com_commune, com_superviseur, com_liste_commune,
            com_enqueteur, com_mois, com_type_releve, getCommuneByRegion, getPointVenteByCommune,
            getEnqueteurByRegion, getSuperviseurByRegion, getAllMois, reloadComSupEnq, com_tiltePage
        }
    }
})


</script>


<style scoped></style>