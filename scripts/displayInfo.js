//Create an obj literal for the pet salon
const petSalon={
    name:"The Fashion Pet",
    address:{
        street:"Ave University",
        number:"262",
        zip:"22115",
        city:"Tijuana",
        state:"B.C."
    },
    workingHours:{
        open:"9:00 am",
        close:"5:00 pm"
    },//Create pets array 
    pets:[
        { // first pet
            name:"Scooby",
            age:50,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            ownerName:"Shaggy",
            contactPhone:"888-888-888"
        },
        {
            name:"Scooby",
            age:50,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            ownerName:"Shaggy",
            contactPhone:"888-888-888"
        },
        {
            name:"Scooby",
            age:50,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            ownerName:"Shaggy",
            contactPhone:"888-888-888"
        }
    ]
}
//console.log(petSalon.address.zip);
//console.log(petSalon.pets.length);
//display the service in the console.
//console.log(petSalon.pets[0].service); // Grooming

// display the pet salon info (name,address,working hours) in the footer section of the html
function displaySalonInfo(){
    document.getElementById("footer-info").innerHTML=`
    <p>Welcome ${petSalon.name} in ${petSalon.address.city} </p>
    <p>opens ${petSalon.workingHours.open}</p> `;
}
displaySalonInfo();

function displayPetNames(){

}
