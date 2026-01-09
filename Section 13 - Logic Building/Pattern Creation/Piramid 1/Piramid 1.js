console.log("Start")

let num = 5
// console.log(num)
for(j=num;j>=1;j--){
    let str="";
    for (i = j; i >= 0; i--) {
        str+=" "
    }
    let concat = "";
    for (k=j;k<=num;k++){
        concat = concat+k;
    }
    console.log(str, concat);
}