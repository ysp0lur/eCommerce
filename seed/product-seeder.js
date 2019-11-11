var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping',{ useMongoClient: true });

var products = [
    new Product({
        imagePath: '/img/omen.jpg',
        title: 'Laptop Gamer HP Omen',
        description: 'i9 GTX2080 64GB Ram 1TB M.2',
        price: 89569
    }),
    new Product({
        imagePath: '/img/2080ti.jpg',
        title: 'Tarjeta de Video Nvidia GTX 2080TI',
        description: 'Aorus RGB Edicion Limitada Refrigeracion Hibrida',
        price: 31999
    }),
    new Product({
        imagePath: '/img/2060super.jpg',
        title: 'Tarjeta de Video Nvidia GTX 2060 Super',
        description: 'Modelo de Referencia',
        price: 18599
    }),
    new Product({
        imagePath: '/img/ddr4aura.jpg',
        title: 'Memorias Ram DDR4 Aura Sync RGB Asus',
        description: 'Asus RGB 32GB Kit Edicion Especial',
        price: 6800
    }),
    new Product({
        imagePath: '/img/i99980xe.jpg',
        title: 'Procesador Intel i9',
        description: 'Gama Extrema de Procesador Intel i9 Modelo 9980XE',
        price: 95850
    }),
    new Product({
        imagePath: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
        title: 'World of Warcraft',
        description: 'Edicion Especial',
        price: 899
    }),
    new Product({
        imagePath: 'https://support.activision.com/servlet/servlet.FileDownload?file=00PU000000Rq6tz',
        title: 'Call of Duty MW',
        description: 'PS4',
        price: 1100
    }),
    new Product({
        imagePath: 'https://pmcdeadline2.files.wordpress.com/2014/02/minecraft__140227211000.jpg',
        title: 'Minecraft',
        description: 'Edicion PC RTX!',
        price: 189
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}