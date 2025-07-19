const SearchBox= document.querySelector('.SearchBox');
const SearchButton= document.querySelector('.SearchButton');
const recipeContainer = document.querySelector('.recipe-container');

const fetchRecipes =async(query)=> {
    recipeContainer.innerHTML="<h2>Fetching Recipes...</h2>"
    const data =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response =await data.json();
    recipeContainer.innerHTML="";

    response.meals.forEach(meals => {
        //console.log(meals);
        const recipeDiv =document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
        <img src = "${meals.strMealThumb}">
        <h3>${meals.strMeal}</h3>
        <p><span>${meals.strArea}</span> Dish</p>
        <p>Belongs to <span>${meals.strCategory}</span> Category</p>
        `
        recipeContainer.appendChild(recipeDiv);
    });
    console.log(response.meals[0]);
}

SearchButton.addEventListener('click',( e )=>{
    e.preventDefault();
    //console.log("button clicked");
    const searchInput = SearchBox.value.trim();
    fetchRecipes(searchInput);
});