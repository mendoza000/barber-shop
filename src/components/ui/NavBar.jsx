import React from 'react'
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

	const handleClick = () => {
		window.scroll(0,0)
	}

	return(
		<nav className="ui__nav">
			<NavLink 
				end
				onClick={handleClick}
				to="/faq"
				className={ 
					({ isActive }) => `ui__nav-item ui__nav-item-mobile ${
						(isActive)
						? "ui__nav-item-active"
						: ""
					}`
				}
			>
				<box-icon name="question-mark"></box-icon>
			</NavLink>

			<NavLink 
				end
				onClick={handleClick}
				to="/"
				className={ 
					({ isActive }) => `ui__nav-item ui__nav-item-mobile ${
						(isActive)
						? "ui__nav-item-active"
						: ""
					}`
				}
			>
				<box-icon name="home"></box-icon>
			</NavLink>

			<NavLink 
				end
				onClick={handleClick}
				to="/cita"
				className={ 
					({ isActive }) => `ui__nav-item ui__nav-item-mobile ${
						(isActive)
						? "ui__nav-item-active"
						: ""
					}`
				}
			>
				<box-icon name="list-ul"></box-icon>
			</NavLink>

			{/* Desktop */}

			<a 
				href="#"
				className="ui__nav-item ui__nav-item-desktop"
			>
				Inicio
			</a>

			<a 
				href="#"
				className="ui__nav-item ui__nav-item-desktop"
			>
				Servicios
			</a>

			<a 
				href="#"
				className="ui__nav-item ui__nav-item-desktop"
			>
				Reseñas
			</a>

			<a 
				href="#"
				className="ui__nav-item ui__nav-item-desktop"
			>
				Agenda
			</a>

			<a 
				href="#"
				className="ui__nav-item ui__nav-item-desktop"
			>
				FAQ
			</a>
		</nav>
	)
}