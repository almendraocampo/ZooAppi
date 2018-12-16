var tempModificarUsuario = `
<div class="container" align="center">
    <h1>Modificar Usuario</h1>
    <br>
    <form>
    
        <table>
            <tr>
                <td>Codigo</td>
                <td><input type=number v-model="codigo" required="" class="form-control"></td>
            </tr>

            <tr>
                <td>Username</td>
                <td><input type=text v-model="user" required="" class="form-control"></td>
            </tr>

            <tr>
                <td>Password</td>
                <td><input type=text v-model="pass" required="" class="form-control"></td>
            </tr>
            <br>            
            <tr align="center">
                
                <td><input align="center" class="btn btn-warning" type=button @click="modificar" value="Modificar"></td>
                <td><input align="center" class="btn btn-success" type=button @click="limpiar" value="Limpiar"></td>
            </tr>
           
        </table>
    </form>
    <div v-if="mensaje">
        <h3>{{mensaje}}</h3>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
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


var modificarUsuario = Vue.component('modificar-usuario', {
    template: tempModificarUsuario,
    data: function () {
        return {
        'codigo': '',
        'user': '',
        'pass': '',
        'mensaje':''
        }
    },
    created: function () {
        
    },
    methods: {

        modificar: function () {

            var self = this
            var usuarioService = new UsuarioService()
            usuarioService.modificar(
                self.codigo,
                self.user,
                self.pass,
                
                

            )
                .then(function (data) {

                    console.log("Usuario Modificado")
                    self.mensaje="Usuario Modificado Correctamente"
                    self.limpiar()

                })

        },
        limpiar(){
            this.codigo=""
            this.user=""
            this.pass=""

            
        }

    }
})