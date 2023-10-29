import { Fragment } from "react";

const NavigationLayouts = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-7 mt-8 mx-8 bg-gray-200 rounded-xl border-2 border-white shadow-xl py-6">
        <a
          className="col-span-2 text-3xl font-bold  border-white ml-52"
          href="/"
        >
          REACTAPP
        </a>
        <a className="col-span-1 text-xl border-l-2  ml-10" href="/">
          HOME
        </a>
        <a className="col-span-1 text-xl border-l-2  ml-10" href="/albums">
          ALBUMS
        </a>
        <button className="col-span-1 text-xl border-white">ABOUT US</button>
        <button className="col-span-1 text-xl border-white">CONNECT</button>
        <button className="col-span-1 text-xl border-white">PROFILE</button>
      </div>
    </Fragment>
  );
};

export default NavigationLayouts;
