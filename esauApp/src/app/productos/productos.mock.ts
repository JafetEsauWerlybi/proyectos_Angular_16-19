export const ProductList: Producto[] =[
    {id:1, name: 'Jugo de Naranja', precio: 10, descripcion: 'jugo sabroso de sabor naranja 1lt'},
    {id:2, name: 'Jugo de lima', precio: 15, descripcion: 'jugo sabroso de sabor lima 2lt'},
    {id:3, name: 'Jugo de uva', precio: 10, descripcion: 'jugo sabroso de sabor iva medio lt'},
    {id:4, name: 'Jugo de manzana', precio: 14, descripcion: 'jugo sabroso de sabor manzana 1lt'},
    {id:5, name: 'Jugo de sandía', precio: 20, descripcion: 'jugo sabroso de sabor sandia mediolt'},
    {id:6, name: 'Jugo de coco', precio: 32, },
    {id:7, name: 'Jugo de nopal', precio: 13, descripcion: 'jugo sabroso de sabor 1lt'},

]

export interface Producto{
    id: number,
    name: string,
    precio: number,
    descripcion?: string
} 