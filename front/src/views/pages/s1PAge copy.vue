<template>
    <layout-template pageTitre="Saisie Questionnaire semaine 1" :region="com_region" :commune="com_commune"
        :superviseur="com_superviseur" :enqueteur="com_enqueteur" :mois="com_mois" :releve="com_type_releve">

        <div class="container-fluid" >
            <div class="alert alert-danger" v-if="error != ''">
                <strong>Error!</strong> {{ error }}
                <hr>
            </div>
            <div class="alert alert-success" v-if="success != ''">
                <strong>success!</strong> {{ success }}
                <hr>
            </div>

            <div class="row" v-show="page==1">
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
                            <select class="form-control form-control-sm" name="dep" id="dep" v-model="commune"
                                @change="getPointVenteByCommune">
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
            <div class="row" style="background-color: #AFE1AF; "
                v-show="frame == 1 && page==1 && (region.code > 0 && commune.code > 0 && superviseur.code > 0 && enqueteur.code > 0 && mois.code > 0 && type_releve.code > 0)">
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
                            <tr v-for="v in varietes1" v-bind:key="v.code">
                        <!--
                           <input type="hidden" :value="userConnected" v-model="v.user"  />
                           <input type="hidden" :value="enqueteur.code" v-model="v.enqueteur"  />
                           <input type="hidden" :value="superviseur.code" v-model="v.superviseur"  />
                           <input type="hidden" :value="commune.code" v-model="v.commune"  />
                           <input type="hidden" :value="mois.code" v-model="v.mois"  />
                           <input type="hidden" :value="type_releve.code" v-model="v.type_releve"  /> -->

                                <td>{{ v.code }}</td>
                                <td>{{ v.libelle_court }}</td>
                                <td>
                                    <input type="date" class="form-control from-control-sm" v-model="v.date_passage"
                                        placeholder="date" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm" v-model="v.prix1"
                                        placeholder="prix 1" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm" v-model="v.quantite1"
                                        placeholder="qte1" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm"
                                        :disabled="type_releve.code == '01'" v-model="v.prix12" placeholder="prix 2" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm"
                                        :disabled="type_releve.code == '01'" v-model="v.quantite2" placeholder="qte2" />
                                </td>
                                <td>
                                    <select class="form-control from-control-sm" name="zd" v-model="v.point_vente">
                                        <option v-for="z in point_ventes" :key="z.code" :value="z.code">{{ z.libelle }}
                                        </option>
                                    </select>
                                </td>
                                <td>
                                    <textarea class="form-control from-control-sm" v-model="v.observation"></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>





            <div class="row" style="background-color: #F07D0A;"
                v-show="frame == 2 && page==1 && (region.code > 0 && commune.code > 0 && superviseur.code > 0 && enqueteur.code > 0 && mois.code > 0 && type_releve.code > 0)">
                <h3>Quest_O2 </h3>
                <div class=" col-md-12 col-lg-12" style="overflow-y: scroll; max-height: 400px;">
                    <table class="table table-bordered table-hover">
                        <thead>
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
                            <tr v-for="v in varietes2" v-bind:key="v.code">

                         <!--
                           <input type="hidden" :value="userConnected" v-model="v.user"  />
                           <input type="hidden" :value="enqueteur.code" v-model="v.enqueteur"  />
                           <input type="hidden" :value="superviseur.code" v-model="v.superviseur"  />
                           <input type="hidden" :value="commune.code" v-model="v.commune"  />
                           <input type="hidden" :value="mois.code" v-model="v.mois"  />
                           <input type="hidden" :value="type_releve.code" v-model="v.type_releve"  /> -->

                                <td>{{ v.code }}</td>
                                <td>{{ v.libelle_court }}</td>
                                <td>
                                    <input type="date" class="form-control from-control-sm" v-model="v.date_passage"
                                        placeholder="date" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm" v-model="v.prix1"
                                        placeholder="prix 1" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm" v-model="v.quantite1"
                                        placeholder="qte1" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm" v-model="v.prix2"
                                        placeholder="prix 2" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm" v-model="v.quantite2"
                                        placeholder="qte2" />
                                </td>
                                <td>
                                    <select class="form-control from-control-sm" name="zd" v-model="v.point_vente">
                                        <option v-for="z in point_ventes" :key="z.code" :value="z.code">{{ z.libelle }}
                                        </option>
                                    </select>
                                </td>
                                <td>
                                    <textarea class="form-control from-control-sm" v-model="v.observation"></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>





            <div class="row" style="background-color: #AFE1AF;"
                v-show="frame == 3 && page==1 &&  (region.code > 0 && commune.code > 0 && superviseur.code > 0 && enqueteur.code > 0 && mois.code > 0 && type_releve.code > 0)">
                <h3>Quest_O3 </h3>
                <div class=" col-md-12 col-lg-12" style="overflow-y: scroll; max-height: 400px;">
                    <table class="table table-bordered table-hover">
                        <thead>
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
                            <tr v-for="v in varietes3" v-bind:key="v.code">

                                   <!--
                           <input type="hidden" :value="userConnected" v-model="v.user"  />
                           <input type="hidden" :value="enqueteur.code" v-model="v.enqueteur"  />
                           <input type="hidden" :value="superviseur.code" v-model="v.superviseur"  />
                           <input type="hidden" :value="commune.code" v-model="v.commune"  />
                           <input type="hidden" :value="mois.code" v-model="v.mois"  />
                           <input type="hidden" :value="type_releve.code" v-model="v.type_releve"  /> -->

                                <td>{{ v.code }}</td>
                                <td>{{ v.libelle_court }}</td>
                                <td>
                                    <input type="date" class="form-control from-control-sm" v-model="v.date_passage"
                                        placeholder="date" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm" v-model="v.prix1"
                                        placeholder="prix 1" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm" v-model="v.quantite1"
                                        placeholder="qte1" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm" v-model="v.prix12"
                                        placeholder="prix 2" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm" v-model="v.quantite2"
                                        placeholder="qte2" />
                                </td>
                                <td>
                                    <select class="form-control from-control-sm" name="zd" v-model="v.point_vente">
                                        <option v-for="z in point_ventes" :key="z.code" :value="z.code">{{ z.libelle }}
                                        </option>
                                    </select>
                                </td>
                                <td>
                                    <textarea class="form-control from-control-sm" v-model="v.observation"></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>






            <div class="row" style="background-color: #F07D0A;"
                v-show="frame == 4 && page==1 && (region.code > 0 && commune.code > 0 && superviseur.code > 0 && enqueteur.code > 0 && mois.code > 0 && type_releve.code > 0)">
                <h3>Quest_HE_S1 </h3>
                <div class=" col-md-12 col-lg-12" style="overflow-y: scroll; max-height: 400px;">
                    <table class="table table-bordered table-hover">
                        <thead>
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
                            <tr v-for="v in varietes4" v-bind:key="v.code">

                          <!--
                           <input type="hidden" :value="userConnected" v-model="v.user"  />
                           <input type="hidden" :value="enqueteur.code" v-model="v.enqueteur"  />
                           <input type="hidden" :value="superviseur.code" v-model="v.superviseur"  />
                           <input type="hidden" :value="commune.code" v-model="v.commune"  />
                           <input type="hidden" :value="mois.code" v-model="v.mois"  />
                           <input type="hidden" :value="type_releve.code" v-model="v.type_releve"  /> -->

                                <td>{{ v.code }}</td>
                                <td>{{ v.libelle_court }}</td>
                                <td>
                                    <input type="date" class="form-control from-control-sm" v-model="v.date_passage"
                                        placeholder="date" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm" v-model="v.prix1"
                                        placeholder="prix 1" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm" v-model="v.quantite1"
                                        placeholder="qte1" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm" v-model="v.prix12"
                                        placeholder="prix 2" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm" v-model="v.quantite2"
                                        placeholder="qte2" />
                                </td>
                                <td>
                                    <select class="form-control from-control-sm" name="zd" v-model="v.point_vente">
                                        <option v-for="z in point_ventes" :key="z.code" :value="z.code">{{ z.libelle }}
                                        </option>
                                    </select>
                                </td>
                                <td>
                                    <textarea class="form-control from-control-sm" v-model="v.observation"></textarea>
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
                <button class="btn btn-danger" @click="frame--"
                    v-if="frame > 1 &&  page==1 && (region.code > 0 && commune.code > 0 && superviseur.code > 0 && enqueteur.code > 0 && mois.code > 0 && type_releve.code > 0)">Précédent</button>
            </div>
            <div class="col-md-2 col-lg-2 offset-md-4 offset-lg-4">
                <button @click="getMaxPointVente() && page++" class="btn btn-warning" v-if="frame > 0 &&  page==1 && frame < 5 && (region.code > 0 && commune.code > 0 && superviseur.code > 0 && enqueteur.code > 0 && mois.code > 0 && type_releve.code > 0)">
                Ajouter point de vente
            </button>
            </div>
            <div class="col-md-1 col-lg-1 offset-md-4 offset-lg-4">
                <button class="btn btn-primary" @click="check()"
                    v-if="frame < 4 && page==1 && (region.code > 0 && commune.code > 0 && superviseur.code > 0 && enqueteur.code > 0 && mois.code > 0 && type_releve.code > 0)">Suivant</button>
                <button class="btn btn-success" @click="check()"
                    v-if="frame == 4 && (region.code > 0 && commune.code > 0 && superviseur.code > 0 && enqueteur.code > 0 && mois.code > 0 && type_releve.code > 0)">Valider</button>
            </div>


        </div>

       <!-- <add-point-vente :service="service" :commune="commune.code" @test="test"></add-point-vente>-->

       <div class="row" v-show="page==2">
        <h1>Ajout point vente </h1>
