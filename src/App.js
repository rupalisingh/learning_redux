import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from "../src/components/Header";
import Auth from "../src/components/Auth";

function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  );
}

export default App;
