import { PropTypes } from "prop-types";
import { FaTrashAlt } from "react-icons/fa"; // Importing icon for remove button

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="flex items-center justify-between border-b py-10 px-10 bg-white shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300 ease-in-out mb-4">
      <div className="flex items-center space-x-8">
        <img
          src={item.image}
          alt={item.title}
          className="h-16 w-16 object-contain rounded-md shadow-sm transition-transform duration-300 hover:scale-105"
        />
        <div className="flex flex-col">
          <h3 className="text-sm lg:text-lg font-semibold text-orange-400 tracking-wide">
            {item.title}
          </h3>
          <p className="text-green-700 font-bold text-md lg:text-lg mt-1">
            ${item.price}
          </p>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs lg:text-base py-2 px-4 rounded-full shadow-md flex items-center space-x-2 transition-colors duration-300 ease-in-out"
      >
        <FaTrashAlt className="text-sm lg:text-lg" /> {/* Add Trash Icon */}
        <span>Remove</span>
      </button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;
