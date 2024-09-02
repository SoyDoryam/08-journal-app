import { Box } from "@mui/material";

const drawwerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box>
      {/* Navbar */}

      {/* Sidebar */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}
        {children}
      </Box>
    </Box>
  );
};
