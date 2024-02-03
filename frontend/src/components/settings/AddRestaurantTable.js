
// import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function AddRestaurantTable() {
    const [name,setName]=useState('')
    const [isPending,setIsPending]=useState(false)
    const navigate = useNavigate();
        
    const handleSubmit =(e)=>{
        e.preventDefault();
        
        const order={name}
        
        setIsPending(true)
        
        // console.log(order)
        
        fetch('http://localhost:8000/restaurant-tables/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(order)
        }).then(()=>{
            console.log('New order added!')
            setIsPending(false)
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Restaurant table added successfuly",
                showConfirmButton: false,
                timer: 3000
              });
            navigate('/')
        })
    }

   
  return (
    <div className='page-wrapper'>
        <div className='row ml-1'>
            <div className='col-md-5 card border-warning'>
            <h3>
                Add new Table
            </h3>
            <form onSubmit={handleSubmit}>

                
                <label>Name:</label>
                <input type='text' className='form-control' value={name} onChange={(e)=>setName(e.target.value)} required/>
                
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