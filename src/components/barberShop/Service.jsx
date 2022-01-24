import React from 'react'

export const Service = ({img, title, text}) => {
	return(
		<div className="barber__service-card">
			<img src={img} alt="cabello"/>

			<div>
				<span>
					{title}
				</span>
				<p>
					{text}
				</p>

			</div>
		</div>
	)
}