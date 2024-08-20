import React from 'react';

const Home = () => {
  return (
    <div style={styles.pageContainer}>
      
      {/* Carousel */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/ncara2.webp" className="d-block w-100" height={600} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/ncara3.webp" className="d-block w-100" height={600} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/ncara4.webp" className="d-block w-100" height={600} alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Most Running Items */}
      <h1 style={styles.sectionHeader}>Most Running Items</h1>
      <div className="card-group">
        <div className="card" style={styles.card}>
          <img src="./images/black.jpg" className="card-img-top" alt="..." style={styles.cardImage} />
          <div className="card-body">
            <h5 className="card-title text-dark">Fast Charger</h5>
            <p className="card-text" style={styles.cardText}>
              Stay powered on the go with our high-capacity power bank. It features fast charging, dual USB ports, and a sleek, portable design. Compatible with all your devices, this power bank ensures you never run out of battery, making it a perfect travel companion.
            </p>
            <p className="card-text" style={styles.cardText}>
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>

        <div className="card" style={styles.card}>
          <img src="./images/h1.jpg" className="card-img-top" alt="..." style={styles.cardImage} />
          <div className="card-body">
            <h5 className="card-title text-dark">Adopter</h5>
            <p className="card-text" style={styles.cardText}>
              Stay powered on the go with our high-capacity power bank. It features fast charging, dual USB ports, and a sleek, portable design. Compatible with all your devices, this power bank ensures you never run out of battery, making it a perfect travel companion.
            </p>
            <p className="card-text" style={styles.cardText}>
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>

        <div className="card" style={styles.card}>
          <img src="./images/h2.jpg" className="card-img-top" alt="..." style={styles.cardImage} />
          <div className="card-body">
            <h5 className="card-title text-dark">Power Bank</h5>
            <p className="card-text" style={styles.cardText}>
              Stay powered on the go with our high-capacity power bank. It features fast charging, dual USB ports, and a sleek, portable design. Compatible with all your devices, this power bank ensures you never run out of battery, making it a perfect travel companion.
            </p>
            <p className="card-text" style={styles.cardText}>
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>

      {/* Popular Products */}
      <h1 style={styles.sectionHeader}>Popular Products</h1>
      <div className="card-group">
        <div className="card" style={styles.card}>
          <img src="./images/h3.jpg" className="card-img-top" alt="..." style={styles.cardImage} />
          <div className="card-body">
            <h5 className="card-title text-dark">Smart Phone</h5>
            <p className="card-text" style={styles.cardText}>
              Stay powered on the go with our high-capacity power bank. It features fast charging, dual USB ports, and a sleek, portable design. Compatible with all your devices, this power bank ensures you never run out of battery, making it a perfect travel companion.
            </p>
            <p className="card-text" style={styles.cardText}>
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>

        <div className="card" style={styles.card}>
          <img src="./images/homecard4.avif" className="card-img-top" alt="..." style={styles.cardImage} />
          <div className="card-body">
            <h5 className="card-title text-dark">Adopter</h5>
            <p className="card-text" style={styles.cardText}>
              Stay powered on the go with our high-capacity power bank. It features fast charging, dual USB ports, and a sleek, portable design. Compatible with all your devices, this power bank ensures you never run out of battery, making it a perfect travel companion.
            </p>
            <p className="card-text" style={styles.cardText}>
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>

        <div className="card" style={styles.card}>
          <img src="./images/homecard6.avif" className="card-img-top" alt="..." style={styles.cardImage} />
          <div className="card-body">
            <h5 className="card-title text-dark">Mobile Covers</h5>
            <p className="card-text" style={styles.cardText}>
              Stay powered on the go with our high-capacity power bank. It features fast charging, dual USB ports, and a sleek, portable design. Compatible with all your devices, this power bank ensures you never run out of battery, making it a perfect travel companion.
            </p>
            <p className="card-text" style={styles.cardText}>
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      
      {/* Additional Slider */}
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/ncara5.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/ncara6.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/ncara7.webp" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;

// Styles with bluish-purple gradient and modern touches
const styles = {
  pageContainer: {
    background: 'linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)', // Bluish-purple to peach gradient
    minHeight: '100vh',
    padding: '20px 0',
    color: '#fff',
    textAlign: 'center',
  },
  sectionHeader: {
    color: '#fff',
    fontSize: '2.5rem',
    marginBottom: '30px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
  },
  cardImage: {
    borderRadius: '10px 10px 0 0',
  },
  cardText: {
    color: '#333', // Dark grey color for card text for better readability
  },
};
