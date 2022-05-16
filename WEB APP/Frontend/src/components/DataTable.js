import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import '../index.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

// let x = 200;

const rows = [
  {
    id: 1,
    buisnessCode: 'U001',
    customerNumber: '2000769623',
    clearDate: '2020-02-11',
    businessYear: '2020',
    docId: '190438491',
    postingDate: '2020-02-11',
    documentCreate: '2020-02-11',
    dueDate: '2020-02-11',
    invoiceCurrency: 'USD',
  },
  {
    id: 2,
    buisnessCode: 'U001',
    customerNumber: '2000769623',
    clearDate: '2020-02-11',
    businessYear: '2020',
    docId: '190438491',
    postingDate: '2020-02-11',
    documentCreate: '2020-02-11',
    dueDate: '2020-02-11',
    invoiceCurrency: 'USD',
  },
  {
    id: 3,
    buisnessCode: 'U001',
    customerNumber: '2000769623',
    clearDate: '2020-02-11',
    businessYear: '2020',
    docId: '190438491',
    postingDate: '2020-02-11',
    documentCreate: '2020-02-11',
    dueDate: '2020-02-11',
    invoiceCurrency: 'USD',
  },
  {
    id: 4,
    buisnessCode: 'U001',
    customerNumber: '2000769623',
    clearDate: '2020-02-11',
    businessYear: '2020',
    docId: '190438491',
    postingDate: '2020-02-11',
    documentCreate: '2020-02-11',
    dueDate: '2020-02-11',
    invoiceCurrency: 'USD',
  },
  {
    id: 5,
    buisnessCode: 'U001',
    customerNumber: '2000769623',
    clearDate: '2020-02-11',
    businessYear: '2020',
    docId: '190438491',
    postingDate: '2020-02-11',
    documentCreate: '2020-02-11',
    dueDate: '2020-02-11',
    invoiceCurrency: 'USD',
  },
  {
    id: 6,
    buisnessCode: 'U001',
    customerNumber: '2000769623',
    clearDate: '2020-02-11',
    businessYear: '2020',
    docId: '190438491',
    postingDate: '2020-02-11',
    documentCreate: '2020-02-11',
    dueDate: '2020-02-11',
    invoiceCurrency: 'USD',
  },
  {
    id: 7,
    buisnessCode: 'U001',
    customerNumber: '2000769623',
    clearDate: '2020-02-11',
    businessYear: '2020',
    docId: '190438491',
    postingDate: '2020-02-11',
    documentCreate: '2020-02-11',
    dueDate: '2020-02-11',
    invoiceCurrency: 'USD',
  },
  {
    id: 8,
    buisnessCode: 'U001',
    customerNumber: '2000769623',
    clearDate: '2020-02-11',
    businessYear: '2020',
    docId: '190438491',
    postingDate: '2020-02-11',
    documentCreate: '2020-02-11',
    dueDate: '2020-02-11',
    invoiceCurrency: 'USD',
  },
  {
    id: 9,
    buisnessCode: 'U001',
    customerNumber: '2000769623',
    clearDate: '2020-02-11',
    businessYear: '2020',
    docId: '190438491',
    postingDate: '2020-02-11',
    documentCreate: '2020-02-11',
    dueDate: '2020-02-11',
    invoiceCurrency: 'USD',
  },
];

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'SL no',

    width: 60,
  },
  {
    field: 'business_code',
    headerName: 'Business Code',
    width: 100,
  },
  {
    field: 'cust_number',
    headerName: 'Customer Number',
    width: 120,
  },
  {
    field: 'clear_date',
    headerName: 'Clear Date',
    width: 120,
  },
  {
    field: 'buisness_year',
    headerName: 'Business Year',
    width: 100,
  },
  {
    field: 'doc_id',
    headerName: 'Doc Id',
    width: 130,
  },
  {
    field: 'posting_date',
    headerName: 'Posting Date',
    width: 130,
  },
  {
    field: 'document_create_date',
    headerName: 'Document Create Date',
    width: 130,
  },
  {
    field: 'due_in_date',
    headerName: 'Due In Date',
    width: 130,
  },
  {
    field: 'invoice_currency',
    headerName: 'Invoice Currency',
    width: 100,
  },
  {
    field: 'document_type',
    headerName: 'Document Type',
    width: 90,
  },
  {
    field: 'posting_id',
    headerName: 'Posting Id',
    width: 70,
  },
  {
    field: 'total_open_amount',
    headerName: 'Total Open Amount',
    width: 130,
  },
  {
    field: 'baseline_create_date',
    headerName: 'Baseline Create Date',
    width: 130,
  },
  {
    field: 'cust_payment_terms',
    headerName: 'Customer Payment Terms',
    width: 130,
  },
  {
    field: 'invoice_id',
    headerName: 'Invoice Id',
    width: 130,
  },
];

export default function DataTable(props) {
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <div style={{ height: 465, width: '100%' }}>
      <DataGrid
        rows={props.row}
        columns={columns}
        pageSize={rowsPerPage}
        rowsPerPageOptions={[10, 25, 50, 100]}
        checkboxSelection
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRows = props.row.filter((row) =>
            selectedIDs.has(row.id)
          );
          props.setSelectedRow(selectedRows);
        }}
        density="compact"
        onPageSizeChange={(newRow) => setRowsPerPage(newRow)}
      />
    </div>
  );
}
