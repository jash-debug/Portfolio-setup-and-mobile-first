const form = document.querySelector('#form__id');

const {
  fname, email, messagebox,
} = form.elements;

if (!localStorage.getItem('formObj')) {
  const formData = {
    fnameData: '', emailData: '', messageData: '',
  };

  localStorage.setItem('formObj', JSON.stringify(formData));
}

const reservedata = (element, val) => {
  element.addEventListener('change', () => {
    const data = element.value;
    const formData = JSON.parse(localStorage.getItem('formObj'));
    formData[val] = data;
    localStorage.setItem('formObj', JSON.stringify(formData));
  });
};

reservedata(fname, 'fnameData');
reservedata(email, 'emailData');
reservedata(messagebox, 'messageData');

const formData = JSON.parse(localStorage.getItem('formObj'));
fname.value = formData.fnameData;
email.value = formData.emailData;
messagebox.textContent = formData.messageData;
