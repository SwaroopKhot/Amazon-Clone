import React from 'react'
import './HomeDecor.css'

// Product component :
import Product from './Product'


function HomeDecor() {
	return (
		<div className='homedecor'>

			{/* section 1 */}
			<div className='homedecor_title'>
				
				<p className='home_title'>Price and other details may vary based on size and color</p>
			</div>
			
			<div className='homedecor_products'>
				<Product
					id='1.1hd'
					title='LuxClub 6 PC Sheet Set Bamboo Sheets Deep Pockets 18" Eco Friendly Wrinkle Free Sheets Hypoallergenic Anti-Bacteria'
					image='https://m.media-amazon.com/images/I/71mjOPUycsL._AC_UL320_.jpg'
					price={2160}
					rating={4}
				/>

				<Product
					id='1.2hd'
					title='Dreaming Wapiti Duvet Cover King,100% Washed Microfiber 3pcs Bedding Duvet Cover Set,Solid Color - Soft '
					image='https://m.media-amazon.com/images/I/61JRrtXVAvL._AC_UL320_.jpg'
					price={2603}
					rating={5}
				/>

				<Product
					id='1.3cl'
					title='Chic Home Zarah 10 Piece Comforter Bedding with Sheet Set and Decorative Pillows Shams, Queen, Grey'
					image='https://m.media-amazon.com/images/I/51ixCK0RLWL._AC_UL320_.jpg'
					price={6558}
					rating={4}
				/>

			</div>

			{/* section 2 */}
			<div className='homedecor_products'>
				<Product
					id='1.1hd'
					title='SunStyle Home Quilt Set Full/Queen Size,Rust Brown Diamond Pattern Bedspread-90 x96, Soft Lightweight'
					image='https://m.media-amazon.com/images/I/61hGM7wvJBL._AC_UL320_.jpg'
					price={2083}
					rating={4}
				/>

				<Product
					id='1.2hd'
					title='Sapphire Home King Bedding-Super Soft Plush Oversize King Bedding - Easy to Clean Bed Set-All-Season King/California King'
					image='https://m.media-amazon.com/images/I/51OoU2UuZWL._AC_UL320_.jpg'
					price={4957}
					rating={5}
				/>
			</div>


			{/* section 3 */}
			<div className='homedecor_products'>
				<Product
					id='1.1hd'
					title='Bare Home Bedding Set 5 Piece Comforter & Sheet Set - Twin XL - Goose Down Alternative - Ultra-Soft 1800 Premium'
					image='https://m.media-amazon.com/images/I/71HltZVhZ6L._AC_UL320_.jpg'
					price={5997}
					rating={5}
				/>

				<Product
					id='1.2hd'
					title='ROSE FEATHER Luxurious 300TC Cotton White Goose Down Feather Comforter Quilt Insert Light Weight,650+Fill Power,Medium Warmth'
					image='https://m.media-amazon.com/images/I/61huBegoZ-L._AC_UL320_.jpg'
					price={11588}
					rating={5}
				/>

				<Product
					id='1.2hd'
					title='ZEIMON 3D Luxury Bedding Sets Geometric Printed Duvet Cover with Pillowcase 3pcs Full Queen King Size Bed Clothes for Home'
					image='https://m.media-amazon.com/images/I/81L6A7RN-aL._AC_UL320_.jpg'
					price={2680}
					rating={4}
				/>
			</div>

		</div>
	)
}

export default HomeDecor