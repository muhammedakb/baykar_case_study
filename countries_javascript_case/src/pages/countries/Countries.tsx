import { Link, Outlet } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Country } from "../../types/country";

type Props = {};

const Countries = (props: Props) => {
  const { data, error } = useFetch<Country[]>(
    `${import.meta.env.VITE_BASE_URL}all`
  );
  return (
    <div>
      <nav>
        <ul>
          <li>ülkeler</li>
          <li>ülkeler datatable</li>
        </ul>
      </nav>
      <h1>Countries page</h1>
      <Link to="/countries/turkey">Detay deneme</Link>
      <br />
      <Link to="/countries/with-datatable">Datatable deneme</Link>
      <Outlet />
    </div>
  );
};

export default Countries;
