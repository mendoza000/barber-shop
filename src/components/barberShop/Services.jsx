import React from 'react'

import { Service } from './Service';
import cabello from '../../../assets/cabello.png'
import barba from '../../../assets/barba.png'
import pintar from '../../../assets/pintar.png'
import lavado from '../../../assets/lavado.png'
import rizado from '../../../assets/rizado.png'
import plancha from '../../../assets/plancha.png'

export const Services = () => {
	return(
		<div className="barber__about-card">
			<h3>
				<box-icon name="receipt"></box-icon>
				Servicios
			</h3>
			<Service
				title="Corte de cabello"
				img={cabello}
				text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas sunt, eaque? Totam, laborum."
			/>

			<Service
				title="Corte de barba"
				img={barba}
				text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas sunt, eaque? Totam, laborum."
			/>

			<Service
				title="Teñido de cabello"
				img={pintar}
				text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas sunt, eaque? Totam, laborum."
			/>

			<Service
				title="Lavado de cabello"
				img={lavado}
				text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas sunt, eaque? Totam, laborum."
			/>

			<Service
				title="Rizado de cabello"
				img={rizado}
				text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas sunt, eaque? Totam, laborum."
			/>

			<Service
				title="Alizado de cabello"
				img={plancha}
				text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas sunt, eaque? Totam, laborum."
			/>
		</div>
	)
}