// Write your script here

const logout = document.getElementById("logout");
const editMyProfile = document.getElementById("editMyProfile");
const EditPassword = document.getElementById("EditPass");
const errorMsg = document.querySelector(".errorMsg");4
const errorMsg1 = document.querySelector(".errorMsg1");

if(!localStorage.getItem("currentUser")){
    location.href="../index.html";
    alert("You have to login or signup first");
    
    
}else {
let user = JSON.parse(localStorage.getItem("currentUser"));
document.getElementById("first-name").value= user.firstName;
document.getElementById("last-name").value= user.lastName;

}


logout.addEventListener("click",()=>{
    localStorage.removeItem("currentUser");
    location.href="../login/index.html";

});

editMyProfile.addEventListener("submit", (e)=>{
    e.preventDefault();
    let firstName=document.getElementById("first-name").value;
    let lastName=document.getElementById("last-name").value;
    if(!firstName || !lastName){
       errorMsg.innerText="Error :All Fields are Mandatory."
       errorMsg.style.color = "red";
       return;
    }
    let user = JSON.parse(localStorage.getItem("currentUser"));
    user.firstName = firstName;
    user.lastName=lastName;
    let email=user.email;
    localStorage.setItem("currentUser",JSON.stringify(user));

    let users = JSON.parse(localStorage.getItem("users"));
     
    let mainIndex;
    users.forEach((element,index) => {
        if(element.email===email){
            user=element;
            mainIndex=index;
        }
    });

    user.firstName=firstName;
    user.lastName=lastName;

    users[mainIndex]=user;

    localStorage.setItem("users",JSON.stringify(users));
    errorMsg.innerText = "profile sucessfully updated";
    errorMsg.style.color = "green";
  
    setTimeout(()=>{
        errorMsg.style.display='none';
    },2000)
})

EditPassword.addEventListener("submit",(e)=>{
 e.preventDefault();
 const oldPass = document.getElementById("oldPass").value;
 const newPass = document.getElementById("newPass").value;
 const conPass = document.getElementById("conPass").value;
 if(!oldPass || !newPass || !conPass){
    errorMsg1.innerText="Error: All fields are mandatory.";
    errorMsg1.style.color = "red";
    return;
 }
 if(newPass!==conPass){
    errorMsg1.innerText="Error: new password and confirm password should be same.";
    errorMsg1.style.color = "red";
    return;
 }
 let user = JSON.parse(localStorage.getItem("currentUser"));
 if(oldPass!==user.password){
    errorMsg1.innerText="Error: old password is incorrect.";
    errorMsg1.style.color = "red";
    return;
 }
 user.password=newPass;
 let email=user.email;

 localStorage.setItem("currentUser",JSON.stringify(user));

    let users = JSON.parse(localStorage.getItem("users"));
     
    let mainIndex;
    users.forEach((element,index) => {
        if(element.email===email){
            user=element;
            mainIndex=index;
        }
    });

    user.password=newPass;
    
    users[mainIndex]=user;

    localStorage.setItem("users",JSON.stringify(users));
    errorMsg1.innerText = "Password sucessfully updated";
    errorMsg1.style.color = "green";
  
    setTimeout(()=>{
        errorMsg1.style.display='none';
        EditPassword.reset();
    },2000)
})