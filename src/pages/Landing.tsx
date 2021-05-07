import React, { FunctionComponent } from "react";
import Container from "../components/Container";
import Card from "../components/Card";

import { useWeatherData } from "../hooks/useWeatherData";
import * as Utils from "../utils/helpers";

// Defines the type
import * as Model from "../models/index";

const LandingView: FunctionComponent = () => {
  const { data, error } = useWeatherData();

  const result: number[] = data?.list?.map((a: any) => a.main.temp);

  const highestTemp = Utils.calcHighestTemp(result);
  const lowestTemp = Utils.calcLowestTemp(result);
  const median = Utils.calcMedianTemp(result);
  const average = Utils.calcAverageTemp(result);

  if (!data) return <p>Loading</p>;

  if (error != null) return <p>error: {error}</p>;

  return (
    <Container>
      <Card
        title="Lowest Temperature"
        number={lowestTemp}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Card
        title="Highest Temperature"
        number={highestTemp}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Card
        title="Median Temperature"
        number={median}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Card
        title="Average Temperature"
        number={average}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </Container>
  );
};

export default LandingView;
