function onChangeEmail() {
    toggleButtonDisable();
    toggleEmailErrors();
    
    

    // const email = document.getElementById("email").value;
    // if (!email) {
    //     document.getElementById('recover-password-button').disabled = true;
    // } else if (validateEmail(email)) {
    //     document.getElementById('recover-password-button').disabled = false;
    // } else{
    //     document.getElementById('recover-password-button').disabled = true;
    // }
        

    }

    function onChangePassword(){
        toggleButtonDisable();
        togglePasswordError();
    }

    function login() {
        //console.log('antes')
  firebase.auth().signInWithEmailAndPassword(
    form.email().value, form.password().value
).then(response => {
    window.location.href = "home/home.html";
    //console.log('success', response)
  }).catch(error =>{
    alert(getErrorMessage(error));
    //console.log('error', error)
  });
 // console.log('depois')
    }

    function getErrorMessage(error) {
        if (error.code == "auth/user-not-found") {
            return "usuario nao encontrado";
        }
        return error.message;
    }

    function register() {
        window.location.href = "register/register.html";
    }
    //pegar o valor do campo do email
    //verificar se  o email não é vazio e se o email é válido
    //se verdadeiro, ent habilitar o botao de recuperar senha
    //se falso, ent desabilitar o botao de recuperar senha

    function isEmailvalid() {
        const email = form.email().value;
        if(!email) {
           return false;
        }
        return validateEmail(email);
        
    }

    function toggleEmailErrors() {
      const email = form.email().value;
      form.emailRequiredError().style.display = email ? "none" : "block";

      form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
        
    }

    function togglePasswordError(){
        const password = form.password().value;
        form.passwordRequiredError().style.display = password ? "none" : "block";
        
    }

    function toggleButtonDisable(){
        const emailValid = isEmailvalid();
        form.recoverPassword().disabled = !emailValid;
    
        const passwordValid = isPasswordValid();
        form.loginButton().disabled = !emailValid || !passwordValid;
    }
  
    function isPasswordValid() {
        const password = form.password().value;
        if(!password){
            return false;
        }
        return true;
    }

  const form = {
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    loginButton:() => document.getElementById('login-button'),
    password: () => document.getElementById('password'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    recoverPassword: () => document.getElementById('recover-password-button')
    
  }
