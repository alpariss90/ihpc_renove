<template>
    <ion-page>
        <ion-header>
            <div class="container-fluid p-3 text-white text-center" style="background-color: #269d2f">
                <h1>IHPC RENOVE</h1>
                <h3 style="color: black; font-weight: bold;">{{ pageTitre }}</h3>
               <p v-if="region || commune || mois || releve || semaine" style="color: black; font-weight: bold;"> {{quest}} -- {{ region }} -- {{ commune }} -- {{ superviseur }} -- {{ enqueteur }} -- {{ mois }} -- {{ releve }} -- {{ semaine }}</p>
              
            </div>
            <nav class="navbar navbar-expand-lg navbar-light " style="background-color: #F07D0A;">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">DCNCEE/IHPC RENOVE</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                                <a class="nav-link" href="/ref">REFERENTIELS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/saisie/01">S1</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/saisie/02">S2</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/saisie/03">S3</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/saisie/04">S4</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/data">Données</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/all-data">All Données</a>
                            </li>

                            <!--<li class="nav-item">
                                        <a class="nav-link" href="/matiere">MATIERES</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/etudiant">ETUDIANTS</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/inscription">INSCRIPTIONS</a>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <a class="nav-link" href="/note">NOTES</a>
                                    </li>-->

                        </ul>
                        <form class="d-flex">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">CONNECTED
                                        USER</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">LOGOUT</a>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
            
        </ion-header>
        <ion-content :fullscreen="true">
            <slot />

        </ion-content>
        <ion-footer>
            <ion-toolbar>
                <ion-title style="text-align: center; font-size: 20px; color: black; font-weight: bold;">
                    Copyright © INS 2023
                </ion-title>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>

<script>
import { IonFooter, IonTitle, IonToolbar, IonPage, IonContent, IonHeader } from '@ionic/vue'
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
    name: 'accueilPage',
    components: {
        IonContent, IonHeader,
        IonFooter, IonTitle, IonToolbar, IonPage
    },
    props: ['pageTitre', 'region', 'commune', 'superviseur', 'enqueteur', 'mois', 'releve', 'quest', 'semaine'],
    setup(props) {

        /***
         * Data
         */
        const state = reactive({
            lib_region: props.region
        })



        /***
         * Methods
         */



        /***
         * Computeds
         */


        return { ...toRefs(state) }
    }
})
</script>
<style>
img {
    width: 80%;
}

.nav-link {
    color: black;
    font-weight: bold;
}

ion-content {
    --padding-top: 10px;
    min-height: 100px;
}

ion-toolbar {
    --color: red;
    --background: #269d2f;

}
</style>