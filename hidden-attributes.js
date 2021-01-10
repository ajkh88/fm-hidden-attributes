/* eslint-disable max-lines */
import { personalityData, mediaHandlingData} from "./hidden-attributes-data.js" 

function updatePersonalityTypes() {
    const newGenTypes = {
        low_self_belief: "Low self belief",
        spineless: "Spineless",
        realist: "Realist",
        unsporting: "Unsporting",
        low_determination: "Low determination",
        easily_discouraged: "Easily discouraged",
        unambitious: "Unambitious",
        casual: "Casual",
        slack: "Slack",
        temperamental: "Temperamental"
    };
    const checkbox = document.getElementById("is_newgen");
    const select = document.getElementById("personality_types");
   
    if (checkbox.checked) {
        for (let key in newGenTypes) {
            // eslint-disable-next-line no-prototype-builtins
            if (newGenTypes.hasOwnProperty(key)) {
                const option = document.createElement("option");
                option.value = key;
                option.text = newGenTypes[key];
                select.add(option);
            }
        }
    } else {
        const options = Array.from(select.options);

        for (let index = options.length - 1; index >= 0; index--) {
            const option = options[index];
            const optionValue = option.value;

            if (newGenTypes[optionValue]) {
                select.remove(index);
            }
        }
    }
    sortSelect(select);
    updateTable();
}

function sortSelect(selElem) {
    const tmpAry = [];
    for (let i = 0; i < selElem.options.length; i++) {
        tmpAry[i] = [];
        tmpAry[i][0] = selElem.options[i].text;
        tmpAry[i][1] = selElem.options[i].value;
    }
    tmpAry.sort();
    while (selElem.options.length > 0) {
        selElem.options[0] = null;
    }
    for (let i = 0; i < tmpAry.length; i++) {
        const op = new Option(tmpAry[i][0], tmpAry[i][1]);
        selElem.options[i] = op;
    }
}

export function updateTable() {
    const personalityTypeSelector = document.getElementById("personality_types")
    const personalityType = personalityTypeSelector.options[personalityTypeSelector.selectedIndex].text;

    const mediaHandlingStyleSelector = document.getElementById("media_handling");
    const mediaHandlingStyle = mediaHandlingStyleSelector.options[mediaHandlingStyleSelector.selectedIndex].text;

    const personalityAttributes = personalityData[personalityType];
    const mediaHandlingAttributes = mediaHandlingData[mediaHandlingStyle];
    const attributes = mergeAttributes(personalityAttributes, mediaHandlingAttributes);

    const determination = document.getElementById("determination").value

    applyDeterminationCases(determination, personalityAttributes.cases_determination, attributes)
    console.log("Starting point: " + JSON.stringify(attributes))
    applyNotCases(personalityAttributes.cases_not, attributes);
    applyNotCases(mediaHandlingAttributes.cases_not, attributes);

    for (const attribute in attributes) {
        document.getElementById(attribute + "_min").innerHTML = attributes[attribute].min;
        document.getElementById(attribute + "_max").innerHTML = attributes[attribute].max;
    }
}

function applyDeterminationCases(determination, determinationCases, calculatedAttributes) {
    for (const c of determinationCases) {
        switch(c) {
            case "1_5_ambition": {
                if (determination >= 1 && determination <= 5) {
                    calculatedAttributes.ambition.min = Math.max(10, calculatedAttributes.ambition.min)
                    calculatedAttributes.ambition.max = Math.min(20, calculatedAttributes.ambition.max)
                }
                break;
            }
            case "1_9_professionalism": {
                if (determination >= 1 && determination <= 9) {
                    calculatedAttributes.professionalism.min = Math.max(5, calculatedAttributes.professionalism.min)
                    calculatedAttributes.professionalism.max = Math.min(20, calculatedAttributes.professionalism.max)
                }
                break;
            }
            case "1_9_pressure": {
                if (determination >= 1 && determination <= 9) {
                    calculatedAttributes.pressure.min = Math.max(4, calculatedAttributes.pressure.min)
                    calculatedAttributes.pressure.max = Math.min(20, calculatedAttributes.pressure.max)
                }
                break;
            }
            case "1_9_sportsmanship": {
                if (determination >= 1 && determination <= 9) {
                    calculatedAttributes.sportsmanship.min = Math.max(1, calculatedAttributes.sportsmanship.min)
                    calculatedAttributes.sportsmanship.max = Math.min(17, calculatedAttributes.sportsmanship.max)
                }
                break;
            }
            case "11_20_sportsmanship": {
                if (determination >= 11 && determination <= 20) {
                    calculatedAttributes.sportsmanship.min = Math.max(5, calculatedAttributes.sportsmanship.min)
                    calculatedAttributes.sportsmanship.max = Math.min(20, calculatedAttributes.sportsmanship.max)
                }
                break;
            }
            case "15_20_pressure": {
                if (determination >= 15 && determination <= 20) {
                    calculatedAttributes.pressure.min = Math.max(15, calculatedAttributes.pressure.min)
                    calculatedAttributes.pressure.max = Math.min(16, calculatedAttributes.pressure.max)
                }
                break;
            }
            case "18_20_ambition": {
                if (determination >= 18 && determination <= 20) {
                    calculatedAttributes.ambition.min = Math.max(1, calculatedAttributes.ambition.min)
                    calculatedAttributes.ambition.max = Math.min(9, calculatedAttributes.ambition.max)
                }
                break;
            }
            default: {
                break;
            }
        }
    }
}

