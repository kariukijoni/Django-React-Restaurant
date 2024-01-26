import React from 'react'
import useFetch from '../Hooks/useFetch'
import OrderList from './OrderList'

function Orders() {
        
    const{data:orders,isPending,error}=useFetch('http://localhost:8000/orders')      

        
    return (
          <div className='home'>
              {error && <div>{error}</div>}
              {isPending && <i className="fa fa-spinner fa-spin"> </i>}
              {orders && <OrderList orders={orders} title='All orders'/>}
              
      </div>
    )
}

export default Orders