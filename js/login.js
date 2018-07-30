function loginUser(){
    const url = "https://more-recipes.herokuapp.com/api/v1/users/login";
    
    let data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    
    let fetchData = { 
        method: 'POST', 
        body: data,
        headers: new Headers()
    }
      
    fetch(url, fetchData)
    .then(res => res.json())
    .then(data => {
     localStorage.setItem('token', data.token);
    })
    .catch(rejected => {
        document.getElementById('message').innerHTML = "Email or Password invalid";
    });
    
    
    
    }
    
    