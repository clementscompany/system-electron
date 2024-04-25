function TabelaInfracao(parm){

    let CardTabele = "";
    if (parm.list) {
        parm.list.forEach(data => {
            CardTabele +=`
            <tr>
                <td>Ford Focus ABC-1234</td>
                <td>${ data.dataInfracao }</td>
                <td>${ data.local }</td>
                <td>${ data.placa }</td>
                <td>${ data.obs }</td>
                <td class="optionTable">
                    <button value="${ data.id }" id="buttonDeleteInfracao">
                        <i class="bi bi-trash3-fill"></i>
                    </button>
                </td>
            </tr>
            `
        });
    }
    else{
        CardTabele =`
        <tr>
            <td>${ parm.empty }</td>
        </tr>
            `
    }

    return (`
    
    <section class="myTable">

        <div class="topListCadastros">
            <h2>Lista de Infrações Registradas</h2>
            <button id="addInfracaoButton">Registrar Nova Infração</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Veículo</th>
                    <th>Data</th>
                    <th>Local</th>
                    <th>Tipo</th>
                    <th>Descrição</th>
                    <th>..</th>
                </tr>
            </thead>
            <tbody>
                ${ CardTabele }
            </tbody>
        </table>

    </section>

    
    `);
}
export default TabelaInfracao;
