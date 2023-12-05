const referentielCtrl=require('./controllers/referentielCtrl')


module.exports=(app)=>{
    app.get('/', referentielCtrl.accueil),
    app.post('/region/add', referentielCtrl.addRegion) 
    app.post('/mois/add', referentielCtrl.addMois) 
    app.post('/semaine/add', referentielCtrl.addSemaine) 
    app.post('/superviseur/add', referentielCtrl.addSuperviseur) 
    app.post('/type_releve/add', referentielCtrl.addTypeReleve) 
    app.post('/enqueteur/add', referentielCtrl.addEnqueteur) 
    app.post('/commune/add', referentielCtrl.addCommune) 
    app.post('/type_point_vente/add', referentielCtrl.addTypePointVente) 
    app.post('/point_vente/add', referentielCtrl.addPointVente) 
}

