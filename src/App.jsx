import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Отправляем GET-запрос на "/test" при загрузке компоненты
    fetch('/test')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Response from Server</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );

}


export default App;
