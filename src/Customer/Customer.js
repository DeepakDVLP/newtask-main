import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import '../User/UserData.css';
import axios from 'axios';
import { API } from '../config';

const CustomerData = () => {
  console.log(API);
  //   const [hideDirector, setHideDirector] = React.useState(false);
  const [Customer, setCustomer] = useState([]);

  const columns = React.useMemo(() => [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    // {
    //   name: 'Last Name',
    //   selector: 'lastName',
    //   sortable: true,
    // },
    {
      name: 'Phone',
      selector: 'phone',
      sortable: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'LoanAmount',
      selector: 'loanAmount',
      sortable: true,
    },

    {
      name: 'tenureInMonths',
      selector: 'tenureInMonths',
      sortable: true,
    },
    {
      name: 'Occupation',
      selector: 'occupation',
      sortable: true,
    },
  ]);

  const userInfo = () => {
    console.log(API);
    axios
      .get(`${API}/allCustomer`)
      .then((response) => {
        setCustomer(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <>
      <main className='user__data'>
        <DataTable
          columns={columns}
          data={Customer}
          selectableRows
          pagination
          // expandableRows
        />
      </main>
    </>
  );
};

export default CustomerData;
