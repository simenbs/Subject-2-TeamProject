


//updateView();
function updateViewAddTab() {
    const selector = document.getElementById('selector');
    document.getElementById("dashcontent").innerHTML = /*html*/ `
    <div class="back">
        <img class="decor" id="loginimg" src="">
        <div class="container">
            <div class="innercontainer"></div>
            <div id="selector"></div>
           <!-- <div id="submitA">
                <input class="innersubmit submit" type="submit" value="Submit" onclick="saveLocalStorage(); updateViewAddTab()">
            </div>-->
        </div>
    </div>
    `;
addActView();
}

function updateViewAddTabG() {
    const selector = document.getElementById('selector');
    document.getElementById("dashcontent").innerHTML = /*html*/ `
    <div class="back">
        <img class="decor" id="loginimg" src="">
        <div class="container">
            <div class="innercontainer"></div>
            <div id="selector"></div>
            <!--<div id="submitG">
                <input class="innersubmit submit" type="submit" value="Submit">
            <div>-->
        </div>
    </div>
    `;
    addGoalView();
}





// View

function addGoalView() {


    const selector = document.getElementById('selector');
    let theme = model.interface.addGoalAct.themeSelector;
    let task = model.interface.addGoalAct.activitySelector;
    let timeUnit = model.interface.addGoalAct.taskFrequency.repeats.taskFrequencyUnit;
    html = /*html*/ `
    <form action="..." id="addGform">
        <div id="selectorG" class="flex center">
            <div class="textaligncenter">
                <div><label for="keyThemes">NK tema:</label></div><button type="button" onclick=""></button>
                <div><select class="dropdown" name="NKTemaer" id="keyThemes"></select>   </div>
            </div><div id="addT" class="circleplus flex center" onclick="addmoreTG(this)">+</div><div id="putMoreTG"></div>
            <div class="textaligncenter">
                <div><label for="selectTask">Aktivitet</label></div>
                <div><select class="dropdown" name="NKActivity" id="selectTask"></select></div>
            </div><div id="addA" class="circleplus flex center" onclick="addmoreAG(this)">+</div><div id="putMoreAG"></div>
        </div>
        <div class="grid center">
            <div id="goalDes">
                <div>
                    <div><label for="freeDesc">Beskriv målet ditt</label></div>
                    <div><input id="freeDesc" type="text" name="description" /></div>
                </div>
            </div>
            <div class="timingG">
                <h3>Gjentagelser:</h3>
                <div id="repeating">
                    <div class="grid">
                        <div class="spacing">
                            <div><label for="units">tidsenhet</label></div>
                            <div><label for="unitrep">repitisjoner</label></div>
                            <div><label for="fromDate">Fra Dato</label></div>
                            <div><label for="toDate">Frem til Dato</label></div>
                        </div>
                        <div class="spacing center">
                            <div><select id="units" class="dropdown" name="selectUnit"></select></div>
                            <div><input type="number" id="unitrep" name="unitReps" min="1" /></div>
                            <div><input id="fromDate" type="date" name="fromDate" /></div>
                            <div><input id="toDate" type="date" name="toDate" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="submitG">
                <input class="innersubmit submit" type="submit" value="Submit">
            <div>
    </form>
    `;
    selector.innerHTML = html;
    for (i in theme) {
        document.getElementById("keyThemes").innerHTML += `<option value="${theme[i]}">${theme[i]}</option>`;
    }
    for (i in task) {
        document.getElementById("selectTask").innerHTML += `<option value="${task[i]}">${task[i]}</option>`;
    }

    for (i in timeUnit) {
        document.getElementById("units").innerHTML += `<option value="${timeUnit[i]}">${timeUnit[i]}</option>`;
    }

    const addGForm = document.getElementById("addGform");
    addGForm.addEventListener('submit', function (event) {
        //forhindrer standard innsendelse av data fra form
        event.preventDefault();

        //bruk formData API til å fange data fra form
        const addFormGData = new FormData(this);

        //konverter form data til et object
        const addFormGObject = Object.fromEntries(addFormGData.entries());
        

        //nå kan det brukes i modellen ()?
        processG(addFormGObject, addGForm);


    })
}


