import React, { useState, useEffect } from 'react';

const Admincontact = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all contacts from the backend
  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/form/allcontact');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      setError(`Error fetching contacts: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.header}>Admin Contact List</h1>

      {loading && <p style={styles.loadingMessage}>Loading contacts...</p>}
      {error && <p style={styles.errorMessage}>{error}</p>}

      {!loading && !error && (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Username</th>
              <th style={styles.tableHeader}>Email</th>
              <th style={styles.tableHeader}>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact._id} style={styles.tableRow}>
                  <td>{contact.username}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={styles.noContacts}>No contacts found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

// Styles with bluish-purple gradient colors
const styles = {
  pageContainer: {
    background: 'linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)', // Bluish-purple to peach gradient
    minHeight: '100vh',
    padding: '40px 0',
    color: '#333',
    textAlign: 'center',
  },
  header: {
    color: '#fff',
    fontSize: '2.5rem',
    marginBottom: '30px',
  },
  loadingMessage: {
    color: '#fff',
    fontSize: '1.5rem',
  },
  errorMessage: {
    color: '#ff6b6b',
    padding: '10px',
    border: '1px solid #ff6b6b',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    marginBottom: '20px',
    fontSize: '1.2rem',
  },
  table: {
    width: '80%',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  tableHeader: {
    backgroundColor: '#3a1c71', // Dark bluish-purple for table headers
    color: '#fff',
    padding: '15px',
    fontSize: '1.2rem',
  },
  tableRow: {
    backgroundColor: '#f7f7f7',
  },
  noContacts: {
    textAlign: 'center',
    padding: '20px',
    fontSize: '1.5rem',
    color: '#555',
  },
};

export default Admincontact;
