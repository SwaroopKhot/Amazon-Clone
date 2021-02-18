import React from 'react'
import './Category.css';
import { Link } from 'react-router-dom';

function Categories( { category, title, id, img, link, src} ) {

	
	return (
		<div className='category'>
			<div className='category_info'>
				<p className='category_title'> {title} </p>
			</div>

			<img className='category_image'
				src={img}
				alt=''
			/>

			<Link to={src}>
				<div className='category_info'>
					<p className='category_link'> {link} </p>
				</div>
			</Link>
		</div>
	)
}

export default Categories;