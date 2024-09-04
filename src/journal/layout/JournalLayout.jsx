import { Box, Toolbar } from "@mui/material";
import { Navbar, SideBar } from "../components";

const drawwerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawwerWidth={drawwerWidth} />

      <SideBar drawwerWidth={drawwerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
