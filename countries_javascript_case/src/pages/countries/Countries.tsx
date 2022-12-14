import { useMemo, useState } from "react";
import Country from "../../components/Country";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import useFetch from "../../hooks/useFetch";
import { ICountry } from "../../types/country";
import "./countries.scss";

const Countries = () => {
  const { data, error } = useFetch<ICountry[]>(
    `${import.meta.env.VITE_BASE_URL}all`
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
