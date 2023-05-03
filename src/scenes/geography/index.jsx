import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/Geography";

const Geo = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Pie chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geo;
