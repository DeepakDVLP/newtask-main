import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import './UserData.css';
import axios from 'axios';
import { API } from '../config';

const UserData = () => {
  console.log(API);
  const [hideDirector, setHideDirector] = React.useState(false);
  const [user, setUser] = useState([]);

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
  ]);

  const userInfo = () => {
    console.log(API);
    axios
      .get(`${API}/users`)
      .then((response) => {
        setUser(response.data);
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
          data={user}
          selectableRows
          pagination
          // expandableRows
        />
      </main>
    </>
  );
};

export default UserData;
