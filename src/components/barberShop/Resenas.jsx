import React from 'react'
import { Resena } from './Resena'
import hombre from '../../../assets/hombre.png'
import mujer from '../../../assets/mujer.png'
import hombre2 from '../../../assets/hombre2.png'

export const Resenas = () => {
	return(
		<div className="barber__about-card">
			<h3>
				<box-icon name="comment"></box-icon>
				Reseñas
			</h3>

			<Resena 
				img={hombre}
				name={"Juan Perez"}
				text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid autem magnam fuga!"
			/>

			<Resena 
				img={mujer}
				name={"Maria Martinez"}
				text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid autem magnam fuga!"
			/>

			<Resena 
				img={hombre2}
				name={"Omar Mendoza"}
				text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid autem magnam fuga!"
			/>

		</div>
	)
}