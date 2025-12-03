

import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>CineDucuing</h2>

      <ul style={styles.links}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Películas</a></li>
        <li><a href="#">Promos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#111",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
  }
};

export default NavBar;
