let obj1 = {
    a : 1,
    b : 2,
}

let obj2 = {
    b : 1,
    a : 2,
}

console.log(deepEqual(obj1, obj2)); 

function deepEqual(o1, o2) {
    let keys1 = Object.keys(o1);
    let keys2 = Object.keys(o2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (o1[key] !== o2[key]) {
            return false;
        }   
    }
    return true;
}