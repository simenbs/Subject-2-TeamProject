function activityView() {
    loadLocalStorage();
    loadLocalStorageNewThemeAct();
    let activity = model.interface.activity.selectedNK;
    document.getElementById("dashcontent").innerHTML =
    /*HTML*/` 
    <div class="activitywrapper styled-scrollbars2">
        <div class="inneractivitywrapper">
            <div class="activitynavbar">
                <form action="...">
                    <label for="keySkills"></label>
                    <select name="nøkkelkompetanser" id="keySkills" onchange='chooseNK(this)'></select>
                </form>
                <div class="circleplus flex center" onclick="updateViewAddTab()">+</div>
            </div>
            <hr class="activityhr">
           
           </div>  <div id="keySkillAdd">
        </div>
    </div>
    `;


    for (i in activity) {
        document.getElementById("keySkills").innerHTML += `<option  value="${activity[i]}">${activity[i]}</option>`;
    }
    loadActivity();
    //setTimeout(function (){loadActivity("<option value='all'>Alle</option>")}, 1000);
}

/*      <form action="...">
            <label for="Velg tidsrom">Tidsrom:</label>
            <select name="mål" id="DDMgoals" onchange='selectTimeframe(this)'>
            <option value='all'>Alle</option>
            <option value='year'>Siste året</option>
            <option value='halfYear'>Siste 6 mnd</option>
            <option value='quarterYear'>Siste 3 mnd</option>
            <option value='month'>Siste mnd</option>
            </select>
        </form> */
