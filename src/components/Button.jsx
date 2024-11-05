import PropTypes from "prop-types";

function Button({ name, background }) {
  return (
    <button
      className={`px-6 py-1.5 font-medium rounded-3xl ${
        background == "black" ? "bg-black text-white" : "bg-white text-black"
      } transform transition-transform hover:scale-105 hover:opacity-80`}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default Button;
