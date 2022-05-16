import { useState } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import '../index.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1200px',
  height: '500px',

  bgcolor: '#273D49CC',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Add(props) {
  const [businessCode, setBusinessCode] = useState('');
  const [customerNumber, setCustomeNumber] = useState('');
  const [clearDate, setClearDate] = useState(new Date());
  const [businessYear, setBusinessYear] = useState();
  const [documentId, setDocumentId] = useState('');
  const [postingDate, setPostingDate] = useState(new Date());
  const [documentCreateDate, setDocumentCreateDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const [invoiceCurrency, setInvoiceCurrency] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [postingId, setPostingId] = useState('');
  const [totalOpenAmount, setTotalOpenAmount] = useState('');
  const [baselineCreateDate, setBaselineCreateDate] = useState(new Date());
  const [customerPaymentTerms, setCustomerPaymentTerms] = useState('');
  const [invoiceId, setInvoiceId] = useState('');

  function handleBusinessCode(e) {
    setBusinessCode(e.target.value);
  }
  function handelCustomerNumber(e) {
    setCustomeNumber(e.target.value);
  }
  function handelClearDate(e) {
    setClearDate(e);
  }
  function handelBusinessYear(e) {
    setBusinessYear(e.target.value);
  }

  function handelDocumentId(e) {
    setDocumentId(e.target.value);
  }
  function handelPostingDate(e) {
    setPostingDate(e);
  }

  function handelDocumentCreateDate(e) {
    setDocumentCreateDate(e);
  }
  function handelDueDate(e) {
    setDueDate(e);
  }

  function handelInvoiceCurrency(e) {
    setInvoiceCurrency(e.target.value);
  }

  function handelDocumentType(e) {
    setDocumentType(e.target.value);
  }
  function handelPostingId(e) {
    setPostingId(e.target.value);
  }

  function handelTotalOpenAmount(e) {
    setTotalOpenAmount(e.target.value);
  }

  function handelBaselineCreateDate(e) {
    setBaselineCreateDate(e);
  }

  function handelCustomerPaymentTerms(e) {
    setCustomerPaymentTerms(e.target.value);
  }

  function handelInvoiceId(e) {
    setInvoiceId(e.target.value);
  }

  function handleClose() {
    props.closeModal(false);
  }

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  // sending data to backend
  function handleSubmit(e) {
    e.preventDefault(); // prevents form data to be reset while submitting

    axios
      .post(
        'http://localhost:8080/hrc_project_2/AddServlet',
        {},
        {
          params: {
            business_code: businessCode,
            cust_number: customerNumber,
            clear_date: formatDate(clearDate),
            buisness_year: businessYear,
            document_id: documentId,
            posting_date: formatDate(postingDate),
            document_create_date: formatDate(documentCreateDate),
            due_in_date: formatDate(dueDate),
            invoice_currency: invoiceCurrency,
            document_type: documentType,
            posting_id: postingId,
            total_open_amount: totalOpenAmount,
            baseline_create_date: formatDate(baselineCreateDate),
            cust_payment_terms: customerPaymentTerms,
            invoice_id: invoiceId,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          props.closeModal(false);
        }
      });
  }

  return (
    <div>
      <Modal
        open={props.isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="titleadd"
            align="left"
          >
            Add
          </Typography>

          <form onSubmit={(e) => handleSubmit(e)}>
            <Grid container spacing={5}>
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Business Code"
                  variant="outlined"
                  size="large"
                  className="text"
                  value={businessCode}
                  onChange={(e) => {
                    handleBusinessCode(e);
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Customer Number"
                  variant="outlined"
                  size="large"
                  className="text"
                  value={customerNumber}
                  onChange={(e) => {
                    handelCustomerNumber(e);
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Clear Date"
                    value={clearDate}
                    onChange={(newValue) => {
                      handelClearDate(newValue);
                    }}
                    size="large"
                    id="outlined-basic"
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Business Year"
                  variant="outlined"
                  size="large"
                  className="text"
                  value={businessYear}
                  onChange={(e) => {
                    handelBusinessYear(e);
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Document id"
                  variant="outlined"
                  size="large"
                  className="text"
                  value={documentId}
                  onChange={(e) => {
                    handelDocumentId(e);
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Posting Date"
                    value={postingDate}
                    onChange={(newValue) => {
                      handelPostingDate(newValue);
                    }}
                    size="large"
                    id="outlined-basic"
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Document Create Date"
                    value={documentCreateDate}
                    onChange={(newValue) => {
                      handelDocumentCreateDate(newValue);
                    }}
                    size="large"
                    id="outlined-basic"
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Due Date"
                    value={dueDate}
                    onChange={(newValue) => {
                      handelDueDate(newValue);
                    }}
                    size="large"
                    id="outlined-basic"
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Invoice Currency"
                  variant="outlined"
                  size="large"
                  className="text"
                  value={invoiceCurrency}
                  onChange={(e) => {
                    handelInvoiceCurrency(e);
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Document Type"
                  variant="outlined"
                  size="large"
                  className="text"
                  value={documentType}
                  onChange={(e) => {
                    handelDocumentType(e);
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Posting Id"
                  variant="outlined"
                  size="large"
                  className="text"
                  value={postingId}
                  onChange={(e) => {
                    handelPostingId(e);
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Total Open Amount"
                  variant="outlined"
                  size="large"
                  className="text"
                  value={totalOpenAmount}
                  onChange={(e) => {
                    handelTotalOpenAmount(e);
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Baseline Create Date"
                    value={baselineCreateDate}
                    onChange={(newValue) => {
                      handelBaselineCreateDate(newValue);
                    }}
                    size="large"
                    id="outlined-basic"
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Customer Payment Terms"
                  variant="outlined"
                  size="large"
                  className="text"
                  value={customerPaymentTerms}
                  onChange={(e) => {
                    handelCustomerPaymentTerms(e);
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Invoice Id"
                  variant="outlined"
                  size="large"
                  className="text"
                  value={invoiceId}
                  onChange={(e) => {
                    handelInvoiceId(e);
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <Button type="submit" className="addbtn1" variant="outlined">
                  ADD
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  className="addbtn1"
                  variant="outlined"
                  onClick={handleClose}
                >
                  CANCEL
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
