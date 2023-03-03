import { Project } from "./Project";
import { useMemo, useState } from "react";
import MaterialReactTable, {
  MaterialReactTableProps,
  MRT_ColumnDef,
} from "material-react-table";

import { useDispatch } from "react-redux";
import { saveProject } from "./state/projectActions";
import { ThunkDispatch } from "redux-thunk";
import { ProjectState } from "./state/projectTypes";
import { AnyAction } from "redux";
import { Box } from "@mui/material";
// ----------------------------------------------

//An interface is a way to define the shape of an object. It includes the name of the properties and their types.
interface ProjectListProps {
  projects: Project[];
}

//The ProjectList component is a functional component that takes a list of projects as a prop and renders them as JSON.
const ProjectTable = (props: ProjectListProps) => {
  const { projects } = props;
  //set the initial state to an object containing key value pairs for each field in the form like this:
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    county: "",
    description: "",
    budget: "",
  });
  const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();
  const columns = useMemo<MRT_ColumnDef<Project>[]>(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
        muiTableHeadProps: {
          style: {
            backgroundColor: "#203966",
          },
        },
        muiTableBodyCellEditTextFieldProps: {
          error: !!validationErrors.name, //highlight mui text field red error color
          helperText: validationErrors.name, //show error message in helper text.
          required: true,
          type: "string",
          onChange: (event) => {
            const value = event.target.value;
            //validation logic
            if (!value) {
              setValidationErrors((prev) => ({
                ...prev,
                name: "Name is required",
              }));
            } else if (value.length < 3) {
              setValidationErrors({
                ...validationErrors,
                name: "Name must be longer than 3 characters",
              });
            } else {
              setValidationErrors({
                ...validationErrors,
                name: "",
              });
            }
          },
        },
      },
      {
        accessorKey: "county",
        header: "County",
        muiTableBodyCellEditTextFieldProps: {
          error: !!validationErrors.county, //highlight mui text field red error color
          helperText: validationErrors.county, //show error message in helper text.
          required: true,
          type: "string",
          onChange: (event) => {
            const value = event.target.value;
            //validation logic
            if (!value) {
              setValidationErrors((prev) => ({
                ...prev,
                county: "County is required",
              }));
            } else if (value.length < 3) {
              setValidationErrors({
                ...validationErrors,
                county: "County must be longer than 3 characters",
              });
            } else {
              setValidationErrors({
                ...validationErrors,
                county: "",
              });
            }
          },
        },
      },
      {
        accessorKey: "description", //normal accessorKey
        header: "Description",
        muiTableBodyCellEditTextFieldProps: {
          error: !!validationErrors.description, //highlight mui text field red error color
          helperText: validationErrors.description, //show error message in helper text.
          required: true,
          type: "string",
          onChange: (event) => {
            const value = event.target.value;
            //validation logic
            if (!value) {
              setValidationErrors((prev) => ({
                ...prev,
                description: "Description is required",
              }));
            } else if (value.length < 3) {
              setValidationErrors({
                ...validationErrors,
                description: "Description must be longer than 3 characters",
              });
            } else {
              setValidationErrors({
                ...validationErrors,
                description: "",
              });
            }
          },
        },
      },
      {
        accessorKey: "budget",
        header: "Budget",
        muiTableBodyCellEditTextFieldProps: {
          error: !!validationErrors.budget, //highlight mui text field red error color
          helperText: validationErrors.budget, //show error message in helper text.
          required: true,
          type: "number",
          onChange: (event) => {
            const value = +event.target.value;
            //validation logic
            if (!value) {
              setValidationErrors((prev) => ({
                ...prev,
                budget: "Budget is required",
              }));
            } else if (value === 0) {
              setValidationErrors({
                ...validationErrors,
                budget: "Budget must be greater than 0",
              });
            } else {
              setValidationErrors({
                ...validationErrors,
                budget: "",
              });
            }
          },
        },
      },
    ],
    [validationErrors]
  );

  //the initial state of the table data is the projects prop
  const [tableData, setTableData] = useState<Project[]>(projects);

  const handleSaveRow: MaterialReactTableProps<Project>["onEditingRowSave"] =
    async ({ exitEditingMode, row, values }) => {
      tableData[row.index] = values;
      let updatedProject: Project = { ...projects[row.index], ...values }; //merge the old and new values

      dispatch(saveProject(updatedProject));

      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode
    };
  return (
    <div style={{ height: "90%" }}>
      <MaterialReactTable
        columns={columns}
        data={projects}
        enableEditing
        enableStickyHeader
        onEditingRowSave={handleSaveRow}
        muiTableHeadCellProps={{
          sx: (theme) => ({
            background: "#8f9cb2",
            borderBottom: "1px solid rgba(32,57,102,1)",
            color: theme.palette.text.primary,
          }),
        }}
        renderDetailPanel={({ row }) => {
          const dateObject = new Date(row.original.contractSignedOn);
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "200px", height: "100px", objectFit: "cover" }}
                src={row.original.imageUrl}
                alt={row.original.name}
              />
              <>
                <span>{`Signed: ${dateObject.toLocaleDateString()}`}</span>
                <mark>{row.original.isActive ? "Active" : "Inactive"}</mark>
              </>
            </Box>
          );
        }}
      />
    </div>
  );
};

export default ProjectTable;
