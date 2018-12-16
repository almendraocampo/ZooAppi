
var templateTipos = `
<div class="container">
    <h1>Listado Tipos</h1>
    <label>Buscar por nombre</label>
    <div class="col-md-4" align="center">
        <div class="col-xs-2" align="center">
            <input align="center" class="form-control" id="ex1" type="text" v-model="busqueda">
        </div>
    </div>
    </br>
    <div v-if="listaFiltrada">

        <table class="table">
            <tr align="center">
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Opción</th>
            </tr>

            <tr v-for="a in listaFiltrada" align="center">
                <td>{{ a.codigo }}</td>
                <td>{{ a.nombre }}</td>
                <td>{{ a.descripcion }} </td>
                <td><a href="#" align="center" class="btn btn-danger" @click.prevent="eliminar(a.codigo)">Eliminar</a></td>
            </tr>

        </table>
        <div v-if="mensaje">
        <h3>{{mensaje}}</h3>
        </div>

    </div>
    <div v-else>
        cargando...
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
</div>
`
var tipos = Vue.component('tipo', {
    template: templateTipos,
    data: function () {
        return {
            tipos: null,
            busqueda: null,
            'mensaje':'mensaje'
        }
    },
    created: function () {
        var self = this
        var servicio = new TipoService()
        servicio
            .listar()
            .then(function (json) {
                self.tipos = json
                console.log(json)
            })

    },
    methods: {
        eliminar(codigo) {
            var self = this
            var servicio = new TipoService()
            servicio.eliminar(codigo)
                .then(function (data) {
                    console.log("eliminado correctamente.")
                    self.mensaje = "Tipo de Animal Eliminado Correctamente"
                    self.listar()
                })
        },
        listar() {
            var self = this
            var servicio = new TipoService()
            servicio
                .listar()
                .then(function (json) {
                    self.tipos = json
                    console.log(json)
                })

        },
        buscar(codigo) {
            var self = this
            var servicio = new TipoService()
            servicio
                .buscar(codigo)
                .then(function (json) {
                    self.tipos = json
                    console.log(json)
                })

        },
        modificar(codigo) {
            var self = this
            var servicio = new TipoService()
            servicio
                .buscar(codigo)
                .then(function (json) {
                    self.tipos = json
                    console.log(json)
                })

        }

    },

    computed: {
        listaFiltrada() {
            if (this.busqueda == null | this.busqueda == "") {
                return this.tipos
            }
            var self = this
            return this.tipos.filter(function(a) {
                return a.nombre.toLowerCase().includes(self.busqueda.toLowerCase())
            })
        }
    }
})