import "./App.css";

function App() {
  return (
    <div className="app">
      <Hello />
      <Desc />
    </div>
  );
}

function Hello() {
  const greeting = "Hello World!";

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}

function Desc() {
  const title = "Description";
  return (
    <div className="desc">
      <h2>
        <span className="desc-title">{title}</span>
      </h2>
      <p>
        This is my first react app. Hope you like it. It's pretty barebones...
      </p>
    </div>
  );
}

export default App;
