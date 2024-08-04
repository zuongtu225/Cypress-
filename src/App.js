import "./App.css";

function App() {
  return (
    <>
      <form>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="name" name="username" className="name" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="fname" name="lname" className="name" />
        <br />
        <input type="text" id="lname" name="lname" className="mena" />
      </form>
    </>
  );
}

export default App;
