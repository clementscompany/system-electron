function formEfetivos(props) {
  let container = "";

  if (props != null) {
    let item = props.data;
    container = `
    
        <div class="top">
            <h2>Atualizar Dados do efetivo</h2>
        </div>
    
        <form method="POST" class="formcondutor" id="updateFormEfetivo">
    
            <div class="inputBox">
                <label for="nome">Nome Completo:</label>
                <input type="text" id="nome" name="nomeCompleto" value="${item.nomeCompleto}" required>
            </div>
    
            <div class="inputBox">
                <label for="sobrenome">NIP:</label>
                <input type="text" id="sobrenome" name="nip" value="${item.nip}" required>
            </div>
    
            <div class="inputBox">
                <label for="idade">Endereço:</label>
                <input type="text" id="idade" name="endereco"  value="${item.endereco}" required>
            </div>
    
            <div class="inputBox">
                <label for="endereco">Unidade:</label>
                <select name="unidade" id="unidade" value="${item.unidade}">
                    <option value="Benguela">Benguela</option>
                    <option value="Baia farta">Baia farta</option>
                </select>
            </div>
    
            <div class="inputBox">
                <label for="numero">Número de Tel:</label>
                <input type="text" id="numero" name="telefone" value="${item.telefone}" required>
            </div>
    
            <div class="inputBox">
                <button type="submit" id="updataEfetivosButton">Cadastrar</button>
                <button type="reset" id="closeUpdateEfetivos">Fechar</button>
            </div>
    
        </form>
        <div class="bottomForm">
          
        </div>
            
        `;
  } else {
    container = `
    
        <div class="top">
            <h2>Cadastrar novo Efetivo</h2>
        </div>
    
        <form method="POST" class="formcondutor" id="formEfetivos">
    
            <div class="inputBox">
                <label for="nome">Nome Completo:</label>
                <input type="text" id="nome" name="nomeCompleto" placeholder="Digite o nome..." required>
            </div>
    
            <div class="inputBox">
                <label for="sobrenome">NIP:</label>
                <input type="text" id="sobrenome" name="nip" placeholder="Digite o nip..." required>
            </div>
    
            <div class="inputBox">
                <label for="idade">Endereço:</label>
                <input type="text" id="idade" name="endereco"  placeholder="Digite o endereco..." required>
            </div>
    
            <div class="inputBox">
                <label for="endereco">Unidade:</label>
                <select name="unidade" id="unidade">
                    <option value="Benguela">Benguela</option>
                    <option value="Baia farta">Baia farta</option>
                </select>
            </div>
    
            <div class="inputBox">
                <label for="numero">Número de Tel:</label>
                <input type="text" id="numero" name="telefone" placeholder="Digite o número..." required>
            </div>
    
            <div class="inputBox">
                <button type="submit" id="sendDataButton">Cadastrar</button>
                <button type="reset" id="closeFormEfetivos">Fechar</button>
            </div>
    
        </form>
        <div class="bottomForm">
          
        </div>
            
        `;
  }
  return `${container}`;
}

export default formEfetivos;
