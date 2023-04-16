// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (drivers, name){
    return drivers.filter (function (driver) { 
        return driver.toLowerCase() === name.toLowerCase();
     })
}

function fuzzyMatch (drivers, querry){
    return drivers.filter (function (driver){
        return (driver.toLowerCase().substring(0, querry.length) === querry.toLowerCase())
    }
    )    
}

const driversobj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  
function matchName (driversobj, value){
    return driversobj.filter((function (arr){
        return arr.name === value;
    }
     ) )
}
