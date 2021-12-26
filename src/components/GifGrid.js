import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category);

    return (
        <div>
            <h3 className="animate__animated animate__zoomIn">{category}</h3>
            {
                loading && <div className="d-flex justify-content-center">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            }
            <div className="card-group animate__animated animate__zoomIn">
                {
                    data.map(img => (
                        <GifItem key={img.id} {...img} />
                    ))
                }
            </div>
        </div>
    )
}

export default GifGrid
