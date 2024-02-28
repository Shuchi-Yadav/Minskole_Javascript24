// for loop


// // for(intialization ; conditionCheck , increment/decrement){
//     // statements
// } 

// print 1 to 10

for ( i = 0; i <=10 ; i++){ //1 // 2 //3 //4 //5 //6 //7 //8 // 9 //10 //11
    console.log(i); // 0 //1 // 2 //3 //4 //5 //6 //7 // 8 // 9 //10
}

// print hello 4 times

for( i=0; i<=3 ; i++){ //1//2//3
    console.log("hello") //hello //hello //hello //hello
}

// print 5 to 1

for( i=5 ; i>=1 ; i--){ // 4 //3 //2//1
    console.log(i); // 5 //4 // 3//2//1
}

//print 10 to 1

for(i = 10 ; i >= 1; i--){//9//8//7//6//5//4//3//2//1//0
    console.log(i);//hello//hello//hello//hello//hello//hello//hello//hello//hello//hello
}

// table of 2

for (i = 1 ; i<= 10 ; i++){ //2//3//4//5//6//7//8//9//10//11
    console.log(i * 2)// 2//4//6//8//10//12//14//16//18//20
}

for ( let i = 2; i<=20; i=i+2){ //4//6//8//10//12//14//16//18//20
    console.log(i)//2//4//6//8//10//12//14//16//18//20
}

// table of 5

for (i = 50 ; i >= 5 ; i = i-5){ //45//40//35//30//25//20//15//10//5
    console.log(i) //50 //45//40//35//30//25//20//15//10//5
}

// for loop with break statement

for(let i = 0 ; i <= 5 ; i++){ // 1 // 2 // 3
    if(i == 3){
        break
    }
    console.log(i) // 0 // 1 // 2
}


for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    console.log(i) //1 // 2 // 3
    if(i == 3){
        break
    }
   
}

for(let i = 5 ; i >= 1 ; i--){ // 4
    if(i == 4){
        break
    }
    console.log(i) // 5

}

// continue statement with for 
for(let i = 1 ; i <= 5 ; i++){ //2//3//4//5//6
    if(i == 3){
      continue
    }
    console.log(i)  //1//2//4//5
 }
 
 for(let i = 5 ; i >= 1 ; i-- ){//4//3//2//1//0
     if(i == 3){
         continue
     }
     console.log(i)//5//4//2//1
 }


