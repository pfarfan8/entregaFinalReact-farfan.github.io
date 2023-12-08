import { ItemCounter } from "./ItemCounter";

export const ItemDetail = ({item}) => {

    const add = (quantity) => {
        onAdd(item, quantity);
    };
    return (<>
    <h1>{item.titulo}</h1>
    <img src = {item.img}/>
    <h2>stock:{item.stock}</h2>
    <ItemCounter onAdd={add} stock = {item.stock} initial = {1}/>
    <div></div>
    </>
    );
};

