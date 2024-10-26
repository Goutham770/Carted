import { PropTypes } from "prop-types";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="bg-white p-4 flex justify-around items-center">
      <h1 className="text-purple-500 text-lg md:text-2xl lg:text-4xl font-bold tracking-widest font-poppins">Carted</h1>
      <div className="relative">
        <button
          onClick={openCart}
          className=" text-green-300 border-2 font-poppins font-bold py-2 px-4 rounded hover:bg-green-100 hover:text-green-900 hover:scale-90 transition duration-300"
        >
          <FaShoppingCart className="inline-block text-lg mr-2" /> Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
  openCart: PropTypes.func.isRequired,
};

export default Navbar;
