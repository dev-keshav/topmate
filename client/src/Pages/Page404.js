import React from "react";

const Page404 = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Optional: Set a height for vertical centering
  };

  return (
    <div style={containerStyle}>
      <h2> Le API response..</h2>{" "}
      <img
        height="222"
        width="222"
        src="https://memeheist.com/wp-content/uploads/2023/08/Hum-Pe-To-Hai-Hi-No-Meme-1-1024x1024.jpg"
        alt="Error Meme"
      />
      <h1>Page 404</h1>
    </div>
  );
};

export default Page404;
