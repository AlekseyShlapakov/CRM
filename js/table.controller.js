const tableController = (function(applicationCtr, uiTableCtr){

    // Объявляем наши селекторы
    let DOM = uiTableCtr.getDomTableStrings();
    console.log('DOM', DOM)

    // Достаем массив заявок из localStorage
    let arrData = applicationCtr.setArrData();

    let product = applicationCtr.getProducts();

    // Прослушиваем события по формам
    function eventListeners(){

        document.querySelector(DOM.buttonProduct).addEventListener('change', filterBidsByProduct);
        document.querySelector(DOM.buttonStatus).addEventListener('click', filterBidsByStatus);
        document.querySelector(DOM.navigation).addEventListener('click', filterBidsByStatus);
        document.querySelector(DOM.tableContainer).addEventListener('click', linkEditBidId);
    }

    // Функция добавления заявок на страницу из локал стореджа
    function addAllBids(){
        // Достаем массив заявок из localStorage
        arrData = applicationCtr.setArrData();

        // Выводим заявки на страницу
        uiTableCtr.addListItem(arrData);
    }

    // Фильтрация заявок по продуктам
    function filterBidsByProduct (e){

        e.preventDefault();

        let productValue = e.target.value;

        let filterArrData = arrData.filter(function(item) {

            if (productValue == "course-html") {
                return item.type == product.html;
            } else if (productValue == "course-js") {
                return item.type == product.js;
            } else if (productValue == "course-vue") {
                return item.type == product.vue;
            } else if (productValue == "course-php") {
                return item.type == product.php;
            } else if (productValue == "course-wordpress") {
                return item.type == product.wordpress;
            } else {
                return arrData;
            }

        });

        // Очищаем таблицу
        uiTableCtr.tableClear();

        // Выводим обновленный массив
        uiTableCtr.addListItem(filterArrData);

    }

    // Фильтрация заявок по статусам
    function filterBidsByStatus(e) {

        e.preventDefault();

        let dataStatus = e.target.dataset.status;

        let filterStatusData = arrData.filter(item => {
            
            if ( dataStatus == "new" ) {
                return item.status == "new";
            } else if ( dataStatus == "in-progress" ) {
                return item.status == "in-progress";
            } else if ( dataStatus == "completed" ) {
                return item.status == "completed";
            } else if ( dataStatus == "waiting" ) {
                return item.status == "waiting";
            } else if ( dataStatus == "arhive" ) {
                return item.status == "arhive";
            } else {
                return arrData;
            }
        })

        // Очищаем таблицу
        uiTableCtr.tableClear();

        // Выводим обновленный массив
        uiTableCtr.addListItem(filterStatusData);

    }

    // ID заявки при нажатии на "редактировать"
    function linkEditBidId(e) {


        if ( e.target.dataset.action === 'edit' ){

            let editId = e.target.closest('[data-id]').dataset.id;

            localStorage.setItem('editItemId', editId);
        }

    }
    
    // Счетчики заявок (дохера кода получилось)
    function bidsCounter (){

        // Выводим отдельные массивы по статусам
        let addCounterNew = arrData.filter(item => {
            return item.status == "new";
        });

        let addCounterInProgress = arrData.filter(item => {
            return item.status == "in-progress";
        });

        let addCounterCompleted = arrData.filter(item => {
            return item.status == "completed";
        });

        let addCounterWaiting = arrData.filter(item => {
            return item.status == "waiting";
        });

        let addCounterArhive = arrData.filter(item => {
            return item.status == "arhive";
        });

        // Создаем badges
        let badge = document.createElement("div");
        
        badge.classList.add('badge');

        let badge2 = document.createElement("div");
        
        badge2.classList.add('badge');

        let badge3 = document.createElement("div");
        
        badge3.classList.add('badge');

        let badge4 = document.createElement("div");
        
        badge4.classList.add('badge');

        let badge5 = document.createElement("div");
        
        badge5.classList.add('badge');

        let badge6 = document.createElement("div");
        
        badge6.classList.add('badge');


        document.querySelectorAll('.filter-bids > a').forEach(item => {
            if( item.getAttribute('data-status') == "new"){
                badge.textContent = addCounterNew.length;
                item.append(badge);
            } else if ( item.getAttribute('data-status') == "in-progress"){
                badge2.textContent = addCounterInProgress.length;
                item.append(badge2);
            } else if ( item.getAttribute('data-status') == "completed"){
                badge3.textContent = addCounterCompleted.length;
                item.append(badge3);
            } else if ( item.getAttribute('data-status') == "waiting"){
                badge4.textContent = addCounterWaiting.length;
                item.append(badge4);
            } else if ( item.getAttribute('data-status') == "arhive"){
                badge5.textContent = addCounterArhive.length;
                item.append(badge5);
            } else if ( item.getAttribute('data-status') == "all"){
                badge6.textContent = arrData.length;
                item.append(badge6);
            }
            
        });


    }

    bidsCounter ();


    return {
        linkEditBidId: linkEditBidId,
        init: function() {
            eventListeners();
            addAllBids();
            filterBidsByStatus();
            bidsCounter();
        }
    }


})(modelController, viewTableController);


tableController.init();





