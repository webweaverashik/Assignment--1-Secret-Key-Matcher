let secretKey;  // Assigning the secret key outside of the generate function so that we can use it to check secret function


// Generating secretKey - code
document.getElementById("generateBtn").addEventListener("click", function () {
    secretKey = Math.round(100000 + Math.random() * 900000);

    document.getElementById("secret-key").innerText = secretKey;
    console.log(secretKey);
});

