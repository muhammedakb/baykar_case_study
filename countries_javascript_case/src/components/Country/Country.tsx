import { Link } from "react-router-dom";
import { slugify } from "../../utils/slug";
import "./country.scss";

type Props = {
  image: string;
  name: string;
  region: string;
};

const Country = ({ image, name, region }: Props) => (
  <Link to={`detail/${slugify(name).slugged}`}>
    <figure className="figure">
      <img src={image} alt={name} className="figure__image" />
      <figcaption className="figure__info">{`${name} - ${region}`}</figcaption>
    </figure>
  </Link>
);

export default Country;
