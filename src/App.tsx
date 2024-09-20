import React from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { requestPost } from "./redux/actions/post.action";

function App() {
  const { data, isLoading } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(requestPost());
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <p className="App-link">Loading...</p>
        ) : data ? (
          data.map((item, index) => (
            <div key={index}>
              <h2>{index}</h2>
              <p>{item.title}</p>
            </div>
          ))
        ) : (
          <p className="App-link">No Data</p>
        )}
      </header>
    </div>
  );
}

export default App;
