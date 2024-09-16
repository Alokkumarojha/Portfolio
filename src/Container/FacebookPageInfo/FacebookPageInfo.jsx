import React from "react";

const FacebookPageInfo = () => {
  const pageInfo = useLoaderData();
  return (
    <div>
      <h1>{pageInfo.name}</h1>
      <p>Followers: {pageInfo.fan_count}</p>
    </div>
  );
};

export default FacebookPageInfo;

export const FacebookPageloader = async () => {
  const response = await fetch(
    `https://graph.facebook.com/v17.0/{page-id}?fields=name,fan_count&access_token={your-access-token}`
  );
  return response.json();
};
