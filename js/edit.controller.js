const editController = (function (applicationCtr, uiViewCtr){

    // Объявляем наши селекторы
    let DOM = uiViewCtr.getDomViewStrings();

    // Достаем массив заявок из localStorage
    let arrData = applicationCtr.setArrData();

    // Здесь ID заявки при нажатии на "редактировать"
    let editId = localStorage.getItem('editItemId');

    // Находим индекс заявки в локалсторедже
    let BidID = arrData.findIndex(item => item.id == editId);

    // Вытаскиваем заявку, обращаясь по индексу
    let bidChange = arrData[BidID];

    // Прослушиваем события по формам
    function eventListeners(){
        document.querySelector(DOM.btnBrimary).addEventListener('click', saveNewBid);
        document.querySelector(DOM.btnDark).addEventListener('click', removeToArhive);
    }

    // Подставляем значения в форму
    function completeBidForm(){

        if( editId == bidChange.id ) {
            document.querySelector(DOM.formID).textContent = `Заявка № ${bidChange.id}`;
            document.querySelector(DOM.formDate).textContent = bidChange.today;
            document.querySelectorAll(DOM.formOption).forEach(item => {
                if ( item.textContent ===  bidChange.type){
                    item.setAttribute('selected', 'selected');
                }
            })
            document.querySelector(DOM.formName).value = bidChange.name;
            document.querySelector(DOM.formEmail).value = bidChange.email;
            document.querySelector(DOM.formPhone).value = bidChange.phone;
            document.querySelectorAll(DOM.formStatus).forEach(item => {
                if ( item.value ===  bidChange.status){
                    item.setAttribute('selected', 'selected');
                }
            })
        }
    }

    // Функция сохранения заявки
    function saveNewBid (e){

        e.preventDefault();

        // Присваиваем новые значения, исходя из новых выбранных данных
        bidChange.name = document.querySelector(DOM.formName).value;
        bidChange.email = document.querySelector(DOM.formEmail).value;
        bidChange.phone = document.querySelector(DOM.formPhone).value;
        bidChange.type = document.querySelector(DOM.formProduct).value;
        bidChange.status = document.querySelector(DOM.forStatuses).value;

        confirm('Вы уверены?');

        // Вырезаем старую заявку и вставляем на ее место новую
        arrData.splice(BidID, 1, bidChange);

        // Обновляем локалсторедж
        applicationCtr.addLocalStorage();

        window.location = "./02-crm-all-bids.html";

    }

    // Удаление заявки в архив
    function removeToArhive (e) {
        e.preventDefault();

        // Присваиваем новый статус
        bidChange.status = 'arhive';

        confirm('Вы уверены?');

        // Вырезаем старую заявку и вставляем на ее место новую
        arrData.splice(BidID, 1, bidChange);

        // Обновляем локалсторедж
        applicationCtr.addLocalStorage();

        window.location = "./02-crm-all-bids.html";

    }

    
    return {
        init: function() {
            completeBidForm();
            eventListeners();
            saveNewBid();
            removeToArhive();
        }
    }
    
})(modelController, viewEditController);

editController.init();

