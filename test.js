var sorting = require("./sorting");
var Choice = sorting.Choice,
    Participant = sorting.Participant,
    SortingInstance = sorting.SortingInstance;

var choices = [
  new Choice(1, "A", 1, 4),
  new Choice(2, "B", 1, 4),
  new Choice(3, "C", 1, 4),
  new Choice(4, "D", 1, 4),
  new Choice(5, "E", 1, 4),
  new Choice(6, "F", 1, 4)
];

var participants = [
  new Participant("Andrew", [choices[0],choices[1],choices[2],choices[3],choices[4]], 4),
  new Participant("Bob", [choices[0],choices[1],choices[2],choices[3],choices[4]], 4),
  new Participant("Joe", [choices[0],choices[1],choices[2],choices[3],choices[4]], 4)
];

var sorting = new SortingInstance(participants, choices, 4, 4);
sorting.run();
for ( p in participants )
{
  console.log(participants[p].schedule);
}
