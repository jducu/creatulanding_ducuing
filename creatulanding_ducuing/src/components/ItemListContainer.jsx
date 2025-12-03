function ItemListContainer({ greeting }) {
    return (
      <div style={styles.container}>
        <h1>{greeting}</h1>
        <p>Muy pronto vas a ver el catálogo de películas 🍿🎥</p>
      </div>
    );
  }
  
  const styles = {
    container: {
      marginTop: "40px",
      textAlign: "center",
    }
  };
  
  export default ItemListContainer;
  