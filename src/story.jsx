import React, { useEffect, useState } from "react";

function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error("Error fetching stories:", err));
  }, []);

  return (
    <div className="stories d-flex gap-3 px-4">
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
      ) : (
        <p>Loading stories...</p>
      )}
    </div>
  );
}

export default Stories;
