import React from 'react'

export const FaqItem = ({title, text}) => {
	return(
		<div className="faq__item">
			<h3 className="faq__item-title">
				{title}
			</h3>

			<p className="faq__item-text">
				{text}
			</p>
		</div>
	)
}