
![Logo](assets/logotipo.png)


# Meus Interesses - LAB365

O projeto consiste em apresentar uma ferramenta de anotações de interesses e hobbies, que possam ser consultadas a qualquer momento. A ferramenta apresenta um layout de fácil compreensão e interação.

Em adesão à lista de interesses, foi incluída uma janela com exibição dinâmica das últimas notícias, utilizando como fonte a base API de notícias do IBGE (`http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release`).


## Demonstração

Este é o layout do projeto, com algumas demonstrações de interesses já marcados:

![#imagem](<assets/images/Apresentação da página.png>)

## Funcionalidades

Caixa de texto com botão adicionar (também é possível adicionar itens pressionando a tecla 'ENTER')
![#imagem adicionar](<assets/images/caixa de texto.png>)


Possibilidade de marcar e desmarcar os itens, caso queira utilizar como lista de tarefas e marcar tarefas já realizadas.
Também foi incluída uma opção de deletar itens individualmente.
![#imagem item marcado](<assets/images/texto marcado.png>)

![#gif marcar e desmarcar](<assets/images/marcar e desmarcar.gif>)

Possibilidade de limpar toda a lista, caso queira iniciar uma nova Lista de interesses
Também foram incluídos dois contadores, onde um apresenta o total de itens da lista e o outro apresenta o total de itens marcados na lista.
![#gif Limpar Lista](<assets/images/Limpar Lista.gif>)

A lista de interesses fica armazenada no Local Storage do Navegador, havendo a possibilidade de consulta à lista mesmo que precise revisitar a página.

![#imagem Local Storage](<assets/images/armazenamento no LocalStorage.png>)

É apresentada uma janela com uma notícia buscada em fonte externa, do sistema de API do IBGE



## Rodando os testes

Para rodar os testes, você pode acessar diretamente pelo link: `https://diegocmps.github.io/futuroDev/modulo_02/Mini-Projeto/template-mini-projeto/`

**

Também é possível realizar os testes realizando o download do repositório do projeto no Gitub (`https://github.com/diegocmps/futuroDev/tree/master/modulo_02/Mini-Projeto/template-mini-projeto`)

Após baixar o conteúdo do repositório, em um navegador Web digite: `http://127.0.0.1:5500/modulo_02/Mini-Projeto/template-mini-projeto/index.html`
## Melhorias realizadas

O projeto inicial consistia em adicionar itens de uma lista de interesses de forma que persistissem na página. Junto com um botão de limpar lista de interesses e uma janela com apresentação de notícia do IBGE.

Foram incluídas nesta versão:

- Opção para adicionar item pressionando Enter;
- Opção de excluir itens individualmente;
- Opção de marcar/desmarcar itens;
- Contador de total de itens na lista;
- Contador de total de itens marcados na lista;

## Melhorias Futuras

-Exibição de um carrossel de notícias do IBGE, apresentando mais de uma notícia durante a navegação na página;
-Criação de um perfil de usuário;
-Possibilidade de salvar a lista no perfil do usuário;
-Possibilidade de criar novas listas, sem excluir as existentes;
-Acesso dinâmico às listas de interesses;


## Stack utilizada

**Front-end:** ![CSS3](assets/images/icons8-css-48.png) ![HTML5](assets/images/icons8-html-48.png) ![JavaScript](assets/images/icons8-javascript-48.png)




## Considerações finais e agradecimentos

Esse projeto foi realizado durante o Módulo2 do curso Floripa Mais Tec - FuturoDev, do LAB365, projeto do SENAI SC com a Prefeitura de Florianópolis.

Neste momento do módulo, foram apresentadas funcionalidades das linguagens HTML, CSS e Javascript. Ao concluir este mini-projeto, estamos nos dirigindo para a segunda parte do módulo, onde será apresentado o React, ferramenta para otimização dos conteúdos aprendidos durante o módulo.

Agradeço à toda a equipe do LAB365 pela oportunidade de aprendizado do conteúdo, em especial aos professores Nicholas e Yan, pela condução das aulas e aos Professores George e Douglas, pelo apoio nos grupos de Discord.

Também agradeço ao apoio dos colegas das turmas Futuro DEV Nature e Trip, pelas interações diárias e contribuições no entendimento dos conteúdos.
