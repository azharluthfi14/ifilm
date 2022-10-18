import React from "react";
import { useParams } from "react-router-dom";
const DetailSeries = () => {
  const { id } = useParams();
  return <div>DetailSeries {id}</div>;
};

export default DetailSeries;
