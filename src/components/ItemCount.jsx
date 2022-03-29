import { useState } from "react";

const ItemCount = ({ stock = 10, initial = 1}) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    const onAdd = () => {
        alert(`Se agregaron ${count} entradas al carrito`)
    }

    return (
        <div className="itemCount">
            <button variant="text" onClick={decrement}>-</button>
            <p>{count}</p>
            <button variant="text" onClick={increment}>+</button>
            {
            <button variant="contained" onClick={onAdd}>Añadir al carrito</button>
            }
        </div>
    );
}

export default ItemCount;