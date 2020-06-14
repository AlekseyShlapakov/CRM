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

    }

})();

