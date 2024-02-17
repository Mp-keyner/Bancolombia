import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Person4Icon from "@mui/icons-material/Person4";
import KeyIcon from "@mui/icons-material/Key";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import App from "../App";
import { AppContext } from "../context/AppContext";
import useForm from "../hooks/UseFrom";

const Login = () => {
  const { setDataUser } = useContext(AppContext);
  const { form, onChangeInfo } = useForm({
    account: "104343",
    password: "keyner1105Ko",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const SingIn = async () => {
    setLoading(true);
    console.log("hello");
    const TokenTrue = localStorage.getItem("token");
    if (TokenTrue != null) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/Home");
      }, 1000);
    } else {
      try {
        const Data = await axios.post("https://apibank.ikoodi.site/api/login", {
          account: "104343",
          password: "keyner1105Ko",
        });
        setLoading(false);
        console.log(Data);
        setDataUser(Data.data.user);
        navigate("/Home");
        localStorage.setItem("token", JSON.stringify(Data.data));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };
  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <Stack width="35pc" height="30pc" spacing={9} border="1px solid #333">
        <Stack
          bgcolor="#333"
          alignItems="center"
          justifyContent="center"
          height="3.5pc"
        >
          <Typography
            variant="h1"
            component="h1"
            width="100%"
            textAlign="center"
            color="#fff"
          >
            Ingresa los datos para continuar
          </Typography>
        </Stack>
        <Stack spacing={3} padding="0 2pc">
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Person4Icon
              sx={{ color: "action.active", mr: 1.2, my: 0.8, fontSize: 30 }}
            />
            <TextField
              id="input-with-sx"
              label="Account"
              placeholder="122.."
              variant="standard"
              fullWidth
              value={form.account}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <KeyIcon
              sx={{ color: "action.active", mr: 1.2, my: 0.8, fontSize: 30 }}
            />
            <TextField
              id="input-with-sx"
              label="Password"
              placeholder="122.."
              variant="standard"
              fullWidth
              value={form.password}
              onChange={({ target: value }) =>
                onChangeInfo(parseInt(value), "account")
              }
            />
          </Box>
        </Stack>
        <LoadingButton
          loading={loading}
          // startIcon={<SaveIcon />}
          variant="outlined"
          onClick={() => {
            SingIn();
          }}
          sx={{
            width: "80%",
            alignSelf: "center",
          }}
        >
          Continuar
        </LoadingButton>
      </Stack>
    </Stack>
  );
};

export default Login;
