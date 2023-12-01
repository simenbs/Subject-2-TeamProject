let currentWeek = model.data.diaryLogData.length;
let shortModel= model.data.diaryLogData[currentWeek-1];
let currentDate = new Date().getDay()-1;
let date = currentDate;


function loadDashContent(date) {
    document.getElementById('dashGoals').innerHTML = loadDailyTasks();
    document.getElementById('dashDiary').innerHTML = loadWeeklyLog(date);
}

function loadDailyTasks() {
    let loadedGoals = '';

    for (let i = 0; i < model.data.goalList.daily.length && i < 4; i++) {
        loadedGoals += `
        <div class="dashspacing">
            <div class="flex center">
                <p>${model.data.goalList.daily[i].name}</p>
                <progress class="dashprog" id="" value="${model.data.goalList.daily[i].progress}" max="100"></progress>
            </div>
        </div>`;
    }
    return loadedGoals;
}

function loadWeeklyLog(changeDate) {
    currentWeek = model.data.diaryLogData.length;
    shortModel = model.data.diaryLogData[currentWeek-1].diary;
    let weekDays = [shortModel.monday, shortModel.tuesday, shortModel.wednesday, shortModel.thursday, shortModel.friday];
    let loadedWeekDay = createWeeklyLog(changeDate, weekDays);

    return loadedWeekDay
}

function createWeeklyLog(selectedDate, weekDays){
    let todayIs = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag']
    let string = `
    <div class="dashspacing">
        <div class="center">
            <div class="flex center">
                <div>Uke ${currentWeek}:</div>
                <div class="marginspacing">Planen for ${todayIs[selectedDate]}!</div>
            </div>
            <div class="flexcol center">
                <div>Humør: ${weekDays[selectedDate].mood}</div>
                <div>
                    <div class="textbox scroll">
                        <div>Fremgang:</div> 
                        ${weekDays[selectedDate].progress}
                    </div>
                    <div class="textbox scroll">
                        <div>Neste steg:</div> 
                        ${weekDays[selectedDate].nextStep}
                    </div>
                </div>
            </div>
            <div>
                <button class="switchpages" onclick="prevDate()"><i class="fa-regular fa-circle-left"></i></i></button>
                <button class="switchpages" onclick="nextDate()"><i class="fa-regular fa-circle-right"></i></i></button>
            </div>
        </div>
    </div>`;

    return string;
}

function nextDate(){
    if(date < 4){
        date++;
        loadDashContent(date);
        return;
    }
    else if(date == 4){
        date = 0;
        loadDashContent(date);
        return;
    }
}

function prevDate(){
    if(date == 0){
        date = 4;
        loadDashContent(date);
        return;
    }
    else if(date > 0){
        date--;
        loadDashContent(date);
        return;
    }
}

/* <div>${model.data.diaryLogData[0].monday.mood}</div>
        <div>${model.data.diaryLogData[0].monday.progress}</div>
        <div>${model.data.diaryLogData[0].monday.nextStep}</div> */