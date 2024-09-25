import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setArray] = useState([]);
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:6969/api/date");
    setArray(response.data.date);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <p className="text-white text-5xl">
      date:{" "}
      {data.map((value, key) => (
        <span key={key}>
          {value}
          {key === data.length - 1 ? "" : "/"}
        </span>
      ))}
    </p>
  );
}

export default App;
