
let selectedNK = 'all';


function chooseNK(ddmNK) {
    selectedNK = ddmNK.value;
    loadActivity();
}

function loadActivity() {
let myOnceTasks = model.data.plannedActList.once;
let myRepeatTasks = model.data.plannedActList.repeat;
    
    let onceList = '';
    let repeatList = '';
    document.getElementById('keySkillAdd').innerHTML = '';
    for (let i = 0; i < myOnceTasks.length; i++) {
        let histArray = model.data.activityHistory.planned;
        let taskId = myOnceTasks[i]?.taskId; // replace this with your taskId
        let histindex = histArray.findIndex(obj => obj.oldId === taskId);
        
        if (myOnceTasks[i].name && (selectedNK == myOnceTasks[i].theme || selectedNK == 'all') && !histArray[histindex]) {

            
            onceList += `
            <div class="flex activitiesTheme border">
                <div><p>${myOnceTasks[i].name}</p></div>
                <div class="activityprog"></div>
            </div>`;
        }
    }
    for (let y = 0; y < myRepeatTasks.length; y++) {
        let progValue = (myRepeatTasks[y].reps.repsDone / myRepeatTasks[y].reps.totalReps) * 100;
        if (myRepeatTasks[y].name && (selectedNK == myRepeatTasks[y].theme || selectedNK == 'all') && progValue < 100) {
            

            repeatList += `
            <div class="flex activitiesTheme border">
                <div><p>${myRepeatTasks[y].name}</p></div>
                <div class="activityprog"><progress class="prog border" id="" value="${progValue}" max="100"></progress></div>
            </div>`;
        }
    }

    document.getElementById('keySkillAdd').innerHTML = `${onceList}  ${repeatList}  `;

}


//reps: {totalReps: '',repsDone: 0,repsLeft: '', },
//totalreps == 100%
//repsDone == value
// repsDone/totalreps = x*100