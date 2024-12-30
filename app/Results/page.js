"use client";
import { useEffect, useState } from "react";

export default function Results() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const state = params.get("state");
    const dis = params.get("dis");
    const bltype = params.get("bltype");

    if (state && dis && bltype) {
      fetchData(state, dis, bltype);
    } else {
      console.error("Missing query parameters");
      setLoading(false);
    }
  }, []);

  const fetchData = async (state, district, bloodType) => {
    try {
      const encodedState = encodeURIComponent(state)
      const encodedBloodType = encodeURIComponent(bloodType).replace("%20", "%2B");
      const response = await fetch(
        `/api/Search?state=${encodedState}&dis=${district}&bltype=${encodedBloodType}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <p>Loading...</p>;
  if (data.results[0] === undefined) {
    console.log("hi")
    return <p>No results found.</p>
  }
  else {
    return (
      <div>
        <h1>Blood Availability Results</h1>
        <ul>
          {data.results.map((item) => {
            const bloodTypes = Array.isArray(item.bloodtype) ? item.bloodtype.join(", ") : item.bloodtype;
            return (
              <li key={item.id}>
                {item.name} - {item.state} - {bloodTypes}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
