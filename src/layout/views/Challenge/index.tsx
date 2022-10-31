import React from "react";
import Button from "../Button";
import Categories from "./_components/Categories";
import ChartView from "./_components/Chart";
import Diary from "./_components/Diary";
import Exercise from "./_components/Exercise";

const ChallengeView = () => {
  return (
    <div className="mt-[100px]">
      <Categories />
      <div className="my-20">
        <ChartView />
      </div>
      <Exercise />
      <Diary />
      <Button />
    </div>
  );
};

export default ChallengeView;
