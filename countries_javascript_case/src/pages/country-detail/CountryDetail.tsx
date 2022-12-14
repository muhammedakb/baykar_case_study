import { memo, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";
import { ICountry } from "../../types/country";
import "./country.scss";

const CountryDetail = () => {
  const { state } = useLocation();
  const { data, error } = useFetch<ICountry[]>(
    `${import.meta.env.VITE_BASE_URL}name/${state.countryName}`
  );

  const currencies = useMemo(
    () =>
      Object.values(data?.[0]?.currencies ?? {}).map((currency) => [
        `${currency.name} `,
        ` (${currency.symbol})`,
      ]),
    [data?.[0]?.currencies]
  );

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <main className="country">
      <h1 className="country__title">{data[0].name.common}</h1>
      <img
        className="country__img"
        src={data[0].flags.png}
        alt={data[0].name.common}
      />
      <ul className="country__infos">
        <li>
          <span>Official name:</span> {data[0].name.official}
        </li>
        <li>
          <span>Currency:</span> {currencies?.map((currency) => currency)}
        </li>
        <li>
          <span>Status:</span> {data[0].status}
        </li>
        <li>
          <span>Capital:</span> {data[0].capital}
        </li>
        <li>
          <span>Region:</span> {data[0].region}
        </li>
        <li>
          <span>Subregion:</span> {data[0].subregion}
        </li>
        <li>
          <span>Borders:</span>{" "}
          {data[0]?.borders?.map((border) => `${border}, `)}
        </li>
        <li>
          <a target="_blank" href={data[0].maps.googleMaps}>
            See in Google Maps
          </a>
        </li>
        <li>
          <a target="_blank" href={data[0].maps.openStreetMaps}>
            See in Open Street Maps
          </a>
        </li>
      </ul>
    </main>
  );
};

export default memo(CountryDetail);
