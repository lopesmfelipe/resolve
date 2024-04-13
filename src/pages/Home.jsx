import "../styles/general.css";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <main>
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
