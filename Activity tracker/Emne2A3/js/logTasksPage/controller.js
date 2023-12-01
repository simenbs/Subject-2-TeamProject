let validAArr = [];
function validAcheck(workObject, form){
let count = 0;
for( let U of validAArr){
    let options = document.getElementById(U);
    if(options && options?.checked){
        count++;
    }
}
if(count > 0){
    processActLog(workObject, form);
}
else{alert('Du har ikke valgt noe')}
}

function processActLog(workObject, form) {  //denne funksjonen tar i mot data fra aktivitetsloggings siden og behandler den og oppdaterer modellen. Forandringen er ikke permanent/lagret i localstorage før man trykker på "lagre" knappen på siden

    if (form.id == "logTform") {
        let rightNow = new Date();
        
        let newTime = rightNow.toLocaleTimeString();
        
        let newDate = rightNow.toLocaleDateString();
        
        let yaya = Object.keys(workObject);
        
        let newObj = [];
        let taskID = "A-H-P" + model.data.activityHistory.planned.length;
        for (ya in yaya) {
            let newstring = yaya[ya];
            newObj = JSON.parse(newstring);
            
            let array;
            if (newObj.type == 'repeat') {
                array = model.data.plannedActList.repeat;
                
            }
            else if (newObj.type == 'once') {
                array = model.data.plannedActList.once;
                
            }
            let filterId = newObj.id; 
            let objects = array.find(obj => obj.taskId === filterId);

            let overviewOne = model.data.plannedActList.once;
            let overviewTwo = model.data.plannedActList.repeat;
            let historyArray = model.data.activityHistory.planned;
           
            let filterBy = newObj.id;
            let historyObj = historyArray.find(obj => obj.oldId === filterBy);
           
            if (historyObj == undefined) { //hvis det ikke allerede finnes et object i history knyttet til den aktuelle aktiviteten, og det er snakk om en gjentagende aktivitet ( har en property = frequency), lages en ny entry i history
                
                let yesorno = Boolean(objects.time);
                
                if (objects.frequency) {
                    historyArray.push({
                        taskId: taskID,
                        oldId: newObj.id,
                        name: objects.name,
                        theme: objects.theme,
                        date: { from: objects.frequency.from, to: objects.frequency.to },
                        time: undefined,
                        reps: { totalReps: objects.reps.totalReps, repsDone: 1, repsLeft: objects.reps.totalReps - 1 },
                        isDone: 'false', //true/False 
                        lastlogged: [rightNow],
                        wasDone: { time: ' ', date: ' ' },
                    });
                    
                }
                if (objects.time) {  //hvis det er snakk om en oppgave som gjøres én gang, vil den ha egenskapen "time" i stedet for "frequency". Engangsoppgaver pushes direkte til history.


                    historyArray.push({
                        taskId: taskID,
                        oldId: newObj.id,
                        name: objects.name,
                        theme: objects.theme,
                        date: { from: objects.date, to: objects.date },
                        time: objects.time,
                        reps: { totalReps: '1', repsDone: '1', repsLeft: '0' },
                        isDone: 'true', //true/False 
                        wasDone: { time: newTime, date: newDate },
                    });
                    
                }
            }
            else if (historyObj !== undefined && objects.frequency) { //om det allerede finnes en entry i history for den aktuelle gjentagende aktiviteten, blar du opp i history og finner entry knytta til aktiviteten og teller opp og ned på antall ganger gjort og antall gjenstående ganger 
                
                let histArray = model.data.activityHistory.planned;
                let taskId = newObj.id; 
                let index = histArray.findIndex(obj => obj.oldId === taskId);
                
                historyArray[index].reps.repsDone += 1;
                historyArray[index].reps.repsLeft -= 1;
                historyArray[index].lastlogged.push(rightNow);

            }

            if (newObj.type == 'repeat') {
                
                let actArray = model.data.plannedActList.repeat;
                let actId = newObj.id;
                let actIndex = actArray.findIndex(obj => obj.taskId === actId);
                if (overviewTwo[actIndex].reps.repsDone == 0) {
                    overviewTwo[actIndex].reps.repsDone += 1;
                    overviewTwo[actIndex].reps.repsLeft = overviewTwo[actIndex].reps.totalReps - overviewTwo[actIndex].repsDone;
                    
                }
                else {
                    overviewTwo[actIndex].reps.repsDone += 1;
                    overviewTwo[actIndex].reps.repsLeft -= 1;
                    
                }

                for (task in overviewTwo) {
                    
                    if (overviewTwo[task].taskId[3] == taskID[5]) {
                        
                    }
                }
            }
        }
    }

    ItIsDone();
}
let standardTaskArrayID = [];
function makeReq(ID, checkID) {
    let idArr = standardTaskArrayID;
    
    for(let ele of idArr){
        let validID = "valid" + ele;
        let dropdown = document.getElementById(ele);
        let checkbox = document.getElementById(validID);
        if(checkbox.checked){dropdown.required = true;}
        else if(!checkbox.checked){dropdown.required = false;}
    }
    
}
let validIDArr = [];
function validTS(logFormTSObject, logTSForm) {
    
    let checks = 0;
    let index = 0;
    for (let ID of validIDArr) {
        let element = document.getElementById(ID);
        if (element.checked) {
            
            checks++;
        }
        index++;
        
    }
    if(checks > 0){
        processActLogTS(logFormTSObject, logTSForm);
    }
    else if (checks == 0) {
        alert("Ingen er valgt, sjekk en eller flere bokser");
    }
}

function processActLogTS(workObject, form) { //denne funksjonen tar i mot data om logget spontane aktiviteter
    let theKeys = Object.keys(workObject);
    let entry = Object.entries(workObject);
    
    let firstKey = [theKeys[0]];
    let secondKeys = [theKeys[1]];
    
    let newObj = [];
    let taskID = "A-H-S" + model.data.activityHistory.spontan.length;

    let d = new Date(); 
    let nowTime = d.toLocaleTimeString();
    let nowDate = d.toLocaleDateString();
    for (key in secondKeys) {
        let newstring = secondKeys[key];
        
        newObj = JSON.parse(newstring);
        
        let history = model.data.activityHistory.spontan;
        history.push({ "taskId": taskID, "name": newObj.name, "theme": entry[0][1], "done": { "time": nowTime, "date": nowDate } });
        
    }


    ItIsDone();
}


function toggleHideInfo(ele) {
    
    document.getElementById(model.data.plannedActList.repeat[ele].taskId).classList.toggle("hideLogInfo");
}

function logProcessAct() {

}

function loadoptions(i) {
    let theme = model.interface.addGoalAct.themeSelector;
    let keyRing = "id" + i;
    for (let T of theme) {
        let element = document.getElementById(keyRing);
        if (element && element.innerHTML.length < 284) {
            element.innerHTML += `<option value=${T}>${T}</option>`;
        }


    }


}


function ItIsDone() {
    saveLocalStorage();
    dashView();
}