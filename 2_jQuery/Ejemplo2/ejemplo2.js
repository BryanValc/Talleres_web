$().ready(function () {
   $.validator.addMethod("nombre", function (value, element) {
        return this.optional(element) || /^[a-zA-ZÀ-Ö]+$/i.test(value);

    }, "Por favor ingrese solo letras"
    );
    $("#formulario").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3,
                nombre: true
            },
            edad: {
                required: true,
                number: true,
                min: 18
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            nombre: {
                required: "Campo requerido",
                minlength: "El nombre debe contener minimo 3 caracteres"
            },
            edad: {
                required: "Por favor ingresa tu edad",
                number: "Por favor ingrese solo números",
                min: "Debes de tener más de 18 años"
            },
            email: {
                required: "Campo requerido",
                email: "El email debe estar en el formato abc@gmail.com"
            }
        }
    });
});