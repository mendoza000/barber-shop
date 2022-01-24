import React from 'react'

export const Resena = ({img, name, text}) => {
	return(
		<div className="barber__about-resena">
			<img src={img} alt="resena-img"/>
			<div>
				<span>{name}</span>
				<p>
					{text}
				</p>
			</div>
		</div>
	)
}