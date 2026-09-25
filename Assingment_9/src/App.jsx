import React, { useEffect, useState } from "react";
import "./App.css";
export const LiveSearch = () => {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!search) {
      setResult([]);
      return;
    }

    const controller = new AbortController();
    setLoading(true);

    const timer = setTimeout(() => {
      const fetchData = async () => {
        try {
          const responce = await fetch(
            `https://demo.dataverse.org/api/search?q=${search}`,
            { signal: controller.signal },
          );
          const data = await responce.json();
          setResult(data?.data?.items || []);
        } catch (error) {
          if (error.name !== "AbortError") {
            console.error("Error:", error);
          }
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, 500);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [search]);
  return (
    <div className="container">
      <div className="search-field">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="SEARCH"
          className="input-base"
        />
      </div>

      <div className="list-wrapper">
        {loading ? (
          <div className="empty-row">loading....</div>
        ) : search && result.length === 0 ? (
          <div className="empty-row">NO MATCHES</div>
        ) : (
          result.map((item, index) => (
            <div key={item.global_id || index} className="list-row">
              <span className="name">{item.name}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const App = () => {
  return <LiveSearch />;
};

export default App;
