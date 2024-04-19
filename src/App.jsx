import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { css } from "@emotion/css";

function App() {
  return (
    <div className={flex}>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

const flex = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

export default App;