<div class="col-md-6 col-lg-6 offset-md-3 offset-lg-3">
 <form >
    <div class="mb-3 mt-3">
    <label for="email" class="form-label">Type point vente:</label>
    <select class="form-control" v-model="point_vente_form.type_point_vente">
        <option v-for="v in type_point_ventes" :value="v.code" :key="v.code">{{ v.libelle }}</option>
    </select>
  </div>
  <div class="mb-3 mt-3">
    <label for="email" class="form-label">Libelle point vente:</label>
    <input type="text" v-model="point_vente_form.libelle" class="form-control"  placeholder="Enter le libelle du point vente" name="libelle" autocomplete="off">
  </div>
  
  
  <button type="button" class="btn btn-primary" style="float: right;" @click="page-- && addPointVente()">Submit</button>
</form>
</div>
</div>
    </layout-template>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted, computed, watch } from 'vue';
import service from '../../services/service'

export default defineComponent({
    name: 's1PAge',
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
            frame: 1,
            page: 1,
            selectedRow: [],
            error: '',
            success: '',
            type_point_ventes:[],
            point_vente_form:{
                type_point_vente:'',
                code:'',
                libelle: '',
                commune: ''
            },
            userConnected: 'alpariss' //implement after session implementation
        })

        const getAllType_pointVente=async ()=>{
            try {
                const response=await service.getAllTypePointVente()
                state.type_point_ventes=response.data.types_point_vente
            } catch (error) {
                console.log("Error getAllType_pointVente ", error);
            }
        }


        const addPointVente=async ()=>{
            try {
                const response=await service.addPointVenteOne(state.point_vente_form)
                state.success = 'Point de vente ajouté'
                state.point_vente_form.code=''
                state.point_vente_form.type_point_vente=''
                state.point_vente_form.libelle=''
                state.point_vente_form.commune=''
                //console.log("1");
                console.log(response);
                //console.log(state.point_ventes);
                //console.log("2");
                getPointVenteByCommune(state.commune.code)
                //state.point_ventes.push(response.data.point_vente[0])
                getMaxPointVente()
            } catch (error) {
                console.log('Error addPointVente ', error);
            }
        }


        const getMaxPointVente=async ()=>{
            try {
                const response=await service.getMaxPointVente(state.commune.code)
                state.point_vente_form.commune=state.commune.code
                state.point_vente_form.code= Number(response.data.points_vente[0].max_code) +1 
            } catch (error) {
                console.log("Error getMaxPointVente ", error);
            }
        }

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

        const showFormAjoutPoitnVente=()=>{

        }


        const fetchData=()=>{
            let datas=[]
                    for(let j=0; j<state.varietes1.length; j++){
                        if(state.varietes1[j] != ""){
                           //state.varietes1[j].user="alpariss" //implement after session
                            //state.varietes1[j].enqueteur=state.enqueteur.code
                            //state.varietes1[j].superviseur=state.superviseur.code
                            //state.varietes1[j].commune=state.commune.code
                            //state.varietes1[j].mois=state.mois.code
                           // state.varietes1[j].point_vente=state.point_vente.code
                            datas.push(state.varietes1[j])
                        }
                    }

                    for(let j=0; j<state.varietes2.length; j++){
                        if(state.varietes1[j] != ""){
                          //state.varietes1[j].user="alpariss" //implement after session
                            //state.varietes1[j].enqueteur=state.enqueteur.code
                            //state.varietes1[j].superviseur=state.superviseur.code
                            //state.varietes1[j].commune=state.commune.code
                            //state.varietes1[j].mois=state.mois.code
                           // state.varietes1[j].point_vente=state.point_vente.code
                            datas.push(state.varietes1[j])
                        }
                    }

                    for(let j=0; j<state.varietes1.length; j++){
                        if(state.varietes3[j] != ""){
                            //state.varietes1[j].user="alpariss" //implement after session
                            //state.varietes1[j].enqueteur=state.enqueteur.code
                            //state.varietes1[j].superviseur=state.superviseur.code
                            //state.varietes1[j].commune=state.commune.code
                            //state.varietes1[j].mois=state.mois.code
                           // state.varietes1[j].point_vente=state.point_vente.code
                            datas.push(state.varietes1[j])
                        }
                    }

                    for(let j=0; j<state.varietes4.length; j++){
                        if(state.varietes1[j] != ""){
                    //state.varietes1[j].user="alpariss" //implement after session
                            //state.varietes1[j].enqueteur=state.enqueteur.code
                            //state.varietes1[j].superviseur=state.superviseur.code
                            //state.varietes1[j].commune=state.commune.code
                            //state.varietes1[j].mois=state.mois.code
                           // state.varietes1[j].point_vente=state.point_vente.code
                            datas.push(state.varietes1[j])
                        }
                    }

                    return datas
        }

        const check = () => {
            state.selectedRow = []
            if (state.frame == 1) {
                state.selectedRow = state.varietes1.filter(e => {
                    return e.date_passage != undefined || e.quantite1 != undefined || e.prix1 != undefined || e.quantite2 != undefined || e.prix2 != undefined || e.point_vente != undefined || e.observation != undefined
                })
            } else if (state.frame == 2) {
                state.selectedRow = state.varietes2.filter(e => {
                    return e.date_passage != undefined || e.quantite1 != undefined || e.prix1 != undefined || e.quantite2 != undefined || e.prix2 != undefined || e.point_vente != undefined || e.observation != undefined
                })
            } else if (state.frame == 3) {
                state.selectedRow = state.varietes3.filter(e => {
                    return e.date_passage != undefined || e.quantite1 != undefined || e.prix1 != undefined || e.quantite2 != undefined || e.prix2 != undefined || e.point_vente != undefined || e.observation != undefined
                })
            } else if (state.frame == 4) {
                state.selectedRow = state.varietes4.filter(e => {
                    return e.date_passage != undefined || e.quantite1 != undefined || e.prix1 != undefined || e.quantite2 != undefined || e.prix2 != undefined || e.point_vente != undefined || e.observation != undefined
                })
            }


            let etat = true;

            for (let i = 0; i < state.selectedRow.length; i++) {
                if (state.selectedRow[i].date_passage == undefined || state.selectedRow[i].quantite1 == undefined || state.selectedRow[i].prix1 == undefined || state.selectedRow[i].point_vente == undefined || state.selectedRow[i].observation == undefined) {
                    etat = false;
                }
            }


            if (state.selectedRow.length == 0) {
                state.error = 'Veuillez remplir au moins une ligne'
            } else {
                if (!etat) {
                    state.error = 'Veuillez remplir tout les champs'
                } else if(etat && state.frame==4){
                   let datas=fetchData()
                   console.log(datas);
                }else{
                    state.frame++
                }
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





        onMounted(async () => {
            getAllRegion()
            getAllTypeReleve()
            getAllMois()
            getAllType_pointVente(),
            //getMaxPointVente()
            state.varietes1 = await getVarieteBySection('Quest_O1')
            state.varietes2 = await getVarieteBySection('Quest_O2')
            state.varietes3 = await getVarieteBySection('Quest_O3')
            state.varietes4 = await getVarieteBySection('Quest_HE_S1')
        })


        return { ...toRefs(state), getMaxPointVente, com_point_ventes, addPointVente, service, showFormAjoutPoitnVente, com_selectedRow, check, com_region, com_commune, com_superviseur, com_enqueteur, com_mois, com_type_releve, getCommuneByRegion, getPointVenteByCommune, getEnqueteurByRegion, getSuperviseurByRegion, getAllMois, reloadComSupEnq }
    }
})


</script>


<style scoped></style>