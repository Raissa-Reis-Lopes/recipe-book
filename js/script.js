const addButton = document.getElementById("add-button");
const h1 = document.querySelector("h1");
const lateralMenu = document.getElementById("lateral-menu");
const containerCard = document.getElementById("container-menu-lateral");
const container = document.getElementById("container");

const recipeArray = [];
let currentActiveCard = null;

addButton.addEventListener("click", function () {
  // Adiciona uma nova receita ao array
  recipeArray.push({ title: "", ingredients: "", howToCook: "" });

  //Cria o card lateral e coloca o texto "sem título" nele
  const menuDiv = document.createElement("div");
  menuDiv.classList = "menu-div";
  menuDiv.innerText = "Sem título";
  containerCard.appendChild(menuDiv);

  //Gera um índice para esse card que foi criado
  const recipeIndex = recipeArray.length - 1; //o 1ª é 0
  menuDiv.dataset.index = recipeIndex; //coloca esse 0 como data-index no card criado menuDiv

  menuDiv.addEventListener("click", function () {
    const mainMenu = document.getElementById("main-menu");
    h1.classList.add("hidden");

    mainMenu.innerHTML = "";
    const currentIndex = Number(this.dataset.index); //pega o indice dessa div atual
    menuDiv.innerText = recipeArray[currentIndex].title || "Sem título"; //Pega um título do array de objetos se ele já tiver sido escrito na parte das receitas

    //Crio todos os elementos da div da direita com a parte para escrever as receitas

    const recipesBox = document.createElement("div");
    recipesBox.classList = "recipes-box";
    mainMenu.appendChild(recipesBox);

    const headerRecipes = document.createElement("div");
    headerRecipes.classList = "header-recipes";
    recipesBox.appendChild(headerRecipes);

    const titleRecipeDiv = document.createElement("div");
    titleRecipeDiv.classList = "title-recipe-div";
    headerRecipes.appendChild(titleRecipeDiv);

    const labelRecipe = document.createElement("label");
    labelRecipe.classList = "label-title-recipe";
    labelRecipe.innerText = "Título";
    titleRecipeDiv.appendChild(labelRecipe);

    const inputRecipeTitle = document.createElement("input");
    inputRecipeTitle.id = "title-recipe";
    inputRecipeTitle.placeholder = "Sem título";
    titleRecipeDiv.appendChild(inputRecipeTitle);

    const buttonDelete = document.createElement("button");
    buttonDelete.classList = "delete-button";
    buttonDelete.innerText = "Deletar";
    headerRecipes.appendChild(buttonDelete);

    const ingredientsLabel = document.createElement("label");
    ingredientsLabel.classList = "ingredients-label";
    ingredientsLabel.innerText = "Ingredientes";
    recipesBox.appendChild(ingredientsLabel);

    const ingredientsTextarea = document.createElement("textarea");
    ingredientsTextarea.id = "ingredients-textarea";
    recipesBox.appendChild(ingredientsTextarea);

    const howToCookLabel = document.createElement("label");
    howToCookLabel.classList = "how-to-cook";
    howToCookLabel.innerText = "Modo de Preparo";
    recipesBox.appendChild(howToCookLabel);

    const howToCookTextarea = document.createElement("textarea");
    howToCookTextarea.classList = "howTo-textarea";
    recipesBox.appendChild(howToCookTextarea);

    // Removendo o destaque do card anterior
    if (currentActiveCard) {
      currentActiveCard.style.border = "1px solid black";
    }

    // Adicionando o destaque ao card clicado
    menuDiv.style.border = "3px solid black";

    // Atualizando o card ativo
    currentActiveCard = menuDiv;

    // Atualiza os campos da div com as receitas
    inputRecipeTitle.value = recipeArray[currentIndex].title || "";
    ingredientsTextarea.value = recipeArray[currentIndex].ingredients || "";
    howToCookTextarea.value = recipeArray[currentIndex].howToCook || "";

    // Inputs para atualizar a receira
    inputRecipeTitle.addEventListener("input", function () {
      menuDiv.innerText = inputRecipeTitle.value;
      recipeArray[currentIndex].title = inputRecipeTitle.value;
    });

    ingredientsTextarea.addEventListener("input", function () {
      recipeArray[currentIndex].ingredients = ingredientsTextarea.value;
    });

    howToCookTextarea.addEventListener("input", function () {
      recipeArray[currentIndex].howToCook = howToCookTextarea.value;
    });

    buttonDelete.addEventListener("click", function (event) {
      event.preventDefault();
      const currentRecipeIndex = Number(menuDiv.dataset.index);
      recipeArray.splice(currentRecipeIndex, 1);
      menuDiv.remove();
      // Atualiza os índices dos cards de receita a partir do que foi removido
      const recipeCards = containerCard.querySelectorAll("div");

      for (const card of recipeCards) {
        const indexCard = Number(card.dataset.index);

        if (indexCard > currentRecipeIndex) {
          card.dataset.index = indexCard - 1;
        }
      }
      // Verifica se não há mais receitas e ajusta a exibição
      if (containerCard.children.length === 0) {
        menuDiv.style.display = "none";
        h1.style.display = "block";
      }

      // resetar as variáveis globais
      currentActiveCard = null;

      // remove os inputs de edição (já que nenhuma receita está ativa)
      mainMenu.innerHTML = "";
    });
  });
});
