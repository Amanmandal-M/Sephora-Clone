

 const userName = sessionStorage.getItem('c4raUser') || "LogIn"

 const LoginName = document.querySelector('#loginName');

 LoginName.innerHTML = userName;


 const signout = document.getElementById('signout');
 signout.addEventListener('click', () => {
     if (userName !== "LogIn") {
         alert('You are signout from the site')
         sessionStorage.removeItem('c4raUser');
         window.location.reload();
     }
 })
