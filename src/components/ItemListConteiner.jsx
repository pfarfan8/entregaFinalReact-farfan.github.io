import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import{
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    limit,
} from "firebase/firestore";

import { ItemList } from './ItemList';
import { getFirestore, getDoc, doc, getDocs} from "firebase/firestore";


export const ItemListConteiner = (props) => {
    const [items, setItems] = useState([]);

    const {id} = useParams();
/*

    useEffect(() => {
        const db = getFirestore();

        const q = query(
            collection(db, "productos"),
            where("categoria", "!=", "iphone"),
            limit(1)
        );

        getDocs(q).then((snapshot) => {
            if(snapshot.size === 0) console.log("no hay resultados");
            else
            console.log(
        snapshot.docs.map((doc) => {
            return{ id: doc.id. ...doc.data()};
        })
        );
        });
    }, []);*/

    useEffect(() => {
        const db = getFirestore();

        const refCollection = collection (db, "items");

        getDocs(refCollection).then(snapshot) => {
            if (snapshot.size === 0) console.log("no hay resultado");
            else
            setItems(
        snapshot.docs.map((doc)=> {
            return {id: doc.id, ...doc.data};
        })
        );
    }
    });

    return(
        <Container className='mt-4'>
            <h1>{props.greeting}</h1>
            <ItemList items={items}/>
            </Container>
    )
}