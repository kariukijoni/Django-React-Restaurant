import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';

function RestaurantTableList() {
  
    const{data:restaurant_tables,isPending,error}=useFetch('http://localhost:8000/restaurant-tables')      

        
    return (
          <div className='home'>
              {error && <div>{error}</div>}
              {isPending && <i className="fa fa-spinner fa-spin"> </i>}

              {restaurant_tables && 
            <div className="page-wrapper">
            <div className='row ml-1'>
                <div className='col-md-9'>
                    <h2>Restaurant Tables
                        <button className='btn btn-sm btn-outline-info ml-1'>
                            <Link to={'/add-restaurant-table'}>Add Table</Link>
                        </button>
                    </h2>
                    <table className="table table-bordered table-condensed">
                        <thead>
                            <tr>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Table Name</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {restaurant_tables.map(rest_table => (
                            <tr key={rest_table.id}>

                                <td>{ rest_table.name }</td>

                                {/* <Link to={`/menu/${menu.id}`}> */}
                                    <td><i className='fa fa-plus-circle bg-success'> Table</i></td>
                                {/* </Link> */}
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
        </div>}
    </div>);
}

export default RestaurantTableList
