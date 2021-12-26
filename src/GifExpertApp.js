import { useState } from "react";

import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const [category, setcategory] = useState([]);

    return (
        <div className="container-fluid">
            <h1 className="h1">Gif Expert App</h1>
            <hr />

            <AddCategory setcategory={setcategory} />

            <ol className="list-group list-group-numbered">
                {
                    category.map(({value,id}) =>  <GifGrid key={id} category={ value }></GifGrid>)
                }
            </ol>
        </div>
    );
}

export default GifExpertApp;
