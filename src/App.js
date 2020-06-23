import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingComponent from "./components/LandingComponent";
import store from "./store";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import Movie from "./components/MovieInfoPage";
import MyContent from "./components/MyContent";
import { fetchMyContent } from "./actions/actionCreators";

const unsubscribe = store.subscribe(() => {
  console.log("store subscribed and updated state", store.getState());
});

function App() {
  store.dispatch(fetchMyContent());

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="container">
            <header className="App-header">
              <div
                style={{ background: "#00000033", width: "100%", padding: 14 }}
              >
                <NavBar />
                <p className="tagline">
                  Watch you favorite movies and series now!!!
                </p>
              </div>
            </header>
            <Route exact path="/" component={LandingComponent} />
            <Route exact path="/my-content" component={MyContent} />
            <Route exact path="/movie/:id" component={Movie} />
            <Footer />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
