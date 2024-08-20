import React from 'react';

const About = () => {
  return (
    <div>
      <section className="bg-gradient" style={styles.bgGradient}>
        <div className="container" style={styles.container}>
          <div className="row">
            <div className="col-lg-12 mb-4 mb-sm-5">
              <div className="card card-style1 border-0" style={styles.card}>
                <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="..."
                        style={styles.img}
                      />
                    </div>
                    <div className="col-lg-6 px-xl-10">
                      <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded" style={styles.infoBox}>
                        <h3 className="h2 text-white mb-0" style={styles.name}>Hassan Butt</h3>
                        <span className="text-primary" style={styles.role}>Coach</span>
                      </div>
                      <ul className="list-unstyled mb-1-9">
                        <li className="mb-2 mb-xl-3 display-28" style={styles.listItem}>
                          <span className="display-26 text-secondary me-2 font-weight-600" style={styles.listLabel}>Position:</span> Coach
                        </li>
                        <li className="mb-2 mb-xl-3 display-28" style={styles.listItem}>
                          <span className="display-26 text-secondary me-2 font-weight-600" style={styles.listLabel}>Experience:</span> 10 Years
                        </li>
                        <li className="mb-2 mb-xl-3 display-28" style={styles.listItem}>
                          <span className="display-26 text-secondary me-2 font-weight-600" style={styles.listLabel}>Email:</span> edith@mail.com
                        </li>
                        <li className="mb-2 mb-xl-3 display-28" style={styles.listItem}>
                          <span className="display-26 text-secondary me-2 font-weight-600" style={styles.listLabel}>Website:</span> www.example.com
                        </li>
                        <li className="display-28" style={styles.listItem}>
                          <span className="display-26 text-secondary me-2 font-weight-600" style={styles.listLabel}>Phone:</span> 507 - 541 - 4567
                        </li>
                      </ul>
                      <ul className="social-icon-style1 list-unstyled mb-0 ps-0">
                        <li>
                          <a href="#!" style={styles.socialLink}>
                            <i className="ti-twitter-alt" />
                          </a>
                        </li>
                        <li>
                          <a href="#!" style={styles.socialLink}>
                            <i className="ti-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#!" style={styles.socialLink}>
                            <i className="ti-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#!" style={styles.socialLink}>
                            <i className="ti-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mb-4 mb-sm-5">
              <div>
                <span className="section-title text-primary mb-3 mb-sm-4" style={styles.sectionTitle}>About Me</span>
                <p style={styles.paragraph}>
                  Edith is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <p className="mb-0" style={styles.paragraph}>
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The point
                  of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12 mb-4 mb-sm-5">
                  <div className="mb-4 mb-sm-5">
                    <span className="section-title text-primary mb-3 mb-sm-4" style={styles.sectionTitle}>Skill</span>
                    <div className="progress-text">
                      <div className="row">
                        <div className="col-6">Driving range</div>
                        <div className="col-6 text-end">80%</div>
                      </div>
                    </div>
                    <div className="custom-progress progress progress-medium mb-3" style={{ height: 4 }}>
                      <div
                        className="animated custom-bar progress-bar slideInLeft bg-secondary"
                        style={{ width: "80%", ...styles.progressBar }}
                        aria-valuemax={100}
                        aria-valuemin={0}
                        aria-valuenow={80}
                        role="progressbar"
                      />
                    </div>
                    <div className="progress-text">
                      <div className="row">
                        <div className="col-6">Short Game</div>
                        <div className="col-6 text-end">90%</div>
                      </div>
                    </div>
                    <div className="custom-progress progress progress-medium mb-3" style={{ height: 4 }}>
                      <div
                        className="animated custom-bar progress-bar slideInLeft bg-secondary"
                        style={{ width: "90%", ...styles.progressBar }}
                        aria-valuemax={100}
                        aria-valuemin={0}
                        aria-valuenow={90}
                        role="progressbar"
                      />
                    </div>
                    <div className="progress-text">
                      <div className="row">
                        <div className="col-6">Side Bets</div>
                        <div className="col-6 text-end">50%</div>
                      </div>
                    </div>
                    <div className="custom-progress progress progress-medium mb-3" style={{ height: 4 }}>
                      <div
                        className="animated custom-bar progress-bar slideInLeft bg-secondary"
                        style={{ width: "50%", ...styles.progressBar }}
                        aria-valuemax={100}
                        aria-valuemin={0}
                        aria-valuenow={50}
                        role="progressbar"
                      />
                    </div>
                    <div className="progress-text">
                      <div className="row">
                        <div className="col-6">Putting</div>
                        <div className="col-6 text-end">60%</div>
                      </div>
                    </div>
                    <div className="custom-progress progress progress-medium" style={{ height: 4 }}>
                      <div
                        className="animated custom-bar progress-bar slideInLeft bg-secondary"
                        style={{ width: "60%", ...styles.progressBar }}
                        aria-valuemax={100}
                        aria-valuemin={0}
                        aria-valuenow={60}
                        role="progressbar"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="section-title text-primary mb-3 mb-sm-4" style={styles.sectionTitle}>Education</span>
                    <p style={styles.paragraph}>
                      Many desktop publishing packages and web page editors now use
                      Lorem Ipsum as their default model text, and a search for 'lorem
                      ipsum' will uncover many web sites still in their infancy.
                    </p>
                    <p className="mb-1-9" style={styles.paragraph}>
                      There are many variations of passages of Lorem Ipsum available,
                      but the majority have suffered alteration in some form, by
                      injected humour.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

// Styles with Gradient and !important
const styles = {
  bgGradient: {
    background: 'linear-gradient(to right, #6a11cb, #2575fc) !important', // Bluish-purple gradient
    color: '#fff !important',
    padding: '50px 0 !important',
  },
  container: {
    maxWidth: '1140px !important',
    margin: '0 auto !important',
    padding: '0 15px !important',
  },
  card: {
    background: 'rgba(0, 0, 0, 0.7) !important', // Darker card background
    borderRadius: '10px !important',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3) !important',
  },
  img: {
    maxWidth: '100% !important',
    borderRadius: '10px !important',
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.2) !important', // Semi-transparent white
    padding: '15px !important',
    borderRadius: '10px !important',
  },
  name: {
    fontSize: '2rem !important',
    fontWeight: 'bold !important',
  },
  role: {
    fontSize: '1.25rem !important',
    fontWeight: 'normal !important',
  },
  listItem: {
    fontSize: '1rem !important',
    color: '#ddd !important',
  },
  listLabel: {
    fontWeight: 'bold !important',
  },
  socialLink: {
    color: '#fff !important',
    fontSize: '1.5rem !important',
    margin: '0 10px !important',
  },
  sectionTitle: {
    fontSize: '1.75rem !important',
    fontWeight: 'bold !important',
    color: '#fff !important',
  },
  paragraph: {
    fontSize: '1rem !important',
    color: '#ddd !important',
  },
  progressBar: {
    transition: 'width 0.5s ease-in-out !important',
  },
};
