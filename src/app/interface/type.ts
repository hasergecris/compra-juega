export interface Producto {
    name: String;
    fondo: String;
    ingredientes: Ingredient[];
}

export interface Ingredient {
    id: number;
    css: String;
    state: String;
    name: String;
    img: String;
    selec: number;
}
