/*
समस्या की व्याख्या (Problem Explanation)
हमारे पास एक शब्द स्ट्रिंग (Word String) है।
हैरी (Harry) एक संख्या M चुनता है, जो यह दर्शाती है कि वह अंत से कितने अक्षर (letters) काटेगा।
पॉटर (Potter) एक संख्या N चुनता है, जो यह दर्शाती है कि वह अंत से कितने अक्षर काटेगा।
प्रक्रिया (Process) इस प्रकार है:
हैरी स्ट्रिंग के अंत से M अक्षर काटकर उन्हें शुरुआत में जोड़ देता है।
फिर पॉटर स्ट्रिंग के अंत से N अक्षर काटकर उन्हें शुरुआत में जोड़ देता है।
यह प्रक्रिया तब तक दोहराई जाती है जब तक कि स्ट्रिंग फिर से अपनी मूल स्थिति में नहीं आ जाती।
हमें यह गिनना है कि यह कितने टर्न्स में होगा।
*/

performCutting = function (inputString, m, n) {
    console.log("Function Starts.......");

    let counter = 0;  // यह टर्न्स गिनने के लिए है
    let tempString = "";  // अस्थायी स्ट्रिंग जिसे बार-बार बदला जाएगा
    let newString = inputString;  // मौजूदा स्ट्रिंग की कॉपी
    
    console.log("Original String :: ", counter, " :: ", newString);

    let mapping = {
        "H": m,  // हैरी के लिए कट साइज
        "R": n   // पॉटर के लिए कट साइज
    };
    
    let flag = "H";  // पहले हैरी की बारी होगी
    
    while (tempString != inputString) {  // जब तक स्ट्रिंग अपनी मूल स्थिति में ना आ जाए
        counter++;  // टर्न गिनो

        // अंत से 'M' या 'N' अक्षर काटो
        let endString = newString.slice(-(mapping[flag]));  
        
        // बचा हुआ भाग लो
        let beginningString = newString.slice(0, newString.length - mapping[flag]);
        
        // नए क्रम में जोड़ो (कटे हुए को शुरुआत में जोड़ो)
        tempString = endString + beginningString;
        
        console.log("New String :: ", counter, " :: ", tempString);

        // मौजूदा स्ट्रिंग को अपडेट करो
        newString = tempString;

        // टर्न बदलो (हैरी → पॉटर, पॉटर → हैरी)
        flag = (flag == "H") ? "R" : "H";
    }

    console.log("Turns required to Make Original String :: ", counter);
    console.log("Function Ends.......");
}

// फंक्शन को कॉल करना (Test Cases)
console.clear();
performCutting("AbcDef", 2, 1);
console.log();
performCutting("AbcAbc", 2, 1);

/*
उदाहरण (Example)
अगर हम इस फंक्शन को ऐसे कॉल करें:

performCutting("AbcDef", 2, 1);
स्टेप बाय स्टेप प्रोसेस:
टर्न	कटने वाले अक्षर	नई स्ट्रिंग
0	-	AbcDef
1 (हैरी)	ef (2 अक्षर)	efAbcD
2 (पॉटर)	D (1 अक्षर)	DefAbc
3 (हैरी)	bc (2 अक्षर)	bcDefA
4 (पॉटर)	A (1 अक्षर)	AbcDef ✅ (मूल स्ट्रिंग वापस मिल गई)
🔹 कुल 4 टर्न में हम वापस मूल स्ट्रिंग "AbcDef" पर आ गए।

कोड में मुख्य बातें (Key Takeaways)
✅ मूल स्ट्रिंग को बार-बार मोडिफाई किया जा रहा है।
✅ while लूप तब तक चलता है जब तक स्ट्रिंग अपनी मूल स्थिति में ना आ जाए।
✅ हर टर्न में 'M' और 'N' वैकल्पिक रूप से उपयोग किए जा रहे हैं।
✅ आखिर में, गिनती बताई जाती है कि कितने टर्न लगे।

निष्कर्ष (Conclusion)
यह प्रोग्राम स्ट्रिंग को बार-बार मॉडिफाई करके उसकी पुनरावृत्ति (cycle detection) की गणना करता है।
इसका उपयोग स्ट्रिंग मैनिपुलेशन और पैटर्न रिकग्निशन में किया जा सकता है। 🚀
*/