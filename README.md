# Tasks

Tasks é uma aplicação de 'Quadro de Tarefas' desenvolvida com React.JS e Firebase, com as funcionalidades de: Criar projeto, Selecionar projeto, Adicionar novas tarefas no projeto selecionado.

## Preview Desktop

![tasks-maria-1](https://user-images.githubusercontent.com/66969881/120222279-998bd500-c237-11eb-8ca3-afe57b5e38de.png)

Após clicar em um projeto já existente, aparece as tarefas relacionadas a ele.
![tasks-maria-2](https://user-images.githubusercontent.com/66969881/120222379-c2ac6580-c237-11eb-9315-a2f54f6bed2d.png)


## Getting Started 

Este projeto foi iniciado com [Create React App](https://github.com/facebook/create-react-app).

### Clone repository
> git clone https://github.com/mariarubinger/tasks-maria 

> cd tasks-maria

### Setup
> yarn install

> yarn start

### Configure Firebase
Este aplicativo usa serviços do Firebase.

1º) Acessar o site https://console.firebase.google.com/ para realizar o login e em seguida, 'adicionar projeto'.

2º) Ir em Authentication e alterar o status de Anônimo para Ativada.

3º) A configuração necessária para se conectar ao Firebase é definida no arquivo .env.local na raiz deste repositório. Nele devem ser adicionados o API_KEY, AUTH_DOMAIN e PROJECT_ID. Esses valores você encontra em Configurações do projeto > Seus aplicativos > Configurações do SDK > Configurações.

4º) Ir em 'Firestore Database' e clique em  'Iniciar coleção' para criar uma coleção dentro do projeto. Nesse projeto temos duas coleções, a coleção 'project' e a 'task'. Mais detalhes você encontra no arquivo firestore.js que está na pasta services.

