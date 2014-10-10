var List = require("collections/list");

var Choice = function(id,name,max,nPeriods)
{
  this.id = id;
  this.name = name;
  this.participants = new Array();
  this.maxParticipants = max;
  this.nPeriods = nPeriods;

  for ( var i = 0; i < this.nPeriods; i++ )
  {
    this.participants[i] = new List();
  }

  this.isFull = function(period)
  {
    return this.participants[period].length >= this.maxParticipants;
  };
};

var Participant = function(name, choices, nPeriods)
{
  this.schedule = new Array();
  this.choices = choices;
  this.name = name;
  this.nPeriods = nPeriods;


  for ( var i = 0; i < this.nPeriods; i++ )
  {
    this.schedule[i] = undefined;
  }


  this.beginSorting = function()
  {
    for ( var i = 0; i < this.nPeriods; i++ )
    {

        if ( this.schedule[i] != undefined )
        {
          this.schedule[i].participants[i].deleteAll(this);
        }
    }
  }


  this.endSorting = function()
  {
    for ( var i = 0; i < this.nPeriods; i++ )
    {
      if ( this.schedule[i] != undefined )
      {
        this.schedule[i].participants[i].add(this);
      }
    }
  };

  this.hasValidSchedule = function()
  {
    for ( s in this.schedule )
    {
      if ( this.schedule[s] != undefined && this.schedule[s].isFull(s) )
        return false;
    }
    return true;
  };
  return this;
};



function addToPeriod(participant, choice, period)
{
  participant.schedule[period] = choice;
  choice.participants[period].add(participant);
}

function removeFromPeriod(participant, choice, period)
{
  participant.schedule[period] = null;
  choice.participants[period].deleteAll(participant);
}

function isUniqueCombo(combo)
{
  for ( var a = 0; a < combo.length; a++ )
  {
      for ( var b = 0; b < combo.length; b++ )
      {
        if ( combo[a] == combo[b] && a != b )
          return false;
      }
  }
  return true;
}

function SortingInstance(participants, choices, nPeriods, nChoices)
{
  this.participants = participants;
  this.choices = choices;
  this.nChoices = nChoices;
  this.nPeriods = nPeriods;


  this.attemptSchedule = function(participant, newChoice)
  {
    function runAttempt(parentDepth, stack)
    {
      if ( parentDepth == undefined )
      {
        parentDepth = -1;
        stack = new Array();
      }

      var thisDepth = parentDepth+1;
      for ( var i = 0; i < this.nPeriods; i++ )
      {
        stack[thisDepth] = i;
        if ( thisDepth >= this.nPeriods-1 )
        {
          if ( isUniqueCombo(stack) )
          {
            var newSchedule = new Array(
              scheduleCopy[stack[0]],
              scheduleCopy[stack[1]],
              scheduleCopy[stack[2]],
              scheduleCopy[stack[3]]
            );
            participant.schedule = newSchedule;

            if ( participant.hasValidSchedule() )
              return true;
          }
        }
        else
        {
          if ( runAttempt(thisDepth,stack) )
          {
            return true;
          }
        }
      }
      return false;
    }

    for ( var i = 0; i < this.nPeriods; i++ )
    {
      if ( participant.schedule[i] == undefined )
      {
        participant.schedule[i] = newChoice;
        break;
      }
    }
    var scheduleCopy = participant.schedule.slice(0); // clone the array as a different object
    participant.beginSorting();
    runAttempt();
    if ( !participant.hasValidSchedule() )
      participant.schedule = scheduleCopy;
    participant.endSorting();
  }

  this.fillOpenBlocks = function()
  {
    
  }

  this.run = function()
  {
    for ( var c = 0; c < this.nChoices; c++ )
    {
      for ( p in this.participants )
      {
        this.attemptSchedule(this.participants[p], this.participants[p].choices[c]);
      }
    }
  }
}
exports.Choice = Choice;
exports.Participant = Participant;
exports.SortingInstance = SortingInstance;
