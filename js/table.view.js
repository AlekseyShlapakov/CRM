const viewTableController = (function(){

    // Создаем объект с селекторами нашего приложения
    const DOMtableStrings = {
        tableContainer: "#table",
        buttonProduct: ".custom-select",
        tableRow: ".table-row",
        buttonStatus: "#btn-group",
        navigation: ".left-panel__navigation"

    }

    const products = {
        html: "Курс по верстке",
        js: "Курс по JavaScript",
        vue: "Курс по VUE JS",
        php: "Курс по PHP",
        wordpress: "Курс по WordPress"
    }
 
      // Функция рендера курсов
    function renderListItem(item){

        const tableElement = DOMtableStrings.tableContainer;

        let html = `<tr class="table-row" data-id="${item.id}">
                        <th scope="row">${item.id}</th>
                            <td>${item.today}</td>
                            <td>${item.type}</td>
                            <td>${item.name}</td>
                            <td>${item.email}</td>
                            <td>${item.phone}</td>
                            <td>
                                <div class="badge badge-pill %status%">
                                    ${item.status}
                                </div>
                            </td>
                            <td>
                                <a data-action="edit" href="03-crm-edit-bid.html">Редактировать</a>
                            </td>
                    </tr>`;

        if ( item.status == "new" ){
            html = html.replace("%status%", "badge-danger")
            html = html.replace("new", "Новая")
        } else if ( item.status == "in-progress" ) {
            html = html.replace("%status%", "badge-warning")
            html = html.replace("in-progress", "В работе")
        } else if ( item.status == "completed" ) {
            html = html.replace("%status%", "badge-success")
            html = html.replace("completed", "Завершена")
        } else if ( item.status == "arhive" ) {
            html = html.replace("%status%", "badge-danger")
            html = html.replace("arhive", "Архив")
        } else if ( item.status == "rejection" ) {
            html = html.replace("%status%", "badge-rejection")
            html = html.replace("Отказ", "Отказ")
        } else if ( item.status == "waiting" ) {
            html = html.replace("%status%", "badge-rejection")
            html = html.replace("waiting", "Ожидается оплата")
        } 
    

        document.querySelector(tableElement).insertAdjacentHTML("beforeend", html)
    }

    // Функция вывода на страницу при загрузке
    function addListItem(arrData){
        arrData.forEach(function(item){
            renderListItem(item);
        })
    }

    // Очищаем все заявки
    function tableClear () {

        document.querySelectorAll(DOMtableStrings.tableRow).forEach(item => {
            item.remove();
        })
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
            
        })


    }

    return {

        getDomTableStrings: function(){
            return DOMtableStrings;
        },
        getProducts: function(){
            return products;
        },
        renderListItem: renderListItem,
        addListItem: addListItem,
        tableClear: tableClear,
        bidsCounter: bidsCounter

    }

})();

