import { 
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';
import { BarberShopScreen } from '../barberShop/BarberShopScreen';
import {FaqScreen} from '../faq/FaqScreen'
import { CiteScreen } from '../cite/CiteScreen';
import { NavBar } from '../ui/NavBar';

export const BarberRouter = () => {
	return(
			<BrowserRouter>
	  		<NavBar />

				<Routes>
					<Route exact path="/" element={ <BarberShopScreen /> } />
					<Route exact path="/faq" element={ <FaqScreen /> }/>
					<Route exact path="/cita" element={ <CiteScreen /> }/>


				</Routes>
			</BrowserRouter>
	)
}