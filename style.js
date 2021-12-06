function validate() {
    let x = document.forms["myForm"]["animi-name"].value;
    let y = document.forms["myForm"]["no"].value;
    var special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (x == "") {
        document.getElementById("demo").innerHTML = "* name cannot be empty";
      return false;
    }
    if (x.length < 8){
        document.getElementById("demo").innerHTML = "* should be atleast 8 charectors";
      return false;
    }
    if (x.length > 15){
        document.getElementById("demo").innerHTML = "* should not exceed 15 charectors";
      return false;
    }
    if (x.indexOf(' ') >= 0 ){
        document.getElementById("demo").innerHTML = "* should not have space between charectors";
      return false;
    }
    if (isNaN(y))
    {
        document.getElementById("demo1").innerHTML = "* only number should be given";
      return false;
    }
    if(special.test(x)){
        document.getElementById("demo").innerHTML = "* special charectors are not allowed";
        return false;
    }
    else
    {
        return true;
    }
}