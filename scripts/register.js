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

function isValid(aPet){
    //return false when the pet is not valid
    // return true if the pet is valid
    let valid=true;
    // return the error in the console
    if(aPet.petName.length==0){
        //if we get here it means that the name is not valid
        valid=false;
        console.log("Invalid name");
    }
    if(aPet.petAge.length==0){
        valid=false;
        console.log("Invalid age");
    }
    //validations

    return valid;
}

function register(){
    console.log(inputPetName.value,inputPetAge.value,inputPetGender.value);
    // create the obj
    let thePet = new Pet(inputPetName.value,inputPetAge.value,inputPetGender.value);
    console.log(thePet);

    if(isValid(thePet)){
        // push the obj
        petSalon.pets.push(thePet);
        //display the obj in the html
        displayPets();  
    }
    
}

function displayPets(){
    //travel the array
    let tmp="";
    for(let i=0;i<petSalon.pets.length;i++){
      //create the template
        tmp+=`
        <div class="pet">
            <p>${petSalon.pets[i].petName} 🐾</p>
            <p> Age: ${petSalon.pets[i].petAge}</p>
            <p> Gender: ${petSalon.pets[i].petGender}</p>
        </div>
        `; 
    }
    document.getElementById("pets").innerHTML=tmp;
    //display the tmp on the html
}

function init(){
    // create some pets
    let scooby = new Pet("Scooby",50,"Male");
    let scrappy = new Pet("Scrappy", 40, "Male");   
    petSalon.pets.push(scooby,scrappy);
    displayPets();
}

window.onload=init;