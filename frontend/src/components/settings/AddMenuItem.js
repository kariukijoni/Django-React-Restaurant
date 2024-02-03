
// import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { useState,useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';

export default function AddMenuItem() {
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState('')
    const [category,setCategory]=useState('')
    const [categoryList,setCategoryList]=useState([])
    const [isPending,setIsPending]=useState(false)
    const navigate = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();

        const menu_items={name,description,price,category}
        // console.log(menu_items)
        setIsPending(true)
                
        fetch('http://localhost:8000/menu-items/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(menu_items)
        }).then(()=>{
            // console.log('New Menu added!')
            setIsPending(false)
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "New Menu Added Successfuly",
                showConfirmButton: false,
                timer: 1000
              });
            navigate('/')
        })
    }

    // fetch related categoryList to menu-item
    useEffect(() => {
        fetch('http://localhost:8000/categories')
          .then(response => response.json())
          .then(data => setCategoryList(data));
      }, []);    

  return (
    <div className='page-wrapper'>
        <div className='row ml-1'>
            <div className='col-md-5 m-2 card border-warning'>
            <h3>
                Add new Category
            </h3>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-md-4'>           
                        <label>Category Name:</label>
                    </div>
                    <div className='col-md-8'>
                        <input type='text' className='form-control' value={name} onChange={(e)=>setName(e.target.value)} required/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <label>Description: </label>
                    </div>
                    <div className='col-md-8'>
                        <textarea type='text' className='form-control' value={description} onChange={(e)=>setDescription(e.target.value)} required/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <label>Price:</label>
                    </div>
                    <div className='col-md-8'>
                        <input type='text' className='form-control' value={price} onChange={(e)=>setPrice(e.target.value)} required/>
                    </div>
                </div>
                {/* category options */}

                <div className='row'>
                    <div className='col-md-4'>
                        <label>Category Name:</label>
                    </div>
                    <div className='col-md-8'>
                        <select className='form-control' value={category} onChange={(e)=>setCategory(e.target.value)}>
                            
                            <option className='text-center'>--Select Category--</option>
                            
                            {categoryList.map(categoryList => (
                            <option className='text-center' key={categoryList.id} value={categoryList.id} >
                                {categoryList.name}
                            </option>
                            ))}
                        </select>
                    </div>             
                </div>
                <div className='mb-2'>
                    { !isPending && <button className='btn btn-sm btn-info mt-2'>Add Menu</button> }
                    { isPending && <button className='btn btn-sm btn-success mt-2' disabled>Adding Menu...</button> }
                </div>
            </form>
            </div>
            <div className='col-md-6'>
                <p>tetst</p>
            </div>
        </div>
    </div>
  )
}