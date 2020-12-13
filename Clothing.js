import React from 'react'
import './Clothing.css'


// Product component :
import Product from './Product'



function Clothing() {
	return (
		<div className='clothing'>

			{/* section 1 */}
			<div className='clothing_title'>
				<h2> Men & Women Styles</h2>
				<p className='cloth_title'>Men | Women | Clothings | Make-ups | All Common</p>
			</div>
			
			<div className='clothing_products'>
				<Product
					id='1.1cl'
					title='Columbia Womens Heavenly Long Hooded Jacket'
					image='https://m.media-amazon.com/images/I/51OrmjNeFqL._AC_UL320_.jpg'
					price={8613}
					rating={3}
				/>

				<Product
					id='1.2cl'
					title='Under Armour Adult Performance Tech No Show'
					image='https://m.media-amazon.com/images/I/81O-tGaIa+L._AC_UL320_.jpg'
					price={1613}
					rating={3}
				/>

				<Product
					id='1.3cl'
					title='Nippies Skin Ultimate Adhesive Nipplecovers Pasties & Travel Case - Creme (Size One - Fits A - C Cups)'
					image='https://m.media-amazon.com/images/I/71y-N10bYTL._AC_UL320_.jpg'
					price={1914}
					rating={3}
				/>

			</div>


			{/* section 2*/}
			
			<div className='clothing_products'>
				<Product
					id='2.1cl'
					title='Under Armour Womens Tech Twist Zip Long Sleeve Pullover'
					image='https://m.media-amazon.com/images/I/715dGE8zT3L._AC_UL320_.jpg'
					price={2182}
					rating={3}
				/>

				<Product
					id='2.2cl'
					title='ANRABESS Womens Turtleneck Long Batwing Sleeve Asymmetric Hem Casual Pullover Sweater Knit Tops'
					image='https://m.media-amazon.com/images/I/512lr+SfbAL._AC_UL320_.jpg'
					price={2162}
					rating={4}
				/>

				<Product
					id='2.3cl'
					title='Just Love Women Buffalo Plaid Pajama Pants Sleepwear'
					image='https://m.media-amazon.com/images/I/81zi4ELYD1L._AC_UL320_.jpg'
					price={1148}
					rating={3}
				/>

			</div>


			{/* section 3*/}
			
			<div className='clothing_products'>
				<Product
					id='3.1cl'
					title='Southpole Mens Active Basic Jogger Fleece Pants'
					image='https://m.media-amazon.com/images/I/81Cmz0EnsSL._AC_UL320_.jpg'
					price={1655}
					rating={4}
				/>

				<Product
					id='3.2cl'
					title='Wrangler Authentics Men’s Sweater Fleece Quarter-Zip'
					image='https://m.media-amazon.com/images/I/A1K9Z79rP8L._AC_UL320_.jpg'
					price={1941}
					rating={4}
				/>

				<Product
					id='3.3cl'
					title='Amazon Essentials Mens Performance Tech Long-Sleeve T-Shirt'
					image='https://m.media-amazon.com/images/I/81jkGsy9onL._AC_UL320_.jpg'
					price={1660}
					rating={3}
				/>

			</div>

			{/* section 4*/}
			<div className='clothing_products'>
				<Product
					id='4.1cl'
					title='NEW VIEW Upgraded Hunting Clothes for Men,Silent Water Resistant Hunting Suits,Hunting Jacket and Pants'
					image='https://m.media-amazon.com/images/I/81qi5VOqSQL._AC_UL320_.jpg'
					price={8424}
					rating={4}
				/>

				<Product
					id='4.2cl'
					title='5 Pack: Men’s Dry-Fit Moisture Wicking Active Athletic Performance Crew T-Shirt'
					image='https://m.media-amazon.com/images/I/91Gbk+UO1qL._AC_UL320_.jpg'
					price={2497}
					rating={3}
				/>

				<Product
					id='4.3cl'
					title='Under Armour Mens Raid 10-inch Workout Gym Shorts'
					image='https://m.media-amazon.com/images/I/511sXPews6L._AC_UL320_.jpg'
					price={1721}
					rating={5}
				/>

			</div>

			{/* section 5 */}
			<div className='clothing_products'>
				<Product
					id='5.1cl'
					title='KLIEGOU Mens Hipster Hip Hop Hoodie Hole Tshirt'
					image='https://m.media-amazon.com/images/I/81TtSGzzMZL._AC_UL320_.jpg'
					price={1531}
					rating={3}
				/>

				<Product
					id='5.2cl'
					title='Legendary Whitetails Mens Recluse Henley Long Sleeve Shirt'
					image='https://m.media-amazon.com/images/I/91VCk+J8s8L._AC_UL320_.jpg'
					price={2836}
					rating={5}
				/>

				<Product
					id='5.3cl'
					title='FLYFIREFLY Mens Gym Sport Pants Hip Hop Slim Fit Track Pants Workout Running Athletic Jogger Bottom'
					image='https://m.media-amazon.com/images/I/61JGOTCs+UL._AC_UL320_.jpg'
					price={1837}
					rating={5}
				/>

			</div>


		</div>
	)
}

export default Clothing