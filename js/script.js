// Task 1
function showGreeting(){
    const str = document.querySelector('#inputName').value;
    const spanSpace = document.querySelector('#hello');
    spanSpace.textContent = 'Hello ' + str + '!';
}

// Task 2
function passwordsComparing() {
    const pass1 = document.querySelector('#passwordFirst').value;
    const pass2 = document.querySelector('#passwordSecond').value;
    const spanSpace = document.querySelector('#passwordsComparing');
    if (pass1 === pass2) {
        spanSpace.textContent = 'Equal';
    } else {
        spanSpace.textContent = 'Not equal';
    }
}

// Task 3
function randomator() {
    const min = +document.querySelector('#minNum').value;
    const max = +document.querySelector('#maxNum').value + 1;
    const spanSpace = document.querySelector('#randomNumber');
    spanSpace.textContent = Math.floor(Math.random() * (max - min) + min);
}