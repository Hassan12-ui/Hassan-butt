import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// Component for displaying product cards
const Products = ({ productsdb }) => {
  const [qty, setQty] = useState(1);
  let params = useParams();
  let fData = productsdb.find(x => x.id == params.id);

  return (
    <div style={styles.pageContainer}>
      <h2 className="fw-bold text-center" style={styles.header}>List of Products</h2>

      <div className='container'>
        <div className='row my-4'>
          {productsdb.map(ele => {
            return (
              <div className='col-lg-3 col-md-6 col-12 my-4' key={ele.id}>
                <div className="card" style={styles.card}>
                  <Link to={`/products/${ele.id}`}>
                    <img src={ele.image} width={220} height={270} className="card-img-top" alt={ele.title} style={styles.cardImage} />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title" style={styles.cardTitle}>{ele.title.slice(0, 12)}...</h5>
                    <p className="card-text" style={styles.cardPrice}>$ {ele.price}</p>
                    <div className="text-center">
                      <Link to={`/products/${ele.id}`} className="btn btn-primary" style={styles.viewDetailButton}>View Detail</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;

// Styles with bluish-purple gradient and modern touches
const styles = {
  pageContainer: {
    background: 'linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)', // Bluish-purple to peach gradient
    minHeight: '100vh',
    padding: '40px 0',
    textAlign: 'center',
    color: '#fff',
  },
  header: {
    color: '#fff',
    fontSize: '2.5rem',
    marginBottom: '40px',
  },
  card: {
    width: '18rem',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  cardImage: {
    borderRadius: '10px 10px 0 0',
  },
  cardTitle: {
    color: '#333',
    fontSize: '1.1rem',
    marginBottom: '10px',
  },
  cardPrice: {
    color: '#3a1c71',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  viewDetailButton: {
    backgroundColor: '#3a1c71',
    borderColor: '#3a1c71',
    color: '#fff',
  },
};
