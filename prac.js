
function $(id) {
   var cat= document.getElementById(id).value;
 return cat
}

var btn=document.getElementById("btn2");


btn. addEventListener( "click",function all(){

var name=$("name");
var mat=$("matno");

var c1 =$("c1" );
var cu1 =$("cu1");
var ca1 =$("ca1");
var e1 =$("e1" );

var c2 =$("c2" );
var cu2 =$("cu2");
var ca2 =$("ca2");
var e2 =$("e2" );

var c3 =$("c3" );
var cu3 =$("cu3");
var ca3 =$("ca3");
var e3 =$("e3" );

var c4 =$("c4" );
var cu4 =$("cu4");
var ca4 =$("ca4");
var e4 =$("e4" );

var c5 =$("c5" );
var cu5 =$("cu5");
var ca5 =$("ca5");
var e5 =$("e5" );



function one(){
     sunit=parseInt(cu1)+ parseInt(cu2)+ parseInt(cu3)+ parseInt(cu4)+ parseInt(cu5);
     sub1=parseInt(ca1)+parseInt(e1);
     sub2=parseInt(ca2)+parseInt(e2);
     sub3=parseInt(ca3)+parseInt(e3);
     sub4=parseInt(ca4)+parseInt(e4);
     sub5=parseInt(ca5)+parseInt(e5);
    var sum =  sub1 + sub2 + sub3 + sub4 + sub5;
    return "total: "+sum
    
}
document.write(one());
// grade point assign
// first subject


function rat(sub){
    if (sub<=39 && sub>=0)
    {
        return "F"
    }
    else if( sub<=44 && sub>=40){
        return "E"
    }
    else if( sub1<=49 && sub>=45){
        return "D"
    }
    else if( sub<=59 && sub>=50){
        return "C"
    }
    else if( sub<=69 && sub>=60){
        return "B"
    }
    else if( sub<=100 && sub>=70){
        return "A"
    }
    else{
        return "invaid entry"
    };
}


function two(){
    return rat(sub1)
}



    // second subject
function three(){
    return rat(sub2)
}

// third sub
function three1(){
        return rat(sub3)
}

    // fourt sub
    function three2(){
        return rat(sub4)
    }

 // fifth sub
 function three3(){
    return rat(sub5)
}


    // point assign
//  sub 1

function cat(ant){

    if (ant=="A") {
        return 5 * cu1
    } 
    else if(ant=="B"){
        return 4 * cu1
    }
    else if(ant=="C"){
        return 3 * cu1
    }
    else if(ant=="D"){
        return 2 * cu1
    }
    else if(ant=="E"){
        return 1 * cu1
    }
    else if(ant=="F"){
        return 0 * cu1
    }
    else{
        return " "
    }
    
    }

function four(){
    return cat(two())
}

 
// sub 2
function five(){
    return cat(three())
    }

    // sub 3

    function five1(){
        return cat(three1())
        }

        function five2(){
            return cat(three2())
        }

            function five3(){

            return cat(three3())
                
                }
                
function six(){

    sp=four()+ five()+five1()+five2()+five3();
    return sp;

}

function seven(){
    gpa= six() / sunit 
    return gpa
}

document.write("<br>");
    document.write( "NAME: " +name + "</br>" );

    document.write( "MAT NO: " +mat );
    document.write( "COURSE: " +c1 + "  SCORE: " +sub1 + "  " +"  GRADE: "+two()  + "</br>");

    document.write( "COURSE: " +c2 + "  SCORE: " +sub2 + "  GRADE: "+three()  + "</br>");

    document.write( "COURSE: " +c3 + "  SCORE: " +sub3 + "  GRADE: "+three1() + "</br>" );

    document.write( "COURSE: " +c4 + "  SCORE: " +sub4 + "  GRADE: "+three2() + "</br>");

    document.write( "COURSE: " +c5 + "  SCORE: " +sub5 + "  GRADE: "+three3() + "</br>" );
    
document.write("TPU: " +six() + "</br>");

 document.write("TCU: "+ sunit + "</br>");
   
document.write("YOUR GPA: " +seven() + "</br>");

}); 

// FIRST

var bttn=document.getElementById("bttn");

bttn.addEventListener("click", function done(){
var head=document.getElementsByTagName('HEAD')[0];

var link=document.createElement('link');

 link.rel = 'stylesheet';
 link.type ='text/css';
 link.href ='prac1.css';

 head.appendChild(link);
});

// secongd

var bttn2=document.getElementById("bttn2");

bttn2.addEventListener("click", function done2(){
    var head=document.getElementsByTagName('HEAD')[0];
    
    var link=document.createElement('link');
    
     link.rel = 'stylesheet';
     link.type ='text/css';
     link.href ='prac.css';
    
     head.appendChild(link);
    });
    