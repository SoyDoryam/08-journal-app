import { Box } from "@mui/material";
import { Navbar } from "../components/Navbar";

const drawwerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box>
      <Navbar drawwerWidth={drawwerWidth} />

      {/* Sidebar */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}
        {children}
      </Box>
    </Box>
  );
};
