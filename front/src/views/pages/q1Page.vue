<template>
    <div class="row" style="background-color: #AFE1AF; ">
    
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
                                    <input type="number" class="form-control from-control-sm" v-model="v.quantite1"
                                        placeholder="qte1" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm"
                                        :disabled="type_releve == '01'" v-model="v.prix12" placeholder="prix 2" />
                                </td>
                                <td>
                                    <input type="number" class="form-control from-control-sm"
                                        :disabled="type_releve == '01'" v-model="v.quantite2" placeholder="qte2" />
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

                <div class="col-md-1 col-lg-1 offset-md-11 offset-lg-11 p-3">
                           <button class="btn btn-success" @click="check()"
                   >Valider</button>
            </div>
            </div>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted, watch/*, computed, */ } from 'vue';
import service from '../../services/service'
export default defineComponent({
    name: 'q1Page',
    props:['commune', 'mois',  'semaine', 'type_releve'],
    setup(props) {


        const state=reactive({
            varietes: [],
            datas: []
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

        const initData = async () => {
            try {
                await service.addDatas(makeInitDatas());
                getData()
            } catch (error) {
                console.log('Erreur initData ', error);
            }
        }


        const makeInitDatas=()=>{
            let  datas1=[]
            for(let i=0; i<state.varietes.length; i++){
                datas1.push(
                    {enqueteur: '00', variete: state.varietes[i].code, superviseur: '00', 
                    commune : props.commune, mois: props.mois, semaine: '01', point_vente: '00', user: '00'}
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
                const response = await service.getData1(props.commune, props.mois, props.semaine);
                console.log(response.data.datas);
                state.datas = response.data.datas
            } catch (error) {
                console.log('Erreur getData ', error);
            }
        }


        const verify= async ()=>{
            
            const n=await checkData()
                //alert(n)
                if(n == 0){
                   // alert(n+ "A")
                    initData()
                }else{
                    //alert(n+ "B")
                    getData()
                }
        }

        



        onMounted( async () => {
            //alert(props.commune+" "+props.mois+" "+props.semaine) 
            state.varietes = await getVarieteBySection('Quest_O1');
            verify() 
        })



        watch(() => props.commune, async () => {
           if(props.commune > 0 && props.mois > 0 && props.semaine > 0 && props.type_releve > 0){
            verify()
           }
        })

        watch(() => props.mois, async () => {
           if(props.commune > 0 && props.mois > 0 && props.semaine > 0 && props.type_releve > 0){
            verify()
           }
        })

        watch(() => props.semaine, async () => {
           if(props.commune > 0 && props.mois > 0 && props.semaine > 0 && props.type_releve > 0){
            verify()
           }
        })

        


        return {...toRefs(state), props}
    }
})
</script>


<style scoped>

</style>