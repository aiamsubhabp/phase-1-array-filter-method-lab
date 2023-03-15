// Code your solution here
function findMatching (drivers, target) {
    return drivers.filter(possibleMatch => possibleMatch.toLowerCase() === target.toLowerCase());
}

function fuzzyMatch (drivers, target) {
    return drivers.filter(possibleMatch => possibleMatch.toLowerCase().indexOf(target.toLowerCase()) === 0 )
}

function matchName (driverArray, string) {
  return driverArray.filter(possibleMatch => possibleMatch.name === string)
}