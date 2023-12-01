

//updateViewHistory();
function updateViewHistory(){
    
    document.getElementById("dashcontent").innerHTML = /*html*/ `
    <div id="content" class="historyApp" >
    <div id="topLeft" class="topLeft bar2"></div>
    <div id="midColumn"></div>
    <div id="topRight" class="topRight bar2"></div>
  
  
    
    
    
    
    
    
    </div>
    
    `;
    loadNotDoneHistory();
    loadDoneHistory();
    barGraph();
    //app.innerHTML = html;
    
}