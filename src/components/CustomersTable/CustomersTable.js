import React from 'react';
import CustomerRow from './CustomerRow';

import './styles.css';

export const CustomersTable = ({
  customers,
  toggleUserActive,
  isLoading,
  history,
}) => {
  return !isLoading ? (
      <table>
        <thead>
          <tr>
            <th>Active</th>
            <th>Full Name</th>
            <th>Company</th>
            <th>Location</th>
            <th>Digest Value</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => {
            const { _id } = customer;
            return (
              <CustomerRow
                key={_id}
                history={history}
                customer={customer}
                toggleUserActive={toggleUserActive(_id)}
              />
            );
          })}
        </tbody>
      </table>
  ) : (
    <p>Loading...</p>
  );
};
