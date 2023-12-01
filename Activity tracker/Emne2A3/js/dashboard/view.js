function dashView() {
    view.innerHTML = /*HTML*/`
    <div class="dashwrapper">
    <div class="dashtabs">
        <div class="flex center">
            <div class="">
                <div class="flex center">
                    <div class="dashtitle">
                        <h1 class="dashbutton" onclick="dashView()">Dashboard</h1>
                    </div>
                    <div class="flex center">
                        <div class="dashbutton" onclick="activityView()">Activities</div>
                        <div class="dashbutton" onclick="goalsView()">Goals</div>
                        <div class="dashbutton" onclick="updateViewHistory()">History</div>
                        <div class="dashbutton" onclick="updateViewDiaryPage()">Daily Log</div>
                        <div class="dashbutton" onclick="updateViewTaskPage()">Log Activities</div>
                    </div>
                    <div class="dashcircle">
                        <i class="dashcirlce fa-solid fa-user"></i>
                        <div class="dashDrop">
                            <div>${model.data.user.userName}</div>
                            <div class="logout" onclick="backToLogin()">
                                Log out
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="dashHR">
            </div>
        </div>
    </div>
    <div class="dashmiddlesection  textaligncenter ">
        <div id="dashcontent">
            <div class="dashgrid dashbackgroundimage">
                <div class="dashside ">
                    <div>
                        <h1>Dagens mål</h1>
                    </div>
                    <div class="dashsideinnards">
                        <div id="dashGoals" class=""></div>
                        <div class="flex center">
                            <p class="semer" onclick="goalsView()">-- Se Mer --</p>
                        </div>
                    </div>
                    <h1>Nåværende uke:</h1>
                    <div class="dashsideinnards">
                        <div id="dashDiary" class=""></div>
                        <div class="flex center">
                            <p class="semer" onclick="updateViewHistory()">-- Se Mer --</p>
                        </div>
                    </div>
                </div>
                <div class="dashmain ">
                    <div class="dashmainlogin">
                        
                    </div>
                    <div class="dashinnermain">
                        <p>Activity Tracker</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    loadDashContent(currentDate);
}