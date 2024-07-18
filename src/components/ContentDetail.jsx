import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

function MovieCard({ title, description, views, img }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current === null || loaded) return;
    const currentImgRef = imgRef.current;
    currentImgRef.addEventListener("load", () => {
      setLoaded(true);
      console.log(currentImgRef);
    });

    return () => {
      currentImgRef.removeEventListener("load", () => { });
    };
  }, []);

  return (
    <div className={`font-palanquin w-[256px ${loaded ? "" : "animate-pulse"}`}>
      <img
        className="w-full aspect-video object-cover rounded-t-md bg-slate-300"
        src={img}
        ref={imgRef}
      />
      <div className="mt-4 p-2 space-y-1">
        {loaded ? (
          <p className="font-montserrat truncate">{title}</p>
        ) : (
          <p className="w-5/6 h-5 bg-slate-300"></p>
        )}
        {loaded ? (
          <p className="text-slate-500 truncate">{description}</p>
        ) : (
          <p className="w-4/6 h-5 bg-slate-300"></p>
        )}
        {loaded ? (
          <p className="text-slate-400">{views} vues</p>
        ) : (
          <p className="w-3/6 h-5 bg-slate-300"></p>
        )}
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
function ContentDetail() {
  let data = [
    {
      title: "Mad Max: Reunion",
      description: "Description",
      views: "1000",
      img: "https://picsum.photos/256",
    },
    {
      title: "Mad Max: Reunion",
      description: "Description",
      views: "1000",
      img: "https://picsum.photos/257",
    },
    {
      title: "Mad Max: Reunion",
      description: "Description",
      views: "1000",
      img: "https://picsum.photos/258",
    },
    {
      title: "Mad Max: Reunion",
      description: "Description",
      views: "1000",
      img: "https://picsum.photos/259",
    },
  ];

  data = data.concat(...data, ...data )
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-6 gap-6 mt-6 grid-flow-row h-fit">
      {
        data.map((el)=> <MovieCard key={el.title + el.img} title={el.title}  description= {el.description} views= {el.views} img={el.img}/>)
      }
    </div>
  );
}

export default ContentDetail;
