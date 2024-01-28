import React from 'react'
import {useParams,useNavigate,Link} from 'react-router-dom'
import useFetch from '../Hooks/useFetch';

export default function OrderDetails() {
    
    const {id}=useParams();
    const{data:order,isPending,error}=useFetch(`http://localhost:8000/order/`+id)
    const navigate=useNavigate()
    
    
    const handleClick=()=>{
        fetch(`http://localhost:8000/order/`+order.id,{
            method:'DELETE'
        }).then(()=>{
            navigate('/')
        })
    }
    
  return (
    <div className='order-details container'>
        {/* <h2>order details- {id}</h2> */}
        
        {isPending &&<i className="fa fa-spinner fa-spin"> </i>}
        {error && <div>{error}</div>}
        {order && (
            <div className='card border-dark mt-2'>                
                <article className='ml-2'>
                    <h2>name:{order.name}</h2>
                    <small>Status: <b>{order.status}</b></small>
                    <div>Quantity:{order.quantity}</div>
                    <div>
                        <Link className='text-decoration-none' to={`/update/${order.id}`}>
                            <button className='btn btn-sm btn-success'>Update</button>
                        </Link>
                        {/* <button className='btn btn-sm btn-outline-primary me-1'>Edit</button> */}
                        <button className='btn btn-sm btn-outline-danger mr-2' onClick={handleClick}>Delete</button>
                    </div>
                </article>
            </div>
            
        )}
        
    </div>
  )
}