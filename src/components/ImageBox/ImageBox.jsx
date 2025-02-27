export const ImageBox = ({ imageSrc, alt }) => {
  const styles = {
    contentImage: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      //border: '1px solid #ddd',
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      margin: "10px",
    },
    img: {
      maxWidth: "100%",
      height: "auto",
    },
  };

  return (
    <div style={styles.contentImage}>
      <img src={imageSrc} alt={alt} style={styles.img} />
    </div>
  );
};
