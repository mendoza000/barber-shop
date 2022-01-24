import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Footer = () => {
	const navigate = useNavigate()

	const handleGoToCite = () => {
		navigate('/cita')
	}

	return(
		<footer className="barber__footer">
			<p 
				className="barber__footer-title"
			>
				¿Te interesan nuestros servicios?
			</p>
			<p
				className="barber__footer-text"
			>
				Puedes agendar una cita <span onClick={handleGoToCite}>aquí</span>
			</p>
			<p
				className="barber__footer-text"
			>
				Si tienes alguna pregunta puedes contactarnos por nuestras redes sociales
			</p>

			<div className="barber__footer-line"></div>

			<div className="barber__footer-redes">
				<a href="#">
					<box-icon type='logo' name='instagram'></box-icon>
				</a>
				<a href="#">
					<box-icon type='logo' name='facebook'></box-icon>
				</a>
				<a href="#">
					<box-icon type='logo' name='twitter'></box-icon>
				</a>
				<a href="#">
					<box-icon type='logo' name='telegram'></box-icon>
				</a>
				<a href="#">
					<box-icon type='logo' name='whatsapp'></box-icon>
				</a>
			</div>

			<div className="barber__footer-line"></div>
			<p>
				Created by: Omar Mendoza.
			</p>

		</footer>
	)
}