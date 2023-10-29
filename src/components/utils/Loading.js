import { Spinner } from "@material-tailwind/react";

const Loading = () => {
  return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto mt-20" />;
};

export default Loading;

// component loading disini tapi akan digunakan ke component lain
// logicnya nanti akan dibuat di component lain
