// let firstNameInput = document.getElementById("firstName");
// let firstName = firstNameInput.value;

// console.log(firstName);


// let lastName = document.getElementById("lastName");
// let lastNameValue = lastName.value;

// let fatherName = document.getElementById("father");

// let email = document.getElementById("email");

// let bloodType = document.getElementById("bloodType");

// let resultsArea = document.getElementById("message");


//                 // <p id="name"></p><br>
//                 // <p id="father"></p><br>
//                 // <p id="emailed"></p><br>
//                 // <p id="bloodT"></p>
// let naam = document.getElementById("name")
// let fatherN = document.getElementById("father")
// let emailed = document.getElementById("emailed")
// let BloodT = document.getElementById("bloodT")

// function details(firstNameValue, lastNameValue) {
//     let naam = document.getElementById("name")
//     naam.textContent = `${firstNameValue} + ${lastNameValue}`
    
// }

// const bloodTypes = {
//     "A+": ["A+", "A-", "O+", "O-"]
// }

const submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", check);

function check()  {
    const name = `${document.getElementById("first-name").value} ${document.getElementById("last-name").value}`
    const fatherName = `${document.getElementById("father").value}`
    const email = document.getElementById("email").value;
    const bloodType = document.getElementById("bloodType").value;

    const nameResult = document.getElementById("name")
    const fatherNameResult = document.getElementById("father")
    const emailResult = document.getElementById("emailed")
    const bloodResult = document.getElementById("bloodT")

    let types = [];

    if(bloodType === "A+") {
        types = ["A+", "A-", "O+", "O-"];
    } else if (bloodType === "A-") {
        types = ["A-", "O-"] 
    } else if (bloodType === "B+") {
        types = ["B+", "B-", "O+", "O-"]
    
    } else if (bloodType === "AB+") {
        types = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
        
    } else if (bloodType === "AB-") {
        types = ["A-", "B-", "AB-", "O-"]
        
    } else if (bloodType === "O+") {
        types = ["O+", "O-"]
        
    } else if (bloodType === "O-") {
        types = "O-"
    }

    if(types.length){

    nameResult.innerText = "name:" + " " + name;
    fatherNameResult.innerText = fatherName;
    emailResult.innerText = "contact:" + " " + email;
    bloodResult.innerText = `Your blood type is ${bloodType} and the blood types of ${types} are compatible with it.`;
}
    else{
        nameResult.innerText = "Please provide valid details if you care about you blood count"
    }

}

// let answer = check(firstName, lastNameValue);
