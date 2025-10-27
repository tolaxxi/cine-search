import { BsStarFill } from 'react-icons/bs';

const MovieCard = ({
  original_title,
  overview,
  vote_average,
  backdrop_path,
  release_date,
  first_air_date,
  poster_path,
  name,
}) => {
  const title = original_title || name || 'Untitled';
  const date = release_date || first_air_date || 'N/A';
  const rating = vote_average ? vote_average.toFixed(1) : 'N/A';
  const imageUrl = backdrop_path || poster_path;

  return (
    <section className="w-70  h-100 border-2 p-3.5   border-indigo-50 rounded-3xl flex flex-col gap-2 ">
      <div className="rounded-2xl overflow-hidden">
        <img src={`https://image.tmdb.org/t/p/w500/${imageUrl}`} alt={title} className="bg-cover bg-center h-fit" />
      </div>
      <div className="py-2 flex flex-col gap-2">
        <div className="font-medium flex w-fit items-start justify-between ">
          <h2 className="text-indigo-50 text-xl break-all line-clamp-2">{title}</h2>
          <span className="text-indigo-400 flex items-center gap-2 ml-4 text-lg">
            <BsStarFill size={20} />
            <p>{rating}</p>
          </span>
        </div>

        <div className="text-gray-400 flex flex-col gap-2">
          <p>{date.slice(0, 4)}</p>
          <p className="line-clamp-3">{overview}</p>
        </div>
      </div>
    </section>
  );
};
export default MovieCard;
