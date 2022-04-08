import { useState, useEffect } from "react";
import customFetch from "../customFetch";
import ItemDetail from "./ItemDetail";
const { cartelera } = require('../data');

const ItemDetailContainer = () => {
    const [peliculas, setPeliculas] = useState({});

    useEffect(() => {
        customFetch(2000, cartelera[1])
            .then(result => setPeliculas(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={peliculas} />
    );
}

export default ItemDetailContainer;
