import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridCellParams  } from '@mui/x-data-grid';
import useApi from '../hooks/useApi';

interface DataRow {
  userId: number;
  id: number;
  title: string;
  body: string;
 
}


const EditableTable: React.FC = () => {

  const { data, error, isLoading } = useApi<DataRow[]>('https://jsonplaceholder.typicode.com/posts');
  const [rows, setRows] = useState<DataRow[]>([]);


  useEffect(() => {
    if (data) {
      setRows(data);
    }
  }, [data]);

  // const handleEditCellCommit = (params: GridCellParams) => {
  //   const updatedRows = rows.map((row) =>
  //     row.id === params.id ? { ...row, [params.field]: params.value } : row
  //   );
  //   setRows(updatedRows);
  // };

  const handleEditCellCommit= (params: GridCellParams) => {
    const { id, field, value } = params;
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const columns: GridColDef[] = [
    { field: 'userId', headerName: 'User ID', width: 90 },
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 250, editable: true },
    { field: 'body', headerName: 'Body', width: 400, editable: true },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>Tableau éditable</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        rowCount={rows.length}
        onCellEditCommit={handleEditCellCommit}
      />
    </div>
  );
};

export default EditableTable;

// const EditableTable: React.FC = () => {
//   const [rows, setRows] = useState<DataRow[]>([]);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => {
//         const data = response.data.map((item: any) => ({
//           userId: item.userId,
//           id: item.id,
//           title: item.title,
//           body: item.body,
//         }));
//         setRows(data);
//       })
//       .catch((error) => console.error('Error fetching data: ', error));
//   }, []);

//   const handleEditCellCommit = (params: GridCellParams) => {
//     const updatedRows = rows.map((row) =>
//       row.id === params.id ? { ...row, [params.field]: params.value } : row
//     );
//     setRows(updatedRows);
//   };

//   const columns: GridColDef[] = [
//     { field: 'userId', headerName: 'User ID', width: 90 },
//     { field: 'id', headerName: 'ID', width: 90 },
//     { field: 'title', headerName: 'Title', width: 250, editable: true },
//     { field: 'body', headerName: 'Body', width: 400, editable: true },
//   ];

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         //pageSize={5}  
//         //rowsPerPageOptions={[5, 10, 20]}  
//         pagination  
//         rowCount={rows.length}  // C'est le nombre total de lignes de données
//         //onCellEditCommit={handleEditCellCommit}
//       />
//     </div>
//   );
// };

// export default EditableTable;