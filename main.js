'use strict';
const assert = require('assert');

// This is an object that has types of jobs and the values each provide.
let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code will go here

class CrewMember  {
// Properties:
// name - name of the crewMember 
//title - title of the crewMember 
//assignedVehicle -  the vehicle assigned to each crew member 


//assignTo(Ship) - assign this crewMember to the vehicle passed in, 
//               - and update the vehicle's listof assigned crewMembers
name; // name of crewMember
job
specialSkill; //special skill of crewMember
ship;

constructor(iName,iJob, iSpecialSkill){
  this.name = iName;
  this.job = iJob; 
  this.specialSkill = iSpecialSkill;
  this.ship = null;
} 

enterShip(theShip){
  
  theShip.crew.push(this)
 this.ship = theShip; 
}

}




class Ship {
// Properties:
//name/identifier - unique indetifier for the ship
// type - type of the vehicle 
//crewAssigned - an array of crew members asigned to the vehcile

// canGo -- return true , if the vehicle is allowed to be operated, based on the type of vehicle
//          the current list of assigned crew
name;// name of ship
type; 
ability;
 //crewMember assigned to vehicle
 crew; 
constructor(iName, iType, iAbility){
  this.name = iName; 
  this.type = iType;
  this.ability = iAbility;
  this.crew = [];

  }

  markCrewAssigned(theCrewMember){
    this.crew.push(this)
    this.ability.push(theCrewMember);
  }
  missionStatement(){
    if(this.crew.length > 0){
      return this.ability;
    }else {
      return "Can't perform a mission yet."
    }
  }
}


let r = new CrewMember("Rick Martinez", "Pilot", "chemistry");
 
let w = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');


r.enterShip(w)






console.log(w);

// Begin by reading the tests and building a function that will full each one.
// As you build, you might not have to build them in order, maybe you do...
// These are the tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      // this creates a CrewMember and passes the following arguments into its constructor:
      // 'Rick Martinez', 'pilot', 'chemistry'
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      // this creates a new Ship. Can you build a class that can be called so that this Ship can be built?
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      const crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
