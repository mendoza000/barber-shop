import {useEffect, useRef} from 'react'
import { gsap } from "gsap";
import barbero from '../../../assets/peluquero.png'

export const Header = () => {
	const logo   = useRef()
	const circle = useRef()
	const img    = useRef()
	const sombra = useRef()
	const title  = useRef()
	const ubi    = useRef()

	useEffect(() => {
		gsap.from(logo.current, {
			opacity: 0,
			x: -150
		})
		gsap.from(circle.current, {
			opacity: 0,
			x: 150
		})
		gsap.from(img.current, {
			opacity: 0,
			y: -200
		})
		// gsap.from(sombra.current, {
		// 	opacity: 0,
		// 	y: -200
		// })
		gsap.from(title.current, {
			opacity: 0,
			y: 200
		})
		gsap.from(ubi.current, {
			opacity: 0,
			y: 200
		})

		// Iniciamos la animación
		gsap.to(logo.current, {
			opacity: 1,
			x: 0,
			duration: 1.5
		})
		gsap.to(circle.current, {
			opacity: 1,
			x: 0,
			duration: 1.5
		})
		// gsap.to(sombra.current, {
		// 	opacity: 1,
		// 	y: 0,
		// 	duration: 1.5
		// })
		gsap.to(img.current, {
			opacity: 1,
			y: 0,
			duration: 1.5, 
		})
		gsap.to(title.current, {
			opacity: 1,
			y: 0,
			duration: 2
		})
		gsap.to(ubi.current, {
			opacity: 1,
			y: 0,
			duration: 2
		})
	},[])


	return(
		<div className="barber__header">
				
			<p className="barber__header-top">
				<span ref={logo}>
					LOGO
				</span>
				<div 
					className="barber__header-circle"
					ref={circle}
				></div>
			</p>

			<img 
				src={barbero} 
				alt="barbero"
				className="barber__header-img"
				ref={img}
			/>
			<div 
				className="barber__header-img-sombra"
				ref={sombra}
			></div>

			<h1 
				className="barber__header-title"
				ref={title}
			>
				Zina Navarrete
				<br/>
				<span>Barber Shop</span>
			</h1>

			<p 
				className="barber__header-ubi"
				ref={ubi}
			>
				<box-icon name='map'></box-icon>
				México
			</p>
		</div>
	)
}