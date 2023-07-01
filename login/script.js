const loginForm = document.getElementById("loginForm");
const errorMsg =document.getElementById("errorMsg");

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
     
   
    const users= JSON.parse(localStorage.getItem("users"))||[];
    const userExist = users.find(user=>user.email===email && user.password===password)
     

    if(userExist){
        userExist.token = generateToken();
        localStorage.setItem("currentUser",JSON.stringify(userExist))
        errorMsg.innerText = "Login successfully"
        errorMsg.style.color = "green";
        setTimeout(()=>{
            location.href="../shop/index.html"
          },1000)
         

    }
    else {
        errorMsg.innerText = "Error: Invalid Email or password"
        errorMsg.style.color = "red";
        
    }

    if(!email || !password){
        errorMsg.innerText = "Error: All Fields are Mandatory."
        errorMsg.style.color = "red";
        return;
     }

 form.reset();

})

function generateToken(){
    let token = '';
    for (let i = 0; i < 16; i++) {
      token += String.fromCharCode(Math.floor(Math.random() * 256));
    }
    
    return btoa(token);
}