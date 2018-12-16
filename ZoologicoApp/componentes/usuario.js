
var templateUsuarios = `
<div class="container" align="center">
    <h1>Listado Usuarios</h1>
    <label>Buscar por Nombre de Usuario</label>
    <br>
    <div class="col-md-4" align="center">
        <div class="col-xs-2" align="center">
            <input align="center" class="form-control" id="ex1" type="text" v-model="busqueda">
        </div>
    </div>
    
    <br>
    <div v-if="listaFiltrada" class="container">
    <div v-if="mensaje">
    <h3>{{mensaje}}</h3>
    </div>
        <table class="table">
        
        <tr align="center">
            <th>Código</th>
            <th>Usuario</th>
            <th>Password</th>
            <th>Opcion</th>
        </tr>

        <tr v-for="u in listaFiltrada" align="center">
            <td>{{ u.codigo }}</td>
            <td>{{ u.user }}</td>
            <td>{{ u.pass }} </td>
            <td><a href="#" align="center" class="btn btn-danger" @click.prevent="eliminar(u.codigo)">Eliminar</a></td>
        </tr>
    
        </table>
        <!--div v-for="u in listaFiltrada">
            
            <h5>{{ u.codigo }}</h5>
            <h5>{{ u.user }}</h5>
            <h5>{{ u.pass }} </h5>

            <a href="#" @click.prevent="eliminar(u.codigo)">Eliminar</a>
            <hr>
        </div-->
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
var usuarios = Vue.component('usuario', {
    template: templateUsuarios,
    data: function () {
        return {
            usuarios: null,
            busqueda: null,
            'mensaje':''
        }
    },
    created: function () {
        var self = this
        var servicio = new UsuarioService()
        servicio
            .listar()
            .then(function (json) {
                self.usuarios = json
                console.log(json)
            })

    },
    methods: {
        eliminar(id) {
            var self = this
            var servicio = new UsuarioService()
            servicio.eliminar(id)
                .then(function (data) {
                    console.log("Usuario eliminado correctamente.")
                    self.mensaje = "Usuario eliminado Correctamente"
                    self.listar()
                })
        },
        listar() {
            var self = this
            var servicio = new UsuarioService()
            servicio
                .listar()
                .then(function (json) {
                    self.usuarios = json
                    console.log(json)
                })

        }


    },
    computed: {
        listaFiltrada() {
            if (this.busqueda == null | this.busqueda == "") {
                return this.usuarios
            }
            var self = this
            return this.usuarios.filter(function (u) {
                return u.user.toLowerCase().includes(self.busqueda.toLowerCase())
            })
        }
    }
})