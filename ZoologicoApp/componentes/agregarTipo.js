var templateAgregarTipo = `
<div class="container" align="center">
    <h1>Agregar Tipo de Animal</h1>
    <br>
    <form>
        <table>

            <tr>
                <td>Nombre </td>
                <td><input type=text v-model="nombre" required="" class="form-control"></td>
            </tr>

            <tr>
                <td>Descripcion </td>
                <td><input type=text v-model="descripcion" required="" class="form-control"></td>
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
    <br>
</div>
`


var agregarTipo= Vue.component('agregar-tipo', {
    template: templateAgregarTipo,
    data: function () {
        return {
            'nombre': '',
            'descripcion': '',
            'mensaje':''
        }
    },
    created: function () {
        
    },
    methods: {

        guardar: function () {

            var self = this
            var tipoService = new TipoService()
            tipoService.agregar(
                self.nombre,
                self.descripcion
                

            )
                .then(function (data) {

                    console.log("Guardado")
                    self.mensaje="Tipo de Animal Guardado Correctamente"
                    self.limpiar()

                })

        },
        limpiar(){
            this.nombre=""
            this.descripcion=""
            
        }

    }
})