function applyNotCases(notCases, calculatedAttributes, referenceStats) {
    console.log("notCases " + JSON.stringify(notCases))

    for (const c of notCases) {
        console.log("calculation " + c)
        switch(c) {
            case "temperamental": {
                const temRange = {
                    min: 5,
                    max: 20
                }
                const proRange = {
                    min: 11,
                    max: 20
                }
                calculateRanges(calculatedAttributes, temRange, "temperament", referenceStats);
                calculateRanges(calculatedAttributes, proRange, "professionalism", referenceStats);
                break;
            }
            case "professional": {
                const proRange = {
                    min: 1,
                    max: 17,
                    attr_min: 1,
                    attr_max: 4
                }
                const temRange = {
                    min: 1,
                    max: 9
                }
                calculateRanges(calculatedAttributes, proRange, "professionalism", referenceStats);
                calculateRanges(calculatedAttributes, temRange, "temperament", referenceStats);
                break;
            }
            case "ambitious": {
                const ambRange = {
                    min: 1,
                    max: 15
                }
                const loyRange = {
                    min: 10,
                    max: 20
                }
                calculateRanges(calculatedAttributes, ambRange, "ambition", referenceStats);
                calculateRanges(calculatedAttributes, loyRange, "loyalty", referenceStats);
                break;
            }
            case "unabitious": {
                const ambRange = {
                    min: 6,
                    max: 20
                }
                const loyRange = {
                    min: 1,
                    max: 10
                }
                calculateRanges(calculatedAttributes, ambRange, "ambition", referenceStats);
                calculateRanges(calculatedAttributes, loyRange, "loyalty", referenceStats);
      
                break;
            }
            case "loyal": {
                const loyRange = {
                    min: 1,
                    max: 17
                }
                const ambRange = {
                    min: 8,
                    max: 20
                }
                calculateRanges(calculatedAttributes, loyRange, "loyalty", referenceStats);
                calculateRanges(calculatedAttributes, ambRange, "ambition", referenceStats);
                break;
            }
            case "spirit_or_jovial": {
                const temRange = {
                    min: 1,
                    max: 9
                }
                const preRange = {
                    min: 1,
                    max: 14
                }
                calculateRanges(calculatedAttributes, temRange, "temperament", referenceStats);
                calculateRanges(calculatedAttributes, preRange, "pressure", referenceStats);
                break;
            }
            case "perfectionist": {
                const proRange = {
                    min: 1,
                    max: 17
                }
                const ambRange = {
                    min: 10,
                    max: 17
                }
                calculateRanges(calculatedAttributes, proRange, "professionalism", referenceStats);
                calculateRanges(calculatedAttributes, ambRange, "ambition", referenceStats);
                break;
            }
            case "evasive": {
                const preRange = {
                    min: 1,
                    max: 14,
                }
                const proRange = {
                    min: 1,
                    max: 14,
                }
                calculateRanges(calculatedAttributes, preRange, "pressure", referenceStats);
                calculateRanges(calculatedAttributes, proRange, "professionalism", referenceStats);
                break;
            }
            case "level_headed": {
                const loyRange = {
                    min: 1,
                    max: 10
                }
                const spoRange = {
                    min: 1,
                    max: 11
                }
                const proRange = {
                    min: 1,
                    max: 12
                }
                calculateRanges(calculatedAttributes, loyRange, "loyalty", referenceStats);
                calculateRanges(calculatedAttributes, spoRange, "sportsmanship", referenceStats);
                calculateRanges(calculatedAttributes, proRange, "professionalism", referenceStats);
                break;
            }
            case "confrontational": {
                const temRange = {
                    min: 8,
                    max: 20
                }
                const spoRange = {
                    min: 8,
                    max: 20
                }
                calculateRanges(calculatedAttributes, temRange, "temperament", referenceStats);
                calculateRanges(calculatedAttributes, spoRange, "sportsmanship", referenceStats);
                break;
            }
            case "unflappable": {
                const temRange = {
                    min: 1,
                    max: 14
                }
                const preRange = {
                    min: 1,
                    max: 14
                }
                calculateRanges(calculatedAttributes, temRange, "temperament", referenceStats);
                calculateRanges(calculatedAttributes, preRange, "pressure", referenceStats);
                break;
            }
            case "reserved": {
                const conRange = {
                    min: 6,
                    max: 14
                }
                const proRange = {
                    min: 1,
                    max: 14
                }
                calculateRanges(calculatedAttributes, conRange, "controversy", referenceStats);
                calculateRanges(calculatedAttributes, proRange, "professionalism", referenceStats);
                break;
            }
        }
    }
}

