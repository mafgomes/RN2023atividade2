# Atividade 2 - React Native I
Cláudio Aparecido de Oliveira Matos • 26 de jul. 7 pontos

## Enunciado
Cada aluno deverá desenvolver um aplicativo React Native que faz consumo de API’s do Github.

O APP deverá conter três telas:
Login
Home
Details

Para as telas de Login e Home, poderão utilizar o exemplo feito em aula.
Quando o usuário clicar no botão para fazer Login, o APP deverá levar o usuário até a tela Home.
Na tela Home, realizar uma chamada na API do Github (https://api.github.com/user) e apresentar a foto, nome e bio. Também deverá realizar uma chamada na API do Github (https://api.github.com//users/matos-claudio/repos).
Com as informações disponíveis, mostrar  o nome do repositório e a linguagem em um Flatlist.
Ao clicar na linha escolhida, deverá abrir a tela Details, passando o parâmetro followers_url, que deverá ser capturado na listagem dos repositórios. Utilize essa URL para fazer a chamada na API que lista os seguidores (o followers_url será a URL a ser utilizada no fetch da tela Details).
Com as informações disponíveis após a listagem dos seguidores, mostrar uma lista com a foto e o nome do seguidor em um Flatlist.

Documentação disponível em: https://docs.github.com/pt/rest/guides/getting-started-with-the-rest-api?apiVersion=2022-11-28

Observação: Lembrar de gerar o token de acesso no Github.

A entrega deverá ser feita através do link do trabalho no Github.

## Data de entrega
05 de agosto.
