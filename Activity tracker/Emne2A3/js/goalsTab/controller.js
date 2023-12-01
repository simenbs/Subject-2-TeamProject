let selectedGoal = 'all';
let goalsData = model.data.goalList;

function selectGoal(selection) {
    selectedGoal = selection.value;
    loadGoals()
}

function loadGoals() {
    let loadedGoals = '';

    if (selectedGoal == 'daily' || selectedGoal == 'all') {
        for (let i = 0; i < goalsData.daily.length; i++) {
            loadedGoals += `<div class="flex activitiesTheme border">
            <div><p> ${goalsData.daily[i].name}</p></div>
            <div class="activityprog"><progress class="prog border" id="" value="${goalsData.daily[i].progress}" max="100"></progress></div>
            </div>`;
        }
    }
    if (selectedGoal == 'weekly' || selectedGoal == 'all') {
        for (let i = 0; i < goalsData.weekly.length; i++) {
            loadedGoals += `<div class="flex activitiesTheme border">
            <div><p> ${goalsData.weekly[i].name}</p></div>
            <div class="activityprog"><progress class="prog border" id="" value="${goalsData.weekly[i].progress}" max="100"></progress></div>
            </div>`;
        }
    }
    if (selectedGoal == 'monthly' || selectedGoal == 'all') {
        for (let i = 0; i < goalsData.monthly.length; i++) {
            loadedGoals += `<div class="flex activitiesTheme border">
            <div><p> ${goalsData.monthly[i].name}</p></div>
            <div class="activityprog"><progress class="prog border" id="" value="${goalsData.monthly[i].progress}" max="100"></progress></div>
            </div>`;
        }
    }
    if (selectedGoal == 'year' || selectedGoal == 'all') {
        for (let i = 0; i < goalsData.year.length; i++) {
            loadedGoals += `<div class="flex activitiesTheme border">
            <div><p> ${goalsData.year[i].name}</p></div>
            <div class="activityprog"><progress class="prog border" id="" value="${goalsData.year[i].progress}" max="100"></progress></div>
            </div>`;
        }
    }
    if (selectedGoal == 'fiveYearPlan' || selectedGoal == 'all') {
        for (let i = 0; i < goalsData.fiveYearPlan.length; i++) {
            loadedGoals +=`<div class="flex activitiesTheme border">
            <div><p> ${goalsData.fiveYearPlan[i].name}</p></div>
            <div class="activityprog"><progress class="prog border" id="" value="${goalsData.fiveYearPlan[i].progress}" max="100"></progress></div>
            </div>`;
        }
    }

    document.getElementById('viewGoals').innerHTML = loadedGoals;
}