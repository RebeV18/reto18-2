import { ImageBox } from "../index"
import './InfoPelicula.css'

export const InfoPelicula = ({ imageSrc, alt, nombre, anho, sinopsis }) => {
    return(
            <div className="info_pelicula">
                <div className="text_pelicula">
                    <h3>{nombre}</h3>
                    <p><span>Año: </span>{anho}</p>
                    <p><span>Sinopsis: </span>{sinopsis}</p>
                </div>
                <ImageBox imageSrc={imageSrc} alt={alt} />
            </div>
        )
}