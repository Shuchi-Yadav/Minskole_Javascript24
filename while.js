
// initialization 
// while(condition){
//     // statements
//     // increment / decrement
// }

// print "hello 3 times"

let t1 = 1;
while(t1<=3){
    console.log("hello"); //hello//hello//hell0
    t1++;//2//3//4
}

// print 5 to 1

let t2 = 5;

while( t2>=1){
    console.log(t2);//5//4//3//2//1
    t2--;//4//3//2//1//0
}

//table of 2

let t3 = 2;
while(t3<=20){ 
    console.log(t3);//2//4//6//8//10//12//14//16//18//20
    t3=t3+2;//4//6//8//10//12//14//16//18//20//22
}

//print of 50 to 5

let t4 = 50;
while(t4>=5){
    console.log(t4);
    t4 = t4-5;
}

// print table of 5

let t5 = 5;
while(t5<=50){
    console.log(t5);
    t5=t5+5;
}

// while statement with break

let t6 = 1 

while(t6 <= 5){
    if(t6 == 3){
        break
    }
    console.log(t6) // 1 // 2
    t6 ++ // 2 // 3
}

let t8 = 5

while(t8 >= 1){
    console.log(t8) // 5 // 4 // 3 // 2
    if(t8 == 2){
        break
    }
    t8 -- // 4 // 3 // 2
} 
