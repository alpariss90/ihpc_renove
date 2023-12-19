<template>
    <layout-template pageTitre="Saisie Questionnaire semaine 1"
     :region="com_region"  :commune="com_commune" :superviseur="com_superviseur" :enqueteur="com_enqueteur" 
      :mois="com_mois" :releve="com_type_releve" >

        <div class="container-fluid">
            <div class="row" >
                <div class="col-lg-12 col-sm-12 col-xs-12" style="border-style: solid;padding-bottom: 10px;">
                    <div class="row">
                        <div class="col-lg-2 col-sm-2 col-xs-2">
                            <label>REGION </label>
                            <select class="form-control form-control-sm" name="region" id="region" v-model="region"
                                @change="reloadComSupEnq">
                                <option v-for="r in regions" :key="r.code" :value="r">
                                    {{ r.libelle }}</option>
                            </select>
                        </div>
                        <div class="col-lg-2 col-sm-2 col-xs-2">
                            <label>COMMUNE</label>
                            <select class="form-control form-control-sm" name="dep" id="dep" v-model="commune" @change="getPointVenteByCommune">
                                <option v-for="d in communes" :key="d.code" :value="d">{{
                                    d.libelle }}</option>
                            </select>
                        </div>
                        <div class="col-lg-3 col-sm-3 col-xs-3">
                            <label>SUPERVISUER </label>
                            <select class="form-control form-control-sm" name="com" v-model="superviseur">
                                <option v-for="c in superviseurs" :key="c.code" :value="c">{{ c.nom_prenom }}
                                </option>
                            </select>
                        </div>
                        <div class="col-lg-3 col-sm-3 col-xs-3">
                            <label>ENQUETEUR </label>
                            <select class="form-control form-control-sm" name="zd" id="zd" v-model="enqueteur">
                                <option v-for="z in enqueteurs" :key="z.code" :value="z">{{ z.nom_prenom }}</option>
                            </select>
                        </div>
                        <div class="col-lg-1 col-sm-1 col-xs-1">
                            <label>MOIS </label>
                            <select class="form-control form-control-sm" name="com" v-model="mois">
                                <option v-for="c in moiss" :key="c.code" :value="c">{{ c.libelle }}
                                </option>
                            </select>
                        </div>
                        <div class="col-lg-1 col-sm-1 col-xs-1">
                            <label>TYPE RELEVE </label>
                            <select class="form-control form-control-sm" name="zd" v-model="type_releve">
                                <option v-for="z in type_releves" :key="z.code" :value="z">{{ z.libelle }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" style="background-color: #AFE1AF; " v-show="frame==1 && (region.code > 0  && commune.code > 0 && superviseur.code > 0 && enqueteur.code > 0 && mois.code > 0 && type_releve.code > 0)" >
                <h3>Quest_O1 </h3>
                <div class=" col-md-12 col-lg-12" style="overflow-y: scroll; max-height: 400px;">
                    <table class="table table-bordered table-hover">
                        <thead class="sticky-top top-0" >
                            <tr >
                                <th>CODE</th>
                                <th>LIBELLE</th>
                                <th>DATE</th>
                                <th>QTE1</th>
                                <th>PRIX 1</th>
                                <th>QTE2</th>
                                <th>PRIX 2</th>
                                <th>POINT VENTE</th>
                                <th>OBSERVATIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="v in varietes1" v-bind:key="v.code">
                                <td>{{ v.code }}</td>
                                <td>{{ v.libelle_court }}</td>
                                <td>
                                    <input  type="date"
                                        class="form-control from-control-sm" v-model="v.date_passage" placeholder="date" />
                                </td>
                                <td>
                                    <input  type="number"
                                        class="form-control from-control-sm" v-model="v.prix1" placeholder="prix 1" />
                                </td>
                                <td>
                                    <input  type="number"
                                        class="form-control from-control-sm" v-model="v.quantite1" placeholder="qte1" />
                                </td>
                                <td>
                                    <input  type="number"
                                        class="form-control from-control-sm" v-model="v.prix12" placeholder="prix 2" />
                                </td>
                                <td>
                                    <input  type="number"
                                        class="form-control from-control-sm" v-model="v.quantite2" placeholder="qte2" />
                                </td>
                                <td>
                                    <select class="form-control from-control-sm" name="zd" v-model="v.point_vente">
                                <option v-for="z in point_ventes" :key="z.code" :value="z.code">{{ z.libelle }}</option>
                            </select>
                                </td>
                                <td>
                                    <textarea class="form-control from-control-sm" v-model="v.observation" ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>





            <div class="row" style="background-color: #F07D0A;" v-show="frame==2 && (region.code > 0  && commune.code > 0 && superviseur.code > 0 && enqueteur.code > 0 && mois.code > 0 && type_releve.code > 0)">
                <h3>Quest_O2 </h3>
                <div class=" col-md-12 col-lg-12" style="overflow-y: scroll; max-height: 300px;">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>CODE</th>
                                <th>LIBELLE</th>
                                <th>DATE</th>
                                <th>QTE1</th>
                                <th>PRIX 1</th>
                                <th>QTE2</th>
                                <th>PRIX 2</th>
                                <th>POINT VENTE</th>
                                <th>OBSERVATIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="v in varietes2" v-bind:key="v.code">
                                <td>{{ v.code }}</td>
                                <td>{{ v.libelle_court }}</td>
                                <td>
                                    <input  type="date"
                                        class="form-control from-control-sm" v-model="v.date_passage" placeholder="date" />
                                </td>
                                <td>
                                    <input  type="number"
                                        class="form-control from-control-sm" v-model="v.prix1" placeholder="prix 1" />
                                </td>
                                <td>
                                    <input  type="number"
                                        class="form-control from-control-sm" v-model="v.quantite1" placeholder="qte1" />
                                </td>
                                <td>
                                    <input  type="number"
                                        class="form-control from-control-sm" v-model="v.prix12" placeholder="prix 2" />
                                </td>
                                <td>
                                    <input  type="number"
                                        class="form-control from-control-sm" v-model="v.quantite2" placeholder="qte2" />
                                </td>
                                <td>
                                    <select class="form-control from-control-sm" name="zd" v-model="v.point_vente">
                                <option v-for="z in point_ventes" :key="z.code" :value="z.code">{{ z.libelle }}</option>
                            </select>
                                </td>
                                <td>
                                    <textarea class="form-control from-control-sm" v-model="v.observation" ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>





            <div class="row" style="background-color: #AFE1AF;" v-show="frame==3 && (region.code > 0  && commune.code > 0 && superviseur.code > 0 && enqueteur.code > 0 && mois.code > 0 && type_releve.code > 0)">
                <h3>Quest_O3 </h3>
                <div class=" col-md-12 col-lg-12" style="overflow-y: scroll; max-height: 300px;">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>CODE</th>
                                <th>LIBELLE</th>
                                <th>DATE</th>
                                <th>QTE1</th>
                                <th>PRIX 1</th>
                                <th>QTE2</th>
                                <th>PRIX 2</th>
                                <th>POINT VENTE</th>
                                <th>OBSERVATIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="v in varietes3" v-bind:key="v.code">
                                <td>{{ v.code }}</td>
                                <td>{{ v.libelle_court }}</td>
                                <td>
                                    <input  type="date"
                                        class="form-control from-control-sm" v-model="v.date_passage" placeholder="date" />
                                </td>
                                <td>
                                    <input  type="number"
                                        class="form-control from-control-sm" v-model="v.prix1" placeholder="prix 1" />
                                </td>
                                <td>
                                    <input  type="number"
                                        class="form-control from-control-sm" v-model="v.quantite1" placeholder="qte1" />
                                </td>
                                <td>
                                    <input  type="number"
                                        class="form-control from-control-sm" v-model="v.prix12" placeholder="prix 2" />
                                </td>
                                <td>
                                    <input  type="number"
                                        class="form-control from-control-sm" v-model="v.quantite2" placeholder="qte2" />
                                </td>
                                <td>
                                    <select class="form-control from-control-sm" name="zd" v-model="v.point_vente">
                                <option v-for="z in point_ventes" :key="z.code" :value="z.code">{{ z.libelle }}</option>
                            </select>
                                </td>
                                <td>
                                    <textarea class="form-control from-control-sm" v-model="v.observation" ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>






            <div class="row" style="background-color: #F07D0A;" v-show="frame==4 && (region.code > 0  && commune.code > 0 && superviseur.code > 0 && enqueteur.code > 0 && mois.code > 0 && type_releve.code > 0)">
                <h3>Quest_HE_S1 </h3>
                <div class=" col-md-12 col-lg-12" style="overflow-y: scroll; max-height: 300px;">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>CODE</th>
                                <th>LIBELLE</th>
                                <th>DATE</th>
                                <th>QTE1</th>
                                <th>PRIX 1</th>
                                <th>QTE2</th>
                                <th>PRIX 2</th>
                                <th>POINT VENTE</th>
                                <th>OBSERVATIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="v in varietes4" v-bind:key="v.code">
                                <td>{{ v.code }}</td>
                                <td>{{ v.libelle_court }}</td>
                                <td>
                                    <input  type="date"
                                        class="form-control from-control-sm" v-model="v.date_passage" placeholder="date" />
                                </td>
                                <td>
                                    <input  type="number"
                                        class="form-control from-control-sm" v-model="v.prix1" placeholder="prix 1" />
                                </td>
                                <td>
                                    <input  type="number"
                                        class="form-control from-control-sm" v-model="v.quantite1" placeholder="qte1" />
                                </td>
                                <td>
                                    <input  type="number"
                                        class="form-control from-control-sm" v-model="v.prix12" placeholder="prix 2" />
                                </td>
                                <td>
                                    <input  type="number"
                                        class="form-control from-control-sm" v-model="v.quantite2" placeholder="qte2" />
                                </td>
                                <td>
                                    <select class="form-control from-control-sm" name="zd" v-model="v.point_vente">
                                <option v-for="z in point_ventes" :key="z.code" :value="z.code">{{ z.libelle }}</option>
                            </select>
                                </td>
                                <td>
                                    <textarea class="form-control from-control-sm" v-model="v.observation" ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>






        </div>
        <br>
        <div class="row">
    <div class="col-md-1 col-lg-1">
            <button class="btn btn-danger" @click="frame--" v-if="frame > 1 && (region.code > 0  && commune.code > 0 && superviseur.code > 0 && enqueteur.code > 0 && mois.code > 0 && type_releve.code > 0)">Précédent</button>
    </div>

    <div class="col-md-1 col-lg-1 offset-md-10 offset-lg-10">
        <button  class="btn btn-success" @click="frame++" v-if="frame<4 && (region.code > 0  && commune.code > 0 && superviseur.code > 0 && enqueteur.code > 0 && mois.code > 0 && type_releve.code > 0)">Suivant</button>
    </div>

    
</div>
    </layout-template>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted, computed } from 'vue';
