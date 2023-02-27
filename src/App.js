import "./App.css";
import Header from "./components/banner/Header";
import Credentials from "./components/credentials/Credentials";
import LinkButton from "./components/link_button/LinkButton";
import Photo from "./components/photo/Photo";

function App() {
  return (
    <>
    <Header />
    <Credentials>
      <Photo url="assets/images/irvin-quiroz.png" title="Irving Quiroz" />
      <Photo url="assets/images/amparo-espinoza.png" title="Amparo Espinoza" />
    </Credentials>
    <LinkButton
      text="Conoce más"
      url="https://www.youtube.com/watch?v=r7gRMfq00Os&list=PL9EzohqwHbVGRkTsxynoQ88tvE0kBFgQ8"
      title="Conoce más"
    />
    </>
    
  );
}

export default App;
