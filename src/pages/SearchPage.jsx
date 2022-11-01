import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SkeletonCard from "../components/SkeletonCard";
import Card from "../components/Card";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const getSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&query=${query}`
    );
    return data.results;
  };

  const { data, isLoading } = useQuery(["searchResult", query], getSearch);

  const fillterMedia = data?.filter(
    (item) => item.media_type === "movie" || item.media_type === "tv"
  );

  if (isLoading) {
    return (
      <div className="my-5">
        <SkeletonCard />
      </div>
    );
  }

  return (
    <>
      {fillterMedia.length <= 0 ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center mb-5 p-10 bubble bg-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-28 h-28"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </div>
            <h3>Nothing Found</h3>
            <p className="text-slate-300">Try searching for something else</p>
          </div>
        </div>
      ) : (
        <div className="mt-5 min-h-max">
          <h3 className="text-slate-300">
            Showing all results for <span className="italic text-white">{query}</span>
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 mt-2.5 mb-5 gap-4">
            {fillterMedia?.map((item, i) => (
              <Card key={i} type={item.media_type} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
