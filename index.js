document.addEventListener('DOMContentLoaded', function() {

  const form = document.querySelector('form');
  const button = form.querySelector('button');

  const name = form.querySelector('#name')
  const surname = form.querySelector('#surname')
  const city = form.querySelector('#city')
  const street = form.querySelector('#street')
  const age = form.querySelector('#age')
  const sex = document.getElementsByName('sex')

  const maleHandler = () => {
    if (sex[0].checked) {
      return "male"
    } else if (sex[1].checked) {
      return "female"
    } else {
      return ""
    }
  }

  button.onclick = e => {
    e.preventDefault();

    const data = {
      name: name.value,
      surname: surname.value,
      city: city.value,
      street: street.value,
      male: maleHandler(),
      age: age.value,
    }

    console.log(data);
    
  }

})