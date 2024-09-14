import { getNewsList } from "../_libs/microcms";
import SearchField from "../_components/SearchField";
import NewsList from "../_components/NewsList";
import Pagination from "../_components/Pagination";
import { NEWS_LIST_LIMIT } from "../_constants";

export const revalidate = 0;

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
