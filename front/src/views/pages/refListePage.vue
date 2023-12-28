<template>
    <layout-template pageTitre="GESTION REFERENTIEL">
        <div class="row" style="background-color: #CCCCCC; min-height: 400px;">
            <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4">
                <ion-card>
                    <ion-card-header style="background-color: #AFE1AF;">
                        <ion-card-title>
                            REGIONS
                        </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <div style="overflow-y: scroll; max-height: 300px;">
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>CODE</th>
                                        <th>LIBELLE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="r in regions" :key="r.code" >
                                        <td>{{ r.code }}</td>
                                        <td>{{ r.libelle }}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </ion-card-content>
                </ion-card>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4">
                <ion-card>
                    <ion-card-header style="background-color: #E2E8E5;">
                        <ion-card-title>
                            COMMUNES
                        </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <div style="overflow-y: scroll; max-height: 300px;">
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>REGION</th>
                                        <th>CODE</th>
                                        <th>LIBELLE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="r in com_commune" :key="r.code">
                                        <td>{{ r.libelle_region }}</td>
                                        <td>{{ r.code }}</td>
                                        <td>{{ r.libelle }}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </ion-card-content>
                </ion-card>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4">
                <ion-card>
                    <ion-card-header style="background-color: #AFE1AF;">
                        <ion-card-title>
                            TYPES RELEVE
                        </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <div style="overflow-y: scroll; max-height: 300px;">
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>CODE</th>
                                        <th>LIBELLE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="r in com_type_releve" :key="r.code">
                                        <td>{{ r.code }}</td>
                                        <td>{{ r.libelle }}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </ion-card-content>
                </ion-card>
            </div>
        </div>
        <hr />
        <div class="row" style="background-color: #D6D6D6; min-height: 400px;">
            <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4">
                <ion-card>
                    <ion-card-header style="background-color: #E2E8E5;">
                        <ion-card-title>
                            MOIS
                        </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <div style="overflow-y: scroll; max-height: 300px;">
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>CODE</th>
                                        <th>LIBELLE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="r in com_mois" :key="r.code">
                                        <td>{{ r.code }}</td>
                                        <td>{{ r.libelle }}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </ion-card-content>
                </ion-card>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4">
                <ion-card>
                    <ion-card-header style="background-color: #AFE1AF;">
                        <ion-card-title>
                            SEMAINES
                        </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <div style="overflow-y: scroll; max-height: 300px;">
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>CODE</th>
                                        <th>LIBELLE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="r in com_semaines" :key="r.code">
                                        <td>{{ r.code }}</td>
                                        <td>{{ r.libelle }}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </ion-card-content>
                </ion-card>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4">
                <ion-card>
                    <ion-card-header style="background-color: #E2E8E5;">
                        <ion-card-title>
                            TYPES POINT DE VENTE
                        </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <div style="overflow-y: scroll; max-height: 300px;">
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>CODE</th>
                                        <th>LIBELLE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="r in types_point_vente" :key="r.code">
                                        <td>{{ r.code }}</td>
                                        <td>{{ r.libelle }}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </ion-card-content>
                </ion-card>
            </div>
        </div>

        <hr />
        <div class="row" style="background-color: #CCCCCC; min-height: 400px;">
            <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4">
                <ion-card>
                    <ion-card-header style="background-color: #AFE1AF;">
                        <ion-card-title>
                            SUPERVISEURS
                        </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <div style="overflow-y: scroll; max-height: 300px;">
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>REGION</th>
                                        <th>CODE</th>
                                        <th>NOM &PRENOM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="r in com_superviseurs" :key="r.code">
                                        <td>{{ r.libelle }}</td>
                                        <td>{{ r.code }}</td>
                                        <td>{{ r.nom_prenom }}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </ion-card-content>
                </ion-card>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4">
                <ion-card>
                    <ion-card-header style="background-color: #E2E8E5;">
                        <ion-card-title>
                            ENQUETEURS
                        </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <div style="overflow-y: scroll; max-height: 300px;">
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>REGION</th>
                                        <th>CODE</th>
                                        <th>NOM &PRENOM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="r in com_enqueteurs" :key="r.code">
                                        <td>{{ r.libelle }}</td>
                                        <td>{{ r.code }}</td>
                                        <td>{{ r.nom_prenom }}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </ion-card-content>
                </ion-card>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4">
                <ion-card>
                    <ion-card-header style="background-color: #AFE1AF;">
                        <ion-card-title>
                            POINT DE VENTE
                        </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <div style="overflow-y: scroll; max-height: 300px;">
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>COMMUNE</th>
                                        <th>TYPE</th>
                                        <th>CODE</th>
                                        <th>MARCHE (POINT DE VENTE)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="r in points_vente" :key="r.code">
                                        <td>{{ r.libelle_commune }}</td>
                                        <td>{{ r.libelle_type_point_vente }}</td>
                                        <td>{{ r.code }}</td>
                                        <td>{{ r.libelle }}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>


                    </ion-card-content>
                </ion-card>
            </div>
        </div>

        <hr />
        <div class="row" style="background-color: #CCCCCC; min-height: 500px;">
            <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4">
                <ion-card>
                    <ion-card-header style="background-color: #E2E8E5;">
                        <ion-card-title>
                            QUESTIONNAIRES
                        </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <div style="overflow-y: scroll; max-height: 400px;">
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>TYPE</th>
                                        <th>CODE</th>
                                        <th>LIBELLE</th>
                                        <th>S1</th>
                                        <th>S2</th>
                                        <th>S3</th>
                                        <th>S4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="r in sections" :key="r.code">
                                        <td>{{ r.type_section }}</td>
                                        <td>{{ r.code }}</td>
                                        <td>{{ r.libelle }}</td>
                                        <td>{{ isTrue(r.semaine1) }}</td>
                                        <td>{{ isTrue(r.semaine2) }}</td>
                                        <td>{{ isTrue(r.semaine3) }}</td>
                                        <td>{{ isTrue(r.semaine4) }}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </ion-card-content>
                </ion-card>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-8 col-md-8">
                <ion-card>
                    <ion-card-header style="background-color: #AFE1AF;">
                        <ion-card-title>
                            VARIETES 
                        </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <div style="overflow-y: scroll; max-height: 400px;">
                            <div class="row">
                                <div class="col-lg-4 col-md-4">
                                    <br />
                                    <select class="form-control"  v-model="filtre_section">
                                        <option value="0" selected="selected">TOUT</option>
                                        <option  v-for="i in sections" :key="i.code" :value="i.code">{{ i.libelle }}</option>
                                    </select>
                                </div>
                                <div class="offset-lg-4 offset-md-4 col-lg-4 col-md-4"><ion-searchbar
                                    placeholder="code / libelle court / libelle long" v-model="filtre_code" />
                            </div>
                            </div>
                             <br />
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>SECTION</th>
                                        <th>CODE</th>
                                        <th>LIBELLE COURT</th>
                                        <th>LIBELLE LONG</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="r in liste_variete" :key="r.id">
                                        <td>{{ r.libelle_section }}</td>
                                        <td>{{ r.code }}</td>
                                        <td>{{ r.libelle_court }}</td>
                                        <td>{{ r.libelle_long }}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </ion-card-content>
                </ion-card>
            </div>

        </div>
    </layout-template>
