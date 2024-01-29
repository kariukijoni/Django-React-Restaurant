
// import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { useState,useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';


export default function NewOrder() {
    const [customer,setCustomers]=useState([])
    const [menu_item,setMenuItems]=useState([])
    const [table_number,setTableNumber]=useState([])
    const [status,setStatus]=useState('')
    const [quantity,setQuantity]=useState('')
    const [sub_total,setSubTotal]=useState('')
    const [isPending,setIsPending]=useState(false)
    const navigate = useNavigate();
        
    const handleSubmit =(e)=>{
        e.preventDefault();
        
        const order={customer,menu_item,table_number,status,quantity,sub_total}
        
        setIsPending(true)
        
        // console.log(order)
        
        fetch('http://localhost:8000/orders/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(order)
        }).then(()=>{
            console.log('New order added!')
            setIsPending(false)
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "New Order Added Successfuly",
                showConfirmButton: false,
                timer: 3000
              });
            navigate('/')
        })
    }

    // fetch related customer to order
    useEffect(() => {
        fetch(`http://localhost:8000/customers`)
          .then(response => response.json())
          .then(data => setCustomers(data));
      }, []);


    // fetch related menuItem to order
    useEffect(() => {
        fetch(`http://localhost:8000/menu-items`)
          .then(response => response.json())
          .then(data => setMenuItems(data));
      }, []);


    // fetch related table_number to order
    useEffect(() => {
        fetch(`http://localhost:8000/restaurant-tables`)
          .then(response => response.json())
          .then(data => setTableNumber(data));
      }, []);

  return (
    <div className='page-wrapper'>
        <div className='row'>
            <div className='col-md-5 m-2 card border-warning'>
            <h3>
                Add new Order
            </h3>
            <form onSubmit={handleSubmit}>

                {/* Customer name */}
                <label>Customer Name:</label>
                    <select className='form-control'>
                        {customer.map(customer => (
                        <option key={customer.id} value={customer.id}>
                            {customer.first_name}-{customer.last_name}
                        </option>
                        ))}
                    </select>

                {/* Menu item */}
                <label>Menu Item:</label>
                    <select className='form-control'>
                        {menu_item.map(menu => (
                        <option key={menu.id} value={menu.id}>
                            {menu.name}
                        </option>
                        ))}
                    </select>
                
                {/* table number */}
                <label>Table Number:</label>
                    <select className='form-control'>
                        {table_number.map(table => (
                        <option key={table.id} value={table.id}>
                            {table.name}
                        </option>
                        ))}
                    </select>
                
                <label>Status:</label>
                <select value={status} className='form-control' onChange={(e)=>setStatus(e.target.value)} required>
                    <option value=''>--Please Select--</option>
                    <option value='In-House'>In-House</option>
                    <option value='Delivery'>Delivery</option>
                </select>

                <label>Quantity:</label>
                <input type='text' className='form-control' value={quantity} onChange={(e)=>setQuantity(e.target.value)} required/>
                
                <label>Sub Total:</label>
                <input type='text' className='form-control' value={sub_total} onChange={(e)=>setSubTotal(e.target.value)} required/>


                { !isPending && <button className='btn btn-sm btn-info mt-2'>Add order</button> }
                { isPending && <button className='btn btn-sm btn-success mt-2' disabled>Adding order...</button> }
                
            </form>
            </div>
            <div className='col-md-6'>
                <p>tetst</p>
            </div>
        </div>
    </div>
  )
}