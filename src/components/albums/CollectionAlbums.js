import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Carousel, Typography } from "@material-tailwind/react";
import Loading from "../utils/Loading";

const CollectionAlbums = () => {
  const [getDatas, setDatas] = useState([]);

  const [getLimit, setLimit] = useState(1);

  const [getLoading, setLoading] = useState(true); // untuk logic loadingnya

  // ketika menggunakan useEffect untuk ambil data dari API disarankan menggunakan clean up function untuk menghindari memory leak (bocornya memory)
  useEffect(() => {
    let flush = false;
    if (flush === false) {
      setLoading(true); // loading
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${getLimit}`, // dilimit 3 data
      })
        .then((result) => {
          setDatas(result.data);
          // awalnya console.log(result.data) untuk cek
        })
        .catch((err) => {
          console.log(err);
          // loading
        })
        .finally(() => {
          setLoading(false);
          // loading
        });
    }
    return () => {
      // pengubahan flush ini disebut juga clean up function
      flush = true;
    };
  }, [getLimit]);
  // ketika flush = false maka jalankan saja axiosnya tapi kalau sudah dijalankan, flushnya jadi true ya tunggu dulu sampai ada benar-benar perubahan di getLimit untuk menjalankan axios lagi
  // kalau statenya udh banyak tidak menggunakan clean up function maka akan bocor memorynya dan bikin lemot aplikasinya karena statenya akan ke render terus menerus

  // cek
  //   console.log(getDatas);

  const handleLimit = (param) => {
    param === "+" ? setLimit(getLimit + 1) : setLimit(getLimit - 1);
  };

  if (getLoading === true) return <Loading />;

  return (
    <Fragment>
      <Carousel
        className="rounded-3xl mx-auto my-10"
        style={{
          width: "1200px",
          height: "720px",
        }}
      >
        {getDatas.map((data, index) => {
          return (
            <div className="relative h-full w-full" key={index}>
              <img
                src={data.url}
                alt={data.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mt-96 text-2xl"
                  >
                    {data.title}
                  </Typography>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="grid grid-cols-2">
        <div className="items-center justify-center text-center ">
          {/* dikurawal kalau get limit kurang dari 1 maka buttonnya hilang */}
          {getLimit > 1 && (
            <button
              className="bg-gray-300 text-black hover:bg-gray-600 hover:text-white font-bold py-2 px-4 rounded-xl shadow-xl border-white-2"
              // cara langsung
              onClick={() => {
                handleLimit("-");
              }}
            >
              Decrease Carousel
            </button>
          )}
        </div>
        <div className="items-center justify-center text-center ">
          <button
            className="bg-gray-300 text-black hover:bg-gray-600 hover:text-white font-bold py-2 px-4 rounded-xl shadow-xl border-white-2"
            // cara pakai function (function diatas)
            onClick={() => {
              handleLimit("+");
            }}
          >
            Increase Carousel
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default CollectionAlbums;
