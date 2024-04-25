function formCondutor(parm) {
  let form = "";
  console.log(parm);
  if (parm != null) {
    let data = parm.update;

    form = `
        <div class="top updateForm">
            <h2>Actualicar dados do Condutor</h2>
        </div>
        <form method="POST" class="formcondutor updateForm" id="formUpdateCond">
    
            <div class="inputBox">
                <label for="nome">Nome Completo:</label>

                <input type="text"
                    name="nomeCompleto" 
                    placeholder="Digite o nome..." 
                    value="${data.nomeCompleto}"
                required>
            </div>
    
            <div class="inputBox">
                <label for="sobrenome">Numero de contribuinte:</label>
                <input type="text"
                name="contribuinte"
                placeholder="Numero de contribuinte..."
                value="${data.contribuinte}"
                required>
            </div>
    
            <div class="inputBox">
                <label for="idade">Idade:</label>
                <input type="number"
                name="idade" min="18"
                max="120"
                placeholder="Digite a idade..."
                value="${data.idade}"
                required>
            </div>
    
            <div class="inputBox">
                <label for="endereco">Endereço:</label>
                <input type="text"
                name="endereco"
                placeholder="Digite o endereço..."
                value="${data.endereco}"
                required>
            </div>
    
            <div class="inputBox">
                <label for="numero">Número de telefone:</label>
                <input type="text"
                name="numero"
                placeholder="Digite o número..."
                value="${data.numero}"
                required>
            </div>

            
            
            <div class="inputBox">
                <button type="submit" id="udateformCondutor">Atualizar os dados</button>
                <button type="reset" id="closeUpdateFormCondutor">Fechar</button>
            </div>
            
        </form>
        <br>
        <div class="bottomForm updateForm">
            
        </div>`;
  } else {
    form = `
    <div class="top">
        <h2>Cadastrar novo condutor</h2>
    </div>
    <form method="POST" class="formcondutor" id="formcondutor">

        <div class="inputBox">
            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" name="nomeCompleto" placeholder="Digite o nome..." required>
        </div>

        <div class="inputBox">
            <label for="sobrenome">Numero de contribuinte:</label>
            <input type="text" id="sobrenome" name="contribuinte" placeholder="Numero de contribuinte..." required>
        </div>

        <div class="inputBox">
            <label for="idade">Idade:</label>
            <input type="number" id="idade" name="idade" min="18" max="120" placeholder="Digite a idade..." required>
        </div>

        <div class="inputBox">
            <label for="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" placeholder="Digite o endereço..." required>
        </div>

        <div class="inputBox">
            <label for="numero">Número de telefone:</label>
            <input type="text" id="numero" name="numero" placeholder="Digite o número..." required>
        </div>

        <div class="inputBox">
            <button type="submit" id="sendformCondutor">Cadastrar Condutor</button>
            <button type="reset" id="closeFormCondutor">Fechar</button>
        </div>

    </form>

    <div class="bottomForm">
        
    </div>`;
  }

  return `${form}`;
}

export default formCondutor;
