
// Конструктор с тестовыми данными для заполнения формы
const ExampleItem = function(name, phone, email, type){
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.type = type;
}

// Массив со значениями тестовых данных 
const testData = [
    new ExampleItem("Алексей", "89213512661", "aash7254@gmail.com", "course-html"),
    new ExampleItem("Андрей", "89213512662", "aash271@gmail.com", "course-js"),
    new ExampleItem("Жанна", "89213512663", "janna@gmail.com", "course-vue"),
    new ExampleItem("Акакий", "89213512664", "akakiy@gmail.com", "course-php"),
    new ExampleItem("Крыша", "89213512665", "roof@gmail.com", "course-wordpress"),
    new ExampleItem("Гном", "89213512666", "gnom@gmail.com", "course-php"),
    new ExampleItem("Касперыч", "89213512667", "kasperich4@gmail.com", "course-js"),
    new ExampleItem("Авраам", "89213512668", "avraam@gmail.com", "course-vue"),
    new ExampleItem("Машка", "89213512669", "mary@gmail.com", "course-html"),
];

// Ф-я, которая выдает рандомное значение индекса массива
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

// Ф-я, кот. вставляет тестовый пример в UI
function insertUi(){
    // Вызываем ф-ю рандома
    const random = getRandomInt(testData.length);

    // Получаем случайный элемент из массива
    const randomItem = testData[random];

    // Находим поля в разметке для записи этого элемента
    document.querySelector("#input-name").value = randomItem.name;
    document.querySelector("#input-phone").value = randomItem.phone;
    document.querySelector("#input-email").value = randomItem.email;
    document.querySelector("#exampleFormControlSelect1").value = randomItem.type;
}

insertUi();