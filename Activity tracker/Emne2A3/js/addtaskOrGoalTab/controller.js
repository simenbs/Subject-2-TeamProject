function checkingbox(box) { //sørger for at begge boksene ikke kan være checked samtidig
    let repeatbox = document.getElementById("checkrep");
    let oncebox = document.getElementById("checkonce");
    let otherbox;
    let idArrayOnce = ["onceDate", "onceTime"];
    let idArrayRep = ["units", "unitrep", "fromDate", "toDate"];
    
    if (box == repeatbox) {

        if (oncebox.checked && box.checked) {
            
            console.log("hey");
            oncebox.checked = false;
            for (let IDF of idArrayOnce) {
                let elementF = document.getElementById(IDF);
                elementF.required = false;
                
            }
        }
        if (box.checked) {
            for (let ID of idArrayRep) {
                let element = document.getElementById(ID);
                element.required = true;
                
            }
        }
        if (!box.checked) {
            for (let ID of idArrayRep) {
                let element = document.getElementById(ID);
                element.required = false;
                
            }
        }

    }
    else if (box == oncebox) {
        if (repeatbox.checked && box.checked) {
            
            repeatbox.checked = false;
            for (let IDF of idArrayRep) {
                let elementF = document.getElementById(IDF);
                elementF.required = false;
                
            }
        }
        if (box.checked) {
            for (let ID of idArrayOnce) {
                let element = document.getElementById(ID);
                element.required = true;
                
            }
        }
        if (!box.checked) {
            for (let ID of idArrayOnce) {
                let element = document.getElementById(ID);
                element.required = false;
                
            }
        }

    }

}

function validA(addFormTObject, addTForm) { //om du har trykket på submit uten å fylle ut skjema, blir data ikke sendt videre til processA

    let idArr = ["checkonce", "checkrep"]
    let validOnce = document.getElementById(idArr[0]);
    let validRep = document.getElementById(idArr[1]);
    if (validOnce.checked || validRep.checked) {
        processA(addFormTObject, addTForm);
    }
    else { alert('velg "én gang" eller "gjentagende"'); }
}

function processA(object, form) { //data fra legg til aktivitet
    console.log(form.id);
    console.log(object.date);
    let workObject = object;
    if (form.id == "addTform") {
        console.log("aktivitet");
        console.log(workObject);
        let repeatbox = document.getElementById("checkrep");
        let oncebox = document.getElementById("checkonce");

        if (oncebox.checked == true) {
            proOnce(workObject);
        }
        if (repeatbox.checked == true) {
            proRep(workObject);
        }
    }
}

function processG(object, form) { //data fra legg til mål
    let workObject = object;

    if (form.id == "addGform") {
        
        let daily = model.data.goalList.daily;
        let weekly = model.data.goalList.weekly;
        let monthly = model.data.goalList.monthly;
        let yearly = model.data.goalList.year;
        let five = model.data.goalList.fiveYearPlan;
        let vague = model.data.goalList;
        if (workObject.selectUnit == "Daglig") {
            proDay(workObject, daily);
        }
        else if (workObject.selectUnit == "Uke") {
            proWeek(workObject, weekly);
        }
        else if (workObject.selectUnit == "Måned") {
            proMonth(workObject, monthly);
        }
        else if (workObject.selectUnit == "År") {
            proYear(workObject, yearly);
        }
        else if (workObject.selectUnit == "5 år") {
            pro5Year(workObject, five);
        }
        else if (workObject.selectUnit == "none") {
            alert("Velg en tidenhet");
        }
    } return workObject;
}

//disse hører til aktivitet

function proOnce(newData) {
    let oneTime = model.data.plannedActList.once;
    let i = oneTime.length;
    oneTime.push({

        taskId: "A-O" + i,
        name: newData.NKActivity,
        theme: newData.NKTemaer,
        date: newData.date,
        time: newData.time,

    },);
    loggedToModelA();
}

function proRep(newData) {
    
    let repTime = model.data.plannedActList.repeat;
    let i = repTime.length;
    repTime.push({
        taskId: "A-R" + i,
        name: newData.NKActivity,
        theme: newData.NKTemaer,
        reps: { totalReps: '', repsDone: 0, repsLeft: '', },
        frequency: { unit: newData.selectUnit, repeatsPr: newData.unitReps, from: newData.fromDate, to: newData.toDate },

    },);
    loggedToModelA();
}

