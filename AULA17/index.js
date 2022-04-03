const baseDeDados = {
    "resultado": [{
        "genero": "masculino",
        "nome": {
            "referencia": "Sr.",
            "primeiro": "Mário",
            "sobrenome": "Grandsten"
        },

        "email": "mariog@gmail.com",
        "login": {
            "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
            "usuario": "silverswan131",
            "senha": "firewall",
            "salt": "TQA1Gz7x",
            "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
            "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
            "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
        },

        "local": {
            "rua": " Rua do Acre, 1245",
            "cidade": "Vitória",
            "Estado": "Espírito Santo",
            "postcode": "03042080",
            "coordenadas": {
                "latitude": "-23.5569581",
                "longitude": "-46.6589677"
            },
            "timezone": {
                "offset": "-3:00",
                "descricao": "Brasil"
            }
        },
        
        "dob": {
            "data": "1993-07-20T09:44:18.674Z",
            "idade": 38
        },
        "registro": {
            "data": "2002-05-21T10:59:49.966Z",
            "idade": 25
        },
        "fone": "011-4039-8745",
        "celular": "011-99874-5621",
        "id": {
            "nome": "PPS",
            "valor": "0390511T"
        },
        "imagem": {
            "grande": "https://randomuser.me/api/portraits/men/75.jpg",
            "media": "https://randomuser.me/api/portraits/med/men/75.jpg",
            "miniatura": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "IE"
    }],
    "info": {
        "seed": "fea8be3e64777240",
        "resultado": 1,
        "pagina": 1,
        "versao": "1.3"
    }
};

let consultandoBaseDeDados = new Promise((resolve, reject) => {
    setTimeout(function () {
        if (baseDeDados == null) {
            reject({
                "mensagem": "Não consta base de dados."
            });
        } else {
            resolve(baseDeDados);
        }
    }, 2000);

});

consultandoBaseDeDados
    .then((retorno) => {
        console.log(retorno);

    }).then(

    ).catch((err) => {
        console.log(err);
    });

    function renderizarDadosUsuario(dados) {
        let cadastro = document.createElement("h2");
        let email = document.createElement("p");
        let imagem = document.createElement("imagem");
    
        imagem.src = dados.imagem.grande;
        cadastro.innerHTML = dados.nome.primeiro + " " + dados.nome.sobrenome;
        email.innerHTML = dados.email; 

        item.appendChild(cadastro);
        item.appendChild(imagem);
        item.appendChild(email);
    }
    

