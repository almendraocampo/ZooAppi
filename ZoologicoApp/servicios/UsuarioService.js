
class UsuarioService {

    constructor() {

    }

    listar() {
        var url = config.url + "/usuario"

        return fetch(url)
            .then(function (respuesta) {
                return respuesta.json()
            })
    }

  
    agregar(user, pass) {
        var url = config.url + "/usuario"
        var data =
        {
            'user': user,
            'pass': pass,

        }

        return fetch(url, {
            'method': 'POST',
            'body': JSON.stringify(data),
            'headers': {
                'Content-type': 'application/json'
            }
        })
            .then(function (respuesta) {
                return respuesta.json
            })


    }

    modificar(codigo, user, pass) {
        var url = config.url + "/usuario/" + codigo
        var data =
        {
            'codigo': codigo,
            'user': user,
            'pass': pass,

        }
        return fetch(url, {
            'method': 'PUT',
            'body': JSON.stringify(data),
            'headers': {
                'Content-type': 'application/json'
            }
        })
            .then(function (respuesta) {
                return respuesta.json
            })


    }



    buscar(codigo) {
        var url = config.url + "/usuario/" + codigo

        return fetch(url, {
            'method': 'GET'


        })
            .then(function (respuesta) {
                return respuesta.json

            })

    }


    eliminar(codigo) {
        var url = config.url + "/usuario/" + codigo

        return fetch(url, {
            'method': 'DELETE'


        })
            .then(function (respuesta) {
                return respuesta.json

            })

    }

}