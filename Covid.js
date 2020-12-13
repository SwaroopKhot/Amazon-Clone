import React from 'react';
import './Covid.css'

function Covid() {
	return (
		<div className='covid'>
			<h2 className='covid_title'>Amazon During Covid-19 Pandemic</h2>

			<div className='covid_employ'>
				<img 
					className='covid_emp_banner'
					src='https://dcmsme.gov.in/Awareness_corona/covid-19-banner.jpg'
					alt=''
				/>

				<h3>Precautions for Employes :</h3>

				<ul>
				  <li>Our top priority is ensuring the health and safety of our employees, and we expect to invest approximately $10 billion in 2020 on COVID-related initiatives to keep employees safe and get products to customers.</li>
				  <li>We have provided  bonuses and incentives for our teams globally in 2020</li>
				  <li>We assured saftey of our Employes and work-from-home as much as possible</li>
				  <li>We are offering extra time off with full pay for those diagnosed with COVID-19.</li>

				</ul>
			</div>



			<div className='covid_employ'>
				
				<h3>What we are doing for customers :</h3>

				<div className='covid_row'>

					<div>
						<img 
							className='covid_emp_banner'
							src='https://www.nursingcenter.com/getattachment/1a102fc1-3910-488c-b8c9-59c2fa274d69/physical-distancing-instead-of-social-distancing.aspx'
							alt=''
						/>
					</div>

					<div>

						<ul>
						  <li>We're providing free masks to customers at all open Amazon physical retail stores and Whole Foods Market locations nationwide</li>
						  <li>Customers ordering delivery from Prime Now, Amazon Fresh, and Whole Foods Market can select "unattended delivery" during checkout.</li>
						  <li>We enhanced cleaning at all open Amazon physical stores and Whole Foods Market stores.</li>
						  
						</ul>

					</div>

				</div>



				<div className='covid_row'>
					<div>
						<ul>
						  <li>Customers ordering a scheduled delivery can select front-porch delivery during checkout. The delivery team will leave the item at your front door and you will not be required to sign for it. In addition, all delivery vehicles and equipment are disinfected each day, and delivery devices and mobile phones are disinfected after each delivery appointment.</li>
						  <li>Our Amazon and Alexa devices help keep customers stay connected and informed.</li>
						  <li>We will maintain social-distancing and so you !</li>	  
						</ul>
					</div>

					<div>
						<img 
							className='covid_emp_banner'
							src='https://www.munsonhealthcare.org/media/Image/Social%20distance%20for%20kids(1).jpg'
							alt=''
						/>
					</div>
				</div>


				<div className='covid_row'>

					<div>
						<img 
							className='covid_emp_banner'
							src='https://img.etimg.com/thumb/msid-78403863,width-1200,height-900/jobs/delhivery-to-create-15000-seasonal-jobs-this-festive-season.jpg'
							alt=''
						/>
					</div>

					<div>
						<p>
							There may be a long waiting time before delivery. Know your rights in case a supplier can’t deliver within the agreed time frame, and don’t fall for scammers promising they can help you cut the line. Usually, you can claim a refund if the article doesn’t arrive by the date you were promised. But a scammer couldn’t care less about your claims for a refund. They will make sure they are nowhere to be found when the claims come in and the going gets rough.
						</p>
					</div>
				</div>
				
				
			</div>



			<div className='covid_employ'>
				<h3>Precautions to be taken by You :</h3>
				
				<img 
					className='covid_emp_banner'
					src='https://static.toiimg.com/img/74575934/Master.jpg'
					alt=''
				/>
			</div>



		</div>
	)
}

export default Covid