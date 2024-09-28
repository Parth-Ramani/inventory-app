// src/components/LoginModal.jsx
import { useEffect, useState } from "react";
import { Modal, Box, TextField, Typography, Button } from "@mui/material";
// import logo from "../assets/images/logo.png"; // Your app logo
import googleLogo from "../assets/images/googlelogo.png"; // Google logo
import { auth, provider } from "./googleSignIn/config";
import { signInWithPopup } from "firebase/auth";
import Dashboard from "../pages/Dashboard.jsx";
const LoginModal = ({ open, handleClose }) => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: ""
  });
  const [value, setValue] = useState("");
  const handleGoogleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
    handleClose(); // Close modal after login attempt
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  console.log(value);
  const handleLogin = () => {
    console.log("Logging in with:", loginDetails);
    // Add your login logic here
    handleClose(); // Close modal after login attempt
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <>
      {value ? <Dashboard /> : ""}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2
          }}
        >
          {/* Logo
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <img
            src={logo}
            alt="App Logo"
            style={{ width: "80%", height: "auto" }}
          />
        </Box> */}

          <Typography variant="h6" mb={2}>
            Login
          </Typography>

          <TextField
            fullWidth
            label="Username"
            name="username"
            value={loginDetails.username}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            value={loginDetails.password}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{ mb: 1 }}
          >
            Login
          </Button>

          <Typography align="center" sx={{ mb: 2 }}>
            or
          </Typography>

          {/* Google Sign In Button */}

          <Button
            fullWidth
            variant="outlined"
            onClick={handleGoogleClick}
            sx={{
              color: "black",
              borderColor: "#db4437",
              "&:hover": { borderColor: "#db4437" }
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                src={googleLogo}
                alt="Google Logo"
                style={{ width: "20px", height: "20px", marginRight: "8px" }}
              />
              Sign in with Google
            </Box>
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default LoginModal;
