import PropTypes from "prop-types";

function Card({ data }) {
  return (
    <div className="mx-auto bg-white rounded-xl max-w-[250px] hover:shadow-xl transition-shadow duration-300 card">
      <div
        className="w-full h-[130px] bg-cover rounded-t-xl transform transition-transform duration-300 hover:scale-105 hover:rounded-xl cursor-default"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div className="h-full text-white text-xl flex items-center p-4 font-semibold">
          {data.title}
        </div>
      </div>
      <div className="p-5">
        <ul className="text-xs list-disc list-outside font-semibold text-[#4A4A4A] ml-2">
          {data.desc.map((info, ind) => (
            <li className="mb-2" key={ind}>
              {info}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default Card;