// eslint-disable-next-line max-params
function calculateRanges(calculatedAttributes, range, attribute, referenceStats) {
    console.log("calculating range for : " + JSON.stringify(range) + " with attr " + attribute)
   
    if (isOverlapping(referenceStats[attribute], calculatedAttributes[attribute])) {
        calculatedAttributes[attribute].min = Math.max(range.min, calculatedAttributes[attribute].min)
        calculatedAttributes[attribute].max = Math.min(range.max, calculatedAttributes[attribute].max)
    }
    console.log("calculatedAttributes: " + JSON.stringify(calculatedAttributes))
}

function isOverlapping(a, b) {
    return a.min <= b.max && b.min <= a.max;
}

function mergeAttributes(personalityAttributes, mediaHandlingAttributes) {
    const personalityAttributesToMerge = [
        "professionalism",
        "determination",
        "ambition",
        "pressure",
        "temperament",
        "loyalty",
        "sportsmanship",
    ]
    let result = {}
    for (const attribute of personalityAttributesToMerge) {
        let currentAttribute = {}
        currentAttribute.min = Math.max(personalityAttributes[attribute].min, mediaHandlingAttributes[attribute].min)
        currentAttribute.max = Math.min(personalityAttributes[attribute].max, mediaHandlingAttributes[attribute].max)
        result[attribute] = currentAttribute
    }
    result.controversy = mediaHandlingAttributes.controversy
    return result
}

function generateSelectorElement(name) {
    let option = document.createElement("option");
    option.text = name;
    option.value = name.toLowerCase().replace(" ", "_").replace("-", "_");
    return option;
}

(function (window, document) {
    window.onload = init;

    function init() {
        const personalityTypeNames = Object.keys(personalityData)
        const personalitySelector = document.getElementById("personality_types");
        personalityTypeNames.forEach((name) => {
            personalitySelector.appendChild(generateSelectorElement(name));
        });
        
        const mediaHandlingStyleNames = Object.keys(mediaHandlingData)
        const mediaHandlingSelector = document.getElementById("media_handling");
        mediaHandlingStyleNames.forEach((name) => {
            mediaHandlingSelector.appendChild(generateSelectorElement(name));
        });

        // Event handling - update on change of any value
        personalitySelector.addEventListener("change", () => {
            updateTable();
        });

        mediaHandlingSelector.addEventListener("change", () => {
            updateTable();
        });

        const determinationSelector = document.getElementById("determination");
        determinationSelector.addEventListener("change", () => {
            updateTable();
        });

        const newgenSelector = document.getElementById("is_newgen")
        newgenSelector.checked = true;
        newgenSelector.addEventListener("change", () => {
            updateTable();
            updatePersonalityTypes();
        });
    }
})(window, document);



