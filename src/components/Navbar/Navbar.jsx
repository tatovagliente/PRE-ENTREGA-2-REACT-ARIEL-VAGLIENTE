import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-logo">
        <p>LOGO CERCENASCO</p>
      </div>

      <div className="Navbar-links">
        <ul>
          <li>
            <a href="#">INICIO</a>
            </li>
          <li>
          <a href="#">REMERAS</a>
            </li>
          <li>
          <a href="#">JEANS</a>
            </li>
          <li>
            <a href="#">CAMPERAS</a>
            </li>
          <li>
          <a href="#">CONTACTO</a>
            </li>
        </ul>
      </div>
      
    <CartWidget/>

    </nav>
  )
}

export default Navbar;