<template >
    <body>

        <div class="alert alert-danger" v-if="error != ''">
            <strong>Error!</strong> {{ error }}
            <hr>
        </div>
        <div class="alert alert-success" v-if="success != ''">
            <strong>success!</strong> {{ success }}
            <hr>
        </div>

        <div id="output" style="margin: 30px;"></div>
<div>
  
</div>
    </body>
</template>

<script>
import { reactive, toRefs, onMounted  } from 'vue';


export default {
    name: 'registerPage',
    components: {},
    setup() {
        const state = reactive({
            user: {
                login: '',
                nom_prenom: '',
                profil: '',
                is_active: true,
                password: '1234'
            },
            error: "",
            success: ""
        })




        onMounted(()=>{
            document.getElementById('output').pivot(
            [
                {color: "blue", shape: "circle"},
                {color: "red", shape: "triangle"}
            ],
            {
                rows: ["color"],
                cols: ["shape"]
            }
        );
        })


        return { ...toRefs(state) }
    }
}

</script>

<style scoped>
html,
body {
    height: 100%;
}



body {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #5FB83E;
}

.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

.form-signin .checkbox {
    font-weight: 400;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>