import TabeleVeiculos from "./components/cadastro/cadastroveiculo.js";
import formVeiculo from "./components/cadastro/formveiculo.js";
import sectionCard from "./components/cadastro/section.js";
import tabeleCondutor from "./components/cadastro/tabelecondutor.js";
import formCondutor from "./components/cadastro/formcondutor.js";
import Tabelaefetivos from "./components/cadastro/tabelaefetivos.js";
import formEfetivos from "./components/cadastro/formefetivos.js";
import TabelaInfracao from "./components/cadastro/tabelainfracao.js";
import FormInfracao from "./components/cadastro/forminfracao.js";
import Usuarios from "./components/cadastro/usuarios.js";
import formUser from "./components/cadastro/formusers.js";
import popUp from "./components/cadastro/popup.js";
import home from "./components/home/home.js";
import SystemDefinitions from "./components/cadastro/sistemdefinition.js";
import userSpage from "./components/cadastro/usersetings.js";
import AdministradoresTable from "./components/cadastro/tabeleadmin.js";
import NovoAdminForm from "./components/cadastro/formadmin.js";
export const mainContainer = document.querySelector("#mainContainer");
export const modalContainer = document.querySelector("#modalContainer");
export const backendURL = "http://localhost:";
export const ApiURL = "/transito/api/api.php";
export const updateUrl = "/transito/src/update.php";
export const deleteUrl = "/transito/src/delete.php";
export const adminURL = "/transito/src/cadastrarodm.php";

