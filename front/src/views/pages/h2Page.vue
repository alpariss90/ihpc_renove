<template>
    <div class="alert alert-danger" v-if="error != ''">
        <strong>Error!</strong> {{ error }}
        <hr>
    </div>
    <div class="alert alert-success" v-if="success != ''">
        <strong>success!</strong> {{ success }}
        <hr>
    </div>



    <div class="row" style="background-color: #AFE1AF; " v-show="page == 1">

        <h3>Quest_HE_S2 </h3>
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
                    <tr v-for="v in datas" v-bind:key="v.code">
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
                            <input type="number" class="form-control from-control-sm" v-model="v.quantite1" disabled="true"
                                placeholder="qte1" />
                        </td>
                        <td>
                            <input type="number" class="form-control from-control-sm" disabled="true" v-model="v.prix2"
                                placeholder="prix 2" />
                        </td>
                        <td>
                            <input type="number" class="form-control from-control-sm" disabled="true" v-model="v.quantite2"
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


        <br>
        <div class="row p-3">

            <div class="col-md-2 col-lg-2 offset-md-4 offset-lg-4">
                <br><button @click="getMaxPointVente() && page++" class="btn btn-warning">
                    Ajouter point de vente
                </button>
            </div>


            <div class="col-md-1 col-lg-1 offset-md-4 offset-lg-4 ">
              <label> Password :</label><input class="form-control from-control-sm" type="password" v-model="passwordIns"  autocomplete="new-password"/>
            </div>
            <div class="col-md-1 col-lg-1 ">
                <br><button class="btn btn-success" @click="check()" v-if="passwordIns.length > 0">Valider</button>
            </div>

        </div>
    </div>

    <div class="row" style="background-color: #AFE1AF; " v-show="page == 2">
        <h1>Ajout point vente </h1>
        <div class="col-md-6 col-lg-6 offset-md-3 offset-lg-3">
            <form>
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Type point vente:</label>
                    <select class="form-control" v-model="point_vente_form.type_point_vente">
                        <option v-for="v in type_point_ventes" :value="v.code" :key="v.code">{{ v.libelle }}</option>
                    </select>
                </div>
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Libelle point vente:</label>
                    <input type="text" v-model="point_vente_form.libelle" class="form-control"
                        placeholder="Enter le libelle du point vente" name="libelle" autocomplete="off">
                </div>


                <button type="button" class="btn btn-primary" style="float: right;"
                    @click="page-- && addPointVente()">Valider</button>

                <button type="button" class="btn btn-danger" style="float: left;" @click="page--">Rétour</button>
            </form>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted, watch, computed } from 'vue';
