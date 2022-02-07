function recWeight(){
    var a = document.getElementById('age').value;
    var w = document.getElementById('weight').value;
    if( (a>=5 && a <= 7) && (w >= 15 || w <= 20)){
        document.getElementById('result').innerHTML="Third";
        if( (a>=5 && a <= 7) && (w < 15)){
            document.getElementById('result').innerHTML="First";
        }if( (a>=5 && a <= 7) && (w >20)){
            document.getElementById('result').innerHTML="Second";
        }
    }else if((a>=8 && a <= 10) && (w >= 21 || w <= 25)){
        document.getElementById('result').innerHTML="Third";
        if( (a>=8 && a <= 10) && (w < 21)){
            document.getElementById('result').innerHTML="First";
        }if( (a>=8 && a <= 10) && (w > 25)){
            document.getElementById('result').innerHTML="Second";
        }
    }else if((a>=11 && a <= 15) && (w >= 26 || w <= 30)){
        document.getElementById('result').innerHTML="Third";
        if( (a>=11 && a <= 15) && (w < 26)){
            document.getElementById('result').innerHTML="First";
        }if( (a>=11 && a <= 15) && (w > 30)){
            document.getElementById('result').innerHTML="Second";
        }
    }else if((a>=16 && a <= 20) && (w >= 31 || w <= 40)){
        document.getElementById('result').innerHTML="Third";
        if( (a>=16 && a <= 20) && (w < 31)){
            document.getElementById('result').innerHTML="First";
        }if( (a>=16 && a <= 20) && (w > 40)){
            document.getElementById('result').innerHTML="Second";
        }
    }

}