const weekArray = [];
const questArray = [];
let weekNumber = 1;
let weekNrDisplay = 1;

function logProcess() {

    if (model.data.diaryLogData[weekNrDisplay - 1] && weekNrDisplay -1 < model.data.diaryLogData.length) {
        
        if (document.getElementById("x1y1inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.monday.mood = document.getElementById("x1y1inp").value;
        }
        if (document.getElementById("x2y1inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.monday.progress = document.getElementById("x2y1inp").value;
        }
        if (document.getElementById("x3y1inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.monday.nextStep = document.getElementById("x3y1inp").value;
        }

        if (document.getElementById("x1y2inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.tuesday.mood = document.getElementById("x1y2inp").value;
        }
        if (document.getElementById("x2y2inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.tuesday.progress = document.getElementById("x2y2inp").value;
        }
        if (document.getElementById("x3y2inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.tuesday.nextStep = document.getElementById("x3y2inp").value;
        }

        if (document.getElementById("x1y3inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.wednesday.mood = document.getElementById("x1y3inp").value;
        }
        if (document.getElementById("x2y3inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.wednesday.progress = document.getElementById("x2y3inp").value;
        }
        if (document.getElementById("x3y3inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.wednesday.nextStep = document.getElementById("x3y3inp").value;
        }

        if (document.getElementById("x1y4inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.thursday.mood = document.getElementById("x1y4inp").value;
        }
        if (document.getElementById("x2y4inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.thursday.progress = document.getElementById("x2y4inp").value;
        }
        if (document.getElementById("x3y4inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.thursday.nextStep = document.getElementById("x3y4inp").value;
        }

        if (document.getElementById("x1y5inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.friday.mood = document.getElementById("x1y5inp").value;
        }
        if (document.getElementById("x2y5inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.friday.progress = document.getElementById("x2y5inp").value;
        }
        if (document.getElementById("x3y5inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.friday.nextStep = document.getElementById("x3y5inp").value;
        }
saveLocalStorage();
    }
    else if (weekNrDisplay > model.data.diaryLogData.length && weekNrDisplay < model.data.diaryLogData.length+2) {
        
        model.data.diaryLogData[weekNrDisplay -1] =
            {
                date: '',  // You can set a default date value here
                uke: weekNrDisplay,
                diary: {
                    monday: { mood: '', progress: '', nextStep: '' },
                    tuesday: { mood: '', progress: '', nextStep: '' },
                    wednesday: { mood: '', progress: '', nextStep: '' },
                    thursday: { mood: '', progress: '', nextStep: '' },
                    friday: { mood: '', progress: '', nextStep: '' },
                }
            };
            saveLocalStorage();
        
        if (document.getElementById("x1y1inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.monday.mood = document.getElementById("x1y1inp").value;
        }
        if (document.getElementById("x2y1inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.monday.progress = document.getElementById("x2y1inp").value;
        }
        if (document.getElementById("x3y1inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.monday.nextStep = document.getElementById("x3y1inp").value;
        }

        if (document.getElementById("x1y2inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.tuesday.mood = document.getElementById("x1y2inp").value;
        }
        if (document.getElementById("x2y2inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.tuesday.progress = document.getElementById("x2y2inp").value;
        }
        if (document.getElementById("x3y2inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.tuesday.nextStep = document.getElementById("x3y2inp").value;
        }

        if (document.getElementById("x1y3inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.wednesday.mood = document.getElementById("x1y3inp").value;
        }
        if (document.getElementById("x2y3inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.wednesday.progress = document.getElementById("x2y3inp").value;
        }
        if (document.getElementById("x3y3inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.wednesday.nextStep = document.getElementById("x3y3inp").value;
        }

        if (document.getElementById("x1y4inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.thursday.mood = document.getElementById("x1y4inp").value;
        }
        if (document.getElementById("x2y4inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.thursday.progress = document.getElementById("x2y4inp").value;
        }
        if (document.getElementById("x3y4inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.thursday.nextStep = document.getElementById("x3y4inp").value;
        }

        if (document.getElementById("x1y5inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.friday.mood = document.getElementById("x1y5inp").value;
        }
        if (document.getElementById("x2y5inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.friday.progress = document.getElementById("x2y5inp").value;
        }
        if (document.getElementById("x3y5inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.friday.nextStep = document.getElementById("x3y5inp").value;
        }
    }saveLocalStorage();
    
}

function weekCounterDisplay(btn) {

    if (btn.innerHTML == "neste uke⇨") {
        
        weekNrDisplay++;
        updateViewDiaryPage();
    }

    if (btn.innerHTML == "⇦forrige uke" && weekNrDisplay != 1) {
        
        weekNrDisplay--;
        updateViewDiaryPage();
    }

}

function confirmQuit() {

    if (confirm("Har du husket å Lagre?") == true) {
        dashView();
    }
    else { logDiaryView(); }
}
let mondayArr = [];
let tuesdayArr = [];
let wednesdayArr = [];
let thursdayArr = [];
let fridayArr = [];
for (let i = 1; i < 4; i++) {
    let monday = "x" + i + "y1";
    mondayArr.push(monday);
    let tuesday = "x" + i + "y2";
    tuesdayArr.push(tuesday);
    let wednesday = "x" + i + "y3";
    wednesdayArr.push(wednesday);
    let thursday = "x" + i + "y4";
    thursdayArr.push(thursday);
    let friday = "x" + i + "y5";
    fridayArr.push(friday);
}
let weekArr = [];
weekArr.push(mondayArr);
weekArr.push(tuesdayArr);
weekArr.push(wednesdayArr);
weekArr.push(thursdayArr);
weekArr.push(fridayArr);



function inputGen(td) {
    let key = td.id + "inp";
    console.log(key);
    let loginfo = td.innerText;
    console.log(Boolean(loginfo));
    let logvalue = document.getElementById(key);

    let weekDay;
    
    for (let i = 0; i < 5; i++) {
        if (weekArr[i].includes(td.id)) {
        
            if (i == 0) {
                weekDay = "days"; 
            }
            if (i == 1) {
                weekDay = "days"; 
            }
            if (i == 2) {
                weekDay = "days"; 
            }
            if (i == 3) {
                weekDay = "days"; 
            }
            if (i == 4) {
                weekDay = "days"; 
            }
        }


    }
    
    if (td.innerText) {
        document.getElementById(td.id).innerHTML = `<input type="text" class="logspace writeonthis ${weekDay}" id=${key} value=${loginfo} />`;
    }
    else if (td.innerHTML){console.log("hei");}
    else {
        document.getElementById(td.id).innerHTML = `<input type="text" class="logspace writeonthis ${weekDay}" id=${key} value="" />`;
    }

}