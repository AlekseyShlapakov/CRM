const controller = (function(applicationCtr, uiCtr){

    applicationCtr.setArrData();

    // Ф-я, отвечающая за прослушку событий
    const setupEventListeners = function(){
        // Вызываем метод getDomStrings, который описан в view и 
        // и передает селекторы нашего приложения
        const DOM = uiCtr.getDomStrings();

        // Находим форму отправки заявок и 
        // прослушиваем ее отправку
        document.querySelector(DOM.form).addEventListener('submit', ctrAddItem);
    }

    // Функция, кот. срабатывает при отправке формы(наж на кнопку или enter)
    function ctrAddItem(e){
        e.preventDefault();

        // Вызываем метод возвращения данных из формы
        const input = uiCtr.getInput();
        console.log("ctrAddItem -> input", input)

        // Добавляем полученные данные в модель
        newBids = applicationCtr.addBids(input.id, input.name, input.phone, input.email, input.type, input.today, input.status);
        applicationCtr.test();

        // Добавляем запись в localStorage
        applicationCtr.addLocalStorage();

        document.querySelector('.white-plate--open').style.display = 'none';
        document.querySelector('.white-plate--close').style.display = 'block';

        // alert('Спасибо за отправку заявки. В ближайшее время мы свяжемся с Вами!')


    }

       // 
    return {
        init: function(){
            console.log("Start!");
            setupEventListeners();
        }
    }


})(modelController, viewController);

controller.init();