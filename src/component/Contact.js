import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const defaultContactFormData = {
  username: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const [userDataInitialized, setUserDataInitialized] = useState(false);

  const user = useAuth();

  useEffect(() => {
    if (!userDataInitialized && user) {
      setContact({
        username: user.username,
        email: user.email,
        message: '',
      });
      setUserDataInitialized(true);
    }
  }, [user, userDataInitialized]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/form/contact', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      const data = await response.json();
      if (response.ok) {
        setContact(defaultContactFormData);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while submitting the contact form.");
    }
  };

  return (
    <div className='contact-page' style={styles.page}>
      <section className='section-contact'>
        <div className="contact-content container">
          <h1 className='main-heading' style={styles.mainHeading}>Contact Us</h1>
        </div>

        <div className="container contact-container d-flex" style={styles.container}>
          <div className="contact-img">
            <img src="/images/CON.jpg" alt="Contact us" style={styles.image} />
          </div>

          <section className="section-form" style={styles.formSection}>
            <form onSubmit={handleSubmit} style={styles.form}>
              <div className="form-group">
                <label htmlFor="username" style={styles.label}>Username</label>
                <input
                  value={contact.username}
                  onChange={handleInput}
                  type="text"
                  name='username'
                  id='username'
                  autoComplete='off'
                  required
                  style={styles.input}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" style={styles.label}>Email</label>
                <input
                  value={contact.email}
                  onChange={handleInput}
                  type="email"
                  name='email'
                  id='email'
                  autoComplete='off'
                  required
                  style={styles.input}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" style={styles.label}>Message</label>
                <textarea
                  value={contact.message}
                  onChange={handleInput}
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  autoComplete='off'
                  required
                  style={styles.textarea}
                ></textarea>
              </div>
              <div className="form-group">
                <button className='primary-btn' type='submit' style={styles.button}>Submit</button>
              </div>
            </form>
          </section>
        </div>

        <div>
          <h2 className='location main-heading' style={styles.mainHeading}>Our Location</h2>
        </div>

        <section className="mb-3">
          <iframe
            className='iframe'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.300390190339!2d74.28523257430362!3d31.515908647364796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903a24f371795%3A0x74beee8aa43e49d5!2sPNY%20Trainings%20-%20Iqbal%20Town%20Branch!5e0!3m2!1sen!2s!4v1714920215728!5m2!1sen!2s"
            width="90%"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={styles.iframe}
          ></iframe>
        </section>
      </section>
    </div>
  );
};

export default Contact;

// Styles with Gradients and !important
const styles = {
  page: {
    background: 'linear-gradient(to right, #6a11cb, #2575fc) !important', // Gradient background
    color: '#fff !important',
    minHeight: '100vh !important',
    padding: '50px 0 !important',
  },
  container: {
    display: 'flex !important',
    justifyContent: 'space-between !important',
    alignItems: 'center !important',
  },
  mainHeading: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    textAlign: 'center !important',
    marginBottom: '40px !important',
    color: '#fff !important',
  },
  formSection: {
    width: '50% !important',
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0.1) !important', // Transparent white overlay
    borderRadius: '15px !important',
    padding: '30px !important',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2) !important',
  },
  formGroup: {
    marginBottom: '20px !important',
  },
  input: {
    width: '100% !important',
    padding: '10px !important',
    fontSize: '1rem !important',
    borderRadius: '5px !important',
    border: '1px solid #ccc !important',
    backgroundColor: 'rgba(255, 255, 255, 0.8) !important',
    color: '#333 !important',
  },
  textarea: {
    width: '100% !important',
    padding: '10px !important',
    fontSize: '1rem !important',
    borderRadius: '5px !important',
    border: '1px solid #ccc !important',
    backgroundColor: 'rgba(255, 255, 255, 0.8) !important',
    color: '#333 !important',
  },
  button: {
    padding: '10px 20px !important',
    fontSize: '1rem !important',
    color: '#fff !important',
    backgroundColor: '#6a11cb !important', // Gradient color on button
    border: 'none !important',
    borderRadius: '5px !important',
    cursor: 'pointer !important',
    transition: 'background 0.3s !important',
  },
  buttonHover: {
    backgroundColor: '#2575fc !important', // Hover state for the button
  },
  image: {
    maxWidth: '100% !important',
    borderRadius: '10px !important',
  },
  iframe: {
    borderRadius: '10px !important',
    border: 'none !important',
  },
  label: {
    color: '#fff !important',
  }
};
