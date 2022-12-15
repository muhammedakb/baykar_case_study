import { useMemo, useState } from "react";
import DataTable from "../../components/DataTable";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";
import { ICountry } from "../../types/country";

const CountriesDataTable = () => {
  const { data, error } = useFetch<ICountry[]>(
    `${import.meta.env.VITE_BASE_URL}all`
  );

  const totalPages = useMemo(
    () => Math.floor((data?.length ?? 12) / 12),
    [data?.length]
  );

  const [page, setPage] = useState<number>(0);
  // const [isSearching, setIsSearching] = useState<boolean>(false);

  const slicedData = useMemo(
    () =>
      data
        ?.map((country) => ({
          name: country.name.common,
          currency: Object.values(country.currencies ?? {}).map(
            (currency) => `${currency.name}  (${currency.symbol})`
          ),
          status: country.status,
          capital: country.capital,
          region: country.region,
          subregion: country.subregion,
          independent: country.independent ? "yes" : "no",
          landlocked: country.landlocked ? "yes" : "no",
          area: country.area,
          flag: country.flag,
          population: country.population,
        }))
        ?.slice(page * 12, page * 12 + 12),
    [page, data]
  );

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <main>
      <DataTable
        rows={slicedData ?? []}
        paginationProps={{ pagination: true, page, setPage, totalPages }}
      />
    </main>
  );
};

export default CountriesDataTable;
