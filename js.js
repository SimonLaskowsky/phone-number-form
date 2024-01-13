document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.button-no').addEventListener('click', function () {
        generateRandomNumbers();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.button-yes').addEventListener('click', function () {
        const successMessageElement = document.querySelector('.success');
          successMessageElement.style.display = 'block';
    });
});

function generateRandomNumbers() {
    const inputElement = document.getElementById('phone-number');
    if (inputElement) {
        const randomNumbers = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
        const formattedNumber = formatPhoneNumber(randomNumbers);
        inputElement.value = formattedNumber;
    }
}

function formatPhoneNumber(numbers) {
    return `${numbers.slice(0, 3).join('')} ${numbers.slice(3, 6).join('')} ${numbers.slice(6, 9).join('')}`;
}
