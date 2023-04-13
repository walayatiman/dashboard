import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

const Contact = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Regustrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "age", headerName: "Age", headAlign: "left", align: "left" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "city",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Contacts"
        subtitle="List of Contact for future references"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },

          "& .MuiDataGrid-root, .MuiDataGrid-cell": {
            border: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `colors.grey[100] !important`,
          },

          "& .MuiSvgIcon-root": {
            color: colors.grey[100],
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default Contact;
