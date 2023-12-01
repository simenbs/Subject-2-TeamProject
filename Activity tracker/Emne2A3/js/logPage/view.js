
//updateView();
function updateViewLogTab() {
    
    html = /*html*/ `
    <button onclick="updateViewDash()">Tilbake til Dash</button>
    `;
    app.innerHTML = html;
}


function updateViewDiaryPage() {
    loadLocalStorage();
    weekNumber = 1;
    
    let logview = document.getElementById("logview");
    document.getElementById("dashcontent").innerHTML = /*html*/ `
    <div class="logBack flex center">
            <!--<img class="decor" id="loginimg" src="img/loginimage.png">-->
            <div class="logContainer logContrainer2">
                <div class="logInnercontainer">
                    <!--<button class="addbtnlog" id="addAct" onclick="logActView()">Logg aktivitet</button>-->
                    <!--<button  class="addbtnlog" id="addGoal" onclick="logDiaryView(); loadLocalStorage()">Logg dagbok</button>-->
                    <button class="addbtnlog" onclick="logProcess()">lagre logg</button>
                </div>
                <div id="logview flex center">
                    <div id="weekBtn">
                        <button class="addbtn weekbtnheight" onclick="weekCounterDisplay(this)">⇦forrige uke</button>
                        <button class="addbtn weekbtnheight" onclick="weekCounterDisplay(this)">neste uke⇨</button>
                    </div>
                    <div class="flex center">
                        <table class="logtable" id="diaryTable">
                            <tr id="y0">
                                <td>Uke ${weekNrDisplay}</td>
                                <td>${model.interface.logPage.diary.edges.dailyQuestNO[0]}</td>
                                <td>${model.interface.logPage.diary.edges.dailyQuestNO[1]}</td>
                                <td>${model.interface.logPage.diary.edges.dailyQuestNO[2]}</td>
                            </tr>
                            <tr id="y1">
                                <td>${model.interface.logPage.diary.edges.weekdayNO[0]}</td>
                            </tr>
                            <tr id="y2">
                                <td>${model.interface.logPage.diary.edges.weekdayNO[1]}</td>
                            </tr>
                            <tr id="y3">
                                <td>${model.interface.logPage.diary.edges.weekdayNO[2]}</td>
                            </tr>
                            <tr id="y4">
                                <td>${model.interface.logPage.diary.edges.weekdayNO[3]}</td>
                            </tr>
                            <tr id="y5">
                                <td>${model.interface.logPage.diary.edges.weekdayNO[4]}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
    let theDays = Object.keys(model.interface.logPage.diary.content);
    

    for (let y = 1; y <= 5; y++) {
        let key = "y" + y;
        if (model.data.diaryLogData[weekNrDisplay - 1] != undefined) {
            let theMood = model.data.diaryLogData[weekNrDisplay - 1].diary[theDays[y - 1]].mood;
            let theProg = model.data.diaryLogData[weekNrDisplay - 1].diary[theDays[y - 1]].progress;
            let theNext = model.data.diaryLogData[weekNrDisplay - 1].diary[theDays[y - 1]].nextStep;
            let state = [theMood, theProg, theNext];
            for (let x = 1; x <= 3; x++) {
                let lock = "x" + x + key;
                document.getElementById(key).innerHTML += `<td onclick="inputGen(this)" class="addbtnlog" id=${lock}>${state[x - 1]}</td>`;

            }
        }
        else {
            let theMood = '';
            let theProg = '';
            let theNext = '';
            let state = [theMood, theProg, theNext];
            for (let x = 1; x <= 3; x++) {
                let lock = "x" + x + key;
                document.getElementById(key).innerHTML += `<td onclick="inputGen(this)" class="addbtnlog" id=${lock}>${state[x - 1]}</td>`;

            }
        }


    }

}



function logDiaryView() {
    loadLocalStorage();
    document.getElementById("logview").innerHTML = `
    <div id="weekBtn">
        <button class="addbtn weekbtnheight" onclick="weekCounter(this)">⇦forrige uke</button>
        <button class="addbtn weekbtnheight" onclick="weekCounter(this)">neste uke⇨</button></div>
    <table id="diaryTable"></table>`;

    for (let i = 0; i < 6; i++) {
        let trId = "y" + i;
        document.getElementById("diaryTable").innerHTML += `<tr id=${trId} class="tableD"></tr>`;
        for (let y = 0; y < 4; y++) {
            let tdId = "x" + y + "y" + i;
            if (i == 0 && y == 0) {
                document.getElementById(trId).innerHTML += `<td class="weekNrSquare" id=${tdId}>Uke ${weekNumber}</td>`;
            }
            else if (i == 0) {
                questArray.push(tdId);
                document.getElementById(trId).innerHTML += `<td class="infosquare" id=${tdId}>O</td>`;
            }
            else if (y == 0) {
                weekArray.push(tdId);
                document.getElementById(trId).innerHTML += `<td class="weekSquare" id=${tdId}></td>`;
            }
            else if (i != 0 && y != 0) {
                if (i == 1) {
                    let monday = tdId + "inp";
                    if (i == 1 && y == 1) {
                        let mondayMood = model.data.diaryLogData[ weekNumber -1].diary.monday.mood;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId} class="writeonthis"><input class="logSpace, days logcolor" id=${monday} type="text" value="${mondayMood}"  /></td>`;
                    }
                    else if (i == 1 && y == 2) {
                        let mondayProg = model.data.diaryLogData[ weekNumber -1].diary.monday.progress;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId} class="writeonthis"><input class="logSpace, days logcolor" id=${monday} type="text" value="${mondayProg}" /></td>`;
                    }
                    else if (i == 1 && y == 3) {
                        let mondayNext = model.data.diaryLogData[ weekNumber -1].diary.monday.nextStep;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId} class="writeonthis"><input class="logSpace, days logcolor" id=${monday} type="text" value="${mondayNext}" /></td>`;
                    }

                }
                if (i == 2) {
                    let tuesday = tdId + "inp";
                    if(i ==2 && y == 1){
                        let tuesdayMood = model.data.diaryLogData[ weekNumber -1].diary.tuesday.mood;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId} class="writeonthis"><input class="logSpace, days logcolor" id=${tuesday}  type="text" value="${tuesdayMood}" /></td>`;
                    }
                    else if(i==2 && y == 2){
                        let tuesdayProg = model.data.diaryLogData[ weekNumber -1].diary.tuesday.progress;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId} class="writeonthis"><input class="logSpace, days logcolor" id=${tuesday}  type="text" value="${tuesdayProg}" /></td>`;
                    }
                    else if(i ==2 && y == 3){
                        let tuesdayNext = model.data.diaryLogData[ weekNumber -1].diary.tuesday.nextStep;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId} class="writeonthis"><input class="logSpace, days logcolor" id=${tuesday}  type="text" value="${tuesdayNext}" /></td>`;
                    }
                }
                if (i == 3) {
                    let wednesday = tdId + "inp";
                    if(i==3 && y == 1){
                        let wednesdayMood = model.data.diaryLogData[ weekNumber -1].diary.wednesday.mood;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId} class="writeonthis"><input class="logSpace, days logcolor" id=${wednesday} type="text" value="${wednesdayMood}"  /></td>`;
                    }
                    else if(i==3 && y == 2){
                        let wednesdayProg = model.data.diaryLogData[ weekNumber -1].diary.wednesday.progress;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}class="writeonthis"><input class="logSpace, days logcolor" id=${wednesday} type="text" value="${wednesdayProg}"  /></td>`;
                    }
                    else if(i== 3 && y == 3){
                        let wednesNext = model.data.diaryLogData[ weekNumber -1].diary.wednesday.nextStep;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}class="writeonthis"><input class="logSpace, days logcolor" id=${wednesday} type="text"  value="${wednesNext}" /></td>`;
                    }
                }
                if (i == 4) {
                    let thursday = tdId + "inp";
                    if(i==4 && y == 1){
                        let thursdayMood = model.data.diaryLogData[ weekNumber -1].diary.thursday.mood;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId} class="writeonthis"><input class="logSpace, days logcolor" id=${thursday} type="text" value="${thursdayMood}"  /></td>`;
                    }
                    else if(i==4 && y == 2){
                        let thursdayProg = model.data.diaryLogData[ weekNumber -1].diary.thursday.progress;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId} class="writeonthis"><input class="logSpace, days logcolor" id=${thursday} type="text" value="${thursdayProg}"  /></td>`;
                    }
                    else if(i==4 && y == 3){
                        let thursdayNext = model.data.diaryLogData[ weekNumber -1].diary.thursday.nextStep;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId} class="writeonthis"><input class="logSpace, days logcolor" id=${thursday}  type="text" value="${thursdayNext}" /></td>`;
                    }
                }
                if (i == 5) {
                    let friday = tdId + "inp";
                    if(i==5 && y == 1){
                        let fridayMood = model.data.diaryLogData[ weekNumber -1].diary.friday.mood;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId} class="writeonthis"><input class="logSpace, days logcolor" id=${friday}  type="text" value="${fridayMood}" /></td>`;
                    }
                    else if(i ==5 && y == 2){
                        let fridayProg = model.data.diaryLogData[ weekNumber -1].diary.friday.progress;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId} class="writeonthis"><input class="logSpace, days logcolor" id=${friday}  type="text" value="${fridayProg}" /></td>`;
                    }
                    else if(i ==5 && y == 3){
                        let fridayNext = model.data.diaryLogData[ weekNumber -1].diary.friday.nextStep;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId} class="writeonthis"><input class="logSpace, days logcolor" id=${friday}  type="text" value="${fridayNext}" /></td>`;
                    }
                }
            }

        }
    }

    let u = 0;
    for (day in model.interface.logPage.diary.edges.weekdayNO) {
        document.getElementById(weekArray[u]).innerHTML = model.interface.logPage.diary.edges.weekdayNO[day];
        u++;
    }
    let l = 0;
    for (que in model.interface.logPage.diary.edges.dailyQuestNO) {
        document.getElementById(questArray[l]).innerHTML = model.interface.logPage.diary.edges.dailyQuestNO[que];
        l++;
    }
}

