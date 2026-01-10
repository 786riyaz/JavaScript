function getFilterNameByDatabaseField(fieldId) {
    const filterMapping = {
        "Category": "F_Category",
        "SubCategory": "F_SubCategory",
        "Country Name": "F_CountryName",
        "Compressor Type": "F_CompressorType",
        "Refrigerant Gas": "F_RefrigerantGas",
        "Country of Origin": "F_CountryOfOrigin",
        "Watt": "F_Watt",
        "Voltage": "F_Voltage",
        "Frequency": "F_Frequency",
        "Socket Type": "F_SocketType",
        "Colour": "F_Colour",
        "Cord Length": "F_CordLength",
        "Capacity": "F_CapacityInLiters",
        "Heating Elements": "F_HeatingElements"
    };

    for (const [key, value] of Object.entries(filterMapping)) {
        if (value === fieldId) {
            return key;
        }
    }
    return null; // Return null if no match is found
}

// Example usage
console.log(getFilterNameByDatabaseField("F_CountryName")); // Output: "Country Name"