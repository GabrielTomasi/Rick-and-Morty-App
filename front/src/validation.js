const validation = (userData, setErrors, errors) =>{
    const alfaRegex = /^(?=.*\d)(?=.*[az])(?=.*[AZ]).{5,10}$/
    console.log(userData.email);
    if (userData.email === '') {setErrors ({...errors, email:'El email está vacío'})}
    else {setErrors ({...errors, email:''})}
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/.test(userData.email)) {setErrors({...errors, email: ''})}
    else { setErrors({...errors, email: 'email inválido}'})}
    if (!userData.email.length> 35) setErrors ({...errors, email:''});
     else {setErrors ({...errors, email:'El email es muy largo'})};
    
     if (!userData.password.match(alfaRegex))setErrors ({...errors, password:' entre 6 y 10 caracteres, al menos un número y una mayúscula'})
     else {setErrors ({...errors, password:''})};
    }

export default validation
