var //Sequelize = require("sequelize"),
    //sequelize = new Sequelize('sorting', 'root', 'password'),
    mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/test');
/*
var Selection = mongoose.model("Selection",
{
  event:{
    type:Number,
    unique: true
  },
  participant: {
    type:Number,
    unique: true
  },
  choices: Array
});

var Placement = mongoose.model("Placement",
{
  event: {
    type:Number,
    unique: true
  },
  participant: {
    type:Number,
    unique: true
  },
  placements: Array
});


var Event = sequelize.define("Event", {
  name: Sequelize.STRING,
  numChoices: Sequelize.INTEGER,
  numPeriods: Sequelize.INTEGER
});

var Choice = sequelize.define("Choice", {
  name: Sequelize.STRING,
  maxParticipants: Sequelize.INTEGER
});

var Participant = sequelize.define("Participant", {
  name: Sequelize.STRING,
}, {
    hooks: {
        beforeDestroy: function(user, fn) {
          Placement.findOneAndRemove({participant:user.id}, function(err)
          {
            fn(err, user);
          });
        }
    },
    instanceMethods: {
      getChoicesForEvent: function(event, cb)
      {
        Selection.findOne({event: event, participant:this.id}, cb);
      },
      getPlacementForEvent: function(event, cb)
      {
        Placement.findOne({event: event, participant:this.id}, cb);
      },
      setChoicesForEvent: function(event, choices, cb)
      {
        Selection.findOne({event: event, participant:this.id}, {choices:choices}, cb);
      },
      setPlacementForEvent: function(event, placements, cb)
      {
        Placement.findOne({event: event, participant:this.id}, {placements:placements}, cb);
      }

    }
  }
);

Event.hasMany(Participant);
Event.hasMany(Choice);

exports.Choice = Choice;
exports.Participant = Participant;
exports.Event = Event;
exports.sequelize = sequelize;
*/
