const checkButton = document.getElementById('check-btn');
const input = document.getElementById('text-input');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {

if (input.value === "") {

    alert('Please input a value');

} else if (input.value.length === 1) {

    result.innerText = input.value + " is a palindrome"

} else {

    const string = input.value;
    const lowerString = string.toLowerCase();
    const cleanString = lowerString.replace(/[^a-zA-Z0-9]/g, '');
    const reversedString = cleanString.split("").reverse().join("");

    if (reversedString === cleanString) {

        result.innerText = input.value + " is a palindrome";

    } else {

        result.innerText = input.value + " is not a palindrome";

    }
    
    }

});
