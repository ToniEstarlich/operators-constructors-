function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height"). ariaValueMax;
    Can_ride = (Height < 52) ? "you are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";

}// this is the function of Ternary Operators in our JavasScript


//Keywords//
function Vehicle(Make, Model, Year, Color){
    this.vehicle_Make = Make;
    this.vehicle_Model = Model;
    this.vehicle_Year =Year;
    this.vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "white and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors") .innerHTML =
    "Erick drives a "+ Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    "manufactured in" + Erik.Vehicle_Year;
}
//End Keywords//

//object Constructors//
// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create 2 Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  // Add a name method to first object
  myFather.name = function() {
    return this.firstName + " " + this.lastName;
  };
  
  // Display full name
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.name();
//End Object Constructors//

//Nested Functions//
function count_Function() {
    document.getElementById("Nested_Function").innerHTML=Count();
    function Count(){
        var Starting_Point= 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
//End Nested Functions//
