import { 
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';
import { BarberShopScreen } from '../barberShop/BarberShopScreen';
import { NavBar } from '../ui/NavBar';

export const BarberRouter = () => {
	return(
			<BrowserRouter>
	  		<NavBar />

				<Routes>
					<Route exact path="/" element={ <BarberShopScreen /> } />
					<Route exact path="/faq" />
				</Routes>
			</BrowserRouter>
	)
}