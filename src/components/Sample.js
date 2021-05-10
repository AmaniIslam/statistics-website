import React, { useEffect } from "react";

function Sample() {
  useEffect(() => {
    window.location.href = "https://google.com/contact";
  }, []);

  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

export default Sample;
