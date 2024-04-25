function NovoAdminForm(props) {

    let option = "";
    props.list.forEach(user => {
        option += `
        <option value="${ user.id }">${ user.nomeCompleto }</option>
        `;
    });

    return (`
        <div class="dashboard-form">
            <h2>Cadastrar Novo Administrador</h2>
            <span id="spanResponse"></span>
            <br>
            <br>

            <div class="form-group">
                <label for="role">Selecionar o Usuario:</label>
                <select id="role" name="useradmin">
                    ${ option }
                </select>
            </div>

            <button class="enviar-button" id="enviar-button">Cadastrar</button>
            <button class="cancelar-button" id="cancelar-button">Cancelar</button>
        </div>
    `);
}

export default NovoAdminForm;
