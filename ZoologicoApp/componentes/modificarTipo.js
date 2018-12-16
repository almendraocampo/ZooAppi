var tempModificarTipo = `
<div class="container" align="center">
    <h1>Modificar Tipo</h1>
    <br>
    <form>
        <table>
            <tr>
                <td>Código</td>
                <td><input type=number v-model="codigo" required="" class="form-control"></td>
            </tr>
            
            <tr>
                <td>Nombre </td>
                <td><input type=text v-model="nombre" required="" class="form-control"></td>
            </tr>

            <tr>
                <td>Descripcion </td>
                <td><input type=text v-model="descripcion" required="" class="form-control"></td>
            </tr>

            
            <tr align="center">
                
                <td><input class="btn btn-warning" type=button @click="modificar" value="Modificar"></td>
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


var modificarTipo = Vue.component('modificar-tipo', {
    template: tempModificarTipo,
    data: function () {
        return {
            'codigo':'',
            'nombre': '',
            'descripcion': '',
            'mensaje':''
        }
    },
    created: function () {
        
    },
    methods: {

        modificar: function () {

            var self = this
            var tipoService = new TipoService()
            tipoService.modificar(
                self.codigo,
                self.nombre,
                self.descripcion
                

            )
                .then(function (data) {

                    console.log("Modificado")
                    self.mensaje="Tipo de Animal Modificado Correctamente"
                    self.limpiar()

                })

        },
        limpiar(){
            this.codigo=""
            this.nombre=""
            this.descripcion=""
            
        }

    }
})