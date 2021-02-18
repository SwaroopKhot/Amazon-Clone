import React, { useState } from 'react';
import './Header.css'

// router:
import { Link } from 'react-router-dom';
// Material-ui :
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

// data Layer :
import { useStateValue } from "./DataLayer/StateProvider";

// firebase :
import {auth} from './Firebase';

// Slider Menu :
import Menu from './Menu';

function Header() {

	const [ slidemenu, setSlider ] = useState('true');
	const [ { basket, user }, dispatch] = useStateValue();

	const handleAuthentication= () =>{
		if (user) {
			auth.signOut();
		}
	}


	const  menu_drawer = () => {
		setSlider(!slidemenu)
	}

	return (
		// Header Section 
		
		<nav className='header_contain'>
			<div className='header'>

				<div  className='amazon_link' onClick={ menu_drawer } >
					<button className='header_drawer'>
						<img 
							className='header_drawer_logo'
							src='https://borghisbythebay.com/photos/hamburger-icon.png'
							alt=''
						/>
					</button>

					<Link to='/'>
						<img className='header_logo' 
							src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'	
							alt=''
						/>
					</Link>
				</div>

				{
					slidemenu ? 

					null :

					<div className='menu'>

						<div className='slider_left'>
							
							< Menu />
						</div>

						<div>
							<button onClick={menu_drawer} >Close</button>
						</div>

					</div>
				}
			

				<div className='header_search'>
					<input className='header_searchInput' type='text' />
					<button className='header_searchBtn'><SearchIcon className="header_searchIcon" /></button> 
				</div>

				<div className='header_link'>

					{/* Link 1 */}
					<Link to={!user && "/login"} className="a_link">
						<div  onClick={handleAuthentication} className='header_link_option login_div' >

							<span className='header_link1_option1' style={{textDecoration:"none"}}> Hello <b>{user ? user.email.replace(/[0-9]/g, '').replace('@gmail.com','').replace('@email.com','') : 'Guest'} </b></span>
							<span className='header_link1_option2'>{user ? 'Sign Out':'Sign In' }</span>

						</div>
					</Link>

					{/* Link 2 */}
					<Link to='/orders' className="a_link">
						<div className='header_link_option return_orders'>
							<span className='header_link1_option1'> Returns</span>
							<span className='header_link1_option2'>& Orders</span>
						</div>
					</Link>

					{/* Link 3 */}
					<Link to='/cart' className="a_link">
						<div className='header_link_cart'>
							<ShoppingCartOutlinedIcon fontSize='large' style={{color:"orange"}} className="header_linkIcon" />

							<div className='header_cart_option'>
								<span className='header_cartCount'>{basket?.length}</span>
								<span className='header_link1_cart2'>Cart</span>
							</div>
						</div>
					</Link>

					{/* Link 4 */}
					{/* */}
				</div>
			</div>

			<div className='header_container'>

				<div className='header_container_option' onClick={() => alert('Virtual Delivery for Amazon-clone is only avaiable in India')}>
					
					<RoomOutlinedIcon fontSize='medium' className='header_container_locationLogo' />
					<div className='header_container_deliver'>
						<span className='header_container_title1'>Deliver To&nbsp;</span>
						<span className='header_container_title'>India</span>
					</div>
					
				</div>

				<div className='header_container_links'>
					<span className='header_cont_link' onClick={() => alert('No Special Deals avaiable. Visit next time !')}>Today's Deals</span>
					<span className='header_cont_link' onClick={() => alert('Contact to : xyz@gmail.com')}>Customer Service</span>
					<span className='header_cont_link' onClick={() => alert('No Gift cards avaiable. Visit next time !')}>Gift Cards</span>
					<span className='header_cont_link' onClick={() => alert('Section Closed !')}>Registry</span>
					<span className='header_cont_link'  onClick={() => alert('sell your Products on Amazon-clone after compliting formats')}>Sell</span>
				</div>

				<div className='header_container_titlesection'>
					<Link to='/Covid-19/Amazon-work' className='covid_link'>
						<span className='header_container_titlesec'>
							Amazon's response to COVID-19
						</span>
					</Link>
				</div>

			</div>

		</nav>

	)
}

export default Header;