$('#telefone').mask('(00) 00000-0000')
$('#cep').mask('00000-000')
$('#cpf').mask('000.000.000-00')

$('form').validate({
    rules: {
            nome: {
                required: true
            },
            email: {
                required: true, 
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            rua: {
                required: true
            },
            numero: {
                required: true
            },
            complemento: {
                required: false
            }
        },
        messages: {

            nome: 'Por favor, insira o seu nome completo',
            email: 'Por favor, insira seu e-mail',   
            telefone: 'Por favor, insira seu telefone',    
            cep: 'Por favor, insira seu CEP',    
            cpf: 'Por favor, insira seu CPF',    
            numero: 'Por favor, insira seu número',    
            rua: 'Por favor, insira sua rua'
    
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
