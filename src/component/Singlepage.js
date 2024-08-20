import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsdb from '../data/Productlist.js';
import { toast } from 'react-toastify';

const Singlepage = ({ addToCart }) => {
    const [qty, setQty] = useState(1);
    let params = useParams();
    let fData = productsdb.find(x => x.id == params.id);
    
    const incQty = () => {
        setQty(qty + 1);
    };

    const decQty = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart(fData, qty);
        toast.success("Item added to cart")
    };

    return (
        <div>
            <h2 className='my-4 text-center text-success'>Single Product Detail Page</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={fData.image} height={450} width={400} alt={fData.title} />
                    </div>
                    <div className='col-lg-6 text-center'>
                        <h2 className='text-uppercase text-warning'>{fData.category}</h2>
                        <hr />
                        <h2 className='text-light'>{fData.title}</h2>
                        <p className='text-light'>{fData.description}</p>
                        <h1 className='text-light mt-2'>Price $ {fData.price}</h1>
                        <div className='text-center mt-2'>
                            <button onClick={incQty} className='btn btn-dark btn-sm me-2'>+</button>
                            {qty}
                            <button onClick={decQty} className='btn btn-dark btn-sm ms-2'>-</button>
                        </div>
                        <h1 className='text-light mt-2'>Total Price: ${qty * fData.price}</h1>
                        <center>
                        <button onClick={handleAddToCart} className='btn btn-success mt-3'>Add to Cart</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singlepage;
