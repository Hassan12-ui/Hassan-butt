import React from 'react';

const AddtoCart = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const incrementQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container bootstrap snippets bootdey">
      <div className="col-md-9 col-sm-8 content">
        <div className="row">
          <div className="col-md-12">
            <ol className="breadcrumb">
              <li><a href="/">Home</a></li>
              <li className="active">Cart</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-info panel-shadow">
              <div className="panel-heading">
                <h3>
                  <img
                    className="img-circle img-thumbnail"
                    src="https://bootdey.com/img/Content/user_3.jpg"
                    alt="User"
                  />
                  Matew darfkmoun
                </h3>
              </div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map(item => (
                        <tr key={item.id}>
                          <td>
                            <img
                              src={item.image}
                              className="img-cart"
                              alt={item.title}
                            />
                          </td>
                          <td>
                            <strong>{item.title}</strong>
                            <p>Size: {item.size}</p>
                          </td>
                          <td>
                            <div className="form-inline">
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-sm m-2"
                                onClick={() => decrementQuantity(item.id)}
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <input
                                className="form-control"
                                type="number"
                                value={item.quantity}
                                readOnly
                              />
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-sm m-2"
                                onClick={() => incrementQuantity(item.id)}
                              >
                                +
                              </button>
                              <button
                                type="button"
                                className='btn btn-outline-danger btn-sm'
                                onClick={() => removeFromCart(item.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                          <td>${item.price}</td>
                          <td>${(item.price * item.quantity)}</td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan={4} className="text-right"><strong>Total</strong></td>
                        <td>${calculateTotal()}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <a href="/" className="btn btn-success">
              <span className="glyphicon glyphicon-arrow-left" />
              &nbsp;Continue Shopping
            </a>
            <a href="#" className="btn btn-primary pull-right">
              Next
              <span className="glyphicon glyphicon-chevron-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;
