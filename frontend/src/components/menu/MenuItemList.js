import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';

function MenuItemList() {
  
    const{data:menu_items,isPending,error}=useFetch('http://localhost:8000/menu-items')      

        
    return (
          <div className='home'>
              {error && <div>{error}</div>}
              {isPending && <i className="fa fa-spinner fa-spin"> </i>}
              {menu_items && 
              <div className="page-wrapper">
            <div className='row'>
                <div className='col-md-9'>
                    <h2>Menu Items
                        <button className='btn btn-sm btn-outline-info ml-1'>
                            <Link to={'/add-menu-item-list'}>Add Menu</Link>
                        </button>
                    </h2>
                    <table className="table table-bordered table-condensed">
                        <thead>
                            <tr>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Menu Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {menu_items.map(menu => (
                            <tr key={menu.id}>

                                <td>{ menu.name }</td>
                                <td>{ menu.description }</td>
                                <td>{ menu.price}</td>
                                <td>{ menu.category.name }</td>

                                {/* <Link to={`/menu/${menu.id}`}> */}
                                    <td><i className='fa fa-edit'>Post</i></td>
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

export default MenuItemList
