import "./Nav.css";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Pepsi_logo_%282014%29.svg/800px-Pepsi_logo_%282014%29.svg.png"></img>
        <input></input>
        <div className="Nav">
          <p>Menjadi Vendor</p>
          <button>Masuk</button>
          <button className="daftar">Daftar</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