import service from '../../services/service'
export default defineComponent({
    name: 'q1Page',
    props: ['commune', 'mois', 'semaine', 'type_releve', 'enqueteur', 'superviseur'],
    setup(props) {


        const state = reactive({
            varietes: [],
            datas: [],
            page: 1,
            point_vente_form: {
                type_point_vente: '',
                code: '',
                libelle: '',
                commune: ''
            },
            type_point_ventes: [],
            success: '',
            error: '',
            point_ventes: [],
            selectedRow: [],
            compteur: 0,
            users: [{ login: 'Gaichatou', password: '@?gbatoure@?' }, { login: 'Fourera', password: '!@fekade!@' }],
            user: {},
            passwordIns: ""
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



        const getAllType_pointVente = async () => {
            try {
                const response = await service.getAllTypePointVente()
                state.type_point_ventes = response.data.types_point_vente
            } catch (error) {
                console.log("Error getAllType_pointVente ", error);
            }
        }


        const addPointVente = async () => {
            try {
                await service.addPointVenteOne(state.point_vente_form)
                state.success = 'Point de vente ajouté'
                state.point_vente_form.code = ''
                state.point_vente_form.type_point_vente = ''
                state.point_vente_form.libelle = ''
                state.point_vente_form.commune = ''
                getPointVenteByCommune(props.commune)
                getMaxPointVente()
            } catch (error) {
                console.log('Error addPointVente ', error);
            }
        }

        const getMaxPointVente = async () => {
            try {
                const response = await service.getMaxPointVente(props.commune)
                state.point_vente_form.commune = props.commune
                state.point_vente_form.code = Number(response.data.points_vente[0].max_code) + 1
            } catch (error) {
                console.log("Error getMaxPointVente ", error);
            }
        }

        const getPointVenteByCommune = async () => {
            try {
                const response = await service.getPointVenteByCommune(props.commune);
                //console.log(response.data.point_ventes);
                state.point_ventes = response.data.point_ventes
            } catch (error) {
                console.log('Erreur getPointVenteByCommune ', error);
            }
        }



        const initData = async () => {
            try {
                await service.addDatas(makeInitDatas());
                getData()
            } catch (error) {
                console.log('Erreur initData ', error);
            }
        }


        const makeInitDatas = () => {
            let datas1 = []
            for (let i = 0; i < state.varietes.length; i++) {
                datas1.push(
                    {
                        enqueteur: '00', variete: state.varietes[i].code, superviseur: '00',
                        commune: props.commune, mois: props.mois, semaine: props.semaine, point_vente: '00', users: '00'
                    }
                )
            }

            return datas1;
        }

        const checkData = async () => {
            //alert("a"+" "+props.commune+" "+props.mois+" "+state.varietes[0].code+" "+props.semaine)
            try {
                const response = await service.checkData(props.commune, props.mois, state.varietes[0].code, props.semaine);

                return response.data.datas.length;
            } catch (error) {
                console.log('Erreur checkData ', error);
                return 0
            }
        }

        const getData = async () => {
            try {
                const response = await service.getData5(props.commune, props.mois, props.semaine);
                state.datas = response.data.datas
            } catch (error) {
                console.log('Erreur getData ', error);
            }
        }


        const verify = async () => {

            const n = await checkData()
            //alert(n)
            if (n == 0) {
                // alert(n+ "A")
                initData()
            } else {
                //alert(n+ "B")
                getData()
            }
        }

        const updateData = async () => {



            for (let i = 0; i < state.selectedRow.length; i++) {
                state.selectedRow[i].enqueteur = props.enqueteur
                state.selectedRow[i].superviseur = props.superviseur
                state.selectedRow[i].type_releve = '01'
                state.selectedRow[i].quantite1 = 0
                state.selectedRow[i].users = state.user.login
            }


            try {
                const response = await service.updateData(state.selectedRow);
                state.success = response.data.success
            } catch (error) {
                console.log('Erreur updateData ', error);
            }
        }



        const check = () => {
            state.selectedRow = []

            state.selectedRow = state.datas.filter(e => {
                return e.date_passage != null || e.prix1 != null || e.point_vente != '00' || e.observation != null
            })

            //alert(state.selectedRow.length)

            let etat = true;

            for (let i = 0; i < state.selectedRow.length; i++) {
                if (state.selectedRow[i].date_passage == null || state.selectedRow[i].prix1 == null || state.selectedRow[i].point_vente == "00" || state.selectedRow[i].observation == null) {
                    etat = false;
                }
            }


            if (state.selectedRow.length == 0) {
                state.error = 'Veuillez remplir au moins une ligne'
            } else {
                if (!etat) {
                    state.error = 'Veuillez remplir tout les champs'
                } else {
                    if (state.passwordIns == state.users[0].password) {
                        state.user = state.users[0]
                        updateData()
                        state.passwordIns=""
                    } else if (state.passwordIns == state.users[1].password) {
                        state.user = state.users[1]
                        updateData()
                        state.passwordIns=""
                    } else {
                        state.error = "Veuillez entrer des identifiant corrects"
                        state.passwordIns=""
                    }
                }
            }



        }





        onMounted(async () => {
            //alert(props.commune+" "+props.mois+" "+props.semaine)
            state.varietes = await getVarieteBySection('Quest_HE_S2');
            verify();
            getAllType_pointVente()
            getPointVenteByCommune()
        })


        const com_compteur = computed(() => {
            // state.compteur=state.compteur+1
            return 1
        })

        watch(() => state.error, () => {
            if (state.error != '') {
                setTimeout(function () { state.error = '' }, 7000);
            }
        })

        watch(() => state.success, () => {
            if (state.success != '') {
                setTimeout(function () { state.success = '' }, 7000);
            }
        })


        watch(() => props.commune, async () => {
            if (props.commune > 0 && props.mois > 0 && props.semaine > 0 && props.type_releve > 0) {
                verify()
            }
        })

        watch(() => props.mois, async () => {
            if (props.commune > 0 && props.mois > 0 && props.semaine > 0 && props.type_releve > 0) {
                verify()
            }
        })

        watch(() => props.semaine, async () => {
            if (props.commune > 0 && props.mois > 0 && props.semaine > 0 && props.type_releve > 0) {
                verify()
            }
        })




        return { ...toRefs(state), addPointVente, getMaxPointVente, check, com_compteur }
    }
})
</script>


<style scoped></style>