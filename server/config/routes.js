var cute = require('../controllers/pets');
var path = require('path');

module.exports = function(app){
    app.get('/api/pets', cute.allPets);
    app.post('/api/pets', cute.addPet);
    app.get('/api/pets/:id', cute.singlePet);
    app.delete('/api/pets/:id', cute.removePet);
    app.post('/api/pets/:id/update', cute.update);
    
    app.all("*", (req, res, next)=> {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
