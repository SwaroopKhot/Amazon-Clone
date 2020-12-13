import React from 'react'
import './Cards.css'



function Cards( {id, title, img} ) {
	return (
		<div className='cards'>
			<div className='card'>
				<img
					className='cards_images'
					src={img}
					alt=''
				/>
				
			
			<span className='cards_link'> see more</span>
			</div>
		</div>
	)
}

export default Cards