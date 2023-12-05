const referentielCtrl=require('./controllers/referentielCtrl')


module.exports=(app)=>{
    app.get('/', referentielCtrl.accueil)  
}

