const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');
const resetBtn = document.getElementById('reset-btn');
const contactsContainer = document.querySelector('.contacts-list');

// let phoneNoRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let digitRegEx = /^[0-9]/;
let alphabetLettersRegEx = /^[a-zA-Z\s]+$/;



const personContacts = [];
console.log(personContacts);


// object constructor function
function Contacts( userName, phone, addressORremarks){
    this.id = Math.floor(Math.random()*10000);
    this.name = userName;
    this.phone = phone;
    this.addressRemarks = addressORremarks;
}


submitBtn.addEventListener('click', ()=>{
    
    // Step 1 : get the inputs
    // get users inputs
     userName = document.getElementById('name').value;
     phone = document.getElementById('contact-num').value;
     addressORremarks = document.getElementById('addressORremarks').value;



    // Step 2 : validation on the inputs
    // inputFieldValidation(); //🔖📗problem any alert runs means validation fails still its next line are running.

    // Stop execution if validation fails
    if (!inputFieldValidation()) { //?📗🔖 if(!true) means false and it means condtion is false means now outside aor next code(function , line) will run. so only when true we got from this function.
        return false; // return ; // next line dont run or Stop further code execution 
    }

    
    
    // These will only run if validation passes
    clearInputFields();

    // These will only run if validation passes
    console.log(userName);
    console.log(phone);
    console.log(addressORremarks);


    // Step 3 : create the objects from inputs
    
    // create objects from user inputs or // These will only run if validation passes
      const contact =  new Contacts(userName, phone, addressORremarks)
    //   console.log("contact",contact);
    //   console.log("contact.id",contact.id); // 9124
    //   console.log("contact.phone",contact.phone);
    //   console.log("contact.addressORremarks",contact.addressRemarks);
    
    // Step 4 : create the array of object
      personContacts.push(contact)


      displayInputs(contact); //Add or render contact to the UI
})


let inputFieldValidation=()=>{

     //  name validation or alphabets validation
     if(userName === ""){
        alert("Name is Empty, please enter the name") // if it runs means validation fail.
        return false;  // or  //return;   //---> 🔖When you use just return without its value, the function returns undefined by default.In JavaScript, undefined is a falsy value. // Stop further execution
      }else if (!alphabetLettersRegEx.test(userName)) { //📗🔖  only and only allow alphabet characters and spaces for names validation. other than pattern thing then give false. means not fpound por not match
           alert("Enter name only in alphabet")
            return false;  // or  //return;    //---> 🔖When you use just return without its value, the function returns undefined by default.In JavaScript, undefined is a falsy value. // Stop further execution
      }
     
    
       

    // phone no. validation  or digits validation
      if(phone === ""){
        alert("Phone no. is Empty, please enter the phone number");
         return false;  // or  //return;    //---> 🔖When you use just return without its value, the function returns undefined by default.In JavaScript, undefined is a falsy value. // Stop further execution
      }else if(!digitRegEx.test(phone)) { // Checks if the input contains anything other than digits then it gives true
        alert("Enter phone number only in numeric digit"); 
         return false;  // or  //return;    //---> 🔖When you use just return without its value, the function returns undefined by default.In JavaScript, undefined is a falsy value. // Stop further execution
      }else if(phone.length !== 10){
        alert("number must be 10 digits."); 
         return false;  // or  //return;    //---> 🔖When you use just return without its value, the function returns undefined by default.In JavaScript, undefined is a falsy value. // Stop further execution
      }

    //  address validation
    if(addressORremarks === ""){
        alert("addressORremarks is Empty, please enter the valid details.");
         return false;  // or  //return;    //---> 🔖When you use just return without its value, the function returns undefined by default.In JavaScript, undefined is a falsy value. // Stop further execution
    }

   return true; // If all validations pass,    means all above are must have been false. bcz if any one true then inside alert() runs means validtion fails.

   // ✅ Use return false; for validation failure → Makes intent clear.
   // ✅ Use return true; if all validations pass → Ensures boolean return type.
   // 🚫 Avoid just //return;, since it implicitly returns undefined, which may cause confusion.
}

let clearInputFields=()=>{ //  used 2 time. fuction reusablity utilized. 1.clear after add button click  2. clear button press
   
    const userName = document.getElementById('name');
    const phone = document.getElementById('contact-num');
    const addressORremarks = document.getElementById('addressORremarks');
    
    userName.value = " ";
    phone.value = " ";
    addressORremarks.value = " ";

}

// Clearing all input fields
cancelBtn.addEventListener('click', function(){
    clearInputFields();
});

// display array of object    or    display user input with rape in card form.


const displayInputs=(contact)=>{

    contactsContainer.innerHTML = contactsContainer.innerHTML + `
    <div class="contact-card shadow-lg bg-white w-[calc(50%-20px)] max-md:w-[100%] p-2 rounded-md text-center h-[calc(50%-20px)]">
                        <div class="mb-2 ">
                            <span class="font-bold">Person ID:</span>
                            <span class="text-gray-500 ">${contact.id}</span>
                        </div>
                        <div class="mb-2 ">
                            <span class="font-bold">Name:</span>
                            <span class="text-gray-500 ">${contact.name}</span>
                        </div>
                        <div class="mb-2 ">
                            <span class="font-bold">Remarks / Address:</span>
                            <span class="text-gray-500 ">${contact.addressRemarks}</span>
                        </div>
                        <div class="mb-2 ">
                            <span class="font-bold">Contact Number:</span>
                            <span class="text-gray-500 ">${contact.phone}</span>
                        </div>
                        <button class="btn-Style  delete-btn" id="delete-btn">
                            <i class="fa-solid fa-trash"></i> Delete
                        </button>
                    </div>
    
    
    `;


}


// delete card
contactsContainer.addEventListener("click", (e)=>{

    if(e.target.classList.contains("delete-btn")){
        e.target.parentElement.remove();
    }
})

// reset 
// contacts list
resetBtn.addEventListener("click", (e)=>{
    contactsContainer.innerHTML=""; 
})