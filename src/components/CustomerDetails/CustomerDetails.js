import React from 'react';
import './styles.css';

const Detail = ({ detailName, detail }) => (
  <span className="singleDetail">
    <strong>{detailName}:</strong>&nbsp;<p>{detail}</p>
  </span>
);

export const CustomerDetails = ({
  getCustomerById,
  toggleUserActive,
  match,
  isLoading,
}) => {
  if (isLoading) return <p>Loading...</p>;

  const { id } = match.params;
  const toggleActive = toggleUserActive(id);
  const customer = getCustomerById(id);
  const {
    name,
    balance,
    picture,
    age,
    eyeColor,
    company,
    email,
    phone,
    address,
    about,
    isActive,
  } = customer;
  return (
    <>
      <div className="customerDetails">
        <h2 className="customerName">
          {name.first + ' ' + name.last} &nbsp;
          <span className={`userStatus ${isActive ? 'active' : 'inactive'}`}>({isActive ? 'Active user' : 'Inactive user'})</span>
        </h2>
        <img className="customerImage" src={picture} alt={name.first + ' ' + name.last} />
        <Detail detailName="Balance" detail={balance} />
        <Detail detailName="Age" detail={age} />
        <Detail detailName="Eye Color" detail={eyeColor} />
        <Detail detailName="Company" detail={company} />
        <Detail detailName="Email" detail={email} />
        <Detail detailName="Phone" detail={phone} />
        <Detail detailName="Address" detail={address} />
        <Detail detailName="About" detail={about} />
      </div>
      <button className="activationToggle" onClick={() => toggleActive()}>
        {!customer.isActive ? 'Activate user' : 'Deactivate user'}
      </button>
    </>
  );
};
