import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./layer/Container";
import Header from "./components/Header";
import Main from "./layer/Main";
import Choice from "./components/Choice";
import Selected from "./components/Selected";
import Rules from "./components/Rules";
function App() {
  const [isRulesShow, setIsRulesShow] = useState(false);
  const rulesToggler = () => {
    setIsRulesShow(!isRulesShow);
  };
  return (
    <Container>
      <Header />
      {isRulesShow && <Rules onClick={rulesToggler} />}
      <Router>
        <Switch>
          <Route exact path="/">
            <Main>
              <Choice />
            </Main>
          </Route>
          <Route path="/selected">
            <Selected />
          </Route>
        </Switch>
      </Router>

      <div className="absolute bottom-4 right-4">
        <button
          onClick={rulesToggler}
          className="py-1 px-9 text-white font-bold border-2 border-header rounded-md bg-transparent"
        >
          RULES
        </button>
      </div>
    </Container>
  );
}

export default App;
