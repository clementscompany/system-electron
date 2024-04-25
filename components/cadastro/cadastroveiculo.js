function TabeleVeiculos(parm) {
  let CardData = "";
  if (parm.list) {
    let list = parm.list;
    list.forEach((data) => {
      CardData += `
                <tr>
                <td>${data.marca}</td>
                <td>${data.modelo}</td>
                <td>${data.ano}</td>
                <td>${data.cor}</td>
                <td>${data.placa}</td>
                <td class="optionTabele">
                <button id="deleteVeivuloButton" value="${data.id}">
                    <i class="bi bi-trash3-fill"></i>
                </button>
                <button id="editVeiculoButtonn" value="${data.id}">
                    <i class="bi bi-pencil-square"></i>
                </button>
                </td>
                </tr>
            `;
    });
  } else {
    CardData += `
                <tr>
                    <td>${parm.empty}</td>
                </tr>
            `;
  }

  return `
<section class="myTabele">

    <div class="topListCadastros">
        <h2>Lista de Veículos Cadastrados</h2>
        <button id="addVeiculoButton">Cadastrar Novo</button>
    </div>
    <table>
        <thead>
            <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Cor</th>
            <th>Placa</th>
            <th>..</th>
            </tr>
        </thead>
        <tbody>
            ${CardData}
        </tbody>
    </table>

</section>

        `;
}

export default TabeleVeiculos;
