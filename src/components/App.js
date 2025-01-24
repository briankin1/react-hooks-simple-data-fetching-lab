import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch a random dog image from the API
    const fetchDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogImage(data.message); // Set the dog image URL
      } catch (error) {
        console.error("Error fetching dog image:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchDogImage(); // Call the fetch function
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Show loading text while fetching
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Display the dog image
      )}
    </div>
  );
}

export default App;

