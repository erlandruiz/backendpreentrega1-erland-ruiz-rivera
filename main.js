console.clear();

class ProductManager {
  constructor() {
    this.productos = [];

  }


  //Agregar un producto
  addProduct(title, description, price, thumbnail, code, stock) {
    // validar si el code existe
    let existeCode = this.productos.find((producto) => {
      return producto.code === code;
    });
    if (existeCode) {
      console.log(`El usuario con code = ${code} ya existe`);
      return;
    }

    let id = 1;

    if (this.productos.length > 0) {
      id = this.productos[this.productos.length - 1].id + 1;
    }

    let producto = {
      id: id,
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    };

    //valida si los campos estan llenos
    if(Object.values(producto).includes(undefined)){
        console.log( 'Debe ingresar todos los campos ')
        return
    }

    this.productos.push(producto);
  }


  //retorna todos los productos
  getProducts(){
    return this.productos
  }

  

//retorno el producto por ID
  getProductById(id){

    let indice = this.productos.findIndex((producto) => {
        return producto.id === id;
      });
      if (indice === -1) {
        console.log(`No existe el producto con id ${id}  Not Found`);
        return;
      }

      return this.productos[indice];

  }
}


let producto1 = new ProductManager( );

console.log('========================')
console.log('Agregando productos')

producto1.addProduct('producto1', 'zapato', 100, 'www.imagen.com/image1', 123, 10)
producto1.addProduct('producto2', 'cartera', 100, 'www.imagen.com/image2', 423, 260)
producto1.addProduct('producto3', 'mochila', 100, 'www.imagen.com/image3', 623, 520)
producto1.addProduct('producto4', 'laptop', 100, 'www.imagen.com/image4', 523, 110)
console.log(producto1.getProducts())

console.log('========================')
console.log('Agregando un producto con code repetido code 123')
producto1.addProduct('producto5', 'lapicero', 100, 'www.imagen.com/image5', 123, 50)


console.log('========================')
console.log('Buscando un Id desconocido')
console.log(producto1.getProductById(10))




console.log('========================')
console.log('Buscando un Id que si esta en el arreglo ')
console.log(producto1.getProductById(2))

console.log('========================')
console.log('Agregando un producto sin precio ')
producto1.addProduct('producto6', 'lente', 100, 'www.imagen.com/image4', 120)
