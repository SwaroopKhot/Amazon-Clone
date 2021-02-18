import React from 'react'
import { useStateValue } from './DataLayer/StateProvider'


function CheckoutProduct({id, title, image,price, rating, hideButton}) {
	const [{basket}, dispatch ] = useStateValue();
	
	const Remove_from_basket = () => {
		//remove from basket
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		})
	}

	return (
		

		<div className='checkoutproduct'>

			<img className='checkproduct_img'
				src={image}
				alt=''
			/>

			
			<div className='checkoutproduct_info'>
				<p className='checkoutproduct_title'>{title}</p>

					
				<div className='checkoutproduct_rating'>

					<p className='checkoutproduct_price'>
						<small>₹</small>
						<strong>{price} </strong>
					</p>
					<p>&nbsp;&nbsp;&nbsp;</p>
					{Array(rating)
						.fill()
						.map((_) => (
								<p>★</p>
							)
						)
					}
				</div>
				
				{!hideButton && (
					<button onClick={Remove_from_basket}>Remove from Basket</button>
				)}
				
			</div>
		</div>

	)
}

export default CheckoutProduct