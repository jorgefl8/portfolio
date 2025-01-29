// Theme.tsx
import { useEffect, useContext } from 'react'
import { PrimeReactContext } from 'primereact/api'

const Theme = () => {
	const primeReactContext = useContext(PrimeReactContext)
	const changeTheme = primeReactContext?.changeTheme

	useEffect(() => {
		// Asegurarnos de que `changeTheme` está disponible
		if (changeTheme) {
			const savedTheme = localStorage.getItem('appTheme') || 'Light' // 'Light' como predeterminado

			// Cambiar el tema según el valor guardado en localStorage
			if (savedTheme === 'Dark') {
				changeTheme('arya-green', 'lara-light-green', 'theme-link', () => {})
			} else {
				changeTheme('lara-light-green', 'arya-green', 'theme-link', () => {})
			}
		}
	}, [changeTheme]) // Se ejecuta una sola vez al montar el componente

	// No necesita renderizar nada en la UI
	return null
}

export default Theme
