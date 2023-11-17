import "./App.css";
import GallerySection from "./components/layout/GallerySection";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <Header />
      </header>
      <main>
        <GallerySection />
      </main>
    </div>
  );
}

export default App;
