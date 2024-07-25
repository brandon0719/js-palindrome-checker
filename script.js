const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultText = document.getElementById('result');

function filterString(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function isPalindrome(str) {
    return filterString(str) === filterString(str.split("").reverse().join(""));
}

const buttonClickHandler = () => {
    const text = textInput.value;
    if(text === "") {
        alert("Please input a value");
        return;
    }
    const isPalindrom = isPalindrome(text);
    if(isPalindrom) {
        resultText.innerHTML = `<p class="user-input"><strong>${text}</strong> is a palindrome</p>`;
        resultText.classList.remove("hidden")
    } else {
        resultText.innerHTML = `<p><strong>${text}</strong> is not a palindrome</p>`;
        resultText.classList.remove("hidden");
    }
}

checkButton.addEventListener("click", buttonClickHandler);