//disse hører til mål
function proDay(newData, daily) {
    let i = daily.length + 1;
    daily.push({
        taskId: "G-D" + i,
        name: newData.NKActivity,
        theme: newData.NKTemaer,
        taskText: newData.description,
        frequency: {
            repeatsPr: newData.unitReps,
            from: newData.fromDate,
            to: newData.toDate
        }
    })
    loggedToModelG();
}
function proWeek(newData, weekly) {
    let i = weekly.length + 1;
    weekly.push({
        taskId: "G-W" + i,
        name: newData.NKActivity,
        theme: newData.NKTemaer,
        taskText: newData.description,
        frequency: {
            repeatsPr: newData.unitReps,
            from: newData.fromDate,
            to: newData.toDate
        }
    })
    loggedToModelG();
}
function proMonth(newData, monthly) {
    let i = monthly.length + 1;
    monthly.push({
        taskId: "G-M" + i,
        name: newData.NKActivity,
        theme: newData.NKTemaer,
        taskText: newData.description,
        frequency: {
            repeatsPr: newData.unitReps,
            from: newData.fromDate,
            to: newData.toDate
        }
    })
    loggedToModelG();
}
function proYear(newData, yearly) {
    let i = yearly.length + 1;
    yearly.push({
        taskId: "G-Y" + i,
        name: newData.NKActivity,
        theme: newData.NKTemaer,
        taskText: newData.description,
        frequency: {
            repeatsPr: newData.unitReps,
            from: newData.fromDate,
            to: newData.toDate
        }
    })
    loggedToModelG();
}
function pro5Year(newData, five) {
    let i = five.length + 1;
    five.push({
        taskId: "G-5" + i,
        name: newData.NKActivity,
        theme: newData.NKTemaer,
        taskText: newData.description,
        frequency: {
            repeatsPr: newData.unitReps,
            from: newData.fromDate,
            to: newData.toDate
        }
    })
    loggedToModelG();
}

function loggedToModelA() {
    alert("new was logged!");
    countUp();
    saveLocalStorage();
    activityView();
}
function loggedToModelG() {
    alert("new was logged!");
    countUp();
    saveLocalStorage();
    goalsView();
}

function countUp() {
    for (ele in model.data.plannedActList.repeat) {
        
        let startDate = new Date(model.data.plannedActList.repeat[ele].frequency.from);
        let endDate = new Date(model.data.plannedActList.repeat[ele].frequency.to);
        let startTime = startDate.getTime();
        let endTime = endDate.getTime();
        let differenceInMilliseconds = endTime - startTime;


        //pr day:
        let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        if (model.data.plannedActList.repeat[ele].frequency.unit == 'Daglig') {
            let repsPrDay = model.data.plannedActList.repeat[ele].frequency.repeatsPr;
            let totalRepsD = differenceInDays * repsPrDay
            differenceInDays = Math.round(differenceInDays);
            totalRepsD = Math.round(totalRepsD);
            
            model.data.plannedActList.repeat[ele].reps.totalReps = totalRepsD;
            if (model.data.activityHistory.planned[ele]) {
                model.data.activityHistory.planned[ele].reps.totalReps = totalRepsD;

            }
        }




        //pr week
        let differenceInWeeks = differenceInDays / 7;
        if (model.data.plannedActList.repeat[ele].frequency.unit == 'Uke') {
            repsPrWeek = model.data.plannedActList.repeat[ele].frequency.repeatsPr;
            totalRepsU = differenceInWeeks * repsPrWeek;
            differenceInWeeks = Math.round(differenceInWeeks);
            totalRepsU = Math.round(totalRepsU);
            
            model.data.plannedActList.repeat[ele].reps.totalReps = totalRepsU;
            if (model.data.activityHistory.planned[ele]) {
                model.data.activityHistory.planned[ele].reps.totalReps = totalRepsU;

            }
        }

        //pr Month
        let differenceInMonths = differenceInDays / 30.44;

        if (model.data.plannedActList.repeat[ele].frequency.unit == 'Måned') {
            repsPrMonth = model.data.plannedActList.repeat[ele].frequency.repeatsPr;
            totalRepsM = differenceInMonths * repsPrMonth;
            differenceInMonths = Math.round(differenceInMonths);
            totalRepsM = Math.round(totalRepsM);
            
            model.data.plannedActList.repeat[ele].reps.totalReps = totalRepsM;
            if (model.data.activityHistory.planned[ele]) {
                model.data.activityHistory.planned[ele].reps.totalReps = totalRepsM;

            }
        }
        //pr Year
        let differenceInYears = differenceInMonths / 12;
        if (model.data.plannedActList.repeat[ele].frequency.unit == "År") {
            repsPrYear = model.data.plannedActList.repeat[ele].frequency.repeatsPr;
            totalRepsY = differenceInYears * repsPrYear;
            differenceInYears = Math.round(differenceInYears);
            totalRepsY = Math.round(totalRepsY);
            
            model.data.plannedActList.repeat[ele].reps.totalReps = totalRepsY;
            if (model.data.activityHistory.planned[ele]) {
                model.data.activityHistory.planned[ele].reps.totalReps = totalRepsY;
            }
        }
        //pr 5Year
        let differenceIn5Years = differenceInYears / 5;
        if (model.data.plannedActList.repeat[ele].frequency.unit == "5 År") {
            repsPr5Year = model.data.plannedActList.repeat[ele].frequency.repeatsPr;
            totalReps5Y = differenceIn5Years * repsPr5Year;
            differenceIn5Years = Math.round(differenceIn5Years);
            totalReps5Y = Math.round(totalReps5Y);
            
            model.data.plannedActList.repeat[ele].reps.totalReps = totalReps5Y;
            if (model.data.activityHistory.planned[ele]) {
                model.data.activityHistory.planned[ele].reps.totalReps = totalReps5Y;
            }
        }
       
    }
}

