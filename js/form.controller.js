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
        console.log("Fired!");

        // Вызываем метод возвращения данных из формы
        const input = uiCtr.getInput();
        console.log("ctrAddItem -> input", input)

        // Добавляем полученные данные в модель
        let newCourse = applicationCtr.addCourse(input.name, input.phone, input.email, input.type);
        applicationCtr.test();

        // Добавляем запись в localStorage
        applicationCtr.addLocalStorage();


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