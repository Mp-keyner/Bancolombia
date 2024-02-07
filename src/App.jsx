import { Button, Stack } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IconBanco } from "./assets/svg";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NavLayout from "./components/Nav/NavLayout";
import logo from "./assets/Bancolombia.svg"

const App = () => {
  return (
    <Stack sx={{
      backgroundImage: `url(${logo})`,
      height: '100vh',
      backgroundSize: '30pc',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right'
    }}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Home"
          element={
            <NavLayout>
              <Home />
            </NavLayout>
          }
        />
        {/* <Route path="*" element={<Layout />} /> */}
      </Routes>
    </BrowserRouter>
    </Stack>
  );
};

export default App;
