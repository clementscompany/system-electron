function home(props){
    let myID = sessionStorage.getItem("token");
    let UserNAme = "";
    props.forEach(user => {
        if (user.id == myID) {
            UserNAme = user.nomeCompleto
        } else{
            UserNAme = "ADMIN";
        }
    });
   return(

    `<header class="headerMain">
     <div class="leftHeader">
         <div class="logo">
           <img src="./assets/img/sigla.png" alt="logoImage">
         </div>
         <h1>SIGIT</h1>
     </div>

     <div class="CenterHeader">
        <button><i class="bi bi-search"></i></button>
     </div>

     </header>
    
    <section class="listContainer">
        <ul>
            <li tabindex="0" class="toggleList"><i class="bi bi-house-door-fill"></i>Home</li>
            <li tabindex="0" class="toggleList"><i class="bi bi-person-circle"></i>Efetivos</li>
            <li tabindex="0" class="toggleList"><i class="bi bi-cone-striped"></i>Infrações</li>
            <li tabindex="0" class="toggleList"><i class="bi bi-person-vcard-fill"></i>Condutores</li>
            <li tabindex="0" class="toggleList"><i class="bi bi-car-front"></i>Viaturas</li>
            <li tabindex="0" class="toggleList"><i class="bi bi-people-fill"></i>USUÁRIOS</li>
        </ul>

        <ul class="userSeetings">
            <li tabindex="0"><i class="bi bi-person-fill"></i>${ UserNAme }</li>
            <li tabindex="0"><i class="bi bi-gear"></i>Configurações</li>
            <li tabindex="0"><i class="bi bi-power"></i>Terminar Sessão</li>
        </ul>
    </section>

    <section class="BodyContainer" id="bodyContainer">
      
    </section>

    <footer class="footer">
        <span>&copy; 2024 SIGIT | Todos os direitos reservados </span>
    </footer>
`
   );
}

export default home;
