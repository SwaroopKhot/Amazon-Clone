import React from 'react'
import './Common.css'

// Product component :
import Product from './Product'

function Common() {
	return (
		<div className='common'>

			{/* section 1 */}
			<div className='common_title'>
				<h2> Best Deals For You !</h2>
			</div>
			
			<div className='common_products'>
				<Product
					id='1.1cl'
					title='Kasa Smart HS200 Light Switch by TP-Link, Single Pole, Needs Neutral Wire, 2.4Ghz Wi-Fi Light Switch Works with Alexa and Google Assistant, UL Certified, 1-Pack, White'
					image='https://images-na.ssl-images-amazon.com/images/I/41XlyY4EvQL._AC_US218_.jpg'
					price={1507}
					rating={3}
				/>

				<Product
					id='1.2cl'
					title='Fossil Unisex 44MM Gen 5 Carlyle HR Heart Rate Stainless Steel and Silicone Touchscreen Smart Watch, Color: Black (Model: FTW4025)'
					image='https://images-na.ssl-images-amazon.com/images/I/318LcIR9MGL._AC_US218_.jpg'
					price={19633}
					rating={4}
				/>

				<Product
					id='1.3cl'
					title='NETGEAR Wi-Fi Range Extender EX3700 - Coverage Up to 1000 Sq Ft and 15 Devices with AC750 Dual Band Wireless Signal Booster & Repeater (Up to 750Mbps Speed), and Compact Wall Plug Design'
					image='https://images-na.ssl-images-amazon.com/images/I/41ffko0T3kL._AC_US218_.jpg'
					price={1833.95}
					rating={4}
				/>

			</div>

			{/* section 2 */}
			
			<div className='common_products'>
				<Product
					id='1.1cl'
					title='REVLON One-Step Hair Dryer And Volumizer Hot Air Brush, Black, Packaging May...'
					image='https://images-na.ssl-images-amazon.com/images/I/41yn8u3qJPL._AC_US218_.jpg'
					price={3097}
					rating={3}
				/>

				<Product
					id='1.2cl'
					title='Columbia mens Ascender Softshell Front-zip Jacket'
					image='https://images-na.ssl-images-amazon.com/images/I/31ZpWB3Q2QL._AC_US218_.jpg'
					price={4520}
					rating={4}
				/>

				<Product
					id='1.3cl'
					title='HP Printer Paper 8.5x11 Office 20 lb 1 Ream 500 Sheets 92 Bright Made in USA FSC Certified Copy Paper HP Compatible 172160R'
					image='https://images-na.ssl-images-amazon.com/images/I/41L4gtTop+L._AC_US218_.jpg'
					price={345}
					rating={4}
				/>

			</div>

			{/* section 3 */}
			
			<div className='common_products'>
				<Product
					id='1.1cl'
					title='AmazonBasics Portable Foldable Photo Studio Box with LED Light - 25 x 30 x 25 Inches'
					image='https://images-na.ssl-images-amazon.com/images/I/41XlyY4EvQL._AC_US218_.jpg'
					price={10605}
					rating={5}
				/>

				<Product
					id='1.2cl'
					title='Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls'
					image='https://m.media-amazon.com/images/I/81lsA5v8EIL._AC_UY218_.jpg'
					price={3697}
					rating={4}
				/>

				<Product
					id='1.1hd'
					title='LuxClub 6 PC Sheet Set Bamboo Sheets Deep Pockets 18" Eco Friendly Wrinkle Free Sheets Hypoallergenic Anti-Bacteria'
					image='https://m.media-amazon.com/images/I/71mjOPUycsL._AC_UL320_.jpg'
					price={2160}
					rating={4}
				/>

			</div>

			{/* section 4 */}
			
			<div className='common_products'>
				<Product
					id='1.1cl'
					title='Kasa Smart HS200 Light Switch by TP-Link, Single Pole, Needs Neutral Wire, 2.4Ghz Wi-Fi Light Switch Works with Alexa and Google Assistant, UL Certified, 1-Pack, White'
					image='https://images-na.ssl-images-amazon.com/images/I/41XlyY4EvQL._AC_US218_.jpg'
					price={1507}
					rating={3}
				/>

				<Product
					id='1.1'
					title='JBL Tune 120TWS - True Wireless in-Ear Headphone - Black'
					image='https://m.media-amazon.com/images/I/61nMbwIhOzL._AC_UY218_.jpg'
					price={3060}
					rating={3}
				/>

				<Product
					id='1.3cl'
					title='Instant Pot Duo Nova Pressure Cooker 7 in 1, 6 Qt, Best for Beginners'
					image='https://images-na.ssl-images-amazon.com/images/I/41mZZ7qGHCL._AC_US218_.jpg'
					price={3438}
					rating={4}
				/>

			</div>

			{/* section 5 */}
			
			<div className='common_products'>
				<Product
					id='1.2cl'
					title='Samsung Galaxy S20 FE 5G | Factory Unlocked Android Cell Phone | 128 GB | US Version Smartphone | Pro-Grade Camera, 30X Space Zoom, Night Mode | Cloud Navy'
					image='https://m.media-amazon.com/images/I/71z2dc+XnrL._AC_UY218_.jpg'
					price={53444}
					rating={5}
				/>

				<Product
					id='1.2cl'
					title='Samsung Electronics UN32N5300AFXZA 32" 1080p Smart LED TV (2018), Black'
					image='https://m.media-amazon.com/images/I/91UsHjAPTlL._AC_UY218_.jpg'
					price={18170}
					rating={4}
				/>

				<Product
					id='1.2cl'
					title='Nintendo Switch™ Fortnite Wildcat Bundle'
					image='https://images-na.ssl-images-amazon.com/images/I/41KYU26K-6L._AC_US218_.jpg'
					price={31063}
					rating={5}
				/>

			</div>


		</div>
	)
}

export default Common