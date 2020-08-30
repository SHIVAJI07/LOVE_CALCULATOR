
function refreshPage(){
       		


var random= Math.floor(Math.random()*100);

var str1 = document.getElementById("name").value; 

var str2 = document.getElementById("crush").value; 



if(str1=="shivaji" && str2=="ruchita"){
        
        document.querySelector("h2").innerHTML= "100%";

}else if(str1=="ruchita" && str2=="shivaji"){

        document.querySelector("h2").innerHTML= "100%";
}
else{document.querySelector("h2").innerHTML= random+"%";}

}
