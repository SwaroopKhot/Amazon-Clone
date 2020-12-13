import React from 'react';
import './Deals.css';

import { Link } from 'react-router-dom';

function Deals() {


	return (
		<div className='deals'>

			<h2>Deals and Promotions</h2>
			<p>
				Shop Today’s Deals, Lightning Deals, Amazon Prime Membership and limited-time discounts
				<br/ >
				<b>Offer available on purchasing products.</b>
			</p>


			<Link to='/'>

				<img 
					onClick={() => {alert('Avail this feature during Payments and Purchasing products !')}}
					className='deal_img'
					src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_LP_Hero_HolidayDeals_en_US.png'
					alt=''
				/>
			</Link>

			<Link to='/'>
				<img 
					onClick={() => {alert('Available with Amazon Pay !')}}
					className='deal_img'
					src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg'
					alt=''
				/>
			</Link>

			<Link to='/'>
				<img 
					onClick={() => {alert('Get assured cashbacks on pay using Amazon Pay !')}}
					className='deal_img'
					src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_8._V515060851_.jpg'
					alt=''
				/>
			</Link>

			<Link to='/'>
				<img 
					onClick={() => {alert('Exclusive Prime Membership Offer, Limited Time, Hurry up !')}}
					className='deal_img'
					src='https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Prime/XCM_Manual_1500x350_1210306_1210306_IN_Prime_Deals_7a028a6d_aba0_4767_9510_e5e013c3a81f_jpg_LOWER_QL85_.jpg'
					alt=''
				/>
			</Link>

			<Link to='/'>
				<img 
					onClick={() => {alert('Offer on HDFC Bank 10% Additional Flat Cashback on Payments.')}}
					className='deal_img'
					src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_7._V515060851_.jpg'
					alt=''
				/>
			</Link>

			<Link to='/'>
				<img 
					onClick={() => {alert('Exclusive offers on Clothing and shoes. Browse for more !')}}
					className='deal_img'
					src='https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/slide8/PRIME_Banner1500_x_375.jpg'
					alt=''
				/>
			</Link>

			<p>Spin and Win Offer Expires on : <b>21<sup>th</sup> December, 2020</b></p>
			<Link to='/'>

				<img 
					onClick={() => {alert('Spin and Win-Lucky Drawer for Lucky Winners with gift awaiting for you!')}}
					className='deal_img'
					src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Mobile/Engagement/GIFS2018/SpinAndWin/Winners/winner_LP_2.jpg'
					alt=''
				/>
			</Link>

			<Link to='/'>
				<img 
					onClick={() => {alert('Great Indian Sales only on Amazon. Shop Now !')}}
					className='deal_img'
					src='https://i.gadgets360cdn.com/large/Amazon_Great_Indian_Festival_1475235228255.jpeg?output-quality=80&output-format=webp'
					alt=''
				/>
			</Link>
				

		</div>
	)
}

export default Deals