
var routes = [
    {
        'path': '/',
        'redirect': '/index.html'

    },
    {

        'path': '/listar',
        'component': tipos

    },
     {
        'path': '/agregar',
        'component': agregarTipo

    },
    {
        'path': '/modificar',
        'component': modificarTipo

    },
    {
        'path': '/agregarUsuario',
        'component': agregarUsuario

    },
    {
        'path': '/listarUsuario',
        'component': usuarios
    },
    {
        'path': '/modificarUsuario',
        'component': modificarUsuario
    }

]

var router = new VueRouter({
    routes
})


var app = new Vue({
    router
}).$mount('#app')