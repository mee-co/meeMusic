import { useParams } from "react-router-dom";

const AlbumPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Album {id}</h1>
      <p className="mt-2 text-slate-500">Album details coming soon.</p>
    </div>
  );
};
export default AlbumPage;
