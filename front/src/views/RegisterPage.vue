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


        <main class="form-signin">

            <!-- <form>
                <h1 class="h3 mb-3 fw-normal">Ajout utilisateur</h1> 

                <div class="form-floating">
                    <input type="text" class="form-control" v-model="user.login" id="floatingInput"
                        placeholder="name@example.com">
                    <label for="floatingInput">LOGIN</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" v-model="user.nom_prenom" id="floatingInput"
                        placeholder="name@example.com">
                    <label for="floatingInput">Nom & prénom</label>
                </div>
                <div class="form-floating">
                    <select class="form-control" v-model="user.profil">
                        <option value="admin">ADMIN</option>
                        <option value="saisie">SAISIE</option>
                    </select>
                    <label for="floatingInput">Profil</label>
                </div>



                <button class="w-100 btn btn-lg " style="background-color: #F07D0A;"  @click="register">Ajouter</button>
            </form>
-->

            <form>
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Login:</label>
                    <input type="text" class="form-control" id="email" placeholder="Enter login" v-model="user.login">
                </div>
                <div class="mb-3">
                    <label for="pwd" class="form-label">Nom & prénom:</label>
                    <input type="text" class="form-control" id="pwd" placeholder="Enter nom & prénom"
                        v-model="user.nom_prenom">
                </div>
                <div class="mb-3">
                    <label for="pwd" class="form-label">Profil:</label>
                    <select class="form-control" v-model="user.profil">
                        <option value="admin">ADMIN</option>
                        <option value="saisie">SAISIE</option>
                    </select>
                </div>
                <button type="button" class="btn btn-primary" @click="register">Ajouter</button>
            </form>
        </main>
    </body>
</template>

<script>
import { reactive, toRefs, onMounted, watch } from 'vue';
import service from '../services/service'
import { useRouter/*, useRoute*/ } from 'vue-router'



export default {
    name: 'registerPage',
    setup() {


        const router = useRouter()
       // const route = useRoute()


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


        const register = async () => {
            try {
                if (state.user.login == '' || state.user.nom_prenom == '' || state.user.profil == '') {
                    state.error = "Veuillez remplr tout les champs"
                } else {
                    const response = await service.register(state.user);
                    state.success = response.data.success
                    router.push('/login')
                }

            } catch (error) {
                console.log("Error login ", error);
                state.error = error
            }
        }


        onMounted(() => {
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


        return { ...toRefs(state), register }
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