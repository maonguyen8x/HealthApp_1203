import Button from "src/components/Button";
import Categories from "./_components/Categories";
import ChartView from "./_components/ChartView";
import Diary from "./_components/Diary";
import Exercise from "./_components/Exercise";

const ChallengeView = () => {
  return (
    <div className="mt-[100px]">
      <Categories />
      <ChartView />
      <Exercise />
      <Diary />
      <Button />
    </div>
  );
};

export default ChallengeView;
