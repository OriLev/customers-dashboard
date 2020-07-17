import React, { useState, useEffect } from 'react';
import { CustomersTable } from '../CustomersTable/CustomersTable';
import { CustomerDetails } from '../CustomerDetails/CustomerDetails';
import { Header, Main } from '../Layout';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { getCustomers } from '../../api.js';

export function App() {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchCustomers() {
      const customers = await getCustomers();
      setCustomers(customers);
      setIsLoading(false);
    }
    fetchCustomers();
  }, []);

  const getCustomerIndexById = id =>
    customers.findIndex(customer => customer._id === id);
  const getCustomerById = id => {
    const customer = customers[getCustomerIndexById(id)];
    return customer;
  };
  const toggleUserActive = id => () => {
    const idx = getCustomerIndexById(id);
    const updatedCustomers = [...customers];
    updatedCustomers[idx].isActive = !customers[idx].isActive;
    setCustomers(updatedCustomers);
  };

  const getActiveCustomersCount = () => {
    return customers.filter(customer => customer.isActive).length;
  };

  return (
    <Router>
      <div className="App">
        <Header activeUsers={getActiveCustomersCount()} />
        <Main>
          <Switch>
            <Redirect exact from="/" to="/customers" />
            <Route
              exact
              path="/customers"
              render={props => (
                <CustomersTable
                  {...props}
                  customers={customers}
                  toggleUserActive={toggleUserActive}
                  isLoading={isLoading}
                />
              )}
            />
            <Route
              exact
              path="/customer/:id"
              render={props => (
                <CustomerDetails
                  {...props}
                  getCustomerById={getCustomerById}
                  toggleUserActive={toggleUserActive}
                  isLoading={isLoading}
                />
              )}
            />
          </Switch>
        </Main>
      </div>
    </Router>
  );
}
