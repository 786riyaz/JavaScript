let AllEntitiesJson = [
    {
        "entity": "TotalFilters",
        "location": [
            12,
            18
        ],
        "value": "Length",
        "confidence": 1
    },
    {
        "entity": "F_NemaRating",
        "location": [
            30,
            31
        ],
        "value": "1",
        "confidence": 1
    },
    {
        "entity": "F_DetectedEntities",
        "location": [
            30,
            31
        ],
        "value": "1",
        "confidence": 1
    },
    {
        "entity": "F_NoOfSpaces",
        "location": [
            30,
            31
        ],
        "value": "1",
        "confidence": 1
    },
    {
        "entity": "sys-number",
        "location": [
            30,
            31
        ],
        "value": "1",
        "confidence": 1,
        "metadata": {
            "numeric_value": 1
        },
        "interpretation": {
            "numeric_value": 1,
            "subtype": "integer"
        }
    }
];

let DetectedEntites = { "F_DetectedEntities": "", "sys-number": "", "TotalFilters": "" }

for (let i = 0; i < AllEntitiesJson.length; i++) {
    if ("sys-number" == AllEntitiesJson[i].entity) {
        DetectedEntites["sys-number"] = AllEntitiesJson[i].value;
        AllEntitiesJson.splice(i, 1);
        continue;
    }
    if ("F_DetectedEntities" == AllEntitiesJson[i].entity) {
        DetectedEntites.F_DetectedEntities = AllEntitiesJson[i].value;
        AllEntitiesJson.splice(i, 1);
        continue;
    }
    if ("TotalFilters" == AllEntitiesJson[i].entity) {
        DetectedEntites["TotalFilters"] = AllEntitiesJson[i].value;
        AllEntitiesJson.splice(i, 1);
        continue;
    }
}

console.log("::: Total Number of Element in the Object :::: ", AllEntitiesJson.length, "\n");
console.log("::: Details Entity ::: ");
console.log(AllEntitiesJson)


//  To delete a Element from array we can use splice function from index of array and number of element