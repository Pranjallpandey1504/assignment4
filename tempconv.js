const units = {
    Temperature: ["Celsius", "Fahrenheit", "Kelvin"],
    Mass: ["Kilograms", "Grams", "Pounds", "Ounces"],
    Length: ["Meters", "Centimeters", "Kilometers", "Miles", "Inches"]
};

// Populate dropdowns dynamically based on type
function populateUnits() {
    const type = document.getElementById("conversionType").value;
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");

    // Clear previous options
    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    if (type) {
        // Add options dynamically
        units[type].forEach(unit => {
            const option1 = document.createElement("option");
            const option2 = document.createElement("option");
            option1.value = option2.value = unit;
            option1.text = option2.text = unit;
            fromUnit.appendChild(option1);
            toUnit.appendChild(option2);
        });
    }
}

// Conversion logic
function convert() {
    const type = document.getElementById("conversionType").value;
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    if (isNaN(inputValue) || !fromUnit || !toUnit) {
        document.getElementById("result").innerText = "Please enter a valid input and select units!";
        return;
    }

    let result;

    // Temperature conversion
    if (type === "Temperature") {
        result = convertTemperature(inputValue, fromUnit, toUnit);
    }
    // Mass conversion
    else if (type === "Mass") {
        result = convertMass(inputValue, fromUnit, toUnit);
    }
    // Length conversion
    else if (type === "Length") {
        result = convertLength(inputValue, fromUnit, toUnit);
    }

    document.getElementById("result").innerText = 
        `${inputValue} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

// Temperature Conversion Function
function convertTemperature(value, from, to) {
    let celsius;

    // Convert to Celsius first
    if (from === "Celsius") celsius = value;
    if (from === "Fahrenheit") celsius = (value - 32) * 5 / 9;
    if (from === "Kelvin") celsius = value - 273.15;

    // Convert from Celsius to target unit
    if (to === "Celsius") return celsius;
    if (to === "Fahrenheit") return (celsius * 9 / 5) + 32;
    if (to === "Kelvin") return celsius + 273.15;
}

// Mass Conversion Function
function convertMass(value, from, to) {
    const inKilograms = {
        Kilograms: value,
        Grams: value / 1000,
        Pounds: value / 2.20462,
        Ounces: value / 35.274
    };

    const conversions = {
        Kilograms: inKilograms[from],
        Grams: inKilograms[from] * 1000,
        Pounds: inKilograms[from] * 2.20462,
        Ounces: inKilograms[from] * 35.274
    };

    return conversions[to];
}

// Length Conversion Function
function convertLength(value, from, to) {
    const inMeters = {
        Meters: value,
        Centimeters: value / 100,
        Kilometers: value * 1000,
        Miles: value / 0.000621371,
        Inches: value / 39.3701
    };

    const conversions = {
        Meters: inMeters[from],
        Centimeters: inMeters[from] * 100,
        Kilometers: inMeters[from] / 1000,
        Miles: inMeters[from] * 0.000621371,
        Inches: inMeters[from] * 39.3701
    };

    return conversions[to];
}
