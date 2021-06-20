const signInForm = document.getElementsByTagName('form')[0];
const errorClass = 'error--active';

const handleSubmit = e => {
    e.preventDefault();

    for (let i = 0; i < 4; i++) {
        const input = e.target[i];
        if (input.value.trim().length === 0) {
            const pError = document.getElementsByClassName(`error__${ input.id }`)[0];
            pError.innerHTML = `${ input.placeholder } cannot be empty`;
            pError.classList.add(errorClass);
            input.classList.add(errorClass);
            input.parentElement.classList.add(errorClass);
        }
    }
    
}

document.addEventListener('submit', handleSubmit);