import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Feed } from "./components/Feed";
import { NavBar } from "./components/NavBar";
import { NewPost } from "./components/NewPost";
import { RightBar } from "./components/RightBar";
import { SideBar } from "./components/SideBar";


function App() {
  const [mode, setMode] = useState('light')
  const DarkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box color={'text.primary'} bgcolor={'background.default'}>
        <NavBar />
        <Stack spacing={2} direction='row' justifyContent='space-between'>
          <SideBar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
          <NewPost/>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
