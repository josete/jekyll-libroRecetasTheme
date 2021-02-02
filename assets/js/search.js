$(document).ready(function () {
    if ($(location).attr('href').includes("search")) {
        var busqueda = $(location).attr('href').split("/")[$(location).attr('href').split("/").length-1]
        const fuse = new Fuse(JSON.parse(localStorage.getItem('data')), {
            keys: ['title']
        });

        var resultados = fuse.search(busqueda);
        resultados.forEach(element => {
            console.log(element.item);
            $('.ui.divided.items.recetas').append('<div class="item"><h1 class="ui header"><a class="post-link" href="'+element.item.url+'">'+element.item.title+'</a></h1></div>');
        });
    }
});