import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridCellParams  } from '@mui/x-data-grid';
// import GridCellEditCommitParamsApi from '@mui/x-data-grid';
//import { GridRowModel } from '@mui/x-data-grid';
import axios from 'axios';

interface DataRow {
  id: number;
  name: string;
  age: number;
  //[key: string]: any;
}

const EditableTable: React.FC = () => {
  const [rows, setRows] = useState<DataRow[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const data = response.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          age: item.age || 23, 
        }));
        setRows(data);
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  const handleEditCellCommit = (params: GridCellParams) => {    
    const updatedRows = rows.map((row) => {
      if (row.id === params.id) {
        return { ...row, [params.field]: params.value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150, editable: true },
    { field: 'age', headerName: 'Age', width: 110, editable: true },
  ];

  return (

    <div style={{ height: 400, width: '100%' }}>
    
      <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            pagination
            rowCount={rows.length}
            onCellEditCommit={handleEditCellCommit}
            // getRowId={(row: GridRowModel) => row.id.toString()}
        />
    
      </div>
  
  );
       
};

export default EditableTable;
