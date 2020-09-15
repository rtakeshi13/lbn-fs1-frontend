import React, { useState } from "react";
import Router from "./router";

import AppContext from "./contexts/AppContext";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function App() {
  const [image, setImage] = useState({ localURL: "" });

  return (
    <AppContext.Provider value={{ image, setImage }}>
      <Container maxWidth="xs">
        <CssBaseline />
        <Router />
      </Container>
    </AppContext.Provider>
  );
}

export default App;
