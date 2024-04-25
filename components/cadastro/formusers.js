function formUser(props) {
    let container = [];
    if (props != null) {
        let user = props.data;
        container = `
        <div class="top">
           <h2>Atualizar dados do usuario</h2>
        </div>
    <form method="POST" class="formcondutor" id="formDataUserSend">

        <div class="inputBox">
            <label for="nome">Nome completo:</label>
            <input type="text" name="nomeCompleto" value="${user.nomeCompleto}"  required>
        </div>

        <div class="inputBox">
            <label for="email">Endereço de e-mail:</label>
            <input type="text" name="email" value="${user.email}" required>
        </div>

        <div class="inputBox">
            <label for="idade">Data de nascimento:</label>
            <input type="date"  name="dataNascimento"  value="${user.dataNascimento}" required>
        </div>

        <div class="inputBox">
            <label for="genero">Gênero:</label>
            <select name="genero" id="genero" value="${user.genero}" >
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
            </select>
        </div>

        <div class="inputBox">
            <label for="telefone">Telefone:</label>
            <input type="text" id="telefone" name="telefone" value="${user.telefone}" required>
        </div>

        <div class="inputBox">
            <label for="enderecoCompleto">Endereço:</label>
            <input type="text" name="enderecoCompleto" value="${user.enderecoCompleto}" required>
        </div>

        <div class="inputBox">
            <label for="nomedeUsuario">Nome de Usuário:</label>
            <input type="text" name="nomedeUsuario" value="${user.nomeUsuario}" required>
        </div>

        <div class="inputBox">
            <button type="submit" id="sendformUser">Atualizar</button>
            <button type="reset" id="closeFormUser">Fechar</button>
        </div>

    </form>

    <div class="bottomForm">
        
    </div>`;
    } else {
        container = `
        <div class="top">
           <h2>Cadastrar Novo Usuário</h2>
        </div>
    <form method="POST" class="formcondutor" id="formDataUserSend">

        <div class="inputBox">
            <label for="nome">Nome completo:</label>
            <input type="text" id="dataInfracao" name="nomeCompleto" placeholder="Nome completo..." required>
        </div>

        <div class="inputBox">
            <label for="email">Endereço de e-mail:</label>
            <input type="text" name="email" placeholder="Endereço de e-mail..." required>
        </div>

        <div class="inputBox">
            <label for="idade">Data de nascimento:</label>
            <input type="date"  name="dataNascimento" required>
        </div>

        <div class="inputBox">
            <label for="genero">Gênero:</label>
            <select name="genero" id="genero">
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
            </select>
        </div>

        <div class="inputBox">
            <label for="telefone">Telefone:</label>
            <input type="text" id="telefone" name="telefone" placeholder="Digite o número..." required>
        </div>

        <div class="inputBox">
            <label for="enderecoCompleto">Endereço:</label>
            <input type="text" id="enderecoCompleto" name="enderecoCompleto" placeholder="Morada..." required>
        </div>

        <div class="inputBox">
            <label for="nomedeUsuario">Nome de Usuário:</label>
            <input type="text" id="nomedeUsuario" name="nomedeUsuario" placeholder="Nome de usuário..." required>
        </div>

        <div class="inputBox">
            <button type="submit" id="sendformUser">Cadastrar</button>
            <button type="reset" id="closeFormUser">Fechar</button>
        </div>

    </form>

    <div class="bottomForm">
        
    </div>`;
    }

    return (`${container}`);
}

export default formUser;