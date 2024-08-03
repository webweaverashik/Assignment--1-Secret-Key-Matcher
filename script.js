let secretKey = '';  // Assigning the secret key outside of the generate function so that we can use it to check secret function


// Generating secretKey - code
document.getElementById('generateBtn').addEventListener('click', generateSecretKey);

// Function to generate a random six-digit number
function generateSecretKey() {
    secretKey = Math.floor(100000 + Math.random() * 900000).toString();
    document.getElementById('secret-key').innerText = secretKey;
}




// numpad buttons to type and show the types digits in pinInput
document.querySelectorAll('.column').forEach(button => {
    button.addEventListener('click', () => {
        let pinInput = document.getElementById('pinInput');
        if (pinInput.value === '0') {
            pinInput.value = button.innerText;
        } else {
            pinInput.value += button.innerText;
        }
    });
});


// Clear the pin input field when clicked
document.querySelector('.clear').addEventListener('click', () => {
    document.getElementById('pinInput').value = '0';
});



// delete button undo the last typed digits
document.getElementById('del').addEventListener('click', () => {
    let pinInput = document.getElementById('pinInput');
    pinInput.value = pinInput.value.slice(0, -1) || '0';
});


// submit button to check the secretKey and the typed digits
document.querySelector('.submit').addEventListener('click', () => {
    let pinInput = document.getElementById('pinInput').value;
    if (pinInput === secretKey) {
        document.getElementById('message').style.display = 'block';
        document.getElementById('warning').style.display = 'none';
    } else {
        document.getElementById('message').style.display = 'none';
        document.getElementById('warning').style.display = 'block';
    }
    document.getElementById('pinInput').value = '0';
});