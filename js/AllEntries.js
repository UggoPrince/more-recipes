/**
 * Created by obulaworld on 7/30/18.
 */

let getRecipes= (() => {
    const url = 'https://more-recipes.herokuapp.com/api/v1/recipes';
    const token = localStorage.getItem('token');
    fetch(url, { headers:{"token":token, method: "GET"}} )
        .then((response) => {
        return response.json();
    }).then((data) => {
        const recipes = data.results.recipes;
    for(let recipe in recipes){
        if (recipes.hasOwnProperty(recipe)) {
            document.getElementById("recipes").innerHTML +=`<td >${recipes[recipe].name}</td><td><button onclick="getRecipe()">View</button></td>`;
        }
    }
    })
.catch(err =>{
    console.log('Request failed', err)
});
})();
