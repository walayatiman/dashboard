import { Box } from "@mui/material";
import Header from "../../components/Header";
import Line from "../../components/Linechart";

const LineChart = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Line chart" />
      <Box height="75vh">
        <Line />
      </Box>
    </Box>
  );
};

export default LineChart;
