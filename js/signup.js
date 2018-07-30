function loginUser(){
    const url = "https://more-recipes.herokuapp.com/api/v1/users/signup";
    
    let data = {
        fullname: document.getElementById('fullname').value,
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
        document.getElementById('message').innerHTML = "User registered successfull";
    })
    .catch(rejected => {
        document.getElementById('message').innerHTML = "eroor";
    });
    
    
    
    }
    
    