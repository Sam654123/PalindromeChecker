const textInput = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

function clean(str) {
    const regex = /\W/g;
    return str.replace(regex, '');
}

function palindrome() {
    if (textInput.value === "") {
        alert("Please input a value");
    } else {
        const input = clean(textInput.value);
        const lowerInput = input.toLowerCase();
        const reversedInput = lowerInput.split('').reverse().join('');
        if (reversedInput === lowerInput) {
            result.classList.remove('hidden');
            result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome`;
        } else {
            result.classList.remove('hidden');
            result.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome`;
        }
    }
}

button.addEventListener("click", palindrome);