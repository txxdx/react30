import React, { useState } from 'react'
import Button from '../components/Button'

function TemperatureControllerApp() {
	const [temperature, setTemperature] = useState(0)
	return (
		<div className="container mt-3 text-center">
			<div className="card bg-light m-auto" style={{ width: 200 }}>
				<h1
					className={`text-light card border-50 ${
						temperature > 0 ? 'bg-danger' : 'bg-info'
					}`}
					style={{
						height: 150,
						width: 150,
						border: '2px solid #666',
					}}
				>
					{temperature}° C
				</h1>
				<div className="d-flex my-2">
					<Button
						text="-"
						btnClass={'btn-lg'}
						onClick={() => setTemperature(temperature - 1)}
					/>
					<Button
						text="+"
						btnClass={'btn-lg'}
						onClick={() => setTemperature(temperature + 1)}
					/>
				</div>
			</div>
		</div>
	)
}

export default TemperatureControllerApp
