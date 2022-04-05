import Footer from "./components/Footer";
import FormSearch from "./components/FormSearch";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="app--container">
        <FormSearch />
      </div>
      <Footer />
    </>
  );
}

export default App;
