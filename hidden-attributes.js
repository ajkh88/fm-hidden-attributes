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
    console.log("Initial select value is - " + select.value);
   
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
    select.contentWindow.location.reload(true);
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

    for (const attribute in determinationCasesApplied) {
        document.getElementById(attribute + "_min").innerHTML = determinationCasesApplied[attribute].min;
        document.getElementById(attribute + "_max").innerHTML = determinationCasesApplied[attribute].max;
    }
}

function applyDeterminationCases(determination, determinationCases, calculatedAttributes) {
    let result = Object.create(calculatedAttributes);
    for (const c of determinationCases) {
        switch(c) {
            case "1_5_ambition":
                if (determination >= 1 && determination <= 5) {
                    result.ambition.min = Math.max(10, result.ambition.min)
                    result.ambition.max = Math.min(20, result.ambition.max)
                }
                break;
            case "1_9_professionalism":
                if (determination >= 1 && determination <= 9) {
                    result.professionalism.min = Math.max(5, result.professionalism.min)
                    result.professionalism.max = Math.min(20, result.professionalism.max)
                }
                break;
            case "1_9_pressure":
                if (determination >= 1 && determination <= 9) {
                    result.pressure.min = Math.max(4, result.pressure.min)
                    result.pressure.max = Math.min(20, result.pressure.max)
                }
                break;
            case "1_9_sportsmanship":
                if (determination >= 1 && determination <= 9) {
                    result.sportsmanship.min = Math.max(1, result.sportsmanship.min)
                    result.sportsmanship.max = Math.min(17, result.sportsmanship.max)
                }
                break;
            case "11_20_sportsmanship":
                if (determination >= 11 && determination <= 20) {
                    result.sportsmanship.min = Math.max(5, result.sportsmanship.min)
                    result.sportsmanship.max = Math.min(20, result.sportsmanship.max)
                }
                break;
            case "15_20_pressure":
                if (determination >= 15 && determination <= 20) {
                    result.pressure.min = Math.max(15, result.pressure.min)
                    result.pressure.max = Math.min(16, result.pressure.max)
                }
                break;
            case "18_20_ambition":
                if (determination >= 18 && determination <= 20) {
                    result.ambition.min = Math.max(1, result.ambition.min)
                    result.ambition.max = Math.min(9, result.ambition.max)
                }
                break;
            default:
                break;
        }
    }
    return result;
}

function applyNotCases(notCases, calculatedAttributes) {

    for (const c of notCases) {
        console.log(c)
        switch(c) {
            case "temperamental":
                break;
            case "professional":
                break;
            case "ambitious":
                break;
            case "unabitious":
                break;
            case "loyal":
                break;
            case "spirit_or_jovial":
                break;
            case "perfectionist":
                break;
        }
    }

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
         // TODO BUG IN MEDIA HANDLING PARSING

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
        newgenSelector.addEventListener("change", () => {
            updateTable();
            updatePersonalityTypes();
        });
    }
})(window, document);



