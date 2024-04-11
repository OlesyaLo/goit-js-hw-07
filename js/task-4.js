const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const emailField = form.elements.email.value.trim();
  const passwordField = form.elements.password.value.trim();

  if (emailField === '' || passwordField === '') {
    return alert('All form fields must be filled in');
  }

  const filledForm = {
    email: emailField,
    password: passwordField,
  };
  console.log(filledForm);
  form.reset();
}
