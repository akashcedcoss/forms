function recWeight(){
    let n = document.getElementById('name').value;
    var a = parseInt(document.getElementById('age').value);
    var w = parseInt(document.getElementById('weight').value);
    var output = "";
    if (checkValues(n, a, w)){
        output = calculate(n, a, w);
    }else{
        output = "Wrong Input";
    }
    
}
function checkValues(n, a, w){
    if((n == "" && typeof n === 'string' ||  typeof parseInt(n) =="number") || (a == "" && typeof a === 'number')||(w == "" && typeof w === 'number')){
        return true;
    }else{
        return false;
    }

}

function calculate(n, a, w){
    if( (a>=5 && a <= 7) && (w >= 15 || w <= 20)){
        document.getElementById('result').innerHTML="Hello " + n + " !!! Your weight is perfect.";
        if( (a>=5 && a <= 7) && (w < 15)){
            document.getElementById('result').innerHTML="Hello " + n + " !!! Your weight is less than recommended value of 15KG at an age of " + w + ".";
        }if( (a>=5 && a <= 7) && (w >20)){
            document.getElementById('result').innerHTML="Hello " + n + " !!! Your weight is greater than recommended value of 20KG at an age of " + w + ".";
        }
    }else if((a>=8 && a <= 10) && (w >= 21 || w <= 25)){
        document.getElementById('result').innerHTML="Hello " + n + " !!! Your weight is perfect.";
        if( (a>=8 && a <= 10) && (w < 21)){
            document.getElementById('result').innerHTML="Hello " + n + " !!! Your weight is less than recommended value of 21KG at an age of " + w + ".";
        }if( (a>=8 && a <= 10) && (w > 25)){
            document.getElementById('result').innerHTML="Hello " + n + " !!! Your weight is greater than recommended value of 25KG at an age of " + w + ".";
        }
    }else if((a>=11 && a <= 15) && (w >= 26 || w <= 30)){
        document.getElementById('result').innerHTML="Hello " + n + " !!! Your weight is perfect.";
        if( (a>=11 && a <= 15) && (w < 26)){
            document.getElementById('result').innerHTML="Hello " + n + " !!! Your weight is less than recommended value of 26KG at an age of " + w + ".";
        }if( (a>=11 && a <= 15) && (w > 30)){
            document.getElementById('result').innerHTML="Hello " + n + " !!! Your weight is greater than recommended value of 30KG at an age of " + w + ".";
        }
    }else if((a>=16 && a <= 20) && (w >= 31 || w <= 40)){
        document.getElementById('result').innerHTML="Hello " + n + " !!! Your weight is perfect.";
        if( (a>=16 && a <= 20) && (w < 31)){
            document.getElementById('result').innerHTML="Hello " + n + " !!! Your weight is less than recommended value of 31KG at an age of " + w + ".";
        }if( (a>=16 && a <= 20) && (w > 40)){
            document.getElementById('result').innerHTML="Hello " + n + " !!! Your weight is greater than recommended value of 40KG at an age of " + w + ".";
        }
    }
    else{
        document.getElementById('result').innerHTML="Undefined";
    }

}