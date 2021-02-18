import React from 'react'

// Product component :
import Product from './Product'

function Books() {
	return (
		<div className='smarttv'>

			{/* section 1 */}
			<div className='smarttv_title'>
				<h2> Best Book Sellers | Best Authors | Best Publications</h2>
				<p className='smart_title'>Stories | Comics | Science | School books | Biography | Essay Books | All Categories</p>
			</div>
			
			<div className='smarttv_products'>
				<Product
					id='1.1cl'
					title='The Promise Lands'
					image='https://www.statusnetwork.net/wp-content/uploads/2020/11/obama-a-promised-land-book-tgj.jpeg'
					price={515}
					rating={4}
				/>

				<Product
					id='1.2cl'
					title='GreenLights'
					image='https://images-na.ssl-images-amazon.com/images/I/81PNeyIYVfL._AC_UL210_SR210,210_.jpg'
					price={100}
					rating={3}
				/>

				<Product
					id='1.3cl'
					title='Modern Comfort Food: A Barefoot'
					image='https://images-na.ssl-images-amazon.com/images/I/81CTXWG01OL._AC_UL210_SR210,210_.jpg'
					price={1063}
					rating={4}
				/>

			</div>

			{/* section 2 */}
			<div className='smarttv_products'>
				<Product
					id='1.1cl'
					title='How the Grinch Stole Christmas!'
					image='https://images-na.ssl-images-amazon.com/images/I/91Q9eneR7BL._AC_UL210_SR210,210_.jpg'
					price={301.59}
					rating={3}
				/>

				<Product
					id='1.2cl'
					title='How to Catch a Unicorn'
					image='https://images-na.ssl-images-amazon.com/images/I/717W6A80aVL._AC_UL210_SR210,210_.jpg'
					price={217.89}
					rating={4}
				/>

				<Product
					id='1.3cl'
					title='Difficult Riddles For Smart Kids:'
					image='https://images-na.ssl-images-amazon.com/images/I/812F2oVcq5L._AC_UL210_SR210,210_.jpg'
					price={418.4}
					rating={3}
				/>

			</div>


			{/* section 3 */}
			<div className='smarttv_products'>
				<Product
					id='1.1cl'
					title='BloodLine'
					image='https://images-na.ssl-images-amazon.com/images/I/91lce-bwg9L.__BG0,0,0,0_FMpng_AC_UL210_SR210,210_.jpg'
					price={300.98}
					rating={3}
				/>

				<Product
					id='1.2cl'
					title='Humans'
					image='https://images-na.ssl-images-amazon.com/images/I/81GeAcdMCsL._AC_UL210_SR210,210_.jpg'
					price={1336.28}
					rating={4}
				/>

				<Product
					id='1.3cl'
					title='HRH : So Many Thoughts on Royal Style'
					image='https://images-na.ssl-images-amazon.com/images/I/41fQxCeSbML._AC_SX184_.jpg'
					price={1746.4}
					rating={4}
				/>

			</div>

			{/* section 4 */}
			<div className='smarttv_products'>
				<Product
					id='1.1cl'
					title='MidNight Sun'
					image='https://images-na.ssl-images-amazon.com/images/I/81zBVMvSjNL._AC_UL210_SR210,210_.jpg'
					price={1016}
					rating={4}
				/>

				<Product
					id='1.2cl'
					title='The Ickabog'
					image='https://images-na.ssl-images-amazon.com/images/I/61l2kQZ0NBL._AC_UL210_SR210,210_.jpg'
					price={1029.66}
					rating={4}
				/>

				<Product
					id='1.3cl'
					title='Theres No Place Like Space: All'
					image='https://images-na.ssl-images-amazon.com/images/I/91NP7h5PnxL._AC_UL210_SR210,210_.jpg'
					price={230}
					rating={3}
				/>

			</div>
		</div>
	)
}

export default Books