// app/restaurants/loading.tsx or app/loading.tsx for global
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
      <span className="ml-4 text-xl text-blue-500"></span>
    </div>
  );
};

export default Loading;
