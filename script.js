function load(){
    var passWord=document.getElementById("num1").value;
    var cpassWord=document.getElementById("num2").value;
    if(passWord.length<6){
       alert("hey invalid password");
       return false;
    }else{
        return true;
    }



}