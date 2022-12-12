import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const CountryDetail = (props: Props) => {
  const { country } = useParams();
  console.log("params", country);
  return (
    <div>
      <h1>CountryDetail</h1>
    </div>
  );
};

export default CountryDetail;
