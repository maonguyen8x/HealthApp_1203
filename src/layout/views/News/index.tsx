import Button from "../../../components/Button";
import Article from "./_components/Article";
import Categories from "./_components/Categories";

const NewsView = () => {
  return (
    <div className="mt-[100px]">
      <Categories />
      <Article />
      <Button />
    </div>
  );
};

export default NewsView;
