import "../styles/general.css";
import "../styles/home.css";
import logo from "./../assets/images/retrologo.jpg";

const Home = () => {
  return (
    <>
      <header>
        <div className="logo-container">
          <img src={logo} />
          <h3>MangaBook</h3>
        </div>

        <div className="menu">
          <p>Readlist</p>
          <p>Profile</p>
        </div>
      </header>
      <main className="background-image">
        <div>
          <h2>Mangas & Books All in One Place</h2>
          <h3>Search, rate, list and share your favorite mangas and books </h3>
        </div>
        <div className="searchbar-container">
          <input type="text" placeholder="Search" className="searchbar" />
        </div>
      </main>
    </>
  );
};

export default Home;
