let modelData = model.data.activityHistory;
let planned = modelData.planned;
let spontaneous = modelData.spontan;
let notDoneCount = 0;
let doneCount = 0;

function loadNotDoneHistory() {
  let loadedHistory = 'Uferdig: ';
  notDoneCount = 0;

  for (let i = 0; i < planned.length; i++) {
    if (!planned[i].isDone){
      loadedHistory += `<div class="historygrid activitiesTheme border">
            <div><p> ${planned[i].name}</p></div>
            <div><p> ${planned[i].theme}</p></div>
            </div>`;
            notDoneCount++;
          }
  }
  for (let i = 0; i < spontaneous.length; i++) {
    if (!spontaneous.isDone) {
      loadedHistory += `<div class="historygrid activitiesTheme border">
      <div><p> ${spontaneous[i].name}</p></div>
      <div><p> ${spontaneous[i].theme}</p></div>
      </div>`;
      notDoneCount++;
    }
  }

  document.getElementById('topRight').innerHTML = loadedHistory;
}

function loadDoneHistory(){
  let lHistory = 'Ferdig: ';
  doneCount = 0;
  
  for (let i = 0; i < planned.length; i++) {
  if (planned[i].isDone){
  lHistory += `<div class="historygrid activitiesTheme border">
            <div><p> ${planned[i].name}</p></div>
            <div><p> ${planned[i].theme}</p></div>
            </div>`;
            doneCount++;
          }
  }
  for (let i = 0; i < spontaneous.length; i++) {
    if (spontaneous.isDone) {
      lHistory += `<div class="historygrid activitiesTheme border">
      <div><p> ${spontaneous[i].name}</p></div>
      <div><p> ${spontaneous[i].theme}</p></div>
      </div>`;
      doneCount++;
    }
  }
  document.getElementById('topLeft').innerHTML = lHistory;
}

function barGraph() {
  let trace1 = {
    x: ['Oppgavehistorikk'],
    y: [doneCount],
    name: 'Ferdig',
    type: 'bar',
    marker: {color: 'rgb(0, 255, 0)'},
    width: [1],
  };

  let trace2 = {
    x: ['Oppgavehistorikk'],
    y: [notDoneCount],
    name: 'Uferdig',
    type: 'bar',
    marker: {color: 'rgb(255, 0, 0)'},
    width: [1],
  };

  let data = [trace1, trace2];

  let layout = { 
    barmode: 'stack',
    paper_bgcolor: "rgba(0,0,0,0)",
    width: 300,
    height: 600,
 };

  Plotly.newPlot('midColumn', data, layout);
}