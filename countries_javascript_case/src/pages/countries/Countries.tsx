import { ChangeEvent, useEffect, useMemo, useState } from "react";
import Country from "../../components/Country";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import useFetch from "../../hooks/useFetch";
import { ICountry } from "../../types/country";
import "./countries.scss";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Countries = () => {
  const [name, setName] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const apiEndpoint = useMemo((): string => {
    let endpoint = "";
    if (name.length > 0) {
      endpoint = `${import.meta.env.VITE_BASE_URL}name/${name}`;
    }
    if (region.length > 0) {
      endpoint = `${import.meta.env.VITE_BASE_URL}region/${region}`;
    }
    if (name.length < 1 && region.length < 1) {
      endpoint = `${import.meta.env.VITE_BASE_URL}all`;
    }
    return endpoint;
  }, [name, region]);

  const { data, error } = useFetch<ICountry[]>(
    apiEndpoint,
    name.length > 0 ? 1000 : 0
  );

  const totalPages = useMemo(
    () => Math.floor((data?.length ?? 12) / 12),
    [data?.length]
  );

  const [page, setPage] = useState<number>(0);

  const slicedData = useMemo(
    () => data?.slice(page * 12, page * 12 + 12),
    [page, data]
  );

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <main className="container">
      <header className="container__header">
        <input
          type="search"
          placeholder="Enter country name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <select
          className="container__header__select"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">Choose region</option>
          {regions.map((reg) => (
            <option value={reg} key={reg}>
              {reg}
            </option>
          ))}
        </select>
      </header>
      <section className="container__items">
        {slicedData?.map((country) => (
          <Country
            key={country.name.common}
            image={country.flags.png}
            name={country.name.common}
            region={country.region}
          />
        ))}
      </section>
      <section className="container__footer">
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </section>
    </main>
  );
};

export default Countries;
