import React from 'react'
import './Electronics.css'

// Product component :
import Product from './Product'


function Electronics() {
	return (
		<div className="electronics">
			
			{/* section 1 */}
			<div className='electronics_title'>
				<h2>Electronics</h2>
				<p className='elec_title'>Shop home entertainment, TVs, home audio, headphones, cameras, accessories and more</p>
			</div>
			
			<div className='electronics_products'>
				<Product
					id='1.1'
					title='Nintendo Switch™ w/ Neon Blue & Neon Red Joy-Con™ + Mario Kart™ 8 Deluxe (Full Game Download) + 3 Month Nintendo Switch Online Individual Membership'
					image='https://images-na.ssl-images-amazon.com/images/I/41mT-PtFQOL._AC_US160_.jpg'
					price={38994}
					rating={4}
				/>

				<Product
					id='1.2'
					title='TCL 32S327 32-Inch 1080p ROKU Smart LED TV (2018 Model)'
					image='https://images-na.ssl-images-amazon.com/images/I/41dy70QLw4L._AC_US160_.jpg'
					price={9958}
					rating={3}
				/>

				<Product
					id='1.3'
					title='Samsung Galaxy Tab A7 10.4 Wi-Fi 32GB Silver (SM-T500NZSAXAR)'
					image='https://images-na.ssl-images-amazon.com/images/I/3101piR9A5L._AC_US160_.jpg'
					price={11490}
					rating={4}
				/>

			</div>

			{/*Section 2 */}
			<div className='electronics_products'>
				<Product
					id='1.1'
					title='HP 63 | Ink Cartridge | Black | F6U62AN'
					image='https://images-na.ssl-images-amazon.com/images/I/413DcxIjkOL._AC_US160_.jpg'
					price={1600}
					rating={3}
				/>

				<Product
					id='1.2'
					title='Roku Premiere | HD/4K/HDR Streaming Media Player, Simple Remote and Premium HDMI Cable'
					image='https://images-na.ssl-images-amazon.com/images/I/41bjpRqJneL._AC_US160_.jpg'
					price={1838}
					rating={3}
				/>

				<Product
					id='1.3'
					title='AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack'
					image='https://images-na.ssl-images-amazon.com/images/I/51GTuVaUpdL._AC_US160_.jpg'
					price={848}
					rating={4}
				/>

			</div>

			{/*Section 3 */}
			<div className='electronics_products'>
				<Product
					id='1.1'
					title='JBL Tune 120TWS - True Wireless in-Ear Headphone - Black'
					image='https://m.media-amazon.com/images/I/61nMbwIhOzL._AC_UY218_.jpg'
					price={3060}
					rating={3}
				/>

				<Product
					id='1.2'
					title='SAMSUNG 75-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN75TU8000FXZA, 2020 Model)'
					image='https://m.media-amazon.com/images/I/71RiQZ0J2SL._AC_UY218_.jpg'
					price={25000}
					rating={5}
				/>

				<Product
					id='1.3'
					title='KODAK Step Wireless Mobile Photo Mini Printer (White) Compatible w/ iOS & Android, NFC & Bluetooth Devices'
					image='https://m.media-amazon.com/images/I/81lAHBOPTnL._AC_UY218_.jpg'
					price={4595}
					rating={4}
				/>

			</div>

		{/*Section 4 */}
			<div className='electronics_products'>
				<Product
					id='1.1'
					title='Wyze Cam 1080p HD Indoor WiFi Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, White, 1-Pack'
					image='https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UY218_.jpg'
					price={7899}
					rating={3}
				/>

				<Product
					id='1.2'
					title='Gskyer Telescope, 70mm Aperture 400mm AZ Mount Astronomical Refracting Telescope for Kids Beginners - Travel Telescope with Carry Bag, Phone Adapter and Wireless Remote'
					image='https://m.media-amazon.com/images/I/81nUym12AOL._AC_UY218_.jpg'
					price={9192}
					rating={3}
				/>

				<Product
					id='1.3'
					title='Neewer Ring Light Kit:18"/48cm Outer 55W 5500K Dimmable LED Ring Light, Light Stand, Carrying Bag for Camera,Smartphone,YouTube'
					image='https://m.media-amazon.com/images/I/71+JKKAnfoL._AC_UY218_.jpg'
					price={6511}
					rating={2}
				/>

			</div>

		</div>
	)
}

export default Electronics