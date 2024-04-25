function Usuarios(propsUser) {
  var CardContainer = null;

  if (propsUser.list) {
    propsUser.list.forEach((user) => {
      CardContainer += `
            <div class="professorList">
            <div class="div">
                <h4>${user.nomeCompleto}</h4>
                <button id="buttonListCadeiras"><i class="bi bi-menu-up"></i></button>
            </div>
            <ul class="listCadeiras">
                <li>
                    <span><b>Telefone</b> ${user.telefone} </span>
                    <div class="buttons">
                        <button id="updateUserId" dataUpdate="${user.id}">Alterar</button>
                    </div>
                </li>
                <li>
                    <span><b>Morada:</b> ${user.enderecoCompleto}</span>
                    <div class="buttons">
                        <button id="updateUserId" dataUpdate="${user.id}">Alterar</button>
                    </div>
                </li>
                <li>
                    <span><b>Endereço de e-mail:</b> ${user.email}</span>
                    <div class="buttons">
                        <button id="updateUserId" dataUpdate="${user.id}">Alterar</button>
                    </div>
                </li>
                <li>
                    <span><b>Nome de Usuário:</b> ${user.nomeUsuario}</span>
                    <div class="buttons">
                        <button id="updateUserId" dataUpdate="${user.id}">Alterar</button>
                    </div>
                </li>

                <li>
                    <span><b>Data de Nascimento:</b> ${user.dataNascimento}</span>
                    <div class="buttons">
                        <button id="updateUserId" dataUpdate="${user.id}">Alterar</button>
                    </div>
                </li>

                <li>
                    <span><b>Gênero:</b> ${user.genero}</span>
                    <div class="buttons">
                    </div>
                </li>
           
                <li class="addMore" tabindex="0" id="deleteUserButton" idUser="${user.id}">
                    Eliminar usuário <i class="bi bi-plus-square"></i>
                </li>
            </ul>
        </div>

            `;
    });
  } else {
    CardContainer = `
        
        <div class="professorList">
            <div class="div">
                <h4> Sem Registros...</h4>
             </div>
        </div>
        
        `;
  }

  return `
        <div class="BackButton">
        <button title="voltar a pagina inicial">
            Voltar
        </button>

        <button title="Cadastrar um novo usuário" id="addNewUser">
            Cadastrar Novo
        </button>
        </div>
        
        ${CardContainer}
    `;
}

export default Usuarios;
