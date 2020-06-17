const modelController = (function() {

    // Создаем массив со всеми данными нашего приложения
    let arrData = [];

    const products = {
        html: "Курс по верстке",
        js: "Курс по JavaScript",
        vue: "Курс по VUE JS",
        php: "Курс по PHP",
        wordpress: "Курс по WordPress"
    }

    // Функция - проверяем есть ли данные в localStorage и,
    // если есть, берем из него
    function setArrData(){
        // Возвращаем значение записи из localStorage со значанием arrData
        let jsonArrData = localStorage.getItem("arrData");

        // Делаем проверку: если есть "jsonArrData", то преобразуем их 
        // и записываем в переменную arrData
        if( jsonArrData ){
            arrData = JSON.parse(jsonArrData);
        } else {
            arrData = [];
        }

        return arrData;
    }

    // Создаем конструктор для модели курсов
    const Bid = function(id, name, phone, email, type, today, status) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.type = type;
        this.today = today;
        this.status = status;
    }

    // Ф-я, кот. создает новые типы записей
    function addBids(ID, name, phone, email, type, today, status) {

        // Вывод статуса заявки
        status = "new";

        // Вывод текущей даты
        today = new Date().toLocaleDateString();

        // Рассчет текущего id заявки
        if ( arrData.length > 0 ){
            let lastIndex = arrData.length - 1;
            var ID = arrData[lastIndex].id + 1;
        } else {
            ID = 0;
        }

        // Создаем новый курс на основе конструктора
        let newBid = new Bid(ID, name, phone, email, type, today, status);

        // Закидываем новый курс в массив arrData
        arrData.push(newBid);

        // Возвращаем новый курс
        return newBid;

    }

    function addLocalStorage(){
        // Записываем массив в LocalStorage
        localStorage.setItem("arrData", JSON.stringify(arrData));
    }


    // Возвращаем объект, чтобы можно было к нему обращаться
    return {
        addBids: addBids,
        addLocalStorage: addLocalStorage,
        setArrData: setArrData,
        test: function(){
            console.log(arrData);
        },
        getProducts: function(){
            return products;
        }

    }

})();