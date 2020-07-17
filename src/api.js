import axios from 'axios';

export async function getCustomers() {
  const response = await axios.get(
    'https://run.mocky.io/v3/93a7ac54-14e7-43a0-8a8d-8e3821cf74d0'
  );
  const customers = response.data;
  const digestValues = await Promise.all(
    customers.map(customer => {
      const { name } = customer;
      return getDigestValue(name.first, name.last);
    })
  );
  const customersWithDigestValue = customers.map((customer, index) => ({ ...customer, digestValue: digestValues[index] }));
  return customersWithDigestValue;
}

export async function getDigestValue(first, last) {
  const response = await axios.get(
    `https://api.hashify.net/hash/md4/hex?value=${first + last}`
  );
  return response.data.Digest;
}

// export async function getCustomers() {
//   const response = await axios.get(
//     'https://run.mocky.io/v3/93a7ac54-14e7-43a0-8a8d-8e3821cf74d0'
//   );
//   const customers = response.data;
//   return customers;
// }
