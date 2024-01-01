<template>
    <layout-template :pageTitre="com_tiltePage" :region="com_region" :commune="com_commune" :mois="com_mois"
        :semaine="com_semaine">

        <div class="container-fluid">
            <div class="alert alert-danger" v-if="error != ''">
                <strong>Error!</strong> {{ error }}
                <hr>
            </div>
            <div class="alert alert-success" v-if="success != ''">
                <strong>success!</strong> {{ success }}
                <hr>
            </div>

            <div class="row">
                <div class="col-lg-12 col-sm-12 col-xs-12" style="border-style: solid;padding-bottom: 10px;">
                    <div class="row">
                        <div class="col-lg-1 col-sm-1 col-xs-1">
                            <label>REGION </label>
                            <select class="form-control form-control-sm" name="region" id="region" v-model="region"
                                @change="getCommuneByRegion">
                                <option v-for="r in regions" :key="r.code" :value="r">
                                    {{ r.libelle }}</option>
                            </select>
                        </div>
                        <div class="col-lg-1 col-sm-1 col-xs-1">
                            <label>COMMUNE</label>
                            <select class="form-control form-control-sm" name="dep" id="dep" v-model="commune">
                                <option v-for="d in com_liste_commune" :key="d.code" :value="d">{{
                                    d.libelle }}</option>
                            </select>
                        </div>

                        <div class="col-lg-1 col-sm-1 col-xs-1">
                            <label>MOIS </label>
                            <select class="form-control form-control-sm" name="com" v-model="mois">
                                <option v-for="c in com_liste_mois" :key="c.code" :value="c">{{ c.libelle }}
                                </option>
                            </select>
                        </div>

                        <div class="col-lg-2 col-sm-2 col-xs-2">
                            <label>SEMAINE </label>
                            <select class="form-control form-control-sm" name="sem" v-model="semaine">
                                <option v-for="c in com_liste_semaine" :key="c.code" :value="c">{{ c.libelle }}
                                </option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>

            <div class="row" style="background-color: #AFE1AF; " v-show="data1.length > 0">

                <h3>Quest_O1 </h3>
                <div class=" col-md-12 col-lg-12" style="overflow-y: scroll; max-height: 400px;">
                    <table class="table table-bordered table-hover">
                        <thead class="sticky-top top-0">
                            <tr>
                                <th>CODE</th>
                                <th>LIBELLE</th>
                                <th>DATE</th>
                                <th>PRIX 1</th>
                                <th>QTE1</th>
                                <th>PRIX 2</th>
                                <th>QTE2</th>
                                <th>POINT VENTE</th>
                                <th>OBSERVATIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="v in data1" v-bind:key="v.code">
                                <td>{{ v.code }}</td>
                                <td>{{ v.libelle_court }}</td>
                                <td>
                                    {{ v.date_passage }}
                                </td>
                                <td>
                                    {{ v.prix1 }}
                                </td>
                                <td>
                                    {{ v.quantite1 }}
                                </td>
                                <td>
                                    {{ v.prix2 }}
                                </td>
                                <td>
                                    {{ v.quantite2 }}
                                </td>
                                <td>
                                    {{ v.libelle_point_vente }}
                                </td>
                                <td>
                                    {{ v.observation }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <!--
-------------------------------------------------------O2
-->



            <div class="row" style="background-color: #AFE1AF; " v-show="data2.length > 0">

                <h3>Quest_O2 </h3>
                <div class=" col-md-12 col-lg-12" style="overflow-y: scroll; max-height: 400px;">
                    <table class="table table-bordered table-hover">
                        <thead class="sticky-top top-0">
                            <tr>
                                <th>CODE</th>
                                <th>LIBELLE</th>
                                <th>DATE</th>
                                <th>PRIX 1</th>
                                <th>QTE1</th>
                                <th>PRIX 2</th>
                                <th>QTE2</th>
                                <th>POINT VENTE</th>
                                <th>OBSERVATIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="v in data2" v-bind:key="v.code">
                                <td>{{ v.code }}</td>
                                <td>{{ v.libelle_court }}</td>
                                <td>
                                    {{ v.date_passage }}
                                </td>
                                <td>
                                    {{ v.prix1 }}
                                </td>
                                <td>
                                    {{ v.quantite1 }}
                                </td>
                                <td>
                                    {{ v.prix2 }}
                                </td>
                                <td>
                                    {{ v.quantite2 }}
                                </td>
                                <td>
                                    {{ v.libelle_point_vente }}
                                </td>
                                <td>
                                    {{ v.observation }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <!--
-------------------------------------------------------O3
-->



            <div class="row" style="background-color: #AFE1AF; " v-show="data3.length > 0">

                <h3>Quest_O2 </h3>
                <div class=" col-md-12 col-lg-12" style="overflow-y: scroll; max-height: 400px;">
                    <table class="table table-bordered table-hover">
                        <thead class="sticky-top top-0">
                            <tr>
                                <th>CODE</th>
                                <th>LIBELLE</th>
                                <th>DATE</th>
                                <th>PRIX 1</th>
                                <th>QTE1</th>
                                <th>PRIX 2</th>
                                <th>QTE2</th>
                                <th>POINT VENTE</th>
                                <th>OBSERVATIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="v in data3" v-bind:key="v.code">
                                <td>{{ v.code }}</td>
                                <td>{{ v.libelle_court }}</td>
                                <td>
                                    {{ v.date_passage }}
                                </td>
                                <td>
                                    {{ v.prix1 }}
                                </td>
                                <td>
                                    {{ v.quantite1 }}
                                </td>
                                <td>
                                    {{ v.prix2 }}
                                </td>
                                <td>
                                    {{ v.quantite2 }}
                                </td>
                                <td>
                                    {{ v.libelle_point_vente }}
                                </td>
                                <td>
                                    {{ v.observation }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



            <!--
-------------------------------------------------------H1
-->



            <div class="row" style="background-color: #AFE1AF; " v-show="data4.length > 0">

                <h3>{{ q4 }} </h3>
                <div class=" col-md-12 col-lg-12" style="overflow-y: scroll; max-height: 400px;">
                    <table class="table table-bordered table-hover">
                        <thead class="sticky-top top-0">
                            <tr>
                                <th>CODE</th>
                                <th>LIBELLE</th>
                                <th>DATE</th>
                                <th>PRIX 1</th>
                                <th>QTE1</th>
                                <th>PRIX 2</th>
                                <th>QTE2</th>
                                <th>POINT VENTE</th>
                                <th>OBSERVATIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="v in data4" v-bind:key="v.code">
                                <td>{{ v.code }}</td>
                                <td>{{ v.libelle_court }}</td>
                                <td>
                                    {{ v.date_passage }}
                                </td>
                                <td>
                                    {{ v.prix1 }}
                                </td>
                                <td>
                                    {{ v.quantite1 }}
                                </td>
                                <td>
                                    {{ v.prix2 }}
                                </td>
                                <td>
                                    {{ v.quantite2 }}
                                </td>
                                <td>
                                    {{ v.libelle_point_vente }}
                                </td>
                                <td>
                                    {{ v.observation }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>




            <!--
            <q1-page :commune="commune.code" :mois="mois.code"  :semaine="semaine"
            :type_releve="type_releve.code" :enqueteur="enqueteur.code" :superviseur="superviseur.code"
            v-if="(semaine=='01' || semaine=='02' || semaine=='03' || semaine=='04') && commune.code > 0 && mois.code > 0 && type_releve.code > 0 && quest=='Quest_O1'"></q1-page>
-->


        </div>
    </layout-template>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted, computed, watch } from 'vue';
import service from '../../services/service'



export default defineComponent({
    name: 'saisiePage',
    components: {},
    setup() {
        const state = reactive({
            quest: '',
            region: {},
            commune: {},
            semaine: {},
            mois: {},
            regions: [],
            communes: [],
            moiss: [],
            semaines: [],
            error: '',
            success: '',
            userConnected: 'alpariss', //implement after session implementation
            titlePage: '',
            data1: [],
            data2: [],
            data3: [],
            data4: [],
            q4: ''


        })





        const getAllRegion = async () => {
            try {
                const response = await service.getAllRegion();
                state.regions = response.data.regions
            } catch (error) {
                console.log('Erreur getAllRegion ', error);
            }
        }

        const getAllSemaine = async () => {
            try {
                const response = await service.getAllSemaine();
                state.semaines = response.data.semaines
            } catch (error) {
                console.log('Erreur getAllSemaine ', error);
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



        const getCommuneByRegion = async () => {
            try {
                const response = await service.getCommuneByRegion(state.region.code);
                state.communes = response.data.communes
            } catch (error) {
                console.log('Erreur getCommuneByRegion ', error);
            }
        }

        


        const getDataSaisiByQuest = async (quest) => {
            try {
                const response = await service.getDataSaisi(quest, state.commune.code, state.mois.code, state.semaine.code)
                return response.data.datas
            } catch (error) {
                console.log('Erreur getDataSaisiByQuest ', error);
                return null
            }
        }

        const getQuestHybrideBySemaine = () => {
            if (state.semaine.code == '01') {
                state.q4 = 'Quest_HE_S1'
            } else if (state.semaine.code == '02') {
                state.q4 = 'Quest_HE_S2'
            } else if (state.semaine.code == '03') {
                state.q4 = 'Quest_HE_S3'
            } else if (state.semaine.code == '04') {
                state.q4 = 'Quest_HE_S4'
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


        const com_semaine = computed(() => {
            return state.semaine.libelle
        })


        const com_mois = computed(() => {
            return state.mois.libelle
        })









        const com_tiltePage = computed(() => {
            return "DONNEES"
        })


        const com_liste_commune = computed(() => {
            return state.communes.filter(f => {
                return f.code != "00"
            })
        })



        const com_liste_mois = computed(() => {
            return state.moiss.filter(f => {
                return f.code != "00"
            })
        })

        const com_liste_semaine = computed(() => {
            return state.semaines.filter(f => {
                return f.code != "00"
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
            state.commune = {}
            state.mois = {}
            state.semaine = {}
            state.data1 = []
            state.data2 = []
            state.data3 = []
            state.data4 = []

        })

        watch(() => state.commune.code, async () => {
            if (state.commune.code > 0 && state.mois.code > 0 && state.semaine.code > 0) {
                getQuestHybrideBySemaine()
                state.data1 = await getDataSaisiByQuest('Quest_O1')
                state.data2 = await getDataSaisiByQuest('Quest_O2')
                state.data3 = await getDataSaisiByQuest('Quest_O3')
                state.data4 = await getDataSaisiByQuest(state.q4)
            } else {
                state.q4 = ""
                    state.mois = {}
                state.semaine = {}
            }

        })

        watch(() => state.mois.code, async () => {
            if (state.commune.code > 0 && state.mois.code > 0 && state.semaine.code > 0) {
                getQuestHybrideBySemaine()
                state.data1 = await getDataSaisiByQuest('Quest_O1')
                state.data2 = await getDataSaisiByQuest('Quest_O2')
                state.data3 = await getDataSaisiByQuest('Quest_O3')
                state.data4 = await getDataSaisiByQuest(state.q4)
            } else {
                state.q4 = ""
                    state.semaine = {}
            }
        })

        watch(() => state.semaine.code, async () => {
            if (state.commune.code > 0 && state.mois.code > 0 && state.semaine.code > 0) {
                getQuestHybrideBySemaine()
                state.data1 = await getDataSaisiByQuest('Quest_O1')
                state.data2 = await getDataSaisiByQuest('Quest_O2')
                state.data3 = await getDataSaisiByQuest('Quest_O3')
                state.data4 = await getDataSaisiByQuest(state.q4)
            }

        })












        onMounted(async () => {
            getAllRegion()
            getAllMois()
            getAllSemaine()
        })


        return {
            ...toRefs(state),
            service, com_liste_mois, com_liste_semaine,
            com_region, com_commune, com_semaine, com_liste_commune,
            com_mois, getCommuneByRegion,
            getAllMois, getAllSemaine, com_tiltePage
        }
    }
})


</script>


<style scoped></style>