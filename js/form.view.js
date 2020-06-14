const viewController = (function(){

    // Создаем объект со всеми селекторами нашего приложения
    const DOMstrings = {
        inputName: "#input-name",
        inputPhone: "#input-phone",
        inputEmail: "#input-email",
        inputType: "#exampleFormControlSelect1",
        inputStatus: "#badge-danger",
        form: "#application-form",

    }


    function getInput(){
        return {
            name: document.querySelector(DOMstrings.inputName).value,
            phone: document.querySelector(DOMstrings.inputPhone).value,
            email: document.querySelector(DOMstrings.inputEmail).value,
            type: document.querySelector(DOMstrings.inputType).options[document.querySelector(DOMstrings.inputType).selectedIndex].text,
        }
    }


    return {

        // Метод, который возвращает данные из формы
        getInput: getInput,

        // Возвращаем объект DOMstrings в виде метода getDomStrings,
        // чтобы потом передать его в контроллер
        getDomStrings: function(){
            return DOMstrings;
        }
    }

})();

