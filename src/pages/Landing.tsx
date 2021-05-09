import React, { FunctionComponent } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import Title from "../components/Title";

import { useWeatherData } from "../hooks/useWeatherData";
import * as Utils from "../utils/helpers";

// Defines the type
import { t } from "../models/index";

const LandingView: FunctionComponent = () => {
  const { data, error } = useWeatherData();

  const result: Array<number> = data?.list?.map((a: t) => a.main.temp);

  const highestTemp = Utils.calcHighestTemp(result);
  const lowestTemp = Utils.calcLowestTemp(result);
  const median = Utils.calcMedianTemp(result);
  const average = Utils.calcAverageTemp(result);

  if (!data) return <p>Loading</p>;

  if (error != null) return <p>error: {error}</p>;

  return (
    <React.Fragment>
      <Title>Weather in Gothenburg</Title>

      <Container>
        <Card
          title="Lowest Temperature"
          number={lowestTemp}
          text="This is the lowest temperature forecast for the next 4 days"
        />
        <Card
          title="Highest Temperature"
          number={highestTemp}
          text="This is the highest temperature forecast for the next 4 days"
        />
        <Card
          title="Median Temperature"
          number={median}
          text="This is the median temperature forecast for the next 4 days"
        />
        <Card
          title="Average Temperature"
          number={average}
          text="This is the average temperature forecast for the next 4 days"
        />
      </Container>
    </React.Fragment>
  );
};

export default LandingView;
