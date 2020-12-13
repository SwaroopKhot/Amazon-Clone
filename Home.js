import React from 'react';
import './Home.css';

// Caurosel View :
//import AliceCarousel from 'react-alice-carousel';
//import "react-alice-carousel/lib/alice-carousel.css";

// Bootstrap :
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Carousel } from 'react-bootstrap'

// Catorries import :
import Categories from './Category'

//import Cards:
import Cards from './Cards'


// React Router Dom :
import { Link } from 'react-router-dom';







function Home() {
	return (
		<div className = 'home'>

			<div className='home_caurosel'>
				<Carousel>
  					<Carousel.Item interval={1200}>
				      <img className="sliderimg"
					      	src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg'
					      	alt=''
				    	/>
					    
					</Carousel.Item>
					
					<Carousel.Item interval={1200}>
						<img className="sliderimg"
					      	src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg'
					      	alt=''
			      		/>
						
					</Carousel.Item>

					<Carousel.Item interval={1200}>
						<img className="sliderimg"
					      	src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg' 
					      	alt=''
			      		/>
  					</Carousel.Item>


  					<Carousel.Item interval={1200}>
						<img className="sliderimg"
						    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg' 
						    alt=''
						/>
  					</Carousel.Item>

  					<Carousel.Item interval={1200}>
						<img className="sliderimg"
					      	src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg' 
					      	alt=''
			      		/>
  					</Carousel.Item>

  					<Carousel.Item interval={1200}>
						<img className="sliderimg"
					      	src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg' 
					      	alt=''
			      		/>
  					</Carousel.Item>


  					<Carousel.Item interval={1200}>
						<img className="sliderimg"
					      	src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg' 
					      	alt=''
			      		/>
  					</Carousel.Item>



  					<Carousel.Item interval={1200}>
						<img className="sliderimg"
					      	src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg' 
					      	alt=''
			      		/>
  					</Carousel.Item>


  					<Carousel.Item interval={1200}>
						<img className="sliderimg"
					      	src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg' 
					      	alt=''
			      		/>
  					</Carousel.Item>
				</Carousel>
			</div>


			{/* Contents */}

			<div className='home_message'>
				<p className='home_message_title'>
					You are on amazon-clone.com. You can also shop on 
					Amazon India the Virtual Market for different range of products. 
					If you want to Sell your products on Amazon-clone <a className='home_message_title' href='https://amazon.com'>click here !</a>
				</p>
			</div>



			{/* Product Categories section ( ONE ) */}
			<div className='home_categories'>

				<div className='catogries_col1'>
					<Categories
						id='p1.1'
						category='common'
						title='Hello, Guest'
						img='https://cdn2.iconfinder.com/data/icons/large-people-svg-icons/512/boss_user_man_business_supervisor-512.png'
						link='Sign in'
					/>

					<Categories 
						id='p1.2'
						category='common'
						title='Recently Viewed'
						img='https://m.media-amazon.com/images/I/2106xsNjy4L._AC_SL260_.jpg'
						link='View your browsing history'
					/>
				</div>

				<div className='catogries_col2'>
					<Categories 
						id='p1.3'
						category='common'
						title='Deals & Promotions'
						img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg'
						link='Shop now'
						src='/deals+promos'
					/>


					<Categories 
						id='p1.4'
						category='common'
						title='Start on your holiday list early'
						img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg'
						link='Shop now'
					/>
				</div>

			</div>


			{/* Product Categories section ( TWO ) */}
			<div className='home_categories'>
				<div className='catogries_col1'>
					<Categories
						id='p2.1'
						category='common'
						title='AmazonBasics'
						img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'
						link='Explore more'
						src='/all/products'
					/>

					<Categories
						id='p2.2'
						category='common'
						title='Shop by Category'
						img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg'
						link='Explore more'
					/>
				</div>

				<div className='catogries_col2'>
					<Categories
						id='p2.3'
						category='common'
						title='Computers & Accessories'
						img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg'
						link='Shop now'
						src='/computer&accessories'
					/>

					<Categories
						id='p2.4'
						category='common'
						title='Electronics'
						img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg'
						link='Shop now'
						src='/electronics'
					/>
				</div>
			</div>



			{/* Cards Section ( ONE ) */}
			<div className='home_card'>

				<div>
					<h4  className='home_card_title'>Trending Video Games <Link to='/video+games' className='direct_src'>( shop Now )</Link></h4>
				</div>

				
				<Carousel >
					<Carousel.Item interval={1200}>
						<div className='home_card_elements'>
							<Cards
								id = {1.1}
								img = 'https://m.media-amazon.com/images/I/31pEe2taIPL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {1.2}
								img = 'https://m.media-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {1.3}
								img = 'https://m.media-amazon.com/images/I/517J1Mfca0L._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {1.4}
								img = 'https://m.media-amazon.com/images/I/51vOyKGea+L._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {1.5}
								img = 'https://m.media-amazon.com/images/I/415-s5FkXIL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
						</div>
					</Carousel.Item>


					<Carousel.Item interval={1500}>
						<div className='home_card_elements'>

							<Cards
								id = {1.6}
								img = 'https://m.media-amazon.com/images/I/51YWlGN4cuL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {1.7}
								img = 'https://m.media-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {1.8}
								img = 'https://m.media-amazon.com/images/I/31i3tpuXxxL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {1.9}
								img = 'https://m.media-amazon.com/images/I/51TucFenMAL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {1.10}
								img = 'https://m.media-amazon.com/images/I/41fVBsNMNmL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							

						</div>
					</Carousel.Item>

					<Carousel.Item interval={1500}>
						<div className='home_card_elements'>

							<Cards
								id = {1.11}
								img = 'https://m.media-amazon.com/images/I/41XcLWH8nYL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {1.12}
								img = 'https://m.media-amazon.com/images/I/51INjwoZOsL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

						
							<Cards
								id = {1.13}
								img = 'https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {1.14}
								img = 'https://m.media-amazon.com/images/I/51-3DH9QFrL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {1.15}
								img = 'https://m.media-amazon.com/images/I/51cqTo2C6LL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>


							
						</div>
					</Carousel.Item>

					<Carousel.Item interval={1500}>
						<div className='home_card_elements'>

							<Cards
								id = {1.16}
								img = 'https://m.media-amazon.com/images/I/51P8dInCuhL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {1.17}
								img = 'https://images-na.ssl-images-amazon.com/images/I/51SrskX4w2L._AC_US218_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {1.18}
								img = 'https://m.media-amazon.com/images/I/51NV8Uil7wL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {1.19}
								img = 'https://images-na.ssl-images-amazon.com/images/I/41lo7JOm0UL._AC_US218_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {1.20}
								img = 'https://images-na.ssl-images-amazon.com/images/I/51B4vYND8nL._AC_US218_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {1.21}
								img = 'https://images-na.ssl-images-amazon.com/images/I/518mL2i0riL._AC_US218_.jpg'
							    title = 'Dolore magna'
							/>
						</div>
					</Carousel.Item>

				</Carousel>
				
			</div>



			{/* Product Categories section ( THREE ) */}
			<div className='home_categories'>
				<div className='catogries_col1'>
					<Categories
						id='p3.1'
						category='common'
						title='Comfy styles for her'
						img='https://i.pinimg.com/736x/bc/8d/91/bc8d91fdf51ca4e3be1ae06076ced1a5--little-miss-her-style.jpg'
						link='see more'
						src='/clothing'
					/>

					<Categories
						id='p3.2'
						category='common'
						title='Shop Laptops & Tablets'
						img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg'
						link='see more'
						src='/computer&accessories'
					/>
				</div>

				<div className='catogries_col2'>
					<Categories
						id='p3.3'
						category='common'
						title='Explore home bedding'
						img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg'
						link='see more'
						src='/home&decors'
					/>

					<Categories
						id='p3.4'
						category='common'
						title='Create strip lights'
						img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg'
						link='see more'
						src='/all/products'
					/>
				</div>
			</div>


			{/* Cards Section ( TWO ) */}
			<div className='home_card'>

				<div>
					<h4  className='home_card_title'>Best Sellers in Kitchen <Link to='/kitchen' className='direct_src'>( shop Now )</Link></h4>
				</div>

				
				<Carousel >
					<Carousel.Item interval={2000}>
						<div className='home_card_elements'>
							<Cards
								id = {2.1}
								img = 'https://m.media-amazon.com/images/I/41V4eXt+eXL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {2.2}
								img = 'https://m.media-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {2.3}
								img = 'https://m.media-amazon.com/images/I/51PxpmVf51L._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {2.4}
								img = 'https://m.media-amazon.com/images/I/41Kf0mndKyL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {2.5}
								img = 'https://m.media-amazon.com/images/I/41TWHhFUC3L._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {2.6}
								img = 'https://m.media-amazon.com/images/I/313I+J9L3jL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							
							
						</div>
					</Carousel.Item>


					<Carousel.Item interval={2000}>
						<div className='home_card_elements'>

							<Cards
								id = {2.7}
								img = 'https://m.media-amazon.com/images/I/411t4QoLZaL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {2.8}
								img = 'https://m.media-amazon.com/images/I/41hyN1iiHfL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {2.9}
								img = 'https://m.media-amazon.com/images/I/51gV00JpBjL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {2.10}
								img = 'https://m.media-amazon.com/images/I/41NPVXxKO3L._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {2.11}
								img = 'https://m.media-amazon.com/images/I/41fgkBDrkxL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {2.12}
								img = 'https://m.media-amazon.com/images/I/41MUBAPIW7L._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							

						</div>
					</Carousel.Item>

					<Carousel.Item interval={2000}>
						<div className='home_card_elements'>

							<Cards
								id = {2.13}
								img = 'https://m.media-amazon.com/images/I/31FZDSUNb3L._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {2.14}
								img = 'https://m.media-amazon.com/images/I/31jy5fSzyRL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

						
							<Cards
								id = {2.15}
								img = 'https://m.media-amazon.com/images/I/41zR9OmibVL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {2.16}
								img = 'https://m.media-amazon.com/images/I/31P33uZt-hL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {2.17}
								img = 'https://m.media-amazon.com/images/I/41MUBAPIW7L._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>


							
						</div>
					</Carousel.Item>

				</Carousel>
				
			</div>


		{/* Product Categories section ( FOUR ) */}
			<div className='home_categories'>

				<div className='catogries_col1'>
					<Categories
						id='p4.1'
						category='common'
						title='Mens Styles'
						img='https://www.bazaargadgets.com/image/cache/catalog/products/clothingapparel/mensclothes/MensCottonComfortableCasualSlimHoodiesFashionOutwear-SKU163441-1-800x800.jpg'
						link='Explore more'
						src= '/clothing'
					/>

					<Categories
						id='p4.2'
						category='common'
						title='Flat Discounts Avaiable'
						img='https://assets.entrepreneur.com/images/misc/1453036421_Mi_Note_03.png'
						link='Get to us'
						src='/mobiles'
					/>
				</div>

				<div className='catogries_col2'>
					<Categories
						id='p4.3'
						category='common'
						title='Be Smart-Watch Smart'
						img='http://s7d2.scene7.com/is/image/SamsungUS/Pdpdefault-un65ku7500fxza-600x600-C1-052016?$product-details-png$'
						link='shop now'
						src='/smart-Tv'
					/>

					<Categories
						id='p4.4'
						category='common'
						title='Books Sellers'
						img='http://pngimg.com/uploads/book/book_PNG2113.png'
						link='see more'
						src='/books/all'
					/>

				</div>
			</div>


			{/* Cards Section (THREE) */}
			<div className='home_card'>

				<div>
					<h4  className='home_card_title'>Home Decor Under ₹400 <Link to='/home&decors' className='direct_src'>( shop Now )</Link></h4>
				</div>

				
				<Carousel >
					<Carousel.Item interval={2000}>
						<div className='home_card_elements'>
							<Cards
								id = {3.1}
								img = 'https://m.media-amazon.com/images/I/21dvL73e4LL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {3.2}
								img = 'https://m.media-amazon.com/images/I/411lLGHkbYL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {3.3}
								img = 'https://m.media-amazon.com/images/I/41Qn+zjTjrL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {3.4}
								img = 'https://m.media-amazon.com/images/I/2106xsNjy4L._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {3.5}
								img = 'https://m.media-amazon.com/images/I/41F0Vil+QUL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {3.6}
								img = 'https://m.media-amazon.com/images/I/41gT9mzRM8L._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							
							
						</div>
					</Carousel.Item>


					<Carousel.Item interval={2000}>
						<div className='home_card_elements'>

							<Cards
								id = {3.7}
								img = 'https://m.media-amazon.com/images/I/5195MBwUjdL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {3.8}
								img = 'https://m.media-amazon.com/images/I/41CHGomCxrL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {3.9}
								img = 'https://m.media-amazon.com/images/I/21OX--nCrrL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {3.10}
								img = 'https://m.media-amazon.com/images/I/51fmvGTHIgL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {3.11}
								img = 'https://m.media-amazon.com/images/I/51MxE9U3lCL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {3.12}
								img = 'https://m.media-amazon.com/images/I/51mRrZICd9L._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							

						</div>
					</Carousel.Item>

					<Carousel.Item interval={2000}>
						<div className='home_card_elements'>

							<Cards
								id = {3.13}
								img = 'https://m.media-amazon.com/images/I/51ZO96ePG3L._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {3.14}
								img = 'https://m.media-amazon.com/images/I/51l3cO7zsFL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

						
							<Cards
								id = {3.15}
								img = 'https://m.media-amazon.com/images/I/41F6+6aEaTL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {3.16}
								img = 'https://m.media-amazon.com/images/I/51Ruuka2tNL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {3.17}
								img = 'https://m.media-amazon.com/images/I/51mlcHD5HmL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>


							
						</div>
					</Carousel.Item>

				</Carousel>
				
			</div>


		{/* Cards Section ( FOUR ) */}
			<div className='home_card'>

				<div>
					<h4  className='home_card_title'>Amazon Top Sellers <Link to='/all/products' className='direct_src'>( shop Now )</Link></h4>
				</div>

				
				<Carousel >
					<Carousel.Item interval={2000}>
						<div className='home_card_elements'>
							<Cards
								id = {4.1}
								img = 'https://m.media-amazon.com/images/I/41yavwjp-8L._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {4.2}
								img = 'https://m.media-amazon.com/images/I/41ffko0T3kL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {4.3}
								img = 'https://m.media-amazon.com/images/I/51G8LfsNZzL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {4.4}
								img = 'https://m.media-amazon.com/images/I/41KL+iXUXCL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {4.5}
								img = 'https://m.media-amazon.com/images/I/21zodo7QkUL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {4.6}
								img = 'https://m.media-amazon.com/images/I/41XlyY4EvQL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							
							
						</div>
					</Carousel.Item>


					<Carousel.Item interval={2000}>
						<div className='home_card_elements'>

							<Cards
								id = {4.7}
								img = 'https://m.media-amazon.com/images/I/41bCxnHksnL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {4.8}
								img = 'https://m.media-amazon.com/images/I/41g0C69FbvL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {4.9}
								img = 'https://m.media-amazon.com/images/I/41tQ9dniedL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {4.10}
								img = 'https://m.media-amazon.com/images/I/51uhr4Fn9SL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {4.11}
								img = 'https://m.media-amazon.com/images/I/41W5-duvLkL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {4.12}
								img = 'https://m.media-amazon.com/images/I/410glGz65uL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							
							<Cards
								id = {4.13}
								img = 'https://m.media-amazon.com/images/I/11tEFlSGn6L._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>
							

						</div>
					</Carousel.Item>

					<Carousel.Item interval={2000}>
						<div className='home_card_elements'>

							<Cards
								id = {4.14}
								img = 'https://m.media-amazon.com/images/I/416IxcmUpGL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

						
							<Cards
								id = {4.15}
								img = 'https://m.media-amazon.com/images/I/51C17DrwacL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {4.16}
								img = 'https://m.media-amazon.com/images/I/51uhr4Fn9SL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {4.17}
								img = 'https://m.media-amazon.com/images/I/31WocBK6ZHL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>

							<Cards
								id = {4.18}
								img = 'https://m.media-amazon.com/images/I/41cEMMExIoL._AC_SY200_.jpg'
							    title = 'Dolore magna'
							/>


							
						</div>
					</Carousel.Item>

				</Carousel>
				
			</div>

		</div>
	)
}

export default Home