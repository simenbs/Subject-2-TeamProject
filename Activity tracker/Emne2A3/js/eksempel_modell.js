const model = {
    app: {
        displayMode: ["Dark", "Light"],
        Language: ["Norsk", "English"],
    },
    inputs: {
        homePage: {
            userName: 'Marie',
            dailyQuote:
            {
                nor: ['Stå på!', 'Finnes ikke dårlig vær, bare dårlig klær'],
                eng: ['Dont give up, give down!', 'Pancakes are yummy']
            },
            images: ['img.png', 'www.example.com/img'],
        },
        calenderPageMonth: {
            currentMonth: [
                { monthName: { Eng: "January",   Nor: "Januar",    }, days: 31, },
                { monthName: { Eng: "February",  Nor: "Februar",   }, days: [28, 29] },
                { monthName: { Eng: "March",     Nor: "Mars",      }, days: 31, },
                { monthName: { Eng: "April",     Nor: "April",     }, days: 30, },
                { monthName: { Eng: "May",       Nor: "Mai",       }, days: 31, },
                { monthName: { Eng: "June",      Nor: "Juni",      }, days: 30, },
                { monthName: { Eng: "July",      Nor: "Juli",      }, days: 31, },
                { monthName: { Eng: "August",    Nor: "August",    }, days: 31, },
                { monthName: { Eng: "September", Nor: "September", }, days: 30, },
                { monthName: { Eng: "October",   Nor: "Oktober",   }, days: 31, },
                { monthName: { Eng: "November",  Nor: "November",  }, days: 30, },
                { monthName: { Eng: "December",  Nor: "Desember",  }, days: 31, },
            ],
            taskOverview: {
                completed: 1,
                notCompleted: 1,
                urgent: 1 //alt over 7 i urgency?  //1-6=gul? 7-10= rød? Grønn er alt som er ferdig
            },
        },
        calenderPageWeek: {
            currentWeek: [1 - 52], //du vet
            weekDays: {
                Eng: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                Nor: ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'],
                shortEng: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                shortNor: ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø'],
            },
            taskOverviewWeek: {
                completed: 1,
                notCompleted: 1,
                urgent: 1,
            },
        },
        calenderPageDay: {
            currentDay: {
                Eng: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                Nor: ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'],
            },
            taskOverviewDay: {
                completed: 1,
                notCompleted: 1,
                urgent: 1,
            },

        },
        addTaskPage: {
            taskCategoriesNor: ['Husarbeid', 'Reparasjon'],
            taskCategoriesEng: ['Housework', 'Repair'],
            taskUrgency: taskOptions.urgency[null],
            taskInputText: '',
        },

        finishedTask: {
            creditQuoteNor: ['Bra jobba!', 'Imponerende', 'Wow!',],
            creditQuoteEng: ['Good Job', 'Impressed', 'Wow!'],

        },

    },
    //data
    taskList: [
        {
            id: 1,
            name: 'Rydde',
            category: 'Husarbeid',
            urgency: 2, //min 1, max 10
            taskText: 'Ryddet rommet og stua',
            maxAllowedDelaysNr: 4, //max delays 4, based on urgency, user-adjustable
            remainingDelays: 4,
            allowDelayTime:  //based on urgency
            {
                days: 4,
                weeks: 0,
                months: 0,
            },
            completedTask: true,

        },
        {
            id: 2,
            name: 'Fiks lekkasje!',
            category: 'Reparasjon',
            urgency: 10,
            taskText: 'Stoppe vannkran? ringe rørlegger',
            allowedDelaysNr: 0,
            allowDelayTime:
            {
                days: 0,
                weeks: 0,
                months: 0,
            },
            completedTask: false,
        },
    ],
    taskOptions: {
        urgency: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        allowedDelaysNr: [0, 1, 2, 3, 4],
        allowDelayTime:
        {
            days: [0, 1, 2, 3, 4, 5, 6, 7],
            weeks: [0, 1, 2, 3, 4],
            months: [0, 1],
        },
    },

}

const modelT = {
    app: {
        loggedInUser: null,
        currentPage: 'productDetailPage',
        displayMode: 'dark',
        language: 'no',
    },
    inputs: {
        shoppingCartPage: {
            items: [
                {
                    productId: 123,
                    count: 1,
                },
                {
                    productId: 124,
                    count: 2,
                },
            ],
        },
        productListPage: {
            searchText: null,
            sort: {
                field: 'price',
                isAscending: true,
            },
            layout: 'list',
        },
        productDetailPage: {
            productId: 123,
            zipCode: '3292',
            currentImageIndex: 0,

        },
    },
    // data
    shoppingCart: [
        {
            productId: 123,
            count: 1,
        },
    ],
    purchases: [

    ],
    products: [
        {
            id: 123,
            title: 'Svive Oberon switch Gaming Tastatur',
            description: 'Full størrelse, mekanisk, nordisk-layout, TTC switches, RGB, USB',
            beforePrice: null,
            price: 1319,
            stars: 4.5,
            variants: ['Brown', 'Red'],
            inStockCount: 50,
            images: [],
            brand: 1,
        },
        {
            id: 124,
            title: 'Svive Triton...',
            description: '60%....',
            beforePrice: 799,
            price: 499,
            stars: 3.5,
            variants: null,
            inStockCount: 50,
            images: [],
            brand: 1,
        },
    ],
    brands: [
        { id: 1, name: 'Svive', url: 'www.svive.com' },
        { id: 2, name: 'Logitech', url: 'www.logitech.com' },
    ],
};