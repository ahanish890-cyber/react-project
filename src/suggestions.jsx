import React, { useEffect } from 'react'
import { useState } from 'react'

function suggestions() {

    const [profile, setprofile] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/profile/")
            .then((res) => res.json())
            .then((data) => setprofile(data))
            .catch((err) => console.error("Error fetching profile:", err));
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/suggestions")
            .then((res) => res.json())
            .then((data) => setSuggestions(data))
            .catch((err) => console.error("Error fetching suggestions:", err));
    }, []);

    return (
        <div>
            {profile ?
                <div className='d-flex align-items-center p-4 '>
                    <img src={profile.profile_pic} alt="Profile" width="50" height="50" className='rounded-circle me-2' />
                    <div>
                        <strong>{profile.username}</strong><br />
                        <span className='text-muted'>{profile.full_name}</span>

                    </div>
                    <div className='text-primary'>switch</div>


                </div> : <p>Loading profile...</p>}

            <h5 id="suggestion" className=' px-5 mb-3'>Suggestions For You <span className='span'>See All</span></h5>


            {suggestions.length > 0 ? (
                suggestions.map((user) => (
                    <div
                        key={user.id}
                        className="d-flex align-items-center justify-content-between mb-3 px-5"
                    >
                        <div className="d-flex align-items-center">
                            <img
                                src={user.profile_pic}
                                alt={user.username}
                                width="35"
                                height="35"
                                className="rounded-circle me-2"
                            />
                            <strong>{user.username}</strong>
                        </div>

                        <div className="text-primary follow-btn">Follow</div>
                    </div>
                ))
             
            ) : (
                <p>Loading suggestions...</p>
            )}

        </div>
    );
}

export default suggestions