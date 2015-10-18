# jQuery Rut Chileno

Un simple y muy liviano (solo 1.07kb!) plugin para validar y formatear RUT Chilenos.

Requiere jQuery 1.6 o superior.

## Ejemplo rápido

El modo más simple es agregando la función al input de texto que desees:

```JavaScript
    $('.input_rut').rut();
```

## Opciones

* <b>formatear</b>  : <i>Da formato 12345678-5 en el evento BLUR <b>(default: true)</b></i>
* <b>on</b>                : <i>Evento que ejecuta la verificación <b>(default: 'blur')</b></i>
* <b>required</b>          : <i>Agrega/elimina la opción de hacer el input requerido <b>(default: true)</b></i>
* <b>placeholder</b>       : <i>Agregar/eliminar el texto temporal del input <b>(default: true)</b></i>
* <b>error_html</b>        : <i>Cambia el html cuando un Rut es inválido <b>(default: `'<span class="rut-error">Rut incorrecto</span>'`)</b></i>
* <b>fn_error(input)</b>   : <i>Función ejecutada al encontrar un error <b>(default: mostrar error)</b></i>
* <b>fn_validado(input)</b> : <i>Función ejecutada al validar el rut correctamente</i>


## Ejemplo cambiando opciones

```JavaScript
    $('.input_rut').rut({
      fn_error : function(input){
        alert('El rut: ' + input.val() + ' es incorrecto');
      },
      placeholder: false
    });
```

## Funciones

También puedes usar las funciones directamente

* <b>rut.validar(rut)</b> : Retorna <i><b>TRUE / FALSE</i></b> dado un rut '12345678-5'
* <b>rut.dv(rut)</b> : Retorna el digito verificador de un rut
* <b>rut.formatear(rut)</b> : Retorna un string con el formato '12345678-5'
* <b>rut.quitar_formato(rut)</b> : Elimina puntos y guion a un rut

Ejemplo:

```JavaScript

var es_valido = $.rut.validar('12345678-5');

if(es_valido){
  alert('rut válido');
}

alert($.rut.quitar_formato('12.345.678-5'));
// Produce 123456785
```
