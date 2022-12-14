import { Link, useNavigate, useNavigation } from "react-router-dom";
import { slugify } from "../../utils/slug";
import "./country.scss";

type Props = {
  image: string;
  name: string;
  region: string;
};

const Country = ({ image, name, region }: Props) => {
  const navigate = useNavigate();

  return (
    <figure
      className="figure"
      onClick={() =>
        navigate(`detail/${slugify(name).slugged}`, {
          state: {
            countryName: slugify(name).current,
          },
        })
      }
    >
      <img src={image} alt={name} className="figure__image" />
      <figcaption className="figure__info">{`${name} - ${region}`}</figcaption>
    </figure>
  );
};

export default Country;
