function FormInfracao(){
    return (`
    <div class="top">
        <h2>Cadastro de Infração de Trânsito</h2>
    </div>
    <form method="POST" class="formcondutor" id="FormInfracao">

        <div class="inputBox">
            <label for="nome">Data da Infração:</label>
            <input type="date" id="dataInfracao" name="dataInfracao" required>
        </div>

        <div class="inputBox">
            <label for="sobrenome">Local da Infração:</label>
            <input type="text" name="local" placeholder="Local da Infração..." required>
        </div>

        <div class="inputBox">
            <label for="idade">Placa do Veículo:</label>
            <input type="text"  name="placa" placeholder="Digite a Placa do Veículo..." required>
        </div>

        <div class="inputBox">
            <label for="endereco">Tipo do Veículo:</label>
            <select name="unidade" id="unidade">
                <option value="Carro">Carro</option>
                <option value="Moto">Moto</option>
                <option value="Caminhão">Caminhão</option>
                <option value="Ônibus">Ônibus</option>
            </select>
        </div>

        <div class="inputBox">
            <label for="numero">Observações:</label>
            <input type="text" id="numero" name="obs" placeholder="Digite o número..." required>
        </div>

        <div class="inputBox">
            <button type="submit" id="sendformInfracao">Cadastrar</button>
            <button type="reset" id="closeFormInfracao">Fechar</button>
        </div>

    </form>

    <div class="bottomForm">
        
    </div>
    
    `);
}

export default FormInfracao;
