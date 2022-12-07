import "./App.css";
import luffy from "./images/luffy.png";

function App() {
  return (
    <div className="app">
      <Hello />
      <Desc />
      <Luffy />
      <Footer />
    </div>
  );
}

function Hello() {
  const greeting = "Hello New World!";

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

function Footer() {
  const footer = "Created by Mudia Osagie ©";
  return (
    <div className="foo-center">
      <p className="foo">{footer}</p>
    </div>
  );
}

function Luffy() {
  return (
    <div>
      <button className="luffy-button" type="submit">
        <img className="luffy" src={luffy} alt="buttonpng" />
      </button>
    </div>
  );
}

export default App;

//TODO: make onclick function when button is clicked luffy will be colored and play One Piece music