// Dette er Dashboardet




function updateViewDash(){
    html = /*html*/ `
    <button onclick="activityView()">Aktiviteter</button>
    <button onclick="goalsView()">Mål</button>
    <button onclick="updateViewHistory()">Historie</button>
    <button onclick="updateViewLogTab()">Loggfør dagbok</button>
    <button onclick="updateViewTaskPage()">Loggfør aktivitet</button>
    `;
    app.innerHTML = html;
}