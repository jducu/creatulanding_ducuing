function CartWidget() {
    return (
      <div style={styles.cart}>
        🛒
        <span style={styles.count}>5</span>
      </div>
    );
  }
  
  const styles = {
    cart: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      fontSize: "22px",
      cursor: "pointer",
    },
    count: {
      backgroundColor: "red",
      padding: "2px 6px",
      borderRadius: "6px",
      fontSize: "14px",
      color: "white",
    }
  };
  
  export default CartWidget;
  