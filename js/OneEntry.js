/**
 * Created by obulaworld on 7/30/18.
 */
let getRecipe= (id) => {
    let url = 'https://more-recipes.herokuapp.com/api/v1/recipe/';
    const token = localStorage.getItem('token');
    url = url + id;
    fetch(url, { headers:{"token":token, method: "GET"}} )
        .then((response) => {
            return response.json();
        }).then((data) => {
        const recipe = data.results.recipe;
       let value=`<h1>${recipe.name}</h1><br><h3>${recipe.description}</h3><br>
                                    <div><img src="${recipe.img_url}"></div><br><ol>`;
        for(let ing in recipe.ingredients){
               value += `<li >${ing}</li>`;
        }
        value += `</ol><br><ol>`;
        for(let inst in recipe.instructions){
            value += `<li >${inst}</li>`;
        }
        value += `</ol>`;
        document.getElementById("recipe").innerHTML = value;
    })
        .catch(err =>{
            console.log('Request failed', err)
        });
});

