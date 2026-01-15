function printTribRec(n){
    if(n==0 || n==1 || n==2){
        console.log("n "+n);
        return 0;
    }
    if(n==3){
        console.log("n "+n);
        return 1;
    }
    else {
        return printTribRec(n-1) + printTribRec(n-2) + printTribRec(n-3);
    }
}

function printTribIter(n){
    var ans = 0;
    for(var i=0; i<n; i++){
        console.log("i="+i);
        ans = ans + printTribRec(i) + " ";
        console.log("ans="+ans);
    }
    console.log(ans);
}

printTribIter(6);