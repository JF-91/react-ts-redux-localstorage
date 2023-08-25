import { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { User } from "@/interfaces/user";
import { LayoutContainerGrid } from "@/style-components/layout.styled.component";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { addfavorites } from "@/redux/states";

const Home = () => {

  const dispatch = useDispatch()


  const [user, setUser] = useState<User[]>([]);

  const [selectedPeople, setSelectedPeople] = useState<User[]>([]);

  const findPeople = (person: User) =>
    !!selectedPeople.find((p) => p.id === person.id);
  const filterPeople = (person: User) =>
  selectedPeople.filter((p) => p.id !== person.id);

  const handleChange = (person: User) => {

    const filteredPeople = findPeople(person) ? filterPeople(person) : [...selectedPeople, person]
    dispatch(addfavorites(filterPeople));
    setSelectedPeople(filteredPeople);
  };

  //renderCell: (params:GridRenderCellParams)=> <>params.field</>
  const columnsG: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {params.field + "  | "}{" "}
          <Checkbox
            checked={findPeople(params.row)}
            onChange={() => handleChange(params.row)}
          />{" "}
        </>
      ),
    },
    { field: "name", headerName: "Name", width: 90 },
    { field: "username", headerName: "User", width: 90 },
    { field: "email", headerName: "Email", width: 90 },
    { field: "phone", headerName: "Phone", width: 200 },
    { field: "website", headerName: "Website", width: 150 },
  ];

  useEffect(() => {
    async function JsonPlaceHolder() {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const res = await data.json();

      setUser(res);
      //const  [{address, company, ...rest}] = res
    }
    JsonPlaceHolder();
  }, []);

  return (
    <LayoutContainerGrid>
      <DataGrid
        columns={columnsG}
        rows={user}
        paginationMode="server"
        pagination
        disableColumnSelector
        autoHeight
  
      />
    </LayoutContainerGrid>
  );
};

export default Home;
