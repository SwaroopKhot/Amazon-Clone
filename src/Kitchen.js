import React from 'react'
import './Kitchen.css'

// Product component :
import Product from './Product'

function Kitchen() {
	return (
		<div className='kitchen'>

			{/* section 1 */}
			<div className='kitchen_title'>
				<h2> Kitchen Comforts</h2>
				<p className='kit_title'>Kitchen Decords | Best Sellers | All Categories </p>
			</div>
			
			<div className='kitchen_products'>
				<Product
					id='1.1cl'
					title='COSORI Air Fryer Max XL(100 Recipes) 5.8 QT Electric Hot Oven Oilless Cooker LED Touch Digital Screen with 11 Presets, Preheat& Shake Reminder, Nonstick Basket, 5.8QT'
					image='https://images-na.ssl-images-amazon.com/images/I/411KxOpKQ+L._AC_US218_.jpg'
					price={8531}
					rating={3}
				/>

				<Product
					id='1.2cl'
					title='Breville BES870XL Barista Express Espresso Machine, Large, Stainless Steel'
					image='https://images-na.ssl-images-amazon.com/images/I/4150BW+wqiL._AC_US218_.jpg'
					price={43401}
					rating={4}
				/>

				<Product
					id='1.3cl'
					title='Instant Pot Duo Nova Pressure Cooker 7 in 1, 6 Qt, Best for Beginners'
					image='https://images-na.ssl-images-amazon.com/images/I/41mZZ7qGHCL._AC_US218_.jpg'
					price={3438}
					rating={4}
				/>

			</div>

			{/* section 2 */}
			
			<div className='kitchen_products'>
				<Product
					id='1.1cl'
					title='Ecolution Original Microwave Micro-Pop Popcorn Popper, Borosilicate Glass, 3-in-1 Silicone Lid, Dishwasher Safe, BPA Free, 1.5 Quart - Snack Size, Red'
					image='https://images-na.ssl-images-amazon.com/images/I/519r+MNIIjL._AC_US218_.jpg'
					price={445}
					rating={3}
				/>

				<Product
					id='1.2cl'
					title='Libbey Mixologist 9-Piece Cocktail Set'
					image='https://images-na.ssl-images-amazon.com/images/I/51PxpmVf51L._AC_US218_.jpg'
					price={2493}
					rating={3}
				/>

				<Product
					id='1.3cl'
					title='Zevro Zero Gravity Magnetic Spice Rack with 12 Canisters'
					image='https://images-na.ssl-images-amazon.com/images/I/411t4QoLZaL._AC_US218_.jpg'
					price={1905}
					rating={4}
				/>

			</div>


			{/* section 3*/}
			
			<div className='kitchen_products'>
				<Product
					id='1.1cl'
					title='Blendtec Total Classic Original Blender - WildSide plus Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)'
					image='https://images-na.ssl-images-amazon.com/images/I/41AZOLr72bL._AC_US218_.jpg'
					price={563}
					rating={3}
				/>

				<Product
					id='1.2cl'
					title='Hamilton Beach 6-Speed Electric Hand Mixer with Snap-On Storage Case, Wire Beaters, Whisk and Bowl Rest, 250W, White (62682RZ)'
					image='https://images-na.ssl-images-amazon.com/images/I/31TIHfvUx9L._AC_US218_.jpg'
					price={1478}
					rating={3}
				/>

				<Product
					id='1.3cl'
					title='Mr. Coffee Mug Warmer, Home, Office, Black'
					image='https://images-na.ssl-images-amazon.com/images/I/41Ap6j3iSRL._AC_US218_.jpg'
					price={838}
					rating={4}
				/>

			</div>

			{/* section 4 */}
			
			<div className='kitchen_products'>
				<Product
					id='1.1cl'
					title='Brita Standard Replacement Filters for Pitchers and Dispensers, 3 Count, White'
					image='https://images-na.ssl-images-amazon.com/images/I/313I+J9L3jL._AC_US218_.jpg'
					price={1037}
					rating={4}
				/>

				<Product
					id='1.2cl'
					title='Tovolo Sphere Ice Molds - Set of 2'
					image='https://images-na.ssl-images-amazon.com/images/I/41pfFdJk5xL._AC_US218_.jpg'
					price={763}
					rating={3}
				/>

				<Product
					id='1.3cl'
					title='AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver'
					image='https://images-na.ssl-images-amazon.com/images/I/41Kf0mndKyL._AC_US218_.jpg'
					price={1904}
					rating={4}
				/>

			</div>

			
		</div>
	)
}

export default Kitchen