function Tabelaefetivos(prop){

    var CardDiv = ""; 
    if (prop.list) {
    for (let i = 0; i < prop.list.length; i++) {

        let data = prop.list[i];
        CardDiv += `
        <tr>
        <td>${data.nomeCompleto}</td>
        <td>${data.nip}</td>
        <td>${data.endereco}</td>
        <td>${data.unidade}</td>
        <td>${data.telefone}</td> 
        <td class="optionTable">
            <button value="${data.id}" id="deleteEfetivos"><i class="bi bi-trash3-fill" ></i></button>
            <button value="${data.id}" id="updateEfetivos"><i class="bi bi-pencil-square"></i></button>
        </td>
        </tr>
        `;
    }
    }
    else{
        CardDiv = `
        <tr>
         <td>${ prop.empty }</td>
        </tr>
        `;
    }


    
    return (`
    
    <section class="myTable">

        <div class="topListCadastros">
            <h2>Lista de Efetivos Cadastrados</h2>
            <button id="addEfetivoButton">Cadastrar Novo</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Nome Completo</th>
                    <th>NIP</th>
                    <th>Endereço</th>
                    <th>Unidade</th>
                    <th>Telefone</th>
                    <th>..</th>
                </tr>
            </thead>
            <tbody>
                 ${CardDiv}
                <!-- Adicione mais linhas conforme necessário para cada condutor cadastrado -->
            </tbody>
        </table>

    </section>  

    
    `);
}

export default  Tabelaefetivos;

