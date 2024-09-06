document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Application Started....");

    let putButton = document.getElementById("PutButton");
    let getButton = document.getElementById("GetButton");
    let removeButton = document.getElementById("RemoveButton");

    let rollNumberText = document.getElementById("RollNumberText");
    let studentNameText = document.getElementById("StudentNameText");

    let sizeText = document.getElementById("SizeOfText");
    let bucket0 = document.getElementById("Bucket0Text");
    let bucket1 = document.getElementById("Bucket1Text");
    let bucket2 = document.getElementById("Bucket2Text");
    let bucket3 = document.getElementById("Bucket3Text");
    let bucket4 = document.getElementById("Bucket4Text");
    let bucket5 = document.getElementById("Bucket5Text");
    let bucket6 = document.getElementById("Bucket6Text");
    let bucket7 = document.getElementById("Bucket7Text");
    let bucket8 = document.getElementById("Bucket8Text");
    let bucket9 = document.getElementById("Bucket9Text");

    let errorText = document.getElementById("ErrorText");
    errorText.style.display = "none";

    let HashSet = [[], [], [], [], [], [], [], [], [], []];
    let size = 0;

    putButton.addEventListener('click', function (event) {
        
    });

    getButton.addEventListener('click', function (event) {
        let rollNumber = rollNumberText.value;
        console.log("Get Button Clicked :: " + rollNumber);
        if ([undefined, null, ""].indexOf(rollNumber) == -1) {
            get(rollNumber);
        }
        else {
            rollNumberText.value = "";
            console.log("Invalid Roll Number");
            errorText.innerText = "Please Enter Valid Roll Number";
            errorText.style.display = "block";
        }
    });

    removeButton.addEventListener('click', function (event) {
       
    });

    put = function (json) {
    }

    get = function (rollNumber, remove) {
        rollNumber = parseInt(rollNumber);
        console.log("Get function initiated :: " + rollNumber);
        let index = hashFunction(rollNumber);
        console.log("Searching in bucket :: " + index);
        let bucketData = HashSet[index];
        console.log("Nodes available in bucket " + index + " :: " + bucketData.length);
        // console.log("Nodes available in bucket " + index + " :: " + JSON.stringify(HashSet[index]));
        if (bucketData.length) {
            for (let i = 0; i < bucketData.length; i++) {
                // console.log(Object.keys(bucketData[i])[0]);
                if (rollNumber == Object.keys(bucketData[i])[0]) {
                    console.log("Element Found :: " + JSON.stringify(bucketData[i]));
                    rollNumber = rollNumber + "";
                    studentNameText.value = bucketData[i][rollNumber];
                    if (remove) {
                        console.log("Removing Element From Bucket " + index + " at Position :: " + i);
                        return { "bucket": index, "index": i }
                    }
                    break;
                } else if (i == bucketData.length - 1) {
                    console.log("Not Found !!!");
                    studentNameText.value = "Data Not Found !!!";
                    return { "bucket": index, "index": 0 }
                }
            }
        } else {
            studentNameText.value = "Data Not Found !!!";
            return { "bucket": index, "index": 0 }
        }
    }

    remove = function (rollNumber) {
    }

    update = function () {
        // console.log(HashSet);
        bucket0.innerText = "Bucket 0 :: " + JSON.stringify(HashSet[0]);
        bucket1.innerText = "Bucket 1 :: " + JSON.stringify(HashSet[1]);
        bucket2.innerText = "Bucket 2 :: " + JSON.stringify(HashSet[2]);
        bucket3.innerText = "Bucket 3 :: " + JSON.stringify(HashSet[3]);
        bucket4.innerText = "Bucket 4 :: " + JSON.stringify(HashSet[4]);
        bucket5.innerText = "Bucket 5 :: " + JSON.stringify(HashSet[5]);
        bucket6.innerText = "Bucket 6 :: " + JSON.stringify(HashSet[6]);
        bucket7.innerText = "Bucket 7 :: " + JSON.stringify(HashSet[7]);
        bucket8.innerText = "Bucket 8 :: " + JSON.stringify(HashSet[8]);
        bucket9.innerText = "Bucket 9 :: " + JSON.stringify(HashSet[9]);
        sizeText.innerText = "Hash Map --- ( Size :: " + size + " )";
    }

    hashFunction = function (key) {
        let sum = 0;
        while (key > 0) {
            let rem = key % 10;
            let ans = parseInt(key / 10);
            sum += rem;
            key = ans;
        }
        // console.log("Sum :: " + sum)
        return parseInt(sum / 10);
    }

    put({ "1234567890": "Riyaz" });
    put({ "3456789012": "XYZ" });
    put({ "6677889900": "Arbaz" });
    put({ "1122334455": "ABC" });
    put({ "1231231231": "Bob" });
});