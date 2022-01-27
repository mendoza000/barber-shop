import React from 'react'
import { FaqItem } from './FaqItem';

export const FaqScreen = () => {
	return(
		<div className="faq__container animate__animated animate__fadeIn animate__faster">
			<h1 className="faq__title">Preguntas frecuentes</h1>

			<div className="faq__list-items">
				<FaqItem 
					title={"¿Cual es el horario de atención?"}
					text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel massa in nulla venenatis consectetur sit amet ac eros. Sed."}
				/>

				<FaqItem 
					title={"¿Necesito una cita para que me atiendan?"}
					text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel massa in nulla venenatis consectetur sit amet ac eros. Sed."}
				/>

				<FaqItem 
					title={"¿Cuanto tiempo tarda entre cada cliente?"}
					text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel massa in nulla venenatis consectetur sit amet ac eros. Sed."}
				/>

				<FaqItem 
					title={"¿Qué pasa si no llego a la cita?"}
					text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel massa in nulla venenatis consectetur sit amet ac eros. Sed."}
				/>

				<FaqItem 
					title={"¿Puedo hacer una sola cita para varias personas?"}
					text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel massa in nulla venenatis consectetur sit amet ac eros. Sed."}
				/>
			</div>
		</div>
	)
}