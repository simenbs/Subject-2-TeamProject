const model = {
    app: {
        loggedInUser: null,
        currentPage: 'login',
        displayMode: ["Dark", "Light"],
        language: ["Norsk"],
    },
    interface: {
        login: {
            uNameInput: '',
            pWordInput: '',

        },
        registerUser: {
            uNameInput: '',
            pWordInput: '',
            repeatPassword: '',

        },
        dashboard: {
            tabIndex: 0,
            graph: null,
            statusBar: 0,

        },
        activity: {
            selectedNK: ['all', 'vanedanning', 'growth mindset', 'studieteknikk', 'psykologisk trygghet', 'karakterstyrker'],
        },
        goals: {
            timeframe: ["Alle", "Daglig", "Ukentlig", "Månedlig", "siste Året", "5 års Mål"],
            goalText: '',
            progressBar: 0,
            progressCircle: 0,
        },
        history: {
            summaryGraph: '',
            logDiary: {
                datePicker: null,
            }


        },
        logPage: {
            checkOptions: {
                plannedAct: ['taskList[1]', 'taskList[2]'],
                standardAct: ['tasks'],  
            },
            diary: {
            edges:{
                weekNumber: 1,
                weekdayNO : ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag'],
                dailyQuestNO: ['Hvordan er humøret?', 'Hva har du lært?', 'Hva er ditt neste skritt?'],},
            content: { 
                monday: { mood: '', progress: '', nextStep: '' },
                tuesday: { mood: '', progress: '', nextStep: '' },
                wednesday: { mood: '', progress: '', nextStep: '' },
                thursday: { mood: '', progress: '', nextStep: '' },
                friday: { mood: '', progress: '', nextStep: '' },
            },

        }},
        addGoalAct: {
            themeSelector: ['vanedanning', 'growth mindset', 'studieteknikk', 'psykologisk trygghet', 'karakterstyrker'],
            activitySelector: ['Meditation', 'Pomodoro', 'jogging'],
            inputTextTheme: '',
            inputTextActivity: '',
            taskFrequency: {//relasjon mellom "taskPerUnit" og "taskFrequencyUnit": om du velger f.eks 'uke' og setter 'taskPerUnit' til 3, så blir aktiviteten 3 ganger per uke (fra gitt dato, til gitt dato)
                once: {
                    setTime: {
                        date: '',
                        time: '',
                    },
                    looseTime: {
                        timeunit: {
                            week: '',
                            month: '',
                        },
                    },
                },
                repeats: {
                    taskFrequencyUnit: ['Daglig', 'Uke', 'Måned', 'År', '5 år'], 
                    PerUnit: [0, 1, 2, 3, 4, 5],
                    fromDate: null,
                    toDate: null,
                }
            },
           
        
            

        },
    },



    data: {
        user: {
            userName: 'Martin',
            email: 'martin@123.no',
            password: '123',
        },
        taskList: [{ 
            name: "jog",
            theme: "habit",
            taskText: "joggetur",
            frequency: { timeUnit: "week", repeatsPr: 3, from: 'date', to: 'date' },
        },
        {
            name: undefined,
            theme: undefined,
            taskText: undefined,
            frequency: { timeUnit: undefined, repeatsPr: 'number', from: undefined, to: undefined },

        },
        ],
        standardTasks: [
            {
                name: 'jog',
                theme: undefined,
                taskText: undefined,
                frequency: { timeUnit: undefined, repeatsPr: 'number', from: undefined, to: undefined },

            },
            {
                name: 'read',
                theme: undefined,
                taskText: undefined,
                frequency: { timeUnit: undefined, repeatsPr: 'number', from: undefined, to: undefined },

            },
            {
                name: 'study',
                theme: 'pomodoro',
                taskText: undefined,
                frequency: { timeUnit: undefined, repeatsPr: 'number', from: undefined, to: undefined },

            },
            {
                name: 'meditate',
                theme: undefined,
                taskText: undefined,
                frequency: { timeUnit: undefined, repeatsPr: 'number', from: undefined, to: undefined },

            },
        ],
        goalList: {
            daily:
                [
                    
                    {
                        taskId: "G-D" + 0,
                        name: "testDaily1",
                        theme: "testTheme1",
                        taskText: "TestText1",
                        reps: {totalReps: '',repsDone: 0,repsLeft: '', },
                        frequency: { repeatsPr: undefined, from: undefined, to: undefined },
                        progress: 25,
                    },
                    {
                        taskId: "G-D" + 1,
                        name: "testDaily2",
                        theme: "testTheme2",
                        taskText: "TestText2",
                        reps: {totalReps: '',repsDone: 0,repsLeft: '', },
                        frequency: { repeatsPr: undefined, from: undefined, to: undefined },
                        progress: 75,
                    },
                    {
                        taskId: "G-D" + 2,
                        name: "testDaily3",
                        theme: "testTheme3",
                        taskText: "TestText3",
                        reps: {totalReps: '',repsDone: 0,repsLeft: '', },
                        frequency: { repeatsPr: undefined, from: undefined, to: undefined },
                        progress: 69,
                    },
                    {
                        taskId: "G-D" + 3,
                        name: "testDaily4",
                        theme: "testTheme4",
                        taskText: "TestText4",
                        reps: {totalReps: '',repsDone: 0,repsLeft: '', },
                        frequency: { repeatsPr: undefined, from: undefined, to: undefined },
                        progress: 10,
                    },
                    {
                        taskId: "G-D" + 4,
                        name: "testDaily5",
                        theme: "testTheme5",
                        taskText: "TestText5",
                        reps: {totalReps: '',repsDone: 0,repsLeft: '', },
                        frequency: { repeatsPr: undefined, from: undefined, to: undefined },
                        progress: 90,
                    },
                    {
                        taskId: "G-D" + 5,
                        name: "testDaily6",
                        theme: "testTheme6",
                        taskText: "TestText6",
                        reps: {totalReps: '',repsDone: 0,repsLeft: '', },
                        frequency: { repeatsPr: undefined, from: undefined, to: undefined },
                        progress: 30,
                    },

                ],
            weekly:
                [
                    
                    {
                        taskId: "G-W" +0,
                        name: "testWeekly",
                        theme: undefined,
                        taskText: undefined,
                        reps: {totalReps: '',repsDone: 0,repsLeft: '', },
                        frequency: { repeatsPr: undefined, from: undefined, to: undefined },
                        progress: 75,
                    },

                ],

            monthly:
                [
                    
                    {
                        taskId: "G-M" +0,
                        name: "testMonthly",
                        theme: undefined,
                        taskText: undefined,
                        reps: {totalReps: '',repsDone: 0,repsLeft: '', },
                        frequency: { repeatsPr: undefined, from: undefined, to: undefined },
                        progress: 69,
                    },

                ],

            year:
                [
                   
                    {
                        taskId: "G-Y" +0,
                        name: "testYearly",
                        theme: undefined,
                        taskText: undefined,
                        reps: {totalReps: '',repsDone: 0,repsLeft: '', },
                        frequency: { repeatsPr: undefined, from: undefined, to: undefined },
                        progress: 50,
                    },

                ],

            fiveYearPlan:
                [
                   
                    {
                        taskId: "G-5" +0,
                        name: "test5Yearly",
                        theme: undefined,
                        taskText: undefined,
                        reps: {totalReps: '',repsDone: 0,repsLeft: '', },
                        frequency: { repeatsPr: undefined, from: undefined, to: undefined },
                        progress: 33,
                    },

                ],

        },
        plannedActList:{
            once:
            [
            {
                taskId: "A-O" +0,
                name: "Jogge",
                theme: "vanedanning",
                date: undefined,
                time: undefined,
            },
    ],
            repeat: [{
                taskId: "A-R" +0,
                oldID: '',
                name: "Løpe",
                theme: "vanedanning",
                reps: {totalReps: '',repsDone: 0,repsLeft: '', },
                frequency: { unit: undefined, repeatsPr: undefined, from: undefined, to: undefined,  },
                
                    
            },
        ],
},
activityHistory: {
    planned:
    [
    {
        taskId: "A-H-P" +0,
        oldId: '',
        name: "Jogge",
        theme: "vanedanning",
        reps: { totalReps: '', repsDone: 0, repsLeft: '' },
        date: {from: '', to:''},
        time: undefined,
        isDone: 'true', 
        lastlogged: [], 
        wasDone: {time: ' ', date: ' '},
    },
    {
        taskId: "A-H-P" +1,
        oldId: '',
        name: "Løpe",
        theme: "vanedanning",
        reps: { totalReps: '', repsDone: 0, repsLeft: '' },
        date: {from: '', to:''},
        time: undefined,
        isDone: 'false', 
        lastlogged: [], 
        wasDone: {time: ' ', date: ' '},
    },
    {
        taskId: "A-H-P" +2,
        oldId: '',
        name: "Danse",
        theme: "vanedanning",
        reps: { totalReps: '', repsDone: 0, repsLeft: '' },
        date: {from: '', to:''},
        time: undefined,
        isDone: 'true', 
        lastlogged: [], 
        wasDone: {time: ' ', date: ' '},
    },
],
    spontan: [
        {
        taskId: "A-H-S" +0,
        name: 'Jogge',
        theme: "vanedanning",
        isDone: 'true',
        done: {time: ' ', date: ' '},    
    },
        {
        taskId: "A-H-S" +1,
        name: 'Løpe',
        theme: "vanedanning",
        isDone: 'false',
        done: {time: ' ', date: ' '},    
    },
],
},
        diaryLogData: [  //Her havner dagbok data som blir logget
            {
                date: '01/01/2023',
                uke: 1,
                diary: {
                    monday: { mood: 'test', progress: '1', nextStep: '1' },
                    tuesday: { mood: 'test', progress: '', nextStep: '' },
                    wednesday: { mood: 'test', progress: '', nextStep: '' },
                    thursday: { mood: 'test', progress: '', nextStep: '' },
                    friday: { mood: 'test', progress: '', nextStep: '' },
                },
            },
            {
                date: '02/01/2023',
                uke: 2,
                diary: {
                    monday: { mood: 'test2', progress: '', nextStep: '' },
                    tuesday: { mood: 'test2', progress: '', nextStep: '' },
                    wednesday: { mood: 'test2', progress: '', nextStep: '' },
                    thursday: { mood: 'test2', progress: '', nextStep: '' },
                    friday: { mood: 'test2', progress: '', nextStep: '' },
                },
            },
            {
                date: '03/01/2023',
                uke: 3,
                diary: {
                    monday: { mood: 'Glad', progress: 'test321', nextStep: 'Jogge mer' },
                    tuesday: { mood: 'Trist', progress: 'test322', nextStep: 'Meditere' },
                    wednesday: { mood: 'Sliten', progress: 'test323', nextStep: 'Trene kondis' },
                    thursday: { mood: 'Energisk', progress: 'test324', nextStep: 'Spille basket' },
                    friday: { mood: 'Usikker', progress: 'test325', nextStep: 'Rydde og vaske' },
                },
            },
        ]
    }
}


function saveLocalStorage(){
    let saveData = model.data;
    let stringArray = JSON.stringify(saveData);
    localStorage.setItem('TaskArray', stringArray);
}

function loadLocalStorage(){
    if(!localStorage.getItem('TaskArray'))return;
    let storedArray = JSON.parse(localStorage.getItem('TaskArray'));
    taskList = storedArray;
    updateModel(taskList);
    
}
function updateModel(taskList){
    model.data = taskList;
}
function saveLocalStorageNewThemeAct(){
    let saveData = model.interface.addGoalAct;
    let stringArrayTA = JSON.stringify(saveData);
    localStorage.setItem('ThemeActArray', stringArrayTA);
}

function loadLocalStorageNewThemeAct(){
    if(!localStorage.getItem('ThemeActArray'))return;
    let storedArrayTA = JSON.parse(localStorage.getItem('ThemeActArray'));
    taskListTA = storedArrayTA;
    updateModelTA(taskListTA);
    
}
function updateModelTA(taskListTA){
    model.interface.addGoalAct = taskListTA;
}
function clearLocalStorage(){
    localStorage.removeItem('TaskArray');
    localStorage.removeItem('ThemeActArray');
}