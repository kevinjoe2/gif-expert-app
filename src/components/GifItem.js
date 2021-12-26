
const GifItem = ({ title, url }) => {
    return (
        <div className="card card-size">
            <img src={ url } className="card-img-top" alt={ title } width={200} height={200}></img>
            <div className="card-body">
                <p className="card-text">{ title }</p>
            </div>
        </div>
    )
}

export default GifItem
