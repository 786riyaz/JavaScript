let queue = [1,2,3,4,5,6,7,8];
console.clear();

console.log("Before Dequeue :: " + queue);

queue.reverse();
queue.pop()
queue.reverse();

console.log("After Dequeue :: " + queue);