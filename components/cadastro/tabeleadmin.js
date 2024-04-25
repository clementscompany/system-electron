function AdministradoresTable() {
    return (`
        <div>
            <h2>Lista de Administradores</h2>

            <button class="add-button-tabele" id="getFormButtonAdmin">
                Adicionar Novo Administrador
            </button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Admin 1</td>
                        <td>admin1@example.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Admin 2</td>
                        <td>admin2@example.com</td>
                    </tr>
                    <!-- Adicione mais linhas conforme necessário -->
                </tbody>
            </table>
        </div>
    `);
}

export default AdministradoresTable;
