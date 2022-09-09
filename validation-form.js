const Email = document.getElementById('email');
const Form = document.getElementById('form__id');
const message = document.querySelector('.red__text');

Form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = Email.value;
    const emailLowerCase = emailInput.toLowerCase();

    if (emailInput === emailLowerCase) {
        Form.submit();
      } else {
        message.classList.remove('display__none');
      }
    });
    
    Email.addEventListener('focus', () => {
      message.classList.add('display__none');
    });
    