import React, { useEffect, useState } from "react";

function Stories() {
  const [stories, setStories] = useState([]);
  const containerRef = React.useRef(null);

  const scrollRight = () => {  
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200, // Scroll right
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error("Error fetching stories:", err));
  }, []);

    const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200, // Scroll left
        behavior: "smooth",
      });
    }
  };
  return (
    <div id="story-container" className="d-flex gap-3 align-items-center ">
      <div className="stories d-flex gap-3 px-4">
         <div
        className="stories d-flex gap-3 px-4 overflow-auto"
        ref={containerRef}
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
      ></div>
        {stories.length > 0 ? (
          stories.map((story) => (
            <div key={story.id} className="text-center">
              <img
                src={story.profile_pic}
                alt={story.username}
                className="story-img"
              />
              <div className="story-username">{story.username}</div>
            </div>
          ))

        )
          : (
            <p>Loading stories...</p>
          )}
      </div>
    
    </div>
  );
}

export default Stories;
