function formVeiculo(props) {
  var conteiner = null;
  if (props != null) {
    let item = props.data;
    conteiner = `
        <div class="top">
          <h2>Atualizar dados do veículo</h2>
        </div>
        <form method="POST" class="formveiculo" id="formUpdatev">
      
            <div class="inputBox">
                <label for="marca">Marca:</label>
                <input type="text" id="marca" name="marca" value="${item.marca}" required>
            </div>
    
            <div class="inputBox">
                <label for="modelo">Modelo:</label>
                <input type="text" id="modelo" name="modelo" value="${item.modelo}" required>
            </div>
    
            <div class="inputBox">
                <label for="ano">Ano:</label>
                <input type="number" id="ano" name="ano"  value="${item.ano}" required>
            </div>
    
            <div class="inputBox">
                <label for="cor">Cor:</label>
                <input type="text" id="cor" name="cor" value="${item.cor}" required>
            </div>
    
            <div class="inputBox">
                <label for="placa">Placa:</label>
                <input type="text" id="placa" name="placa" value="${item.placa}" required>
            </div>
    
            <div class="inputBox">
                <button type="submit" id="updateVeiculoButton">Atualizar</button>
                <button type="reset" id="closeUpdateFormVeiculo">Fechar</button>
            </div>
            <div class="bottomForm">
            
            </div>
            
        </form>
        
        `;
  } else {
    conteiner = `
        <div class="top">
          <h2>Cadastrar novo veículo</h2>
        </div>
        <form method="POST" class="formveiculo" id="formVeiculo">
      
            <div class="inputBox">
                <label for="marca">Marca:</label>
                <input type="text" id="marca" name="marca" placeholder="Digite a marca..." required>
            </div>
    
            <div class="inputBox">
                <label for="modelo">Modelo:</label>
                <input type="text" id="modelo" name="modelo" placeholder="Digite o modelo..." required>
            </div>
    
            <div class="inputBox">
                <label for="ano">Ano:</label>
                <input type="number" id="ano" name="ano" min="1900" max="2099" placeholder="ano/..." required>
            </div>
    
            <div class="inputBox">
                <label for="cor">Cor:</label>
                <input type="text" id="cor" name="cor" placeholder="Cor do veiculo..." required>
            </div>
    
            <div class="inputBox">
                <label for="placa">Placa:</label>
                <input type="text" id="placa" name="placa" placeholder="Numero da placa..." required>
            </div>
    
            <div class="inputBox">
                <button type="submit" id="sendVeiculo">Cadastrar Veículo</button>
                <button type="reset" id="closeFormData">Fechar</button>
            </div>
            <div class="bottomForm">
            
            </div>
            
        </form>
        
        `;
  }

  return ` ${conteiner}`;
}

export default formVeiculo;
