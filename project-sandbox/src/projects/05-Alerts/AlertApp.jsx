import React from 'react'
import Alert from '../components/Alert'

function AlertApp() {
	return (
		<div className="container mx-auto">
			<Alert type={'success'} message={'Successful login'} />
			<Alert type={'info'} message={'Time triggered'} delay delayTime={1000} />
		</div>
	)
}

export default AlertApp
