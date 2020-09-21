function generate(){

    // alert("Upper case letters?");
    var upperCase = confirm("Do you want your password to contain upper case letters?");
    
    var lowerCase = confirm("Do you want your password to contain lower case letters?");

    var numbers = confirm("Do you want your password to contain numbers?");

    var specialCharacters = confirm("Do you want your password to contain special characters?")

    var passwordLength = prompt("Enter the desired length of your password.");
    

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
    
    var values = valuesU + valuesL + valuesN + SCN;

    let password = "";

    for(var i=0; i<=passwordLength - 1; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    } 

    document.getElementById("display").value = password;
}


