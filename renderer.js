import nelLog from "./newLogin.js";
import { adminURL, backendURL, mainContainer } from "./preload.js";
import  { ApiURL } from "./preload.js";
//carregamento preload//
window.addEventListener("DOMContentLoaded", ()=>{
    closePreload();
})///////

function closePreload(){
    const preLoadContainer = document.querySelector(".preLoadContainer");
    preLoadContainer.classList.add('removed');
}

function openReload(){
    const reloadContainer = document.querySelector(".reloadContainer");
    reloadContainer.classList.add('active');
}

function closeReload(){
    const reloadContainer = document.querySelector(".reloadContainer");
    reloadContainer.classList.remove('active');
}

//manipulation FormData

const buttonAcess = document.querySelector(".buttonAcess");
buttonAcess.addEventListener("click", function abrir(){

 const formData = document.querySelector("#formData");
 const formDataAdmin = document.querySelector("#formDataAdmin");


 formDataAdmin.classList.add('active');
 formData.classList.add('remove');
})

const cancel = document.querySelector("#cancelButton");
cancel.addEventListener("click", ()=>{
    const formData = document.querySelector("#formData");
    const formDataAdmin = document.querySelector("#formDataAdmin");


    formDataAdmin.classList.remove('active');
    formData.classList.remove('remove'); 
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VALIDAR O FORMULARIO;


//validar Form Login User
const formData = document.querySelector("#formData");
formData.onsubmit = (e)=>{
    e.preventDefault();
}

const nomeUser = document.querySelector("#nomeUser");
const passwordUser = document.querySelector("#passwordUser");
const btnLoginUser = document.querySelector("#btnLoginUser");
const textError = document.querySelector("#textError");

btnLoginUser.addEventListener("click", ()=>{
    validateFormData(formData);
})

function validateFormData(DataForm){
   let username = nomeUser.value;
   let password = passwordUser.value;
   let boxNomeUser = document.querySelector(".boxNomeUser"); 
   let boxPasswordUser = document.querySelector(".boxPasswordUser");
   let usernameValidate = "O Campo nome de usuário não pode estar vazio!"
   let passwordValidate = "Por favor, coloque a sua senha!";
   let general = "Por favor, preencha todos os campos!";

   //verificar se estiver preenchido!

   if(username == "" && password == ""){
        textError.style = "color:red";
        textError.textContent = general;
        boxNomeUser.style = "border:1px solid red";
        boxPasswordUser.style = "border:1px solid red";
        return false;
   }
   else{
    if(username == ""){
        textError.textContent = usernameValidate;
        textError.style = "color:red";
        boxNomeUser.style = "border:1px solid red";
        boxPasswordUser.style = "border:1px solid #afacac71";
        return false;
     }
     else if(password == ""){
        textError.textContent = passwordValidate;
        textError.style = "color:red";
        boxPasswordUser.style = "border:1px solid red;";
        boxNomeUser.style = "border:1px solid #afacac71";
        return false;
     } 
     else{
        //iniciar o carregameto e returnar verdadeira!.... 
        requestBackEndUser(DataForm);
        openReload();
        return true;
     }
   }
   
}

////////////////////////////////////validar Admin FormData!...

const formDataAdmin = document.querySelector("#formDataAdmin");
const userNameAdmin = document.querySelector("#userNameAdmin");
const passwordAdmin = document.querySelector("#passwordAdmin");
const adminLogin = document.querySelector("#adminLogin");

adminLogin.addEventListener("click", ()=>{
    validateAdmin(); 
})

formDataAdmin.addEventListener("submit", (e)=>{
e.preventDefault();
})

function validateAdmin(){
    let boxAdminName = document.querySelector(".boxAdminName");
    let boxAdminPass = document.querySelector(".boxAdminPass");
    let nome = userNameAdmin.value;
    let pass = passwordAdmin.value;

    let nomeValidate = "O Campo nome de usuário não pode estar vazio!";
    let passValidate = "Por favor, coloque a sua senha!";
    let generalValidate = "Por favor, preencha todos os campos!";

    if(nome == "" && pass == ""){
        textError.textContent = generalValidate;
        textError.style = "color:red";
        boxAdminName.style = "border:1px solid red";
        boxAdminPass.style = "border: 1px solid red";
        return false;
    }
    else{
        if(nome ==  ""){
            textError.textContent = nomeValidate;
            textError.style = "color:red";
            boxAdminName.style = "border: 1px solid red";
            boxAdminPass.style = "border: 1px solid #afacac71";
            return false;
        }
        else if(pass == ""){
        textError.textContent = passValidate;
        textError.style = "color:red";
        boxAdminPass.style = "border: 1px solid red";
        boxAdminName.style = "border: 1px solid #afacac71";
        return  false;
        }
        else{
            openReload();
            requestAdmin()
            return true;
        }
    }
}

//////////////////////////////////////////////
/////////////////////////////////////////////
//////////////FAZENDO CHAMADA AO BACKEND ///
///////////////////////////////////////////

const backEndUrl = "http://localhost:";

async function requestBackEndUser(DataForm){
    let form = new FormData(DataForm)
    let arquivo = "/transito/src/login.php";
    let boxNomeUser = document.querySelector(".boxNomeUser"); 
    let boxPasswordUser = document.querySelector(".boxPasswordUser"); 
    try{

        let sendData = await fetch(backEndUrl+arquivo, { method:"POST", body: form })
        if(sendData.ok){
            closeReload();
            let getData = await sendData.json();
            if(getData.sucess){
                boxNomeUser.style = "border: 1px solid #afacac71";
                boxPasswordUser.style = "border: 1px solid #afacac71";
                textError.innerHTML = getData.sucess;
                textError.style = "color:#02bd50";
                sessionStorage.setItem("token", getData.token);
                const interval = setInterval(()=>{
                    renderer()
                }, 3000);
    
                function renderer(){
                    clearInterval(interval);
                    location.href = "dashboard.html";
                }
       
            }
            else if(getData.errorLog){
                boxNomeUser.style = "border:1px solid red";
                boxPasswordUser.style = "border:1px solid red";
                textError.innerHTML = getData.errorLog;
                textError.style = "color:red";
            }
        }
        else{
            console.log("Erro" + sendData.statusText);
            textError.style.color = "red";
            textError.innerHTML = "Erro na requisicao : " + sendData.statusText;
        }
    
    }
    catch(error){
        console.log("Erro" + error);
        closeReload();
        textError.innerHTML = "Erro no Servidor:" + error;
        textError.style.color = "red";
    }
   
}


///////Admin 
async function requestAdmin(){
    let formData = new FormData(formDataAdmin);
    let boxAdminName = document.querySelector(".boxAdminName");
    let boxAdminPass = document.querySelector(".boxAdminPass");
    let arquivo = "/transito/src/admin.php";

   try {
        let sendData = await fetch(backEndUrl+arquivo, { method:"POST", body:formData });

    if (sendData.ok) {
        closeReload();
        let getData = await sendData.json();
        console.table(getData);
      
        if (getData.sucess) {
            textError.innerHTML = getData.sucess;
            textError.style = "color: green";
            boxAdminName.style = "border:1px solid #afacac71";
            boxAdminPass.style = "border: 1px solid #afacac71";
            sessionStorage.setItem("session_type", getData.session);
            sessionStorage.setItem("token", getData.token);

            const interval = setInterval(()=>{
                renderer()
            }, 3000);

            function renderer(){
                clearInterval(interval);
                location.href = "dashboard.html";
            }
            
        }
        else if(getData.errorLog){
            boxAdminName.style = "border:1px solid red";
            boxAdminPass.style = "border: 1px solid red";
            textError.innerHTML = getData.errorLog;
            textError.style = "color:red";
            
        }
    } else{
        console.log("Erro" + sendData.statusText);
        textError.innerHTML = sendData.statusText;
        textError.style.color = "red";
        clear();
    }

   } catch (error) {
        console.log("Erro!" + error);
        textError.innerHTML = "Erro no Servidor: " + error;
        textError.style.color = "red";
        clear();

   }

   function clear(){
        closeReload();
   }
}

/////Acessar como Novo
let newUserButton = document.querySelector("#newUserButton");
let formContainer = document.querySelector(".formContainer");
newUserButton.addEventListener("click", async ()=>{
    
    formContainer.innerHTML = nelLog();
    let formData = formContainer.querySelector("#formData");
    formData.addEventListener("submit", (e)=>{
        e.preventDefault();
    })
    let passwordUser = document.querySelector("#passwordUser");
    let confiRmpasswordUser = document.querySelector("#confiRmpasswordUser");
    let btnCancel = document.querySelector("#btnCancel");
    btnCancel.onclick = ()=>{
        window.location.reload();
    }

    confiRmpasswordUser.addEventListener("input", (e)=>{
        if(e.target.value !== passwordUser.value){
            confiRmpasswordUser.style = "border: 1px solid red";
        } else{
            confiRmpasswordUser.style = "border: 1px solid #cccc";
        }
    })

    let btnLoginUser = formContainer.querySelector("#btnLoginUser");
    btnLoginUser.addEventListener("click", async ()=>{
        let textError = document.querySelector("#textError");
        let passwordUser = document.querySelector("#passwordUser").value;
        if (passwordUser.trim() != "") {
            let form = new FormData(formData);
            form.append("path", "/users");
            try {
                let sendData = await fetch(backEndUrl+adminURL,{
                    method:"POST",
                    body: form
                });
                if (sendData.ok) {
                        let data =  await sendData.json(); 
                        if(data.error){
                            textError.innerHTML = data.error;
                            textError.style.color ="red";
                        } else if(data.users.error){
                            textError.innerHTML = data.users.error;
                            textError.style.color ="red";
                        } else{
                            textError.innerHTML = "";
                            formContainer.innerHTML = `
                            <div class="inputBox boxPasswordUser">
                                <label for="" id="">${ data.users.sucess }<i class="bi bi-lock-fill"></i></label>
                                <button class="LogBtn" id="okButton">Ok</button>
                            </div>`

                            formContainer.querySelector("#okButton").onclick = ()=>{
                                window.location.reload();
                            }
                        }
                } else{
                    alert("error!");
                }
            } catch (error) {
                alert("Erro: "+ error);
            }
        
        } else{
            alert("Preencha os campos!")
        }
        
    }) 

   
})

