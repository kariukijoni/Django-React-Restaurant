import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom';

    const OrderList = ({ orders,title }) => {
        return (
            <div className="page-wrapper">
                <div className='row'>
                    <div className='col-md-9'>
                        <h2>{title}</h2>
                        <table className="table table-bordered table-condensed">
                            <thead>
                                <tr>
                                {/* <th scope="col">#</th> */}
                                <th scope="col">Customer Name</th>
                                <th scope="col">Item Ordered</th>
                                <th scope="col">Table</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Sub total</th>
                                <th scope="col">Status</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {orders.map(order => (
                                <tr key={order.id}>

                                    <td>{ order.customer.first_name }</td>
                                    <td>{ order.menu_item.name }</td>
                                    <td>{ order.table_number.name}</td>
                                    <td>{ order.quantity }</td>
                                    <td>{ order.sub_total }</td>
                                    <td>{ order.status }</td>

                                    <Link to={`/order/${order.id}`}>
                                        <td><i className='fa fa-edit'>Post</i></td>
                                    </Link>
                                </tr>
                        
                        ))}
                        </tbody>
                        </table>
                </div>

                <div className='col-md-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <h3 className='card-title'>Open Deliveries</h3>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
      }

export default OrderList
