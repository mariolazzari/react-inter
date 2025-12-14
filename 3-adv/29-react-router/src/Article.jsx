import { useParams, useSearchParams } from "react-router-dom";

const Article = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");
  if (page) {
    setSearchParams("page", "0");
  }

  return (
    <div>
      <h2>Article {params.id} </h2>
    </div>
  );
};

export default Article;
