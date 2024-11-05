import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function FooterLink({ data }) {
  return (
    <div className="text-center md:text-left sm:mx-auto">
      <div className="font-bold mb-2 sm:mb-4">{data.title}</div>
      <div className="flex gap-3 flex-col text-xs">
        {data.links.map((content, ind) => (
          <Link key={ind} to={content.link}>
            {content.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

FooterLink.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};

export default FooterLink;
