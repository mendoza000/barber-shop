import React from 'react'
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
	return(
		<nav className="ui__nav">
			<NavLink 
				end
				to="/faq"
				className={ 
					({ isActive }) => `ui__nav-item ${
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
				to="/"
				className={ 
					({ isActive }) => `ui__nav-item ${
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
				to="/cita"
				className={ 
					({ isActive }) => `ui__nav-item ${
						(isActive)
						? "ui__nav-item-active"
						: ""
					}`
				}
			>
				<box-icon name="list-ul"></box-icon>
			</NavLink>
		</nav>
	)
}