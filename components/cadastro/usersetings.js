function userSpage(props){
    let container = "";
    if(props.list != null){
        props.list.forEach(list => {
            container += `
            <li>
            <span>Usuario: ${ list.nomeCompleto } (${ list.nomeUsuario })</span>
            <button class="delete-button" id="deleteButton" data-value="${list.id}" >
                Eliminar do Sistema
            </button>
            </li>
            `;
        });
    } else{
        container = `
        <li>
            <span>Sem Registros!</span>
        </li>
        `;
    }
    return (`
    
    <div class="user-list-container">
        <input type="text" placeholder="Pesquisar usuários..." class="search-input" id="searchInput">
        <ul class="user-list" id="user-list-content">
            ${ container }
        </ul>
    </div>
    
    `);
}

export  default userSpage;
