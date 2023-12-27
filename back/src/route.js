const referentielCtrl=require('./controllers/referentielCtrl')


module.exports=(app)=>{
    app.get('/', referentielCtrl.accueil),
    app.post('/region/add', referentielCtrl.addRegion ) 
    app.post('/mois/add', referentielCtrl.addMois) 
    app.post('/semaine/add', referentielCtrl.addSemaine) 
    app.post('/superviseur/add', referentielCtrl.addSuperviseur) 
    app.post('/type_releve/add', referentielCtrl.addTypeReleve) 
    app.post('/enqueteur/add', referentielCtrl.addEnqueteur) 
    app.post('/commune/add', referentielCtrl.addCommune) 
    app.post('/type_point_vente/add', referentielCtrl.addTypePointVente) 
    app.post('/point_vente/add', referentielCtrl.addPointVente)
    app.post('/point_vente/addOne', referentielCtrl.addOnePointVente) 
    app.post('/section/add', referentielCtrl.addSection) 
    app.post('/variete/add', referentielCtrl.addVariete) 
    app.post('/datas/add', referentielCtrl.addDatas)
    app.get('/datas/get/:section/:commune/:mois/:semaine', referentielCtrl.getDataInit) 


    
    app.get('/region/liste', referentielCtrl.getAllRegion) 
    app.get('/mois/liste', referentielCtrl.getAllMois) 
    app.get('/semaine/liste', referentielCtrl.getAllSemaine) 
    app.get('/superviseur/liste', referentielCtrl.getAllSuperviseur) 
    app.get('/type_releve/liste', referentielCtrl.getAllTypeReleve) 
    app.get('/enqueteur/liste', referentielCtrl.getAllEnqueteur) 
    app.get('/commune/liste', referentielCtrl.getAllCommune) 
    app.get('/type_point_vente/liste', referentielCtrl.getAllTypePointVente) 
    app.get('/point_vente/liste', referentielCtrl.getAllPointVente) 
    app.get('/point_vente/max/:commune', referentielCtrl.getMaxPointVente)
    app.get('/section/liste', referentielCtrl.getAllSection) 
    app.get('/variete/liste', referentielCtrl.getAllVariete) 




    app.get('/datas/check/:commune/:mois/:variete/:semaine', referentielCtrl.checkData) 




    app.get('/variete/quest/:section', referentielCtrl.getVarieteBySection)
    app.get('/commune/:region', referentielCtrl.getCommuneByRegion)
    app.get('/enqueteur/:region', referentielCtrl.getEnqueteurByRegion)
    app.get('/superviseur/:region', referentielCtrl.getSupervisuerByRegion)
    app.get('/point_vente/:commune', referentielCtrl.getPointVenteByCommune)


    app.post('/login',  referentielCtrl.getUserByLoginAndpassword)
}

