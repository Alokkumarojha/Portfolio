import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  return (
    <div className="bg-yellow-500 text-white py-16 text-center min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-lg bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200 text-gray-900">
        <img
          src={data.avatar_url}
          alt={`${data.login}'s avatar`}
          className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-yellow-500"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{data.name || data.login}</h1>
        <p className="text-lg text-gray-600 mb-2">@{data.login}</p>
        <p className="text-lg font-medium text-gray-700">Followers: <span className="text-yellow-500 font-semibold">{data.followers}</span></p>
        <p className="text-lg font-medium text-gray-700">Following: <span className="text-green-500 font-semibold">{data.following}</span></p>
        <p className="text-lg font-medium text-gray-700">Public Repos: <span className="text-purple-500 font-semibold">{data.public_repos}</span></p>

        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 font-semibold"
        >
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/alokkumarojha");
  return response.json();
};
