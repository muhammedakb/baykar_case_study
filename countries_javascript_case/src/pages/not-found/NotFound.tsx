import { Link, useNavigate } from "react-router-dom";
import NotFoundAnimation from "../../components/NotFound";

type Props = {};

const NotFound = (props: Props) => {
  const navigate = useNavigate();
  return (
    <main>
      <NotFoundAnimation />
      <button onClick={() => navigate(-1)}>Go back</button>
      <Link to="/">Go home</Link>
    </main>
  );
};

export default NotFound;
