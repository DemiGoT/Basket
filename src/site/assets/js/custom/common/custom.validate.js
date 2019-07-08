// custom jQuery validation
//-----------------------------------------------------------------------------------
var validator = {
    init: function () {
      $('form').each(function () {
        var $form = $(this);
        var name = $form.attr('name');
        if (validator.valitatorRules.hasOwnProperty(name) || $form.hasClass('js-validate')) {
          var rules = validator.valitatorRules[name];
          $form.validate({
            rules:          rules,
            errorElement:    'b',
            errorClass:      'error',
            focusInvalid:    true,
            focusCleanup:    false,
            errorPlacement: function (error, element) {
              validator.setError($(element), error);
            },
            highlight: function (element, errorClass, validClass) {
              var $el = validator.defineElement($(element));
              if ($(element).attr('type') == 'file'){
                setTimeout(function () {
                  $(element).parents('label').find('b.error').addClass('file-error');
                  $(element).parents('.img-load').after($(element).parents('label').find('b.error'));
                }, 100)
              } else {
                if ($el){
                  $el.closest('.el-text-fel').removeClass(validClass).addClass(errorClass);
                }
              }
            },
            unhighlight: function (element, errorClass, validClass) {
              var $el = validator.defineElement($(element));
              if ($el){
                $el.closest('.el-text-fel').removeClass(errorClass).addClass(validClass);
              }
            },
            onfocusout: function(element) {
              // var $el = validator.defineElement($(element));
              // $el.valid();
            },
            messages: validator.messages
          });
        }
      });
    },
    setError: function ($el, message) {
      $el = this.defineElement($el);
      if ($el) this.domWorker.error($el, message);
    },
    defineElement: function ($el) {
      return $el;
    },
    domWorker: {
      error: function ($el, message) {
        $el.closest('.el-text-fel').addClass('error');
        $el.after(message);
      }
    },
    messages: {
      'field_test': {
        required: 'This field is required.'
      }
    },
    valitatorRules: {
      'form_test': {
        'field_test': {
          required: true
        }
      }
    }
  };
  
  validator.init();
  
  // validate by data attribute
  //-----------------------------------------------------------------------------------
  (function(){
    // add to validate form class 'js-validate'
    // add to validate field data-valid="test"
    //-----------------------------------------------------------------------------------
    var rules = {
      'name': {
        required: true,
        minlength: 2,
        maxlength: 255,
        messages: {
          required: "Это поле обезательное для заполнения",
          minlength: 'Минимум 2 символа',
          maxlength: 'Максимально 255 символов'
        }
      },
      'phone': {
        required: true,
        digits: true,
        minlength: 8,
        maxlength: 255,
        messages: {
          required: "Это поле обезательное для заполнения",
          minlength: 'Минимум 8 символа',
          maxlength: 'Максимально 255 символов',
          digits: 'Вводите только цифры'
        }
      },
      'company': {
        minlength: 2,
        maxlength: 255,
        messages: {
          minlength: 'Must have at least 2 characters!',
          maxlength: 'No more than 255 characters.'
        }
      },
      'message': {
        minlength: 10,
        maxlength: 500,
        messages: {
          minlength: 'Must have at least 10 characters!',
          maxlength: 'No more than 500 characters.'
        }
      },
      'email': {
        required: true,
        email: true,
        maxlength: 255,
        messages: {
          required: "Это поле обезательное для заполнения",
          email: 'Неправильный e-mail!',
          maxlength: 'Максимально 255 символов'
        }
      },
      'file': {
        extension: "jpeg|jpg|png|doc|docx|pdf",
        filesize: 30720000,
        messages: {
          extension: 'Invalid extension jpeg|jpg|png|doc|docx|pdf',
          filesize: 'File must be less than 30mb.'
        }
      }
    };
  
    for (var ruleName in rules) {
      $('[data-valid=' + ruleName + ']').each(function(){
        $(this).rules('add', rules[ruleName]);
      });
    };
  }());
  
  // custom rules
  //-----------------------------------------------------------------------------------
  $.validator.addMethod("email", function (value) {
    if (value == '') return true;
    var regexp = /[a-zA-Zа-яА-ЯёЁ0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Zа-яА-ЯёЁ0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Zа-яА-ЯёЁ0-9](?:[a-zA-Zа-яА-ЯёЁ0-9-]*[a-zA-Zа-яА-ЯёЁ0-9])?\.)+[a-zA-Zа-яА-ЯёЁ0-9](?:[a-zA-Zа-яА-ЯёЁ0-9-]*[a-zA-Zа-яА-ЯёЁ0-9])?/;
    return regexp.test(value);
  });
  $.validator.addMethod("extension", function (value, element, param) {
    param = typeof param === "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
    return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
  });
  $.validator.addMethod('filesize', function (value, element, param) {
    return this.optional(element) || (element.files[0].size <= param)
  });
  $.validator.addMethod("letters", function(value, element) {
    return this.optional(element) || /^[^1-9!@#\$%\^&\*\(\)\[\]:;,.?=+_<>`~\\\/"]+$/i.test(value);
  });
  $.validator.addMethod("digits", function(value, element) {
    return this.optional(element) || /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/i.test(value);
  });
  $.validator.addMethod("valueNotEquals", function(value, element, arg){
    return arg != value;
  }, "Value must not equal arg.");
  $.validator.addMethod( "require_from_group", function( value, element, options ) {
    var $fields = $( options[ 1 ], element.form ),
      $fieldsFirst = $fields.eq( 0 ),
      validator = $fieldsFirst.data( "valid_req_grp" ) ? $fieldsFirst.data( "valid_req_grp" ) : $.extend( {}, this ),
      isValid = $fields.filter( function() {
        return validator.elementValue( this );
      } ).length >= options[ 0 ];
    $fieldsFirst.data( "valid_req_grp", validator );
    if ( !$( element ).data( "being_validated" ) ) {
      $fields.data( "being_validated", true );
      $fields.each( function() {
        validator.element( this );
      } );
      $fields.data( "being_validated", false );
    }
    return isValid;
  }, $.validator.format( "Please fill at least {0} of these fields." ) );