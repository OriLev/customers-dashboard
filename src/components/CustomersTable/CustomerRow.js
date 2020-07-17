import React from 'react'
// import React, { useEffect, useState, useRef } from 'react';

// import { getDigestValue } from '../api';

const ToggleCell = ({ isActive, toggleUserActive }) => {
  return (
    <td className="toggleCell">
      <input
        type="checkbox"
        checked={isActive ? true : false}
        onChange={toggleUserActive}
      />
    </td>
  );
};
const DataCell = ({ content }) => {
  return <td>{content}</td>;
};

export default function CustomerRow({ customer, toggleUserActive, history }) {
  
  const goToCustomer = (ev, id) => {
    if (isActive && ev.target.type !== 'checkbox')
      return history.push(`/customer/${id}`);
  };
  
  // Option 1: Using digestValue set on the state
  
  const { isActive, name, company, address, _id, digestValue } = customer;
  
  // Option 2: Fetching digest value on every 

  // const { isActive, name, company, address, _id } = customer;
  // const [isPending, setIsPending] = useState(true);
  // const digestValue = useRef();
  // useEffect(() => {
  //   async function fetchDigestValue() {
  //     digestValue.current = await getDigestValue(name.first, name.last);
  //     setIsPending(false);
  //   }
  //   fetchDigestValue();
  // }, [name]);
  
  return (
    <tr className={`${!isActive && 'disabled'}`} onDoubleClick={ev => isActive ? goToCustomer(ev, _id) : null}>
      <ToggleCell isActive={isActive} toggleUserActive={toggleUserActive} />
      <DataCell content={name.first + ' ' + name.last} />
      <DataCell content={company} />
      <DataCell content={address.split(', ').slice(1, 3).join(', ')} />
      <DataCell content={digestValue}/>
      {/* <DataCell content={isPending ? 'Pending...' : digestValue.current} /> */}
    </tr>
  );
}
