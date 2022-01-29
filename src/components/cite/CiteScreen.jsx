import React, {useState, useEffect} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CiteScreen = () => {
	const [date, setDate] = useState(new Date())
	const [time, setTime] = useState("")
	const hours = [
		{ hour: "9:00 AM", available: true },
		{ hour: "10:00 AM", available: false },
		{ hour: "11:00 AM", available: true },
		{ hour: "12:00 AM", available: false },
		{ hour: "1:00 PM", available: true },
		{ hour: "2:00 PM", available: true },
		{ hour: "3:00 PM", available: true },
		{ hour: "4:00 PM", available: true },
		{ hour: "5:00 PM", available: false },
		{ hour: "6:00 PM", available: true },
		{ hour: "7:00 PM", available: false },
		{ hour: "8:00 PM", available: true },
		{ hour: "9:00 PM", available: false },
		{ hour: "10:00 PM", available: true },
		{ hour: "11:00 PM", available: true },
	]

	const handleSelectTime = (e) => {
		if(e.available){
			setTime(e.hour)
		}
	}

	return(
		<div className="cite__container animate__animated animate__fadeIn animate__faster">
			<h1 className="cite__title">
				Agendar cita
			</h1>

			<div className="cite__col">
				<h3 className="cite__subtitle">
					<box-icon name="calendar"></box-icon>
					Seleccionar fecha
				</h3>
				<Calendar
	        onChange={setDate}
	        value={date}
	      />
			</div>

      <div className="cite__col">
      	<h3 className="cite__subtitle">
					<box-icon name="time"></box-icon>
					Seleccionar hora
				</h3>

				<div className="cite__hours-list">
					{
						hours.map(e => {
							return(
								<span 
									className={`cite__hours-item ${
										(!e.available)
										? "cite__hours-item-unavailable"
										: ""
									} ${
										(time === e.hour)
										? "cite__hours-item-select"
										: ""
									}`}
									key={e.hour}
									onClick={ () => handleSelectTime(e)}
								>
									{e.hour}
								</span>
							)
						})
					}
				</div>
      </div>
		</div>
	)
}