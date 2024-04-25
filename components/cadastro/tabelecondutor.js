function tabeleCondutor(parm){

    var CardContainer = "";
    if (parm.list) {
        parm.list.forEach(data => {
            
            CardContainer += `
                <tr>
                <td>${ data.nomeCompleto }</td>
                <td>${ data.contribuinte }</td>
                <td>${ data.idade }</td>
                <td>${ data.endereco }</td>
                <td>${ data.numero }</td>
                <td class="optionTable">
                <button value="${data.id}" id="deleteButtonCond">
                    <i class="bi bi-trash3-fill"></i>
                </button>            
                    <button value="${ data.id }" id="buttonCondutor" >
                        <i class="bi bi-pencil-square"></i>
                    </button>
                </td>
                </tr>
            `;
        });
    }
    else{
        CardContainer = `
            <tr>
                <td>${ parm.empty }</td>
            </tr>
        `;
    }
    return (`
    <section class="myTable">
        <div class="topListCadastros">
            <h2>Lista de Condutores Cadastrados</h2>
            <button id="addCondutorButton">Cadastrar Novo</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Nome Completo </th>
                    <th>Contribuinte</th>
                    <th>Idade</th>
                    <th>Endereço</th>
                    <th>Número de Telefone</th>
                    <th>..</th>
                </tr>
            </thead>
            <tbody>
                ${ CardContainer }
            </tbody>
        </table>
    </section>
    `);
}
export default tabeleCondutor;
