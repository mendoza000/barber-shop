import React from 'react'
import {Header} from './Header'
import { Services } from './Services';
import { Resenas } from './Resenas';
import { Footer } from './Footer'

export const BarberShopScreen = () => {

	return(
		<div className="barber__container animate__animated animate__fadeIn animate__faster">
			<Header />

			<div className="barber__about">

				<div className="barber__about-card">
					<h3>
						<box-icon name="user-pin"></box-icon>
						¿Quienes Somos?
					</h3>

					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas sunt, eaque? Totam, laborum. Libero pariatur, necessitatibus consectetur tenetur, exercitationem fuga repellat illum doloribus! Praesentium, voluptas natus, delectus tenetur non dolore!</p>
				</div>

				<Services />
				<Resenas />
			</div>
			
			<Footer />
		</div>	
	)
}