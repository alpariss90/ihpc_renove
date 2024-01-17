<template >
    <body>
    <main class="form-signin">

    <form>
    <!--<img class="mb-4" src="assets/icon/niger.svg" alt="" width="100%" height="150">-->
    <h1 class="h3 mb-3 fw-normal">CONNECTEZ VOUS ICI</h1>

    <div class="form-floating">
      <input type="text" class="form-control" v-model="user.login" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">LOGIN</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" v-model="user.password" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">PASSWORD</label>
    </div>

    
    <button class="w-100 btn btn-lg "  style="background-color: #F07D0A;" type="button" @click="login">Sign in</button>
  </form>


  <a href="/valide-token" @click="valideToken">Valide token</a>
</main>
</body>
</template>

<script>
import {  reactive, toRefs, onMounted } from 'vue';
import service from '../services/service'


export default {
    name: 'loginPage',
    setup(){
        const state = reactive({
            user:{
                login: 'alpariss',
                password: '1234'
            }
        })


        const login= async ()=>{
          try {
            const response=await service.login({login: state.user.login, password: state.user.password});
            console.log(response);
          } catch (error) {
            console.log("Error login ", error);
          }
        }

        const valideToken= async ()=>{
          try {
            const response=await service.valideToken();
            console.log(response);
          } catch (error) {
            console.log("Error valideToken ", error);
          }
        }


        onMounted(()=>{
          console.log("hello");
        })

        return {  ...toRefs(state), login, valideToken}
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