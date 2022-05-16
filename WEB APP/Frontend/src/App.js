import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header.js';
// import Table from './components/Table.js';
import DataTable from './components/DataTable.js';
import Footer from './components/Footer.js';
// import Add from './components/Add.js';

function App() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect((e) => {
    axios
      .get('http://localhost:8080/hrc_project_2/FetchServlet')
      .then((response) => {
        if (response.status === 200) {
          setRows(response.data);
        }
      });
  }, []);

  return (
    <div class="main-container">
      <Header selectedRow={selectedRows} setRow={setRows}></Header>
      <DataTable row={rows} setSelectedRow={setSelectedRows} />
      <Footer />
    </div>
  );
}

export default App;
