import React from 'react'
import { useNavigate,useParams,Link } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';

function Payment() {
const {id}=useParams();
const{data:order,isPending,error}=useFetch('http://localhost:8000/payments/'+id)
const navigate=useNavigate()


const handleClick=()=>{
    fetch('http://localhost:8000/payments/'+order.id,{
        method:'DELETE'
    }).then(()=>{
        navigate('/')
    })
}

return (
<div className='content-wrapper'>
    
    {isPending &&<i className="fa fa-spinner fa-spin"> </i>}
    {error && <div>{error}</div>}
    {order && (
        <div className='card border-dark mt-2'>                
            <article className='ml-2'>
                <h2>{order.name}</h2>
                <small>Status <b>{order.status}</b></small>
                <div>{order.sub_total}</div>
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
export default Payment
