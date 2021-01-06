// Problem-1

function inchToFitConvert(inchi){
    var feet = inchi/12;
    return feet;
}
var test = inchToFitConvert(20);
console.log(test);
////////////

//Problem 2

function footToMileConvert(feet){
    var mile = feet/5280;
    return mile;
}
var test = footToMileConvert(20000);
console.log(test);


// Problem-3


function woodNeeded(chair,table,bed){
    var table,chair,bed,countCubic;
    chairCubic = chair *1;
    tableCubic = table*3;
    bedCubic = bed*5
    countCubic =(tableCubic+chairCubic+bedCubic);
    console.log("Wood Needed for Mr.'x' is " + countCubic +" Cubic feet.");
    
}
woodNeeded(5,2,1);


// Problem-4

var friendName = ['Shihab','Rifa','Oni','Sadi','Shahifur','Mustafiz','Anik'];
function shortestName(name){

     var len = name.length;
var i,j;
for(i=0; i<len-1; i++){
     for(j = 0; j<len-1; j++){
                    if(name[j].length>name[j+1].length){
                         var temp = name[j];
                         name[j] = name[j+1];
                          name[j+1] = temp;
               }
      }
    
} for(i=0; i<1; i++){
     console.log(name[i]+'('+(name[0].length)+')');
}

}
shortestName(friendName);
//////////////////////

// Problem-5

function brickNeedForKarimShaheb(storey){
    var bricks,height1,height2,height3;
    height1 = storey*15*1000;
    height2 = (storey-10)*12*1000+(10*15*1000);
    height3 = (storey-20)*10*1000+(10*12*1000)+(10*15*1000);

   if(storey<=10){
    bricks =height1;
      
    }
   else if(storey<=20){
       bricks = height2;

   }else{

    bricks = height3;
   }

  console.log('The Number of Bricks required for Mr. Karim\'s '+storey+'-storey building is:'+bricks+'.');
}
brickNeedForKarimShaheb(22);


