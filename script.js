function generate(){

    // Prompts for password criteria
    var upperCase = confirm("Do you want your password to contain upper case letters?");
    
    var lowerCase = confirm("Do you want your password to contain lower case letters?");

    var numbers = confirm("Do you want your password to contain numbers?");

    var specialCharacters = confirm("Do you want your password to contain special characters?")

    var passwordLength = prompt("Enter the desired length of your password. Minimum 8, maximum 128.");

    // Password length restrictions
    if (passwordLength < 8){
        alert("Password length must be between 8 and 128.");
        return;
    }

    if (passwordLength > 128){
        alert ("Password length must be between 8 and 128.");
        return;
    }
    
    // Set sub-values based off each prompt response. Ok = values, cancel = null
    if (upperCase === true){
        var valuesU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    } else {var valuesU = ""}

    if (lowerCase === true){
        var valuesL = "abcdefghijklmnopqrstuvwxyz"
    } else {var valuesL = ""}

    if (numbers === true){
        var valuesN = "1234567890"
    } else {var valuesN = ""}

    if (specialCharacters === true){
        var SCN = "!@#$%^&*()_+"
    } else {var SCN = ""}
    
    // Combine sub-values to create list of all possible password characters called "values"
    var values = valuesU + valuesL + valuesN + SCN;

    // Set password to null
    let password = "";

    // Generate password and add to null
    for(var i=0; i<=passwordLength - 1; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    } 

    // Insert generated password into display box
    document.getElementById("display").value = password;
}


