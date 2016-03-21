/*
	Plugin para validar y formatear un RUT Chileno
	Autor: www.kadumedia.com
	Mail:  hola@kadumedia.com
	Versión: 1.5 
	*/
	;(function($){
		$.fn.rut = function(opt){
			var defaults = $.extend({
				error_html: '<span class="rut-error">Rut incorrecto</span>',
				formatear : true,
				on : 'blur',
				required : true,
				placeholder : true,
				fn_error : function(input){
					mostrar_error(input, defaults.error_html);
				},
				fn_validado: function(input){}
			}, opt);
			return this.each(function(){
				var $t = $(this);
				$t.wrap('<div class="rut-container"></div>');
				$t.attr('pattern', '[0-9]{7,8}-[0-9k]{1}');
				if(defaults.required) $t.attr('required', 'required');
				if(defaults.placeholder) $t.attr('placeholder', '12345678-5');
				if(defaults.formatear){
					$t.on('blur', function(){
						$t.val($.rut.formatear($t.val()));
					});
				}
				$t.on(defaults.on, function(){
					$('.rut-error').remove();
					if($.rut.validar($t.val()) && $.trim($t.val()) != '')
						defaults.fn_validado($t);
					else
						defaults.fn_error($t);
				});
			});
		}
		function mostrar_error(input, error){
			input.closest('.rut-container').append(error);
		}
	})(jQuery);
	jQuery.rut = {
		validar : function(rut){
			if (!/^[0-9]+-[0-9kK]{1}$/.test(rut))
				return false;
			var tmp = rut.split('-');
			var dv = tmp[1], rut 	= tmp[0];
			if(dv == 'K') dv = 'k';
			return ($.rut.dv(rut) == dv);
		},
		dv : function(rut){
			var M=0,S=1;
			for(;rut;rut=Math.floor(rut/10))
				S=(S+rut%10*(9-M++%6))%11;
			return S ? S-1 : 'k';
		},
		formatear : function(rut){
			return rut.replace(/^(\d{7,8})(\w{1})$/, '$1-$2');
		},
		quitar_formato : function(rut){
			rut = rut.split('-').join('').split('.').join('');
			return rut;
		}
	};