import service from '../../services/service'

export default defineComponent({
    name: 's1PAge',
    components: {},
    setup() {
        const state = reactive({
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
            frame: 1
        })



        const getVarieteBySection = async (section) => {
            try {
                const response = await service.getVarieteBySection(section);
                return response.data.varietes
            } catch (error) {
                console.log('Erreur getVarieteBySection ', error);
                return null
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

         const com_region = computed( () => {
            return  state.region.libelle
        })

        const com_commune = computed( () => {
            return state.commune.libelle
        })


        const com_superviseur = computed( () => {
            return state.superviseur.nom_prenom
        })

        const com_enqueteur = computed( () => {
            return state.enqueteur.nom_prenom
        })

        const com_mois = computed( () => {
            return state.mois.libelle
        })


        const com_type_releve = computed( () => {
            return state.type_releve.libelle
        })





        onMounted(async () => {
            getAllRegion()
            getAllTypeReleve()
            getAllMois()
            state.varietes1 = await getVarieteBySection('Quest_O1')
            state.varietes2 = await getVarieteBySection('Quest_O2')
            state.varietes3 = await getVarieteBySection('Quest_O3')
            state.varietes4 = await getVarieteBySection('Quest_HE_S1')
        })


        return { ...toRefs(state), com_region, com_commune, com_superviseur, com_enqueteur, com_mois, com_type_releve, getCommuneByRegion, getPointVenteByCommune, getEnqueteurByRegion, getSuperviseurByRegion, getAllMois, reloadComSupEnq }
    }
})


</script>


<style scoped></style>