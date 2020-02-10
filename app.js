// Form Blur Event Listerners
document.getElementById('name').addEventListener('keyup', validateName);
document.getElementById('zipcode').addEventListener('keyup', validateZipcode);
document.getElementById('email').addEventListener('keyup', validateEmail);
document.getElementById('phoneNumber').addEventListener('keyup', validatePhoneNumber);

const submit = document.getElementById('submit');

function validateName(){
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(name.value)){
    name.classList.add('is-invalid');
    submit.disabled = true;
  }else{
    name.classList.remove('is-invalid');
    submit.disabled = false;
  }
}

function validateZipcode(){
  const zipcode = document.getElementById('zipcode');
  const re = /^\d{6}$/;

  if(!re.test(zipcode.value)){
    zipcode.classList.add('is-invalid');
    submit.disabled = true;
  }else{
    zipcode.classList.remove('is-invalid');
    submit.disabled = false;
  }
}

function validateEmail(){
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
    submit.disabled = true;
  }else{
    email.classList.remove('is-invalid');
    submit.disabled = false;
  }
}

function validatePhoneNumber(){
  const phoneNumber = document.getElementById('phoneNumber');
  // const re = /^\(?\d{3}\)?\.?\-?\(?\d{3}\)?\.?\-?\(?\d{4}\)?$/;
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phoneNumber.value)){
    phoneNumber.classList.add('is-invalid');
    submit.disabled = true;
  }else{
    phoneNumber.classList.remove('is-invalid');
    submit.disabled = false;
  }
}