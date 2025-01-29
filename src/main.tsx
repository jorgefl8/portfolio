import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api'
import { ScrollPanel } from 'primereact/scrollpanel'
import { ScrollTop } from 'primereact/scrolltop'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<PrimeReactProvider>
			<ScrollPanel
				style={{ width: '100%', height: '100vh' }}
				pt={{
					barY: {
						style: {
							backgroundColor: 'green', // Personaliza el color de la barra vertical
							opacity: 0.5, // Opacidad de la barra vertical
							borderRadius: '10px' // Bordes redondeados
						},
						hover: {
							backgroundColor: 'darkgreen' // Color cuando el mouse pasa sobre la barra
						}
					}
				}}>
				{/* Propiedad pt sería equivalente a clases dinámicas. Se puede agregar directamente usando `className` */}
				<App />
				<ScrollTop target='parent' style={{ marginRight: '15px' }} />
			</ScrollPanel>
		</PrimeReactProvider>
	</StrictMode>
)
