const isEmail = (email) => {
    const regEx =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(regEx)) return true;
    else return false;
}

const isEmpty = (string) => {
    if (string.trim() === '') return true;
    else return false;
}

exports.validateSignupData = (data) => {
    let errors = {};

    if (isEmpty(data.email)) {
        errors.email = 'Vous devez remplir le champ Email !'
    } else if (!isEmail(data.email)) {
        errors.email = 'l\'email doit être valide'
    }

    if (isEmpty(data.password)) errors.password = 'Le mot de passe doit être rempli';
    if (isEmpty(data.username)) errors.username = 'Le username doit être rempli';
    if (data.password !== data.Cpassword) errors.Cpassword = 'Mot de passe différent';

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}