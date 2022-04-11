import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from "../src/components/Header";
import Auth from "../src/components/Auth";
import { useSelector} from "react-redux";


function App() {
  const auth = useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
      <Header />
      {!auth && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
