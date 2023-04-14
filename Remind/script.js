const medTable = [];


const medTableElem = document.getElementById("main");

console.dir(medTableElem);

const addMedBtn = document.getElementById("add-med");
const remMedBtn = document.getElementById("rem-med");

addMedBtn.onclick = function (){
    medTableElem.innerHTML = 
    `<form id="add-med-form">
        <label for="med-name">Medication:</label><br>
        <input type="text" id="med-name" name="med-name"><br>
        <input type="button" id="add-med-form-add" value="Add Medication">
        <input type="button" id="add-med-form-cancel" value="Cancel">
    </form>`;

    const addMedFormName = document.getElementById("med-name");
    const addMedFormBtn = document.getElementById("add-med-form-add");
    const addMedFormCancelBtn = document.getElementById("add-med-form-cancel");
    
    addMedFormBtn.onclick = function (){
        console.log(addMedFormName.value);
        medTable.push(addMedFormName.value);
        console.log(medTable);

        displayMedTbl();
    }
    addMedFormCancelBtn.onclick = function (){
        displayMedTbl();
    }

};

remMedBtn.onclick = function (){
    medTableElem.innerHTML = 
    `<p>Enter medication number to remove:</p>
    <form id="rem-med-form">
        <label for="med-name">Number:</label><br>
        <input type="text" id="med-name" name="med-name"><br>
        <input type="button" id="rem-med-form-add" value="Remove Medication">
        <input type="button" id="rem-med-form-cancel" value="Cancel">
    </form>`;

    medsList = [];
    for (m = 0; m < medTable.length; m++){
        medsList.push((m + 1) + ":\t" + medTable[m]); 
    }

    medsListHTML = "\n<br />\n";
    for (m = 0; m < medsList.length; m++){
        medsListHTML += ("<p>" + medsList[m] + "</p>\n");
    }

    medTableElem.innerHTML += medsListHTML;

    const remMedFormName = document.getElementById("med-name");
    const remMedFormBtn = document.getElementById("rem-med-form-add");
    const remMedFormCancelBtn = document.getElementById("rem-med-form-cancel");
    
    remMedFormBtn.onclick = function (){
        console.log(remMedFormName.value);
        const medIndex = (parseInt(remMedFormName.value) - 1);
        if (medIndex == 0){
            medTable.shift();
        }
        else {
            medTable.splice(medIndex, medIndex);
        }

        displayMedTbl();
    }
    remMedFormCancelBtn.onclick = function (){
        displayMedTbl();
    }

}


function displayMedTbl(){
    medTableHTML = "";
    if (medTable.length == 0){
        medTableHTML += 
        `<h1>No medications added</h1>
        <p>Click the "+ Add" button to add a medication reminder.</p>`;
    }
    else {
        medTableHTML += "<ul>\n";
        for (m of medTable){
            medTableHTML += ("<li>\n" + "<b>" + m + "</b>\n" +
            `<br />
            <label>
                Time: 
                <input type="time">
            </label>
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>` + 
            "\n</li>\n"); 
        }
        medTableHTML += "</ul>";
    }

    medTableElem.innerHTML = medTableHTML;
}

