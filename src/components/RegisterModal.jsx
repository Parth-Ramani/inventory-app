// src/components/RegisterModal.jsx
import { useState } from "react";
import { Modal, Box, TextField, Typography, Button } from "@mui/material";
import googleLogo from "../assets/images/googlelogo.png"; // Google logo
import { auth, provider } from "./googleSignIn/config";
import { signInWithPopup } from "firebase/auth";
import Dashboard from "../pages/Dashboard.jsx";
const RegisterModal = ({ open, handleClose }) => {
  const [registerDetails, setRegisterDetails] = useState({
    username: "",
    password: "",
    email: ""
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
    setRegisterDetails({ ...registerDetails, [name]: value });
  };

  const handleRegister = () => {
    console.log("Registering with:", registerDetails);
    // Add your registration logic here
    handleClose(); // Close modal after registration attempt
  };

  return (
    <>
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
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <img src={logo} alt="App Logo" style={{ width: '80%', height: 'auto' }} />
        </Box> */}

          <Typography variant="h6" mb={2}>
            Register
          </Typography>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={registerDetails.email}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={registerDetails.username}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            value={registerDetails.password}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <Button
            fullWidth
            variant="contained"
            onClick={handleRegister}
            sx={{ mb: 1 }}
          >
            Register
          </Button>
          <Typography align="center" sx={{ mb: 2 }}>
            or
          </Typography>

          {/* Google Sign Up Button */}
          <Button
            fullWidth
            variant="outlined"
            onClick={handleGoogleClick}
            sx={{ color: "black" }}
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
              Sign Up with Google
            </Box>
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default RegisterModal;
