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
                                    <tr v-for="r in regions" :key="r.code">
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
                                    <tr v-for="r in communes" :key="r.code">
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
                    <ion-card-header style="background-color: #E2E8E5;">
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
                                    <tr v-for="r in types_releve" :key="r.code">
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
                                    <tr v-for="r in mois" :key="r.code">
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
                                    <tr v-for="r in semaines" :key="r.code">
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
                    <ion-card-header style="background-color: #E2E8E5;">
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
                                    <tr v-for="r in superviseurs" :key="r.code">
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
                                    <tr v-for="r in enqueteurs" :key="r.code">
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
                                        <th>REGION</th>
                                        <th>COMMUNE</th>
                                        <th>CODE</th>
                                        <th>MARCHE (POINT DE VENTE)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="r in points_vente" :key="r.code">
                                        <td>{{ r.libelle_region }}</td>
                                        <td>{{ r.libelle_commune }}</td>
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
    </layout-template>
</template>
<script>
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue'
import service from '../../services/service';

export default defineComponent({
    name: 'refListe',
    components: { IonCard, IonCardHeader, IonCardTitle, IonCardContent },
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
            points_vente: []
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


        /**
         * Mount, computed
         */


        onMounted(() => {
            getAllRegion(), getAllCommune(), getAllTypeReleve(), 
            getAllMois(), getAllSemaine(), getAllTypePointVente(),
            getAllEnqueteurs(), getAllSuperviseurs(), getAllPointVente()
        })


        return { ...toRefs(state) }
    }
})
</script>

<style>
ion-card-title {
    color: #F07D0A;
    font-weight: bold;
}</style>