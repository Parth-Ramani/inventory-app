import { Box, Typography } from "@mui/material";
import Header from "../components/Header.jsx";
import backgroundImage from "../assets/images/bgimg.jpg";
const HomePage = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          height: "100vh", // Full viewport height
          backgroundImage: `url(${backgroundImage})`, // Use local image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <Typography variant="h3" color="white" gutterBottom>
          Welcome to Your Inventory Manager
        </Typography>

        <Typography variant="h5" color="white" paragraph>
          Easily track, organize, and manage all of your inventory.
        </Typography>
      </Box>
    </>
  );
};

export default HomePage;
