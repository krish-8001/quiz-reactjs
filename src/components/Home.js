import React from "react";
import titlejson from "./assessmenttitle.json";

import { Link } from "react-router-dom";

function Home() {
  const title = JSON.parse(JSON.stringify(titlejson));
  console.log(title.title);
  return (
    <>
      <h2>Welcome {title.title} </h2>

      <button>
        <Link to="/mcq">Click Here To Start Assessment</Link>
      </button>
    </>
  );
}

export default Home;
