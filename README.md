Exercício proposto na aula de javascript da Alpha EdTech com o tema de "Introdução a arrays, comando for-of e querySelectorAll"


Descrição do exercício:

Vamos fazer uma página para registrar receitas culinárias.

Para simplificar, a página não terá salvamento automático (ou seja, não usaremos Local Storage)

Ao abrir, a página estará assim:

![image](https://github.com/Raissa-Reis-Lopes/recipe-book/assets/105091977/fea5e68f-83e7-43c4-9745-b4100b1b74ab)

Ao clicar no “+”, é inserido (dentro da <div> indicada) um card com os dizeres “Sem Título” (ele representa uma nova receita, cursor pointer quando passa o mouse):

![image](https://github.com/Raissa-Reis-Lopes/recipe-book/assets/105091977/02066f1f-eed6-48fe-b6b1-ea2f531f755f)

Ao clicar nesse card, é ativado o modo de “edição da receita”, onde o card muda de estilização para dar a impressão de que está ativo, e aparece no lado direito da página:

Um input para o título, inicialmente com o valor “Sem título”, igual ao card.
Uma textarea para os ingredientes.
Uma textarea para o modo de preparo.
Um botão para deletar a receita.
Ou seja, ao clicar fica assim:
![image](https://github.com/Raissa-Reis-Lopes/recipe-book/assets/105091977/ce54273a-c38d-4286-af2a-ab28b6674e36)


O usuário pode então editar os campos.

Ao editar o campo de título, o texto do card à esquerda deve mudar automaticamente para refletir o novo título.

Por exemplo:

![image](https://github.com/Raissa-Reis-Lopes/recipe-book/assets/105091977/8d700bac-b094-490e-88e9-1f439fd96d9a)

Para adicionar uma nova receita, o usuário clica no botão “+” de novo. Vai aparecer outro card embaixo do primeiro, escrito “Sem Título”, mas o usuário continuará no modo de edição da receita atual (não muda sozinho para a nova receita):

![image](https://github.com/Raissa-Reis-Lopes/recipe-book/assets/105091977/f5afcd13-31f3-46d3-9649-cc30c308fadc)


O usuário pode clicar várias vezes no botão “+”, isso vai adicionar vários cards.

Quando o usuário quiser, ele pode sair da edição da receita atual e ir editar outra receita, para isso ele clica no card de outra receita, fica assim:

![image](https://github.com/Raissa-Reis-Lopes/recipe-book/assets/105091977/1ccead90-b94b-4eea-94c4-41739373b537)

Agora o usuário está no modo de edição da segunda receita, então qualquer edição nos inputs e textareas será salva nesta receita (se ele não mudar nada, a receita fica como está):

![image](https://github.com/Raissa-Reis-Lopes/recipe-book/assets/105091977/a9a6fc75-a844-4844-874e-f69f201cc177)

Se o usuário clicar no card de uma outra receita, ele vai para o modo de edição daquela receita, e as informações dela serão preenchidas automaticamente nos inputs e textareas:

![image](https://github.com/Raissa-Reis-Lopes/recipe-book/assets/105091977/0cd6f4e6-bdf9-40f4-90d6-616341b0fa0f)

Ao clicar no botão de deletar, a receita atual é deletada, isso faz o card dela desaparecer, e o modo de edição se fecha:

![image](https://github.com/Raissa-Reis-Lopes/recipe-book/assets/105091977/7179d7b3-9b39-4e2d-86d1-93989159256e)


A partir daí, o usuário pode clicar no botão de “+” para adicionar uma nova receita (novo card é sempre adicionado no final da lista, adicionar um card não abre o modo de edição), ou clicar no card de alguma receita para começar a editá-la (isso abre o modo de edição se estiver fechado).

Sugestões/dicas:

Array global para receitas (um array de objetos).
Nos cards, guarde uma propriedade customizada data-index contendo o índice daquela receita no array de receitas.
Tenha uma variável global currentRecipeIndex contendo o índice da receita que está sendo editada atualmente.
Ao deletar uma receita, o card vai sumir e a receita será retirada do array de receitas, então os índices das receitas seguintes a ela serão reduzidos em uma unidade. Use querySelectorAll e um loop (com condicional dentro) para corrigir as propriedades data-index somente dos cards posteriores à receita que foi deletada.
Note que, se atualmente há X receitas no array e for criada uma nova receita, o índice dela será X.
É possível encontrar um objeto DOM que tem data-index="1" (ou outro número) fazendo document.querySelector('[data-index="1"]');
Mostre ou esconda o formulário de edição usando um display: none.






