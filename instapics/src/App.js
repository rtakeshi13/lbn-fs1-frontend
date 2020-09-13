import React, { useState } from "react";
import Router from "./router";

import AppContext from "./contexts/AppContext";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// const theme = createMuiTheme({
//   overrides: {
//     MuiCssBaseline: {
//       "@global": {
//         html: {
//           background: "#212223",
//         },
//       },
//     },
//   },
// });

function App() {
  const [image, setImage] = useState({ localURL: "" });

  return (
    <AppContext.Provider value={{ image, setImage }}>
      {/* <ThemeProvider theme={theme}> */}
      <CssBaseline />
      <Router />
      {/* </ThemeProvider> */}
    </AppContext.Provider>
  );
}

export default App;
