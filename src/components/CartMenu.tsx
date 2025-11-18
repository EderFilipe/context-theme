import { useMenu } from "../context/MenuProvider";
import "./CartMenu.css";
import { AiFillCloseSquare } from "react-icons/ai";

function CartMenu() {
  /* const [isMenuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }; */
  const {isMenuOpen, toggleMenu} = useMenu();
  return (
    <div className={`cart__menu ${isMenuOpen ? "cart__menu--open" : ""}`}>
      <button
        className="cart__menu--closebtn"
        onClick={ toggleMenu }
      >
        <AiFillCloseSquare size={ 24 } />
      </button>
      CART MENU
      {/* Conteúdo do carrinho */}
    </div>
  );
}

export default CartMenu;