function addmoreA(act) {
    let task = model.interface.addGoalAct.activitySelector;
    let goal = document.getElementById("putMoreA");
    if (!goal.innerHTML) {
        goal.innerHTML = `<input id="moreAct" class="addMore" value="" type="text"/>`;
    }
    else if (goal.innerHTML) {
        let newInput = document.getElementById("moreAct");
        if (newInput.value) {
            
            task.push(newInput.value);
            saveLocalStorageNewThemeAct();
        }
        goal.innerHTML = null;
    }
    if (act.innerHTML == '+') {
        act.innerHTML = "enter";
    } else {
        act.innerHTML = '+';
        updateViewAddTab();
    }
}
function addmoreT(theme) {
    let task = model.interface.addGoalAct.themeSelector;
    let goal = document.getElementById("putMoreT");
    if (!goal.innerHTML) {
        goal.innerHTML = `<input id="moreTheme" class="addMore" value="" type="text"/>`;
    }
    else if (goal.innerHTML) {
        let newInput = document.getElementById("moreTheme");
        if (newInput.value) {
            
            task.push(newInput.value);
            saveLocalStorageNewThemeAct();
        }
        goal.innerHTML = null;
    }
    if (theme.innerHTML == '+') {
        theme.innerHTML = "enter";
    } else {
        theme.innerHTML = '+';
        updateViewAddTab();
    }

}
function addmoreAG(act) {
    let task = model.interface.addGoalAct.activitySelector;
    let goal = document.getElementById("putMoreAG");
    if (!goal.innerHTML) {
        goal.innerHTML = `<input id="moreActG" class="addMore" value="" type="text"/>`;
    }
    else if (goal.innerHTML) {
        let newInput = document.getElementById("moreActG");
        if (newInput.value) {
            
            task.push(newInput.value);
            saveLocalStorageNewThemeAct();
        }
        goal.innerHTML = null;
    }
    if (act.innerHTML == '+') {
        act.innerHTML = "enter";
    } else {
        act.innerHTML = '+';
        updateViewAddTabG();
    }

}
function addmoreTG(theme) {
    let task = model.interface.addGoalAct.themeSelector;
    let goal = document.getElementById("putMoreTG");
    if (!goal.innerHTML) {
        goal.innerHTML = `<input id="moreThemeG" class="addMore" value="" type="text"/>`;
    }
    else if (goal.innerHTML) {
        let newInput = document.getElementById("moreThemeG");
        if (newInput.value) {
            
            task.push(newInput.value);
            saveLocalStorageNewThemeAct();
        }
        goal.innerHTML = null;
    }
    if (theme.innerHTML == '+') {
        theme.innerHTML = "enter";

    } else {
        theme.innerHTML = '+';
        updateViewAddTabG();
    }

}