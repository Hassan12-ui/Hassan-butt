import React, { useState, useEffect } from 'react';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch all users
  const getAllUserData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/users', { method: 'GET' });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        console.error('Unexpected data format:', data);
        setError('Unexpected data format received from server.');
      }
    } catch (error) {
      console.error('Error fetching users:', error.message);
      setError(`Error fetching users: ${error.message}`);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  // Function to handle user deletion
  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/auth/users/${userId}`, { method: 'DELETE' });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
        }
        setUsers(users.filter(user => user._id !== userId));
      } catch (error) {
        console.error('Error deleting user:', error.message);
        setError(`Error deleting user: ${error.message}`);
      }
    }
  };

  return (
    <div style={styles.pageContainer}>
      <h1 className="container" style={styles.header}>List of Users</h1>

      {error && (
        <div className="error-message" style={styles.errorMessage}>
          {error}
        </div>
      )}

      <table className="table container" style={styles.table}>
        <thead>
          <tr>
            <th scope="col" style={styles.tableHeader}>Name</th>
            <th scope="col" style={styles.tableHeader}>Email</th>
            <th scope="col" style={styles.tableHeader}>Phone</th>
            <th scope="col" style={styles.tableHeader}>Address</th>
            <th scope="col" style={styles.tableHeader}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id} style={styles.tableRow}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>
                  <button
                    className='primary-btn'
                    style={styles.deleteButton}
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center" style={styles.noUsers}>No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Styles with gradient colors
const styles = {
  pageContainer: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)', // Purple-Blue gradient
    minHeight: '100vh',
    padding: '40px 0',
    color: '#fff',
  },
  header: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '2.5rem',
  },
  errorMessage: {
    color: '#ff6b6b',
    padding: '10px',
    border: '1px solid #ff6b6b',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    marginBottom: '20px',
    textAlign: 'center',
  },
  table: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    color: '#333',
  },
  tableHeader: {
    backgroundColor: '#764ba2',
    color: '#fff',
    padding: '15px',
    fontSize: '1.2rem',
  },
  tableRow: {
    backgroundColor: '#f7f7f7',
  },
  deleteButton: {
    backgroundColor: '#ff6b6b',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  deleteButtonHover: {
    backgroundColor: '#ff3b3b',
  },
  noUsers: {
    textAlign: 'center',
    color: '#333',
  }
};

export default AdminUsers;
