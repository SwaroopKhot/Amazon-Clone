import React from 'react'
import './Checkout.css'
import { useStateValue } from './DataLayer/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'



function Checkout() {

	const [{basket, user }] = useStateValue();
	

	return (
		<div className='checkout'>
			
			<img className="checkout_ad"
				src='https://www.dealsshutter.com/blog/wp-content/uploads/2017/09/Amazon-great-Indian-sale.jpg'
				alt=''
			/>

			<div className='checkout_section'>

				<div className='checkout_left'>
					<h2>Hello, <small>Guest </small></h2>

					
					<div className='checkout_msg'>
						<h2> Your Basket is Empty ! </h2>
						<p><small><b> You have no items in your basket. To buy one or more
							items, click "Add to Basket" next to the item </b></small></p>
					</div>
						

					{/* List out items in the Checkout Products*/}

					{basket.map(item => (
						<CheckoutProduct
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>

					))}
					
					
				</div>

				<div className='checkout_right'>
					<Subtotal />
				</div>
			</div>
			
		</div>
	)
}

export default Checkout;