// View

function addActView() {
    const selector = document.getElementById('selector');

    let theme = model.interface.addGoalAct.themeSelector;
    let task = model.interface.addGoalAct.activitySelector;
    let timeUnit = model.interface.addGoalAct.taskFrequency.repeats.taskFrequencyUnit;
    html = /*html*/ `
    <form action="..." id="addTform">
        <div id="selectorA" class="flex center">
            <div class="textaligncenter">
                <div><label for="keyThemes">NK tema:</label></div>
                <select class="dropdown" name="NKTemaer" id="keyThemes"></select>
            </div><div id="addT" class="circleplus flex center" onclick="addmoreT(this)">+</div><div id="putMoreT"></div>
            <div class="textaligncenter">
                <div><label for="selectTask">Aktivitet</label></div>
                <select class="dropdown" name="NKActivity" id="selectTask"></select>
            </div><div id="addA" class="circleplus flex center" onclick="addmoreA(this)">+</div><div id="putMoreA"></div>
        </div>
        <div class="grid">
            <div>
                <div class="flex alignright">
                    <h3>én gang:</h3> 
                    <input type="checkbox" id="checkonce" value="unchecked" onclick="checkingbox(this)" />
                </div>
                <div class="flex alignright">
                    <h3>Gjentagende:</h3> 
                    <input type="checkbox" id="checkrep" value="unchecked"onclick="checkingbox(this)"/>
                </div>
            </div>
            <div class="checkedchoice">
                <div id="once">
                    <div class="grid">
                        <div class="spacing">
                            <div><label for="onceDate">Dato</label></div>
                            <div><label for="units">Klokkeslett</label></div>
                        </div>
                        <div class="spacing">
                            <div><input id="onceDate" type="date" name="date" /></div>
                            <div><input id="onceTime" type="time" name="time" /></div>
                        </div>
                    </div>
                </div>
                <div id="repeating">
                    <div class="grid">
                        <div class="spacing">
                            <div class="lol"><label for="units">tidsenhet</label></div>
                            <div class="lol"><label for="unitrep">repetisjoner</label></div>
                            <div class="lol"><label for="fromDate">Fra Dato</label></div>
                            <div class="lol"><label for="toDate">Frem til Dato</label></div>
                        </div>
                        <div class="spacing">
                            <div class="lol"><select id="units" name="selectUnit" class="inputsandselects"></select></div>
                            <div class="lol"><input type="number" id="unitrep" name="unitReps" min="1" class="inputsandselects"/></div>
                            <div class="lol"><input id="fromDate" type="date" name="fromDate" class="inputsandselects"/></div>
                            <div class="lol"><input id="toDate" type="date" name="toDate" class="inputsandselects"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="submitA">
        <input class="innersubmit submit" type="submit" value="Submit" >
   </div>
    </form>
    `;
    selector.innerHTML = html;
    for (i in theme) {
        document.getElementById("keyThemes").innerHTML += `<option value="${theme[i]}">${theme[i]}</option>`;
        
    }
    for (i in task) {
        document.getElementById("selectTask").innerHTML += `<option value="${task[i]}">${task[i]}</option>`;
    }

    for (i in timeUnit) {
        document.getElementById("units").innerHTML += `<option value="${timeUnit[i]}">${timeUnit[i]}</option>`;
    }

    const addTForm = document.getElementById("addTform");
    addTForm.addEventListener('submit', function (event) {
        //forhindrer standard innsendelse av data fra form
        event.preventDefault();

        //bruk formData API til å fange data fra form
        const addFormTData = new FormData(this);
        

        //konverter form data til et object
        const addFormTObject = Object.fromEntries(addFormTData.entries());
        


        //nå kan det brukes i modellen ()?
        //processA(addFormTObject, addTForm);
        validA(addFormTObject, addTForm);


    })



}








