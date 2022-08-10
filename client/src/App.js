import Footer from "./components/Fotter/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import './style/app.scss'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
