import React, { useContext } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { ThemeContext } from './context/theme-context'

export default function Blog() {
	const { theme, changeTheme } = useContext(ThemeContext)

	return (
		<div className="container p-1">
			<Title text={`My Blog with ${theme} Theme`} />
			<span style={{ position: 'absolute', top: 10, right: 10 }}>
				<Button
					btnClass={`${theme === 'dark' && 'btn-light'} btn-sm`}
					text={theme === 'dark' ? 'Light' : 'Dark '}
					onClick={changeTheme}
				/>
			</span>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi cumque
				vel nemo odio aliquid, exercitationem impedit quos natus laborum quod
				recusandae est ab soluta inventore labore architecto tenetur,
				reprehenderit voluptatibus.
			</p>
		</div>
	)
}
