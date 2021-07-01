const signInForm = document.getElementsByTagName('form')[0];
const errorClass = 'error--active';
const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const fieldNames = ['First Name', 'Last Name', 'Email', 'Password'];

const showError = ( input, pError, message ) => {
    pError.innerHTML = message;
    pError.classList.add(errorClass);
    input.classList.add(errorClass);
    input.parentElement.classList.add(errorClass);
}

const handleSubmit = e => {
    e.preventDefault();

    for (let i = 0; i < 4; i++) {
        const input = e.target[i];
        const pError = document.getElementsByClassName(`error__${ input.id }`)[0];

        if (input.value.trim().length === 0) {
            const message = `${ fieldNames[i] } cannot be empty`;
            if (input.placeholder) {
                input.placeholder = '';
            }
            showError( input, pError, message );
        } else if ( input.type === 'email' && !emailRegExp.test(input.value) ) {
            const message = 'Looks like this is not an email';
            showError( input, pError, message );
        } else {
            pError.classList.remove(errorClass);
            input.classList.remove(errorClass);
            input.parentElement.classList.remove(errorClass);
        }
    }
    
}

document.addEventListener('submit', handleSubmit);