const modelController = (function() {

    // Создаем массив со всеми данными нашего приложения
    let arrData = [];

    // Создаем конструктор для модели курсов
    const Сourses = function(name, phone, email, type) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.type = type;
    }

    // Ф-я, кот. создает новые типы записей
    function addCourse(name, phone, email, type) {

        // Создаем новый курс на основе конструктора
        let newCourse = new Сourses(name, phone, email, type);

        // Закидываем новый курс в массив data
        arrData.push(newCourse);

        // Возвращаем новый курс
        return newCourse;

    }

    function addLocalStorage(){
        // Записываем массив в LocalStorage
        localStorage.setItem("arrData", JSON.stringify(arrData));
    }

    // Функция - проверяем есть ли данные в localStorage и,
    // если есть, берем из него
    function setArrData(){
        // Возвращаем значение записи из localStorage со значанием data
        let jsonArrData = localStorage.getItem("arrData");

        // Делаем проверку: если есть "jsonArrData", то преобразуем их и записываем в переменную arrData
        if( jsonArrData ){
            let arrData = JSON.parse(jsonArrData);
        }
    }


    // Возвращаем объект, чтобы можно было к нему обращаться
    return {
        addCourse: addCourse,
        addLocalStorage: addLocalStorage,
        setArrData: setArrData,
        test: function(){
            console.log(arrData);
        }
    }

})();