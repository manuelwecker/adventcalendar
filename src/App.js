import React from "react";
import { ThemeProvider } from "emotion-theming";
import GlobalStyles from "./components/GlobalStyles";
import themes from "./utils/themes.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import DoorNext from "./components/pages/DoorNext";
import DoorPrev from "./components/pages/DoorPrev";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Footer from "./components/Footer";
import Calender from "./components/pages/Doors";

// function Door({ door, imageUrl, wish }) {
//   return (
//     <>
//       <h1>Türchen #{door}</h1>
//       <main>
//         <img src={imageUrl} alt="" />
//         <div>Text: {wish}</div>
//       </main>
//     </>
//   );
// }

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={themes.defaultTheme}>
        <GlobalStyles />
        <Router>
          <Container>
            <Header />
            <Switch>
              {/* <Route exact path="/">
                <Door
                  door={1}
                  imageUrl={
                    "https://images.unsplash.com/photo-1545048702-79362596cdc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  }
                  wish={"Text 1 zum Tuerchen"}
                />
              </Route> */}
              <Route path="/next">
                <DoorNext />
              </Route>
              <Route path="/home">
                <Calender />
              </Route>
              <Route path="/prev">
                <DoorPrev />
              </Route>
              <Route>
                <h1>404 Content</h1>
              </Route>
            </Switch>
            <Footer />
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
