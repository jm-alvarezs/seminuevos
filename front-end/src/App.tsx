import { ThemeProvider, createTheme } from "@mui/material/styles";
import PostCar from "./views/PostCar";
import "./App.css";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PostCar />
    </ThemeProvider>
  );
}

export default App;
