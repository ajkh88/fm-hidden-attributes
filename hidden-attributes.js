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
    const merged = mergeAttributes(personalityAttributes, mediaHandlingAttributes);

    const determination = document.getElementById("determination").value

    const determinationCasesApplied = applyDeterminationCases(determination, personalityAttributes.cases_determination, merged)
    const notCasesApplied = applyNotCases(personalityAttributes.cases_not, determinationCasesApplied);
    const mediaNotCasesApplied = applyNotCases(mediaHandlingAttributes.cases_not, notCasesApplied);

    for (const attribute in determinationCasesApplied) {
        document.getElementById(attribute + "_min").innerHTML = mediaNotCasesApplied[attribute].min;
        document.getElementById(attribute + "_max").innerHTML = mediaNotCasesApplied[attribute].max;
    }
}

function applyDeterminationCases(determination, determinationCases, calculatedAttributes) {
    let result = Object.create(calculatedAttributes);
    for (const c of determinationCases) {
        switch(c) {
            case "1_5_ambition": {
                if (determination >= 1 && determination <= 5) {
                    result.ambition.min = Math.max(10, result.ambition.min)
                    result.ambition.max = Math.min(20, result.ambition.max)
                }
                break;
            }
            case "1_9_professionalism": {
                if (determination >= 1 && determination <= 9) {
                    result.professionalism.min = Math.max(5, result.professionalism.min)
                    result.professionalism.max = Math.min(20, result.professionalism.max)
                }
                break;
            }
            case "1_9_pressure": {
                if (determination >= 1 && determination <= 9) {
                    result.pressure.min = Math.max(4, result.pressure.min)
                    result.pressure.max = Math.min(20, result.pressure.max)
                }
                break;
            }
            case "1_9_sportsmanship": {
                if (determination >= 1 && determination <= 9) {
                    result.sportsmanship.min = Math.max(1, result.sportsmanship.min)
                    result.sportsmanship.max = Math.min(17, result.sportsmanship.max)
                }
                break;
            }
            case "11_20_sportsmanship": {
                if (determination >= 11 && determination <= 20) {
                    result.sportsmanship.min = Math.max(5, result.sportsmanship.min)
                    result.sportsmanship.max = Math.min(20, result.sportsmanship.max)
                }
                break;
            }
            case "15_20_pressure": {
                if (determination >= 15 && determination <= 20) {
                    result.pressure.min = Math.max(15, result.pressure.min)
                    result.pressure.max = Math.min(16, result.pressure.max)
                }
                break;
            }
            case "18_20_ambition": {
                if (determination >= 18 && determination <= 20) {
                    result.ambition.min = Math.max(1, result.ambition.min)
                    result.ambition.max = Math.min(9, result.ambition.max)
                }
                break;
            }
            default: {
                break;
            }
        }
    }
    return result;
}

function applyNotCases(notCases, calculatedAttributes) {
    let result = Object.create(calculatedAttributes);
    for (const c of notCases) {
        console.log(c)
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
                calculateRanges(result, temRange, "temperament")
                calculateRanges(result, proRange, "professionalism")
                break;
            }
            case "professional": {
                const proRange = {
                    min: 1,
                    max: 17
                }
                const temRange = {
                    min: 1,
                    max: 9
                }
                calculateRanges(result, proRange, "professionalism")
                calculateRanges(result, temRange, "temperament")
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
                calculateRanges(result, ambRange, "ambition")
                calculateRanges(result, loyRange, "loyalty")
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
                calculateRanges(result, ambRange, "ambition")
                calculateRanges(result, loyRange, "loyalty")
      
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
                calculateRanges(result, loyRange, "loyalty")
                calculateRanges(result, ambRange, "ambition")
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
                calculateRanges(result, temRange, "temperament")
                calculateRanges(result, preRange, "pressure")
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
                calculateRanges(result, proRange, "professionalism")
                calculateRanges(result, ambRange, "ambition")
                break;
            }
            case "evasive": {
                const preRange = {
                    min: 1,
                    max: 14
                }
                const proRange = {
                    min: 1,
                    max: 14
                }
                calculateRanges(result, preRange, "pressure")
                calculateRanges(result, proRange, "professionalism")
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
                calculateRanges(result, loyRange, "loyalty")
                calculateRanges(result, spoRange, "sportsmanship")
                calculateRanges(result, proRange, "professionalism")
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
                calculateRanges(result, temRange, "temperament")
                calculateRanges(result, spoRange, "sportsmanship")
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
                calculateRanges(result, temRange, "temperament")
                calculateRanges(result, preRange, "pressure")
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
                calculateRanges(result, conRange, "controversy")
                calculateRanges(result, proRange, "professionalism")
                break;
            }
        }
    }
}

function calculateRanges(result, range, facet) {
    console.log(JSON.stringify(result))
    if (isOverlapping(range, result[facet])) {
        result[facet].min = Math.max(range[facet].min, result[facet].min)
        result[facet].max = Math.min(range[facet].max, result[facet].max)
    }
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



