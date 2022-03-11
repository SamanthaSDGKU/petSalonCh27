// create the constructor
function Pet(name,age,gender){
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
}
// get the info from the inputs
let inputPetName= document.getElementById("txtPetName");
let inputPetAge=document.getElementById("txtPetAge");
let inputPetGender=document.getElementById("txtPetGender");

// create some pets
let scooby = new Pet("Scooby",50,"Male");
let scrappy = new Pet("Scrappy", 40, "Male")
petSalon.pets.push(scooby,scrappy);

function register(){
    console.log(inputPetName.value,inputPetAge.value,inputPetGender.value);
    // create the obj
    let thePet = new Pet(inputPetName.value,inputPetAge.value,inputPetGender.value);
    console.log(thePet);
    // push the obj
    petSalon.pets.push(thePet);
    //display the obj in the console    
}