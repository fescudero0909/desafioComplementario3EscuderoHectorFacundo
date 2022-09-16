
class Product {
    constructor(id,name, weight, price, img) {
        this.id = id,   
        this.name = name,
        this.weight = weight,
        this.price = Number(price),
        this.img = img;
    }
};

const coffe1 = new Product (1,'Bolivia', 250, 2000, '/assets/img/cafeBolivia.jpg');
const coffe2 = new Product (2,'Bolivia Caturra 48', 250, 2500, '/assets/img/cafeBoliviaCaturra48.jpg' );
const coffe3 = new Product (3,'Bolivia Caturra 72', 250, 2500, '/assets/img/cafeBoliviaCaturra72.jpg' );
const coffe4 = new Product (4,'Bolivia Caturra NAT', 250, 1500, '/assets/img/cafeBoliviaCaturraNAT.jpg' );
const coffe5 = new Product (5,'Brasil', 250, 3000, '/assets/img/cafeBrasil.jpg' );



//creamos arrays de productos

const products = [
    coffe1,
    coffe2,
    coffe3,
    coffe4,
    coffe5
];

//elemento contenedor

const contenedor = document.getElementById('container-cards');

//recorremos nuestro array de products

products.forEach( product => {
    

    const div = document.createElement('div');

    div.classList.add ('tarjetas')
    div.classList.add ('col-12')
    div.classList.add ('col-sm-6')
    div.classList.add ('col-lg-4')

    div.innerHTML = `
        
            <div class="tarjetaProducto col-12">
                <p class="producto">${product.name}</p>
                <img class="imgProducto img-fluid col-12" src=${product.img} alt="">
                <div class="row align-items-center">
                    <a class="btn col-6 m-3">Agregar</a>
                    <p class="precio col-5 text-center mb-0">$ ${product.price}</p> 
                </div>
            </div> 
        `;    

    contenedor.appendChild(div);

});
