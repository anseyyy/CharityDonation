import React from 'react'

function Donation() {
    return (
        <div>
            <div className="container my-5">
                <div className="p-4 rounded shadow" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', maxWidth: '600px', margin: '0 auto' }}>
                    <h3 className="text-center text-warning fw-bold mb-4">Make a Donation</h3>
                    <form>

                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Full Name" required />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email Address" required />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Phone Number" required />
                        </div>


                        <div className="mb-3">
                            <input type="number" className="form-control" placeholder="Donation Amount (₹)" required />
                        </div>


                        <div className="mb-3">
                            <select className="form-select" required>
                                <option value="">Select Payment Method</option>
                                <option value="credit">Credit Card</option>
                                <option value="debit">Debit Card</option>
                                <option value="upi">UPI</option>
                                <option value="netbanking">Net Banking</option>
                            </select>
                        </div>


                        <div className="text-center">
                            <button type="submit" className="btn btn-warning px-4">Donate Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Donation