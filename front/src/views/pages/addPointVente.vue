<template>
    <h1>Ajout point vente{{ $parent.$parent }}</h1>
<div class="row">
<div class="col-md-6 col-lg-6 offset-md-3 offset-lg-3">
 <form >
    <div class="mb-3 mt-3">
    <label for="email" class="form-label">Type point vente:</label>
    <select class="form-control" v-model="point_vente.type_point_vente">
        <option v-for="v in type_point_ventes" :value="v.code" :key="v.code">{{ v.libelle }}</option>
    </select>
  </div>
  <div class="mb-3 mt-3">
    <label for="email" class="form-label">Libelle point vente:</label>
    <input type="text" v-model="point_vente.libelle" class="form-control"  placeholder="Enter le libelle du point vente" name="libelle" autocomplete="off">
  </div>
  
  
  <button type="button" class="btn btn-primary" style="float: right;" @click="testEmit('ffff')">Submit</button>
</form>
</div>
</div>
   
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted } from 'vue';

export default defineComponent({
    name: 'addPointVente',
    props:['service', 'commune'],
    parent,
    setup(props){


        const state = reactive({
            point_vente:{
                type_point_vente:'',
                code:'',
                libelle: '',
                commune: ''
            },
            type_point_ventes:[],
        })


        const addPointVente=()=>{
           console.log('rr');
            /*try {
                const response=props.service.addPointVenteOne(state.point_vente)
                console.log(response);
            } catch (error) {
                console.log('Error addPointVente ', error);
            }*/
        }

        const getAllType_pointVente=async ()=>{
            try {
                const response=await props.service.getAllTypePointVente()
                state.type_point_ventes=response.data.types_point_vente
            } catch (error) {
                console.log("Error getAllType_pointVente ", error);
            }
        }

        const getMaxPointVente=async ()=>{
            try {
                const response=await props.service.getMaxPointVente(props.commune)
                state.point_vente.commune=props.commune
                state.point_vente.code= Number(response.data.points_vente[0].max_code) +1 
            } catch (error) {
                console.log("Error getMaxPointVente ", error);
            }
        }

        onMounted(() => {
            getAllType_pointVente(), getMaxPointVente()
        })


        return {...toRefs(state), addPointVente, getAllType_pointVente}

    }

})
</script>

<style scoped>
</style>