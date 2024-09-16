import { data } from "autoprefixer";
import { useLoaderData } from "react-router-dom";
// import React, { useEffect, useState } from "react";

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/alokkumarojha")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="max-w-lg bg-white rounded-lg shadow-md p-6 mx-auto mt-2 text-center">
      <img
        src={data.avatar_url}
        alt={`${data.login}'s avatar`}
        className="w-32 h-32 mx-auto rounded-full mb-4"
      />
      <h1 className="text-3xl font-bold mb-4">{data.name || data.login}</h1>
      <p className="text-lg">Followers: {data.followers}</p>
      <p className="text-lg">Following: {data.following}</p>

      <a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-400 underline"
      >
        Visit GitHub Profile
      </a>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/alokkumarojha");
  return response.json();
};
