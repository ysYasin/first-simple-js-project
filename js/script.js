// add event handler 
document.getElementById('Login-buton').addEventListener('click', function () {
    const emailFeild = document.getElementById('email');
    const email = emailFeild.value;
    const passwordFeild = document.getElementById('pasword');
    const pasword = passwordFeild.value;
    // its not the system , its just for kam calano
    if (email === 'ysyasin7.6@gmail.com' && pasword === 'password') {
        window.location = 'bank.html'
    } else {
        alert('invalid user Name or password')
    }
})

