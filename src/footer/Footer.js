import React from 'react'
import './Footer.css'

// React-dom:
//import { Link } from 'react-router-dom'
// material UI :
import LanguageIcon from '@material-ui/icons/Language';

function Footer() {
	

	return (
		<div className='footer'>


			{/* Footer section  1 */}
			<div className='footer_button'>
				<a href='#top'><button className='footer_backbtn'>Back to Top</button></a>
			</div>
			

			{/* Footer section 2 */}
			<div className='footer_knowmore'>
				
				<div className='footer_link_container'>
					{/* Section 1:*/}
					<div className='footer_link_column'>
						<span className='footer_link_title'>Get to Know Us</span>

						<span className='footer_link_links'>Careers</span>
						<span className='footer_link_links'>Blog</span>
						<span className='footer_link_links'>About Amazon</span>
						<span className='footer_link_links del'>Investor Relations</span>
						<span className='footer_link_links del'>Amazon Devices</span>
						<span className='footer_link_links del'>Amazon Tours</span>
					</div>

					{/* Section 2:*/}
					<div className='footer_link_column'>
						<span className='footer_link_title'>Make Money with Us</span>
						<span className='footer_link_links'>Sell products on Amazon</span>
						<span className='footer_link_links'>Sell apps on Amazon</span>
						<span className='footer_link_links del'>Become an Affiliate</span>
						<span className='footer_link_links del'>Advertise Your Products</span>
						<span className='footer_link_links'>Self-Publish with Us</span>
						<span className='footer_link_links del'>Host an Amazon Hub</span>
						<span className='footer_link_links del'>See More Make Money with Us</span>
					</div>
					
					{/* Section 3:*/}
					<div className='footer_link_column'>
						<span className='footer_link_title'>Amazon Payment Products</span>

						<span className='footer_link_links'>Amazon Business Card</span>
						<span className='footer_link_links'>Shop with Points</span>
						<span className='footer_link_links'>Reload Your Balance</span>
						<span className='footer_link_links'>Amazon Currency Converter</span>
					</div>
					
					{/* Section 4:*/}
					<div className='footer_link_column'>
						<span className='footer_link_title'>Let Us Help You</span>

						<span className='footer_link_links'>Amazon and COVID-19</span>
						<span className='footer_link_links'>Your Account</span>
						<span className='footer_link_links'>Your Orders</span>
						<span className='footer_link_links del'>Shipping Rates & Policies</span>
						<span className='footer_link_links del'>Returns & Replacements</span>
						<span className='footer_link_links del'>Manage Your Content and Devices</span>
						<span className='footer_link_links'>Amazon Assistant</span>
						<span className='footer_link_links del'>Help</span>
					</div>
				</div>

				<div className='pre_hidden'>

					<div className='pre_hidden_col1'>
						<span className='footer_link_title'>Get to Know Us</span>
						<span className='footer_link_links'>Careers</span>
						<span className='footer_link_links'>Blog</span>
						<span className='footer_link_links'>About Amazon</span>
						<span className='footer_link_links'>Amazon Devices</span>

						<br />
						<hr />
						<span className='footer_link_title'>Make Money with Us</span>
						<span className='footer_link_links'>Sell products on Amazon</span>
						<span className='footer_link_links'>Sell apps on Amazon</span>
						<span className='footer_link_links'>Self-Publish with Us</span>
						<span className='footer_link_links'>Advertise Your Products</span>
					</div>

					<div className='pre_hidden_col2'>
						<span className='footer_link_title'>Amazon Payment Products</span>
						<span className='footer_link_links'>Amazon Business Card</span>
						<span className='footer_link_links'>Shop with Points</span>
						<span className='footer_link_links'>Reload Your Balance</span>
						<span className='footer_link_links'>Amazon Currency Converter</span>

						<br />
						<hr />
						<span className='footer_link_title'>Let Us Help You</span>
						<span className='footer_link_links'>Amazon and COVID-19</span>
						<span className='footer_link_links'>Your Account</span>
						<span className='footer_link_links'>Your Orders</span>
						<span className='footer_link_links'>Amazon Assistant</span>
					</div>

				</div>

				<div className='footer_setting'>

					
					<div className='footer_setting_section_logo'>
						<a href='#top'>
							<img className='footer_setting_logo'
								src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
								alt=''
							/>
						</a>
					</div>

					<div className='footer_setting_section_detail'>

						<div  className='language_logo'>
							<LanguageIcon className='amazon_logo' fontSize='small'/>
							<span className='footer_setting_section_data1'>English</span>
						</div>
​						
						<span className='footer_setting_section_data'>₹ INR-Indian Rupee</span>

						<div  className='language_logo'>
							<img 
								className='india_logo'
								src='https://vilsatechnologies.com/New%20image/india_640.png'
								alt=''
							/>
							<span className='footer_setting_section_data1'>India</span>
						</div>
						
					</div>
				</div>

			</div>



			{/* Footer section 3 */}
			<div className='footer_link'>
				
				{/* First Row */}
				<div className='footer_row1'>
					
					<div className='footer_endcontainer'>
						<span className='footer_row_title'>Amazon Music</span>

						<span className='footer_contents'>Stream millions of songs</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>Amazon Advertising</span>

						<span className='footer_contents'>Find, attract, and engage customers</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>Amazon Drive</span>

						<span className='footer_contents'>Cloud storage from Amazon</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>6pm</span>

						<span className='footer_contents'>Score deals on fashion brands</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>AbeBooks</span>

						<span className='footer_contents'>Books, art & collectibles</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>ACX</span>


						<span className='footer_contents'>Audiobook Publishing Made Easy</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>Alexa</span>

						<span className='footer_contents'>Actionable Analytics for the Web</span>
					</div>


				</div>



				{/* second Row */}
				<div className='footer_row2'>
					
					<div className='footer_endcontainer'>
						<span className='footer_row_title'>Sell on Amazon</span>


						<span className='footer_contents'>Start a Selling Account</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>Amazon Business</span>

						<span className='footer_contents'>Everything For Your Business	</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>AmazonGlobal</span>

						<span className='footer_contents'>Ship Orders Internationally </span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>Home Services</span>

						<span className='footer_contents'>Experienced Pros Happiness Guarantee</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>Amazon Ignite</span>

						<span className='footer_contents'>Sell your original Digital Educational Resources</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>Amazon Rapids</span>


						<span className='footer_contents'>Fun stories for kids on the go</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>Amazon Web Series</span>

						<span className='footer_contents'>Scalable Cloud Compulting Services</span>
					</div>


				</div>

				
				{/* Third Row */}
				<div className='footer_row2'>
					
					<div className='footer_endcontainer'>
						<span className='footer_row_title'>Audible</span>


						<span className='footer_contents'>Listen to Books & Original Audio Performances</span>
					</div>
	


					<div className='footer_endcontainer'>
						<span className='footer_row_title'>Book Depository</span>

						<span className='footer_contents'>Books With Free Delivery Worldwide</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>Box Office Mojo</span>

						<span className='footer_contents'>Find Movie Box Office Data</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>ComiXology</span>

						<span className='footer_contents'>Thousands of Digital Comics</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>DPReview</span>

						<span className='footer_contents'>Digital Photography</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>East Dane</span>

						<span className='footer_contents'>Designer Men's Fashion</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>Fabric</span>

						<span className='footer_contents'>Sewing, Quilting & Knitting</span>
					</div>


				</div>


				{/* fourth Row */}
				<div className='footer_row2'>
					
					<div className='footer_endcontainer'>
						<span className='footer_row_title'>Goodreads</span>


						<span className='footer_contents'>Book reviews & recommendations</span>
						
					</div>
	


					<div className='footer_endcontainer'>
						<span className='footer_row_title'>IMDb</span>

						<span className='footer_contents'>Movies, TV & Celebrities</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>IMDB Pro</span>

						<span className='footer_contents'>Get Info Entertainment Professionals Need</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>ComiXology</span>

						<span className='footer_contents'>Thousands of Digital Comics</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>DPReview</span>

						<span className='footer_contents'>Digital Photography</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>East Dane</span>

						<span className='footer_contents'>Designer Men's Fashion</span>
					</div>

					<div className='footer_endcontainer'>
						<span className='footer_row_title'>Fabric</span>

						<span className='footer_contents'>Sewing, Quilting & Knitting</span>
					</div>


				</div>



				{/* Condition part */}

				<div className='footer_condition'>
					<span className='footer_condition_title'>Conditions of Use</span>
					<span className='footer_condition_title'>Privacy Notice</span>
					<span className='footer_condition_title'>Interest-Based Ads</span>
					<span className='footer_condition_date'>© 1996-2020, Amazon.com, Inc. or its affiliates</span>
				</div>


			</div>
		</div>
	)
}

export default Footer