var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');

module.exports = {

   allPets: function(req,res){
       Pet.find({}, function(err, pets){
           if(err){
               res.json(err);
           }else{
               res.json(pets);
           }
        })
    },

    singlePet: function(req,res){
       Pet.findOne({_id: req.params.id}, function(err, pet){
            if(err){
                res.json(err);
            }else{
                res.json(pet);
            }
        })
    },

    addPet: function(req,res){
        Pet.create(req.body, function(err,pet){
            if(err){
                res.json(err);
            }else{
                res.json(pet);
            }
        }) 
    },

    update: function(req,res){
        console.log('hit update');
        Pet.findOne({_id: req.params.id}, function(err,pet){
            pet.name = req.body.name;
            pet.petType = req.body.petType;
            pet.description = req.body.description;
            pet.save(function(err){
                if(err){
                    res.json(err)
                }else{
                    res.json(pet);
                }
            });
        })

    },

    removePet: function(req,res){
        Pet.remove({_id: req.params.id}, function(err, data){
             if(err){
                 res.json(err);
             }else{
                 res.json(data);
             }
         })
     }

    //  addSkill: function(req,res){
    //     // create passenger, then push to array
    //     Skill.create(req.body, function(err,passenger){
    //         if(err){
    //             console.log("skill validations triggered")
    //             res.json(err);
    //         }else{
    //             Pet.update({_id: req.params.id}, {$push: {petSkill: skill}}, function(err, data){
    //                 if(err){
    //                     console.log("couldn't update skill");
    //                     res.json(err);
    //                 }else{
    //                     res.json(data);
    //                 }
    //             })
    //         }
    //     })
    // },
    //this gets the rider id first and then from the nested array..it pulls out the passengers id to update it
    // removePassenger: function(req,res){
    //     Ride.update({_id: req.params.r_id}, {$pull: {riders: {_id: req.params.p_id}}}, function(err,data){
    //         if(err){
    //             res.json(err)
    //         }else{
    //             res.json(data);
    //         }
    //     })
    // }
  //does an update dump the array?
}