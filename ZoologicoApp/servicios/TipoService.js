
class TipoService {

    constructor() {

    }

    listar() {
        var url = config.url + "/tipo"

        return fetch(url)
            .then(function (respuesta) {
                return respuesta.json()
            })
    }

    agregar(nombre, descripcion) {
        var url = config.url + "/tipo"
        var data =
        {
            'nombre': nombre,
            'descripcion': descripcion,
         

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

    modificar(codigo,nombre, descripcion) {
        var url = config.url + "/tipo/"+codigo
        var data =
        {   'codigo':codigo,
            'nombre': nombre,
            'descripcion': descripcion,
         

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



    buscar(id) {
        var url = config.url + "/tipo/"+id

        return fetch(url, {
            'method': 'GET'


        })
            .then(function (respuesta) {
                return respuesta.json

            })

    }


    eliminar(id) {
        var url = config.url + "/tipo/"+id

        return fetch(url, {
            'method': 'DELETE'


        })
            .then(function (respuesta) {
                return respuesta.json

            })

    }

}