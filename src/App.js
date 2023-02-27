import "./App.css";
import Header from "./components/banner/Header";
import LinkButton from "./components/link_button/LinkButton";

function App() {
  return (
    <>
    <Header />
    <LinkButton
      text="Conoce más"
      url="https://www.youtube.com/watch?v=r7gRMfq00Os&list=PL9EzohqwHbVGRkTsxynoQ88tvE0kBFgQ8"
      title="Conoce más"
    />
    </>
    
  );
}

export default App;
