var tempAgregarUsuario = `
<div>
    <h1>Agregar Usuario</h1>
    <br>
    <br>
    <form>
        <table>

            <tr>
                <td>Username</td>
                <td><input type=text v-model="user" required="" class="form-control"></td>
            </tr>

            <tr>
                <td>Password</td>
                <td><input type=password v-model="pass" required="" class="form-control"></td>
            </tr>
            <br>
            <tr align="center">
                
                <td><input class="btn btn-warning" type=button @click="guardar" value="Guardar"></td>
                <td><input class="btn btn-success" type=button @click="limpiar" value="Limpiar"></td>
            </tr>
           
        </table>
    </form>
    <br>
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


var agregarUsuario = Vue.component('agregar-usuario', {
    template: tempAgregarUsuario,
    data: function () {
        return {
       
        'user': '',
        'pass': ''
        }
    },
    created: function () {
        
    },
    methods: {

        guardar: function () {

            var self = this
            var usuarioService = new UsuarioService()
            usuarioService.agregar(
                self.user,
                self.pass,
            )
                .then(function (data) {

                    console.log("Usuario Guardado")
                    self.mensaje="Usuario Guardado Correctamente"
                    self.limpiar()

                })

        },
        limpiar(){
            this.user=""
            this.pass=""
            
        }

    }
})