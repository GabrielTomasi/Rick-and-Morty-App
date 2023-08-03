const validation = ({ email, password }) => {
  const regExEmail = /\S+@\S+\.\S+/;
  const regexPassword = /^(?=.*\d).{5,9}$/
  let errors = {};
  if (!email){
    errors.email='El email no puede estar vacío'
  }
  if (!regExEmail.test(email)) {
    errors.email = "Ingrese un email válido";
  }
  if (email.length>35){
    errors.email = 'El email proporcionado es demaciado largo'
  }
  if (!regexPassword.test(password)){
    errors.password = 'la contraseña debe contener al menos dos números, y una longitud entre 6 y 10 caracteres'
  }
  return errors
};

export default validation;
