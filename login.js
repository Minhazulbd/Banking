document.getElementById('submit-button').addEventListener('click',function(){
    // console.log('submit button click');
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    // console.log(userEmail);
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;
    // console.log(userPassword);

    if( userEmail =='minhazul@gmail.com' && userPassword == 123456){
        window.location.href ="welcometobank.html";

    }
})