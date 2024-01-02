<template>
    <layout-template :pageTitre="com_tiltePage">

        <div class="container-fluid">
            

            <div class="row">
               
            </div>

            <div class="row" style="background-color: #AFE1AF; overflow-x: scroll;">

                <h3>All </h3>
                <div class=" col-md-12 col-lg-12" >
                    <table class="table table-bordered table-hover">
                        <thead >
                            <tr>
                                <th>AGENT</th>
                                <th>SUPERVISEUR</th>
                                <th>ENQUETEUR</th>
                                <th>REGION</th>
                                <th>COMMUNE</th>
                                <th>MOIS</th>
                                <th>SEMAINE</th>
                                <th>QUEST</th>
                                <th>CODE</th>
                                <th>LIBELLE</th>
                                <th>RELEVE</th>
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
                            <tr v-for="v in data" v-bind:key="v.code">
                                <td>{{ v.users }}</td>
                                <td>{{ v.superviseur }}</td>
                                <td>{{ v.enqueteur }}</td>
                                <td>{{ v.region }}</td>
                                <td>{{ v.commune }}</td>
                                <td>{{ v.mois }}</td>
                                <td>{{ v.semaine }}</td>
                                <td>{{ v.section }}</td>
                                <td>{{ v.code }}</td>
                                <td>{{ v.libelle_court }}</td>
                                <td>{{ v.type_releve }}</td>
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
                                    {{ v.point_vente }}
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

            <!--
            <q1-page :commune="commune.code" :mois="mois.code"  :semaine="semaine"
            :type_releve="type_releve.code" :enqueteur="enqueteur.code" :superviseur="superviseur.code"
            v-if="(semaine=='01' || semaine=='02' || semaine=='03' || semaine=='04') && commune.code > 0 && mois.code > 0 && type_releve.code > 0 && quest=='Quest_O1'"></q1-page>
-->


        </div>
    </layout-template>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted, computed } from 'vue';
import service from '../../services/service'



export default defineComponent({
    name: 'saisieAllPage',
    components: {},
    setup() {
        const state = reactive({
         data:[]
        })




        const getDataSaisi = async () => {
            try {
                const response = await service.getAllDataSaisi()
                state.data= response.data.datas
            } catch (error) {
                console.log('Erreur getDataSaisi ', error);
            }
        }






        const com_tiltePage = computed(() => {
            return "DONNEES"
        })


       

        onMounted(async () => {
            getDataSaisi()
        })


        return {
            ...toRefs(state), com_tiltePage
        }
    }
})


</script>


<style scoped></style>