import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Box
} from '@mui/material';

const data = {
  columns: ['Founders Required', 'Founders Favourite', 'Founders Friendly'],
  rows: {
    'No of transactions per year': ['<350', '<500', '<1000'],
    'Expenses < 150K': ['$990 /month', '$1290 /month', '$2000 /month'],
    'Expenses > 150K < 250K': ['$1399 /month', '$1899 /month', '$2899 /month'],
    'Expenses > 250K': ['Get in Touch', 'Get in Touch', 'Get in Touch'],
    'Accrual basis BookKeeping': ['Yes', 'Yes', 'Yes'],
    'Dedicated Accounting Manager': ['Yes', 'Yes', 'Yes'],
    'Monthly Call': ['-', 'Included', 'Included'],
    'Tax Services': ['-', '-', 'Included'],
    'Revenue Recognition Support': ['-', '-', 'Yes'],
    'No of Entities': ['single entity', 'single entity', 'single entity'],
    'Support Project Tracking': ['-', '-', '-'],
    'Support Department Tracking': ['-', '-', 'Yes'],
  },
};

const Pricing = () => {
  const rows = Object.keys(data.rows);

  return (
    <Container maxWidth="md">
      <Box marginTop={15}> {/* Adjust margin top */}
        <TableContainer component={Paper}>
          <Table size="small"> {/* Adjust table size */}
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                {data.columns.map((column, index) => (
                  <TableCell key={index}>{column}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((rowKey, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell>{rowKey}</TableCell>
                  {data.rows[rowKey].map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Pricing;
