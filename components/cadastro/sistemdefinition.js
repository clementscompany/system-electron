function SystemDefinitions() {
    return (`
      <ul class="system-definitions">
        <li><strong>Usuário:</strong> 
            Qualquer pessoa ou entidade que interage com o sistema para realizar tarefas específicas ou acessar informações. 
            <button class="config-button" id="confiGuser">Configurar</button>
        </li>

        <li><strong>Administrador: </strong>
            Um tipo de usuário com privilégios especiais dentro do sistema, geralmente responsável por configurar, gerenciar e supervisionar o funcionamento do sistema. 
            <button class="config-button" id="adminConfig">Configurar</button>         
         </li>

        <li><strong>Dashboard:</strong> 
            Uma interface de usuário que apresenta informações importantes e métricas relevantes de forma resumida e visualmente compreensível. 
        </li>

        <li><strong>Recursos:</strong> 
            Conteúdos, ferramentas ou funcionalidades disponíveis no sistema que os usuários podem acessar e utilizar para atingir seus objetivos.
        </li>

        <li><strong>Autorização:</strong> 
            O processo de conceder permissões específicas a usuários ou grupos de usuários para acessar recursos ou realizar ações específicas dentro do sistema. 
        </li>

        <li><strong>API (Interface de Programação de Aplicativos):</strong>
             Um conjunto de regras e protocolos que permite que diferentes sistemas de software se comuniquem entre si e compartilhem dados e funcionalidades.
        </li>

        <li><strong>Sessão:</strong> 
            Um período de tempo durante o qual um usuário interage ativamente com o sistema após autenticar-se, geralmente mantendo informações de contexto e estado durante essa interação.
        </li>

        <li><strong>Log:</strong> 
            Um registro de eventos, atividades ou operações realizadas no sistema, geralmente utilizado para fins de auditoria, solução de problemas e monitoramento de segurança.
        </li>
      </ul>
    `);
  }
  
  export default SystemDefinitions;
  