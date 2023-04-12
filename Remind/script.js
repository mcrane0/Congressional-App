const medTable = [];


const medTableElem = document.getElementById("main");

console.dir(medTableElem);

const addMedBtn = document.getElementById("add-med");

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

        // PUT IN SEPARATE FUNCTION SOMETIME
        medTableElem.innerHTML = "<ul>\n";
        for (m of medTable){
            medTableElem.innerHTML += ("<li>\n" + m + 
            `<input type="time"> 
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>` + 
            "\n</li>\n"); 
        }
        medTableElem.innerHTML += "\n</ul>"
    }
    addMedFormCancelBtn.onclick = function (){
        if (medTable.length == 0){
            medTableElem.innerHTML = 
            `<h1>No medications added</h1>
            <p>Click the "+ Add" button to add a medication reminder.</p>`;
        }
        else {
            // PUT IN SEPARATE FUNCTION SOMETIME
        medTableElem.innerHTML = "<ul>\n";
        for (m of medTable){
            medTableElem.innerHTML += ("<li>\n" + m + 
            `<input type="time"> 
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>` + 
            "\n</li>\n"); 
        }
        medTableElem.innerHTML += "\n</ul>"
        }
    }


};

