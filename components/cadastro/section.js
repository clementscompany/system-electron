
function sectionCard(propsHome){
    var CardList = "";
    if(propsHome.recentes.list){

    var listRecentes = propsHome.recentes;
    listRecentes.list.forEach(element => {
        CardList += `
        <li>${element.nomeCompleto }</li>
        `;
    });

    }
    else{
        CardList = `<li>${propsHome.recentes.empty}</li>`;
    }

    let total = propsHome.totalRegistros;
    let contablizados = total.counts

    return(`
    
    <div class="sectionCards">
    <div class="cardsCount">
        <h1 class="number">${ contablizados.condutores }</h1>
        <div class="estatistic">
            <h3>Condutores</h3>
            <i class="bi bi-person-fill"></i>
        </div>
    </div>

    <div class="cardsCount">
        <h1 class="number">${ contablizados.viaturas }</h1>
        <div class="estatistic">
            <h3>Veiculos</h3>
            <i class="bi bi-car-front-fill"></i>
        </div>
    </div>

    <div class="cardsCount">
        <h1 class="number">${ contablizados.infracoes }</h1>
        <div class="estatistic">
            <h3>Infracoes</h3>
            <i class="bi bi-cone-striped"></i>
        </div>
    </div>

    <div class="cardsCount">
        <h1 class="number">${ contablizados.efetivos }</h1>
        <div class="estatistic">
            <h3>Efetivos</h3>
            <i class="bi bi-person-fill"></i>
        </div>
    </div>

    <div class="cardsCount">
        <h1 class="number">${ contablizados.usuarios }</h1>
        <div class="estatistic">
            <h3>Usuarios do Sistema</h3>
            <i class="bi bi-people-fill"></i>
        </div>
    </div>

    <div class="cardsCount">
        <h1 class="number">0</h1>
        <div class="estatistic">
            <h3>Multas Vencidas</h3>
            <i class="bi bi-credit-card-2-back"></i>
        </div>
    </div>
</div>

<section class="recents">
   <h3>Cadastros receentes</h3>
   <ul>${CardList}</ul>
</section>

    
    
`);
}

export default sectionCard;