import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Totals = () => {
  const [donations, setDonations] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {

    axios.get('https://offering.pockethost.io/api/collections/offering/records')
      .then(response => {
        setDonations(response.data.items);
        calculateTotalAmount(response.data.items);
        // console.log(response.data.items)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const calculateTotalAmount = (data) => {
    const total = data.reduce((sum, donation) => sum + donation.Amount, 0);
    setTotalAmount(total);
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className="donation-table">
        <p style={{ color: '#1C5D99', margin: '.9em' }} onClick={handleClick}><FontAwesomeIcon icon={faHome} size="2x"/> <span className='xc'>Home</span></p>

      <h2>Deliverance Church Ndagani</h2>
      <h3>Giving History</h3>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation, index) => (
            <tr key={index}>
              <td>{donation.Name}</td>
              <td>{donation.Phone}</td>
              <td>{donation.Amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total</td>
            <td>{totalAmount}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Totals;
