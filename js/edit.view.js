const viewEditController = (function (){

    const DOMviewStrings = {
        buttonProduct: ".custom-select",
        formControl: ".form-control",
        vardBody: ".card-body",
        formDate: ".form-date",
        formID: ".form-id",
        formProduct: ".form-product",
        formName: ".form-name",
        formEmail: ".form-email",
        formPhone: ".form-phone",
        formStatus: "[data-option='form-status']",
        forStatuses: ".form-status",
        formOption: ".form-option",
        btnBrimary: ".btn-primary",
        btnDark: ".btn-dark"
        
    }

    // function bidsCounter (){

    // }

    return {
        getDomViewStrings: function() {
            return DOMviewStrings;
        }
    }

})();



console.log(document.querySelector(".form-id").textContent);
console.log(document.querySelector(".form-phone").value);