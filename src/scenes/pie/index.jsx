import { Box } from "@mui/material";
import Header from "../../components/Header";
import MyResponsivePie from "../../components/Piechart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Pie chart" />
      <Box height="75vh">
        <MyResponsivePie />
      </Box>
    </Box>
  );
};

export default Pie;
