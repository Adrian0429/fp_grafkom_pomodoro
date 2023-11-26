"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const DataStream = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDataInterval = setInterval(fetchData, 200);

    // Cleanup interval when component is unmounted
    return () => clearInterval(fetchDataInterval);
  }, []); // Empty dependency array means this effect will run once on component mount

  return (
    <div>
      <h1>Data Stream</h1>
      {data && (
        <div>
          <p>Alpha: {data.alpha}</p>
          <p>Beta: {data.beta}</p>
          <p>Delta: {data.delta}</p>
          {/* Add other data fields as needed */}
        </div>
      )}
    </div>
  );
};

export default DataStream;
