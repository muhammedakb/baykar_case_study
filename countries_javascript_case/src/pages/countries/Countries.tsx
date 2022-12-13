import Country from "../../components/Country";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";
import { ICountry } from "../../types/country";
import "./countries.scss";

const Countries = () => {
  const { data, error } = useFetch<ICountry[]>(
    `${import.meta.env.VITE_BASE_URL}all`
  );
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <main className="container">
      <section className="container__items">
        {data.map((country) => (
          <Country
            key={country.name.common}
            image={country.flags.png}
            name={country.name.common}
            region={country.region}
          />
        ))}
      </section>
    </main>
  );
};

export default Countries;
