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
        className="h-36  aspect-video object-cover rounded-t-md bg-slate-300"
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
function Content() {
  const data = [
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
  return (
    <div className="flex w-full px-6 gap-6 mt-6 max-md:flex-wrap">
      <div className="flex-grow">
        <div className="w-full">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            autoPlay
            className="w-full"
          ></video>
          <div className="w-full mt-4">
            <p className="text-xl font-montserrat font-medium text-slate-600">
              E-Afrika Cameroun the next step
            </p>
            <div className="flex text-slate-400 mt-4 justify-between flex-wrap gap-4">
              <p className="text-slate-400 font-montserrat">1000 vues</p>
              <ul className="flex gap-6 font-montserrat">
                <li className="flex gap-2 items-baseline">
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="ml-1">1000</span>
                </li>
                <li className="flex gap-2 items-baseline">
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span>0</span>
                </li>
                <li className="flex gap-2 items-baseline">
                  <i className="fa-solid fa-share"></i>
                  <span className="ml-1">Partager</span>
                </li>
                <li className="flex gap-2 items-baseline">
                  <i className="fa-solid fa-download"></i>
                  <span className="ml-1">Télécharger</span>
                </li>
              </ul>
            </div>
            <div className="w-full mt-6">
              <button
                className="px-4 block ml-auto
                            py-2 rounded-md border-none hover:from-blue-600
                            hover:to-blue-300
                             text-slate-200 duration-100
                            font-palanquin text-xl bg-gradient-to-l
                             to-blue-600 from-blue-400
                            shadow-md active:scale-95"
              >
                {"S'abonner"}
              </button>
            </div>
            <div>
              <p className="text-xl font-montserrat">Commentaires</p>
              <div className="w-full mt-4">
                <ul className="w-full space-y-8">
                  <li className="w-full">
                    <div className="flex gap-4">
                      <img
                        src="https://picsum.photos/64"
                        alt="avatar"
                        className="w-12 h-12 rounded-full"
                      />
                      <p className="text-slate-400 font-montserrat">
                        <p className="text-slate-600">Sofiane</p>
                        Lorem, ipsum dolor sit amet consectetur adipis
                      </p>

                    </div>
                  </li>

                  <li className="w-full">
                    <div className="flex gap-4">
                      <img
                        src="https://picsum.photos/64"
                        alt="avatar"
                        className="w-12 h-12 rounded-full"
                      />
                      <p className="text-slate-400 font-montserrat">
                        <p className="text-slate-600">Sofiane</p>
                        Lorem, ipsum dolor sit amet consectetur adipis
                      </p>

                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-fit">
        <h2 className="text-xl font-montserrat font-medium mb-4">A Suivre</h2>
        <div className="grid grid-cols-1 gap-4 max-md:grid-cols-3 max-sm:grid-cols-1">
          {data.map((d, i) => (
            <MovieCard key={i} {...d} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
