export const ImageBox = ({imageSrc, alt}) => {
    return (
        <div className="content-image">
            <img src={imageSrc} alt={alt} />
        </div>
    )
}