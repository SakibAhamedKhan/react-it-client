import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/LoginSignup/Login";

function App() {
  const [mode, setMode] = useState('light');
  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
        </Routes>
      </Box>
    </ThemeProvider>

  );
}

export default App;
