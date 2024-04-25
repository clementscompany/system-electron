function nelLog(user){

    return(`
    <form action="" class="formData" id="formData">
            <header class="headerLogin"><h2>Login <i class="bi bi-person-fill"></i></h2></header>
             <div class="inputBox boxNomeUser">
              <label for="">Selecione o Seu Nome de usuario <i class="bi bi-person-fill"></i></label>
                 <input type="text" name="username" placeholder="Digite o seu nome de usuario...">
             </div>

            <div class="inputBox boxPasswordUser">
                <label for="" id="minimizeButton">Senha <i class="bi bi-lock-fill"></i></label>
                <input type="password" id="passwordUser" name="senha"placeholder="Digite a sua senha...">
            </div>
            <div class="inputBox boxPasswordUser">
                <label for="" id="">Confirme a sua senha<i class="bi bi-lock-fill"></i></label>
                <input type="password" id="confiRmpasswordUser" name="confirm"placeholder="Confirme...">
            </div>

            <button class="LogBtn" id="btnLoginUser">Entrar</button>
            <button class="LogBtn cancelButton" id="btnCancel">Cancelar</button>
    </form>
    `);
}
export default nelLog;