</template>
<script>
import { defineComponent, reactive, toRefs, onMounted, computed } from 'vue';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSearchbar } from '@ionic/vue'
import service from '../../services/service';

export default defineComponent({
    name: 'refListe',
    components: { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSearchbar },
    setup() {


        /**
         * Data
         */

        const state = reactive({
            regions: [],
            mois: [],
            superviseurs: [],
            types_releve: [],
            semaines: [],
            enqueteurs: [],
            types_point_vente: [],
            communes: [],
            points_vente: [],
            sections: [],
            varietes: [],
            filtre_section: '0',
            filtre_code: ''
        })




        /***
         * methods
         */



        const getAllRegion = async () => {
            try {
                const response = await service.getAllRegion();
                state.regions = response.data.regions;
            } catch (error) {
                console.log("Erruer getAllRegion ", error);
            }
        }

        const getAllCommune = async () => {
            try {
                const response = await service.getAllCommune();
                state.communes = response.data.communes;
                //this.$session.start()
                //console.log(this.$session.getAll());
            } catch (error) {
                console.log("Erruer getAllCommune ", error);
            }
        }

        const getAllTypeReleve = async () => {
            try {
                const response = await service.getAllTypeReleve();
                state.types_releve = response.data.types_releve;
            } catch (error) {
                console.log("Erruer getAllTypeReleve ", error);
            }
        }


        const getAllMois = async () => {
            try {
                const response = await service.getAllMois();
                state.mois = response.data.mois;
            } catch (error) {
                console.log("Erruer getAllMois ", error);
            }
        }

        const getAllSemaine = async () => {
            try {
                const response = await service.getAllSemaine();
                state.semaines = response.data.semaines;
            } catch (error) {
                console.log("Erruer getAllSemaine ", error);
            }
        }

        const getAllTypePointVente = async () => {
            try {
                const response = await service.getAllTypePointVente();
                state.types_point_vente = response.data.types_point_vente;
            } catch (error) {
                console.log("Erruer getAllTypePointVente ", error);
            }
        }



        const getAllSuperviseurs = async () => {
            try {
                const response = await service.getAllSuperviseur();
                state.superviseurs = response.data.superviseurs;
            } catch (error) {
                console.log("Erruer getAllSuperviseurs ", error);
            }
        }

        const getAllEnqueteurs = async () => {
            try {
                const response = await service.getAllEnqueteur();
                state.enqueteurs = response.data.enqueteurs;
            } catch (error) {
                console.log("Erruer getAllEnqueteurs ", error);
            }
        }

        const getAllPointVente = async () => {
            try {
                const response = await service.getAllPointVente();
                state.points_vente = response.data.points_vente;
            } catch (error) {
                console.log("Erruer getAllPointVente ", error);
            }
        }

        const getAllSection = async () => {
            try {
                const response = await service.getAllSection();
                state.sections = response.data.sections;
            } catch (error) {
                console.log("Erruer getAllSection ", error);
            }
        }

        const getAllVariete = async () => {
            try {
                const response = await service.getAllVariete();
                state.varietes = response.data.varietes;
            } catch (error) {
                console.log("Erruer getAllVariete ", error);
            }
        }

        const isTrue = (n) => {
            if (n)
                return "x"
            else return ""
        }


        /**
         * Mount, computed
         */


        onMounted(() => {
            
            getAllRegion(), getAllCommune(), getAllTypeReleve(),
                getAllMois(), getAllSemaine(), getAllTypePointVente(),
                getAllEnqueteurs(), getAllSuperviseurs(), getAllPointVente(),
                getAllSection(), getAllVariete()
        })


        const liste_variete=computed(()=>{
            if(state.filtre_code=='' && state.filtre_section==0){
                return state.varietes
            }else if(state.filtre_code!='' && state.filtre_section=='0'){
                return state.varietes.filter(e=>{
                    return e.code.toLowerCase().includes(state.filtre_code.toLowerCase()) || e.libelle_court.toLowerCase().includes(state.filtre_code.toLowerCase()) || e.libelle_long.toLowerCase().includes(state.filtre_code.toLowerCase())
                })
            }else if(state.filtre_code=='' && state.filtre_section!='0'){
                return state.varietes.filter(e=>{
                    return e.libelle_section==state.filtre_section
                })
            }else{
                return state.varietes.filter(e=>{
                    return (e.code.toLowerCase().includes(state.filtre_code.toLowerCase()) || e.libelle_court.toLowerCase().includes(state.filtre_code.toLowerCase()) || e.libelle_long.toLowerCase().includes(state.filtre_code.toLowerCase())) && (e.libelle_section==state.filtre_section) 
                })
            }
        })


        const com_commune=computed(()=>{
            return state.communes.filter(f=>{
                return f.code!="00"
            })
        })

        const com_type_releve=computed(()=>{
            return state.types_releve.filter(f=>{
                return f.code!="00"
            })
        })

        const com_mois=computed(()=>{
            return state.mois.filter(f=>{
                return f.code!="00"
            })
        })

        const com_enqueteurs=computed(()=>{
            return state.enqueteurs.filter(f=>{
                return f.code!="00"
            })
        })

        const com_superviseurs=computed(()=>{
            return state.superviseurs.filter(f=>{
                return f.code!="00"
            })
        })

        const com_semaines=computed(()=>{
            return state.semaines.filter(f=>{
                return f.code!="00"
            })
        })

        


        return { ...toRefs(state), isTrue, liste_variete, com_semaines, com_commune, com_type_releve, com_superviseurs, com_enqueteurs, com_mois }
    }
})
</script>

<style>
ion-card-title {
    color: #F07D0A;
    font-weight: bold;
}
</style>