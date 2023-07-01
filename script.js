// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))
const signup = document.getElementById("signup");
const login = document.getElementById("login");

login.addEventListener("click",()=>{
    location.href = "./login/index.html"
})

signup.addEventListener("click",()=>{
    location.href = "./signup/index.html"
})