window.addEventListener('DOMContentLoaded', () => {

  async function homePage() {
    try {
      let getDataHome = await fetch(backendURL + "/transito/api/api.php", { method: "POST" });
      if (getDataHome.ok) {
        const propsHome = await getDataHome.json();
        let person = propsHome.users.list
        mainContainer.innerHTML = home(person);
        const bodyContainer = mainContainer.querySelector("#bodyContainer");
        // bodyContainer.innerHTML = TabeleVeiculos();
        bodyContainer.innerHTML = sectionCard(propsHome);

      }
    } catch (error) {
      console.log("Erro" + error);
    }

    //////////////////////---------------------

    let listContainer = mainContainer.querySelectorAll(".listContainer > ul > .toggleList");
    let BodyContainer = mainContainer.querySelector(".BodyContainer");
    let list = mainContainer.querySelector(".listContainer");

    listContainer.forEach((button, index) => {
      button.addEventListener("click", () => {
        switch (index) {
          case 0:
            listContainer.forEach(elelemt => elelemt.classList.remove('active'));
            button.classList.add('active');
            BodyContainer.classList.remove('active');
            list.classList.remove('active');
            BodyContainer.classList.remove('totalView');
            list.classList.remove('totalView');
            homePage();
            break;

          case 1:

            let permossion = sessionStorage.getItem("session_type");
            if (permossion === "admin") {
              listContainer.forEach(elelemt => elelemt.classList.remove('active'));
              button.classList.add('active');
              BodyContainer.classList.add('active');
              list.classList.add('active');
              efetivos();
            }
            else {
              alert("Permissao exclusiva ao Administrador!");
            }
            break;

          case 2:

            listContainer.forEach(elelemt => elelemt.classList.remove('active'));
            button.classList.add('active');
            BodyContainer.classList.add('active');
            list.classList.add('active');
            infracoes();

            break;

          case 3:

            listContainer.forEach(elelemt => elelemt.classList.remove('active'));
            button.classList.add('active');
            BodyContainer.classList.add('active');
            list.classList.add('active');
            condutoresF();

            break;

          case 4:

            listContainer.forEach(elelemt => elelemt.classList.remove('active'));
            button.classList.add('active');
            BodyContainer.classList.add('active');
            list.classList.add('active');
            viaturasFunction();

            break;

          case 5:
            UsuariosPage();
            BodyContainer.classList.add('totalView');
            list.classList.add('totalView');
            break;

        }
      })
    })

    /////////////////Listar e cadastrar Condutores 
    ////////////////
    async function condutoresF() {

      try {
        let getData = await fetch(backendURL + "/transito/api/api.php", { method: "GET" });
        if (getData.ok) {
          let data = await getData.json();
          BodyContainer.innerHTML = tabeleCondutor(data.condutores);
        }
        else {
          BodyContainer.innerHTML = `<div>${"Erro" + getData.statusText}</div>`;
        }
      }
      catch (error) {
        BodyContainer.innerHTML = `<div>${"Erro" + error}</div>`;
      }

      /////////////Editar Condutores 
      let buttonCondutor = BodyContainer.querySelectorAll("#buttonCondutor");
      buttonCondutor.forEach((button) => {
        button.addEventListener("click", async () => {
          try {
            let getData = await fetch(backendURL + ApiURL);
            if (getData.ok) {
              let data = await getData.json();
              data.condutores.list.forEach((item) => {
                if (item.id === button.value) {
                  let updateData = {
                    update: item
                  };

                  var idSend = button.value;
                  BodyContainer.innerHTML = formCondutor(updateData);
                  let udateformCondutor = BodyContainer.querySelector("#udateformCondutor");
                  let formUpdateCond = BodyContainer.querySelector("#formUpdateCond");
                  let closeUpdateFormCondutor = BodyContainer.querySelector("#closeUpdateFormCondutor");
                  formUpdateCond.onsubmit = (e) => {
                    e.preventDefault();
                  }
                  // fechar o formulario...
                  closeUpdateFormCondutor.addEventListener("click", () => { condutoresF() })

                  //enviar os dados ao backend
                  
                  udateformCondutor.addEventListener("click", async () => {
                    let bottomForm = BodyContainer.querySelector(".bottomForm");
                    bottomForm.classList.add('active');
                    bottomForm.classList.remove('error');
                    bottomForm.classList.add('sucess');
                    bottomForm.innerHTML = `<span>Aguerde...</span>`;

                    let fprmUpdate = new FormData(formUpdateCond);
                    fprmUpdate.append('id', idSend);
                    fprmUpdate.append('condutor', "condutor");
                    try {
                      let updateData = await fetch(backendURL + "/transito/src/update.php", {
                        method: "POST",
                        body: fprmUpdate
                      });

                      if (updateData.ok) {
                        let update = await updateData.json();
                        console.log(update);
                        if (update.error) {
                          bottomForm.innerHTML = `<span>${update.error}</span>`;
                          bottomForm.classList.replace("sucess", "error") || bottomForm.classList.add('error');
                        } else if (update.update.error) {
                          bottomForm.innerHTML = `<span>${update.update.error}</span>`;
                          bottomForm.classList.replace("sucess", "error") || bottomForm.classList.add('error');
                        } else {
                          bottomForm.innerHTML = `<span>${ update.update.sucess }</span>`;
                        }


                      }
                      else {
                        console.error("Erro: " + updateData.statusText);
                      }

                    } catch (error) {
                      console.error("Erro: " + error);
                    }
                  })
                }
              })
            }
            else {
              console.error("Erro: " + getData.statusText);
            }
          } catch (error) {
            console.error("Erro: " + error);
          }

        })
      })// end Edition Condutores //


      ////////////Deletar optionTable Condutores!
      let deleteCondutor = BodyContainer.querySelectorAll("#deleteButtonCond");

      deleteCondutor.forEach((button) => {
        button.onclick = async () => {
          let formData = new FormData();
          formData.append("id", button.value);
          formData.append("component", "/condutores");
          try {
            let sendData = await fetch(backendURL + "/transito/src/delete.php", {
              method: "POST",
              body: formData
            })
            if (sendData.ok) {
              let data = await sendData.json();
              modalContainer.classList.add('active');
              if (data.sucess) {
                modalContainer.innerHTML = popUp(data.sucess);
                let closeModalButt = modalContainer.querySelector("#closeModalButt");
                closeModalButt.addEventListener("click", () => {
                  closeModal()
                  condutoresF()
                })
              }
            }
            else {
              console.log("erro" + sendData.statusText);
            }
          } catch (error) {
            console.error("Erro de rede:", error);
          }
        };
      });



      let addCondutorButton = mainContainer.querySelector("#addCondutorButton");
      addCondutorButton.addEventListener("click", () => {
        BodyContainer.innerHTML = formCondutor();
        let closeFormCondutor = BodyContainer.querySelector("#closeFormCondutor");
        var formDataCondutor = BodyContainer.querySelector("#formcondutor");
        formDataCondutor.addEventListener("submit", (e) => {
          e.preventDefault();
        });


        let sendformCondutor = BodyContainer.querySelector("#sendformCondutor");
        sendformCondutor.addEventListener("click", async () => {
          let formData = new FormData(formDataCondutor);
          let bottomForm = BodyContainer.querySelector(".bottomForm");
          bottomForm.classList.add('active');
          bottomForm.classList.remove('error');
          bottomForm.classList.add('sucess');
          bottomForm.innerHTML = `<span>Aguerde...</span>`;
          try {
            let sendData = await fetch(backendURL + "/transito/src/condutor.php", {
              method: "POST",
              body: formData
            });
            if (sendData.ok) {
              let data = await sendData.json();
              if (data.error) {
                bottomForm.innerHTML = `<span> ${data.error} </span>`;
                bottomForm.classList.add('error');
              }
              else if (data.cadastro.error) {
                bottomForm.innerHTML = `<span> ${data.cadastro.error} </span>`;
                bottomForm.classList.add('error');
              }
              else {
                bottomForm.innerHTML = `<span> ${data.cadastro.sucess} </span>`;
                bottomForm.classList.remove('error');
                bottomForm.classList.add('sucess');
              }
            }
            else {
              bottomForm.innerHTML = sendData.statusText;
            }
          } catch (error) {
            console.log("Erro" + error);
            bottomForm.innerHTML = "Erro" + error;
          }

        });//
        closeFormCondutor.addEventListener("click", () => { condutoresF() });
      });//

    } // end

    //////////////////////Viaturas
    async function viaturasFunction() {
      try {
        let getData = await fetch(backendURL + "/transito/api/api.php", { method: "GET" });
        if (getData.ok) {
          let data = await getData.json();
          BodyContainer.innerHTML = TabeleVeiculos(data.viaturas);
        }
        else {
          console.log("Erro " + getData.statusText);
        }
      } catch (error) {
        console.log("ERRO " + error);
      }
       
      //atualizar registro dos veiculos 
      let editVeiculoButtonn = BodyContainer.querySelectorAll("#editVeiculoButtonn");
      editVeiculoButtonn.forEach((button)=>{
        button.addEventListener("click", async ()=>{
          var idUpdate = button.value
          var path = "veiculos";
          try {
            let getData = await fetch(backendURL+ApiURL, {method: "GET"});
            if (getData.ok) {
              let data = await getData.json();
              let listRecived = data.viaturas.list;

              listRecived.forEach((item)=>{
                if (item.id === idUpdate) {
                  let senForm = {
                    data:item
                  }
                  BodyContainer.innerHTML = formVeiculo(senForm);
                } // enviando os dados recebidos ao formulario!

              })
              
            }
          } catch (error) {
            console.error("Erro: " + error);
          }

          //preparando 0 envio do formulario 
          let updateVeiculoButton = BodyContainer.querySelector("#updateVeiculoButton");
          let closeUpdateFormVeiculo = BodyContainer.querySelector("#closeUpdateFormVeiculo");
          let formUpdatev = BodyContainer.querySelector("#formUpdatev");
          formUpdatev.addEventListener("submit", (e)=>{
            e.preventDefault();
          })

          closeUpdateFormVeiculo.addEventListener("click", ()=>{ viaturasFunction() });

          updateVeiculoButton.addEventListener("click", async ()=>{
            let bottomForm = BodyContainer.querySelector(".bottomForm");
            bottomForm.innerHTML = `<span>Aguarede...</span>`;
            bottomForm.classList.add('active');
            bottomForm.classList.add('sucess');

            let newUpdate = new FormData(formUpdatev);
            newUpdate.append("id", idUpdate);
            newUpdate.append("veiculo", path);
            try {
              let sendData = await fetch(backendURL+updateUrl, {
                method:"POST",
                body: newUpdate
              });

              if (sendData.ok) {
                let data = await sendData.json();

                if (data.error) {

                  bottomForm.classList.add('active');
                  bottomForm.classList.add('error') || bottomForm.classList.replace('sucess', 'error');
                  bottomForm.innerHTML = `<span> Erro: ${ data.error }</span>`;

                } else if (data.update.error) {

                  bottomForm.classList.add('active');
                  bottomForm.classList.replace('sucess', 'error') || bottomForm.classList.add('error');
                  bottomForm.innerHTML = `<span${ data.update.error }</span>/`;

                } else{

                  bottomForm.classList.add('active') && bottomForm.classList.add('sucess')
                  || bottomForm.classList.replace('error', 'sucess');
                  bottomForm.innerHTML = `<span>${ data.update.sucess }</span>`;

                }

              } else{
                bottomForm.innerHTML = `<span> Erro: ${ sendData.statusText }</span>`;
                bottomForm.classList.add('active');
                bottomForm.classList.add('error') || bottomForm.classList.replace('sucess', 'error');
              }
            } catch (error) {
              bottomForm.classList.add('active');
              bottomForm.classList.add('error') || bottomForm.classList.replace('sucess', 'error');
              bottomForm.innerHTML = `<span>Erro: ${ error }</span>`;
            }

          })


        })
      }) ///End update
      
      //eliminar registro dos veiculos 

      var deleteVeivuloButton = BodyContainer.querySelectorAll("#deleteVeivuloButton");
      deleteVeivuloButton.forEach((button) => {
        button.addEventListener("click", async () => {
          try {
            let formData = new FormData();
            formData.append("id", button.value);
            formData.append("component", "/viaturas");
            let sendData = await fetch(backendURL + "/transito/src/delete.php", {
              method: "POST",
              body: formData
            })

            if (sendData.ok) {
              let data = await sendData.json();
              if (data.sucess) {
                modalContainer.classList.add('active');
                modalContainer.innerHTML = popUp(data.sucess);

                modalContainer.querySelector("#closeModalButt").onclick = () => {
                  closeModal();
                  viaturasFunction();
                }
              }
              else {
                console.log(data.error);
              }
            }
            else {
              console.error("Erro" + sendData.statusText);
            }

          } catch (error) {
            console.log("Erro " + error);
          }
        })
      })

      let addVeiculoButton = mainContainer.querySelector("#addVeiculoButton");
      addVeiculoButton.addEventListener("click", () => {
        BodyContainer.innerHTML = formVeiculo();
        var formVe = BodyContainer.querySelector("#formVeiculo");
        formVe.onsubmit = (e) => {
          e.preventDefault();
        }

        var sendVeiculo = BodyContainer.querySelector("#sendVeiculo");
        sendVeiculo.addEventListener("click", async () => {
          let bottomForm = BodyContainer.querySelector(".bottomForm");
          bottomForm.classList.add('active');
          bottomForm.classList.remove('error');
          bottomForm.classList.add('sucess');
          bottomForm.innerHTML = `<span>Aguerde...</span>`;
          try {
            let formData = new FormData(formVe);
            let sendData = await fetch(backendURL + "/transito/src/viaturas.php", {
              method: "POST",
              body: formData
            });
            if (sendData.ok) {
              let data = await sendData.json();
              bottomForm.classList.add('active');
              if (data.error) {
                bottomForm.classList.add('active');
                bottomForm.classList.add('error');
                bottomForm.innerHTML = data.error;
              } else if (data.cadastrar.error) {
                bottomForm.classList.add('active');
                bottomForm.classList.add('error');
                bottomForm.innerHTML = data.cadastrar.error;
              }
              else {
                bottomForm.classList.add('active');
                bottomForm.classList.replace('error', 'sucess') || bottomForm.classList.add('sucess');
                bottomForm.innerHTML = data.cadastrar.sucess;
              }
            }
            else {
              bottomForm.classList.add('active');
              bottomForm.classList.add('error');
              bottomForm.innerHTML = "Erro" + sendData.statusText + backendURL;
            }
          }
          catch (error) {
            bottomForm.classList.add('active');
            bottomForm.classList.add('error');
            bottomForm.innerHTML = "Erro" + error + backendURL;

          }
        })//
        let closeFormData = BodyContainer.querySelector("#closeFormData");
        closeFormData.addEventListener("click", () => { viaturasFunction() });
      })//

    }


    ////////////////////////////////Efetivos
    async function efetivos() {
      try {
        let getData = await fetch(backendURL + "/transito/api/api.php", { method: "GET" });
        if (getData.ok) {
          let data = await getData.json();
          let prop = data.efetivos;
          BodyContainer.innerHTML = Tabelaefetivos(prop);
        }
      } catch (error) {
        console.log("Erro!" + error);
      }


      /// Atualizar efetivos ///
      /// pegars todos os botoes editar///
      let updateEfetivos = BodyContainer.querySelectorAll("#updateEfetivos");
      updateEfetivos.forEach((button)=>{
        button.addEventListener("click", async ()=>{
          var idEfetivos = button.value;
          var pathEfetivos = "efetivos";
          try {
            let getData = await fetch(backendURL+ApiURL, {method:"GET"});
            if (getData.ok) {
              let data = await getData.json();
              data.efetivos.list.forEach((item)=>{
                if (item.id === idEfetivos) {
                  let body = {
                    data:item
                  };
                  BodyContainer.innerHTML = formEfetivos(body);
                }
              })
            }
          } catch (error) {
            console.error("Erro: " + error);
          }

          //preparando o formulario de envio 
          let updateFormEfetivoc = BodyContainer.querySelector("#updateFormEfetivo");
          let closeUpdateEfetivos = BodyContainer.querySelector("#closeUpdateEfetivos");
          let updataEfetivosButton = BodyContainer.querySelector("#updataEfetivosButton");

          updateFormEfetivoc.addEventListener("submit", (e)=>{ e.preventDefault(); });
          closeUpdateEfetivos.addEventListener("click", ( )=>{ efetivos( ); });

          ///Enviar os dados da atualizacao ao servidor///
          updataEfetivosButton.addEventListener("click", async ()=>{
            let bottomForm = BodyContainer.querySelector(".bottomForm");
            bottomForm.classList.add('active');
            bottomForm.classList.replace('error', 'sucess') || bottomForm.classList.add('sucess');
            bottomForm.innerHTML = `<span>Aguarde...</span>`;

            let efetiivsForm = new FormData(updateFormEfetivoc);
            efetiivsForm.append("id", idEfetivos);
            efetiivsForm.append("efetivos", pathEfetivos);

            try {
              let sendData = await fetch(backendURL+updateUrl,{
                method:"POST",
                body:efetiivsForm
              })

              if (sendData.ok) {
                let data = await sendData.json();
                bottomForm.classList.add('avtive');
                console.log(data);
                if (data.error) {
                  bottomForm.classList.add('active');
                  bottomForm.classList.replace('sucess', 'error') || bottomForm.classList.add('error');
                  bottomForm.innerHTML =  `<span>${ data.error }</span>`;
                } else if(data.update.error){
                  bottomForm.classList.add('active');
                  bottomForm.classList.replace('sucess', 'error') || bottomForm.classList.add('error');
                  bottomForm.innerHTML =  `<span>${ data.update.error }</span>`;
                } else{
                  bottomForm.classList.add('active');
                  bottomForm.classList.replace('error', 'sucess') || bottomForm.classList.add('sucess');
                  bottomForm.innerHTML =  `<span>${ data.update.sucess }</span>`;
                }
              }
            } catch (error) {
              bottomForm.classList.add('active');
              bottomForm.classList.replace('sucess', 'error') || bottomForm.classList.add('error');
              bottomForm.innerHTML = `<span>Erro: ${ error }</span>`;
            }

            console.log(data);
          })

        })
      })//end function Update 

      ////DeletarEfetivs ///
      var deleteEfetivos = mainContainer.querySelectorAll("#deleteEfetivos");
      deleteEfetivos.forEach((button) => {
        button.addEventListener("click", async () => {
          try {
            let formData = new FormData();

            formData.append("id", button.value);
            formData.append("component", "/efetivos");
            let sendData = await fetch(backendURL + "/transito/src/delete.php", {
              method: "POST",
              body: formData
            })

            if (sendData.ok) {
              let data = await sendData.json();

              if (data.sucess) {
                modalContainer.classList.add('active');
                modalContainer.innerHTML = popUp(data.sucess);
                let closeModalButt = modalContainer.querySelector("#closeModalButt");
                closeModalButt.addEventListener("click", () => {
                  efetivos();
                  closeModal();
                })

              }
              else {
                modalContainer.classList.add('active');
                mainContainer.innerHTML = popUp("Erro! tente novamente");

                let closeModalButt = modalContainer.querySelector("#closeModalButt");
                closeModalButt.addEventListener("click", () => {
                  efetivos();
                  closeModal();
                })
              }
            }
            else {
              console.log("Erro" + sendData.statusText);
            }
          } catch (error) {
            console.log("Erro " + error);
          }
        })
      })

      ////Cadastrar novo efetivo
      let addEfetivoButton = BodyContainer.querySelector("#addEfetivoButton");
      addEfetivoButton.addEventListener("click", () => {

        BodyContainer.innerHTML = formEfetivos(null);
        let closeFormEfetivos = BodyContainer.querySelector("#closeFormEfetivos");

        closeFormEfetivos.addEventListener("click", () => { efetivos(); });

        var form = BodyContainer.querySelector("#formEfetivos");
        form.addEventListener("submit", (e) => {
          e.preventDefault();
        })
        let sendDataButton = BodyContainer.querySelector("#sendDataButton");
        sendDataButton.addEventListener("click", async () => {

          let formData = new FormData(form);
          let bottomForm = BodyContainer.querySelector(".bottomForm");
          bottomForm.classList.add('active');
          bottomForm.classList.remove('error');
          bottomForm.classList.add('sucess');
          bottomForm.innerHTML = `<span>Aguerde...</span>`;
          try {
            let sendData = await fetch(backendURL + "/transito/src/efetivos.php", {
              method: "POST",
              body: formData
            });

            if (sendData.ok) {
              let data = await sendData.text();
              console.log(JSON.parse(data));
              let response = JSON.parse(data)
              if (response.error) {
                bottomForm.innerHTML = `<span>${response.error}</span>`;
                bottomForm.classList.add('active');
                bottomForm.classList.add('error');
              }
              else if (response.sucess.error) {
                bottomForm.innerHTML = `<span>${response.sucess.error}</span>`;
                bottomForm.classList.add('active');
                bottomForm.classList.add('error');
              }
              else {
                bottomForm.innerHTML = `<span>${response.sucess.sucess}</span>`;
                bottomForm.classList.add('active');
                bottomForm.classList.add('sucess');
              }

            }

          } catch (error) {

            console.log("Erro!" + error);
          }
        })//

      })//

    }

    //////////////////Infracoes/////
    async function infracoes() {

      try {
        let getData = await fetch(backendURL + "/transito/api/api.php", { method: "GET" });
        if (getData.ok) {
          let data = await getData.json();
          BodyContainer.innerHTML = TabelaInfracao(data.infracoes);
        }
        else {
          console.log("Erro" + getData.statusText);
        }
      } catch (error) {
        console.log("erro" + error);
      }

      var buttonDeleteInfracao = BodyContainer.querySelectorAll("#buttonDeleteInfracao");
      buttonDeleteInfracao.forEach((button) => {
        button.addEventListener("click", async () => {
          try {
            let formData = new FormData();
            formData.append("id", button.value);
            formData.append("component", "/infracoes");
            let sendData = await fetch(backendURL + "/transito/src/delete.php", {
              method: "POST",
              body: formData
            })

            if (sendData.ok) {
              let data = await sendData.json();
              if (data.sucess) {
                modalContainer.classList.add('active');
                modalContainer.innerHTML = popUp(data.sucess);
                modalContainer.querySelector("#closeModalButt").onclick = () => {
                  infracoes();
                  closeModal();
                }
              }
            }
            else {
              console.error("Erro!" + sendData.statusText);
            }
          } catch (error) {
            console.log("Erro! " + error);
          }
        })
      })

      let addInfracaoButton = BodyContainer.querySelector("#addInfracaoButton");
      addInfracaoButton.addEventListener("click", () => {
        BodyContainer.innerHTML = FormInfracao();
        var FormInf = BodyContainer.querySelector("#FormInfracao");
        FormInf.onsubmit = (e) => {
          e.preventDefault();
        }
        let sendformInfracao = BodyContainer.querySelector("#sendformInfracao");
        sendformInfracao.addEventListener("click", async () => {
          let bottomForm = BodyContainer.querySelector(".bottomForm");
          bottomForm.classList.add('active');
          bottomForm.classList.remove('error');
          bottomForm.classList.add('sucess');
          bottomForm.innerHTML = `<span>Aguerde...</span>`;
          try {
            let formData = new FormData(FormInf);
            let sendData = await fetch(backendURL + "/transito/src/infracoes.php", {
              method: "POST",
              body: formData
            })
            if (sendData.ok) {
              let data = await sendData.json();
              bottomForm.classList.add('active');
              bottomForm.classList.replace('error', 'sucess') || bottomForm.classList.add('sucess');
              bottomForm.innerHTML = data;

              if (data.error) {
                bottomForm.classList.add('active');
                bottomForm.classList.replace('sucess', 'error') || bottomForm.classList.add('error');
                bottomForm.innerHTML = `<span>${data.error}</span>`;
              }
              else if (data.cadastro.error) {
                bottomForm.classList.add('active');
                bottomForm.classList.replace('sucess', 'error') || bottomForm.classList.add('error');
                bottomForm.innerHTML = data.cadastro.error;
              }
              else {
                bottomForm.classList.add('active');
                bottomForm.classList.replace('error', 'sucess') || bottomForm.classList.add('sucess');
                bottomForm.innerHTML = data.cadastro.sucess;
              }

            }
            else {
              bottomForm.classList.add('active');
              bottomForm.classList.add('error');
              bottomForm.innerHTML = ("Erro " + sendData.statusText);
            }
          } catch (error) {
            bottomForm.classList.add('active');
            bottomForm.classList.add('error');
            bottomForm.innerHTML = "Erro" + error;
          }
        })
        let closeFormInfracao = BodyContainer.querySelector("#closeFormInfracao");
        closeFormInfracao.addEventListener("click", () => { infracoes() });
      })

    }


    // users page // 
    async function UsuariosPage() {

      try {
        let getData = await fetch(backendURL + "/transito/api/api.php", { method: "GET" });
        if (getData.ok) {
          let data = await getData.json();
          BodyContainer.innerHTML = Usuarios(data.users);
        }
      } catch (error) {
        console.log(error);
      }

      //Atualizar os dados do Usuario!
      let updateUserId = BodyContainer.querySelectorAll("#updateUserId");
      updateUserId.forEach((updataButton)=>{
        updataButton.onclick = async ()=>{
          let userID = updataButton.getAttribute("dataUpdate");
          try {
            let getData = await fetch(backendURL+ApiURL,{method:"GET"});
            let data = await getData.json();
            data.users.list.forEach((user)=>{
              if (user.id === userID) {
                console.log(user);
                let dadosUser = { data:user };
                BodyContainer.innerHTML = formUser(dadosUser);
              }
            })
          } catch (error) {
           console.error("Erro: " +  error);  
          }
          let sendformUser = BodyContainer.querySelector("#sendformUser");
          let closeFormUser = BodyContainer.querySelector("#closeFormUser");
          let formDataUserSend = BodyContainer.querySelector("#formDataUserSend");
          closeFormUser.addEventListener("click", ()=>{ UsuariosPage() });
          formDataUserSend.onsubmit = (e)=>{ e.preventDefault() };
          let updateUser = new FormData(formDataUserSend);
          updateUser.append("id", userID);
          updateUser.append("usuarios","usuarios");
          sendformUser.addEventListener("click", async ()=>{
            let bottomForm = BodyContainer.querySelector(".bottomForm");
            bottomForm.classList.add('active');
            bottomForm.classList.replace('error', 'sucess') || bottomForm.classList.add('sucess');
            try {
              let sendData = await fetch(backendURL+updateUrl,{
                method:"POST",
                body:updateUser
              });
              if (sendData.ok) {
                let data = await sendData.json();
                if (data.error) {
                  bottomForm.classList.add('active');
                  bottomForm.classList.replace('sucess', 'error') || bottomForm.classList.add('error');
                  bottomForm.innerHTML = `<span>${ data.error }</span>`;
                } else{
                  bottomForm.classList.add('active');
                  bottomForm.classList.replace('error', 'sucess') || bottomForm.classList.add('sucess');
                  bottomForm.innerHTML = `<span>${ data.sucess }</span>`;
                }
              }
              else{
                bottomForm.innerHTML = `<span>Erro: ${ sendData.statusText }</span>`;
              }
            } catch (error) {
              bottomForm.classList.add('active');
              bottomForm.classList.replace('sucess', 'error') || bottomForm.classList.add('error');
              bottomForm.innerHTML = error;
            }
          })
        }
      }) //end Update

      let deleteUserButton = BodyContainer.querySelectorAll("#deleteUserButton");
      deleteUserButton.forEach((button) => {
        button.addEventListener("click", async () => {
          let id = button.getAttribute("idUser");
          try {
            let formData = new FormData();
            formData.append("id", id);
            formData.append("component", "/usuarios");
            let sendData = await fetch(backendURL + "/transito/src/delete.php", {
              method: "POST",
              body: formData
            })

            if (sendData.ok) {
              let data = await sendData.json();
              if (data.sucess) {
                modalContainer.classList.add('active');
                modalContainer.style = "background-color:#fff";
                modalContainer.innerHTML = popUp(data.sucess);
                modalContainer.querySelector("#closeModalButt").onclick = () => {
                  UsuariosPage();
                  closeModal();
                }
              }
            }
            else {
              console.log("Erro " + sendData.statusText);
            }
          } catch (error) {
            console.log("Erro" + error);
          }
        })
      })

      let BackButton = BodyContainer.querySelector(".BackButton > button");
      let addNewUser = BodyContainer.querySelector("#addNewUser");

      ///aducionar novo usuario///
      addNewUser.addEventListener("click", () => {
        BodyContainer.innerHTML = formUser();
        let closeFormUser = BodyContainer.querySelector("#closeFormUser");
        closeFormUser.addEventListener("click", () => { UsuariosPage() });

        let formDataUserSend = BodyContainer.querySelector("#formDataUserSend");
        formDataUserSend.addEventListener("submit", (e) => {
          e.preventDefault();
        })
        let sendformUser = BodyContainer.querySelector("#sendformUser");

        sendformUser.addEventListener("click", async () => {
          let formData = new FormData(formDataUserSend);
          let bottomForm = BodyContainer.querySelector(".bottomForm");
            bottomForm.classList.add('active');
            bottomForm.classList.remove('error');
            bottomForm.classList.add('sucess');
            bottomForm.innerHTML = `<span>Aguerde...</span>`;
          let sendData = await fetch(backendURL + "/transito/src/users.php", {
            method: "POST",
            body: formData
          });
          if (sendData.ok) {
            let data = await sendData.json();
            if (data.error) {
              bottomForm.classList.add('error');
              bottomForm.classList.add('active');
              bottomForm.innerHTML = data.error;
            }
            else if (data.cadastro.error) {
              bottomForm.classList.add('error');
              bottomForm.classList.add('active');
              bottomForm.innerHTML = data.cadastro.error;
            }
            else {
              bottomForm.classList.add('active');
              bottomForm.classList.add('sucess') || bottomForm.classList.replace('error', 'sucess');
              bottomForm.innerHTML = data.cadastro.sucess;
            }
          }
          else {
            bottomForm.classList.add('active') && bottomForm.classList.replace('sucess', 'error')
            || bottomForm.classList.add('error');
          }
        })
      })

      BackButton.addEventListener("click", () => { homePage() });

      let buttonListCadeiras = BodyContainer.querySelectorAll("#buttonListCadeiras");
      buttonListCadeiras.forEach((button, index) => {
        let listCadeiras = BodyContainer.querySelectorAll(".listCadeiras");
        button.addEventListener("click", () => {
          // listCadeiras.forEach( myList=> myList.classList.remove('active') );
          listCadeiras[index].classList.toggle('active');
        })
      })


    }



    /////////////Configuracoes adicionais 
    let userSeetings = mainContainer.querySelectorAll(".userSeetings > li")
    userSeetings.forEach((list, index)=>{
      list.onclick = ()=>{
        switch (index) {
          case 0:
            alert(list.textContent);
            break;
          
          case 1:
            settings()
            break;

          default:
            logOut()
            break;
        }
      }
    })


    //////Sair Da pagina//////

    function logOut(){
      localStorage.removeItem("token");
      localStorage.removeItem("session_type");
      window.location.href = "./index.html";
    }

    function settings() {
      let permossion = sessionStorage.getItem("session_type");
      if (permossion === "admin") {
        BodyContainer.innerHTML = SystemDefinitions();
        BodyContainer.querySelector("#adminConfig").onclick = ()=>{
          adminFunctions();
        }
      } else{
        alert("você não tem permissão para acessar esta área!");
      }

      ////Cadastrar novo ADM
      function  adminFunctions() {
        BodyContainer.innerHTML = AdministradoresTable();
        let getFormButtonAdmin = BodyContainer.querySelector("#getFormButtonAdmin");
        
        getFormButtonAdmin.addEventListener("click", async ()=>{
          try {
            let getData = await fetch(backendURL+ApiURL,{method:"GET"});
            if (getData.ok) {
              let data = await getData.json();
              BodyContainer.innerHTML = NovoAdminForm(data.users);
            }
          } catch (error) {
            console.log("Error: "+ error);
          }
          let cancelar = BodyContainer.querySelector("#cancelar-button");
          cancelar.onclick = () =>{
            adminFunctions();
          }

          ////Enviar dados ADMIN
          let enviar = BodyContainer.querySelector("#enviar-button");
          enviar.addEventListener("click", async ()=>{
            let spanResponse = BodyContainer.querySelector("#spanResponse");
            spanResponse.textContent = "Carregando...";
            spanResponse.style.color = "green";
            let value = BodyContainer.querySelector("#role").value;
            let formData = new FormData();
            formData.append("userAdmin", value);
            formData.append("path", "/admin");

            try {
              let sendData = await fetch(backendURL+adminURL,{
                method:"POST",
                body:formData
              });

              if (sendData.ok) {
                let data = await sendData.json();
                if (data.error) {
                  spanResponse.textContent = data.error;
                  spanResponse.stle.color = "red";
                } else if(data.admin.error){
                  spanResponse.textContent = data.admin.error;
                  spanResponse.stle.color = "red";
                } else{
                  spanResponse.textContent = data.admin.sucess;
                  spanResponse.stle.color = "green";
                }
              }
            } catch (error) {
              spanResponse.textContent = error;
              spanResponse.style.color = "red";
            }
          })
        })////////////////////
      }

      BodyContainer.querySelector("#confiGuser").onclick = async ()=>{
        try {
         let getData = await fetch(backendURL+ApiURL,{method:"GET"});
         if (getData.ok) {
            let data = await getData.json();
            BodyContainer.innerHTML = userSpage(data.users); 
            let searchInput = BodyContainer.querySelector("#searchInput");
            var results = BodyContainer.querySelector("#user-list-content");
             
            searchInput.addEventListener("input", async (e)=>{
              results.innerHTML = `<li>Carregando...</li>`;
              let formData = new FormData();
              formData.append('search', e.target.value);
              let getData = await fetch(backendURL+ApiURL,{
                method:"POST",
                body:formData
              });
              if (getData.ok) {
                let data = await getData.json();
                if (data.search.dados) {
                  let pesquisa = data.search.dados;
        
                  results.innerHTML = `
                  <li>
                  <span>Usuario: ${ pesquisa.nomeCompleto } (${ pesquisa.nomeUsuario })</span>
                  <button class="delete-button" id="deleteButton" data-value="${ pesquisa.id}" >
                      Eliminar do Sistema
                  </button>
                  </li>
                  `;
                } else{
                  results.innerHTML = `<li>
                    <span>Nenum resultado...</span>
                  </li>`
                }
              }
            })


            let deleteButton = BodyContainer.querySelectorAll("#deleteButton");
            deleteButton.forEach(btn=>{
              btn.onclick = async ()=>{
                let id = btn.getAttribute("data-value");
                let component = "/usuarios";
                let form =  new FormData();
                form.append("id", id);
                form.append("component", component);
                let getData = await fetch(backendURL+deleteUrl,{
                  method:"POST",
                  body:form
                })
                if (getData.ok) {
                  let data = await getData.json();
                  if (data.sucess) {
                    results.innerHTML = `<li>
                    <span>${data.sucess}</span>
                    <button class="block-button" id="okButton">
                      Ok
                  </button>
                  </li>`;

                  let  okButton = BodyContainer.querySelector("#okButton");
                  okButton.onclick = ()=>{
                    settings();
                  }
                  } else{
                    results.innerHTML = `<li>
                    <span>${data.error}</span>
                  </li>`;
                  }
                }
              }
            })
            
         } else{
          alert("ERRO: " + getData.statusText);
         }
        } catch (error) {
          alert("ERRO: "+ error);
        }

    } //// End Seetings ///
    }

  }/////home

  function closeModal() {
    modalContainer.classList.remove('active');
    modalContainer.innerHTML = "";
    modalContainer.style = "";
  }

  homePage();


})///End Dom Content
