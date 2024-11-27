import { useEffect, useContext, useState } from 'react';
import { PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';

const App = () => {
  const { changeTheme } = useContext(PrimeReactContext); // Accedemos al contexto de PrimeReact
  const [currentTheme, setCurrentTheme] = useState<string>('light'); // Estado para manejar el tema actual

  useEffect(() => {
    const appTheme = localStorage.getItem('appTheme') || 'light'; // Valor por defecto 'light'
    setCurrentTheme(appTheme); // Establecemos el tema al cargar la página
    
    // Cambiar el tema si está disponible
    if (changeTheme) {
      console.log('Cambiando tema:', appTheme);
      if (appTheme === 'dark') {
        changeTheme('lara-light-green', 'lara-dark-green', 'theme-link', () => {});
      } else {
        changeTheme('lara-dark-green', 'lara-light-green', 'theme-link', () => {});
      }
    }
  }, [changeTheme]); // Dependencia: solo se ejecuta una vez al cargar el componente

  // Función para cambiar el tema al hacer clic en el botón
  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'; // Alternar entre 'light' y 'dark'
    setCurrentTheme(newTheme); // Actualizamos el estado del tema

    // Guardamos el nuevo tema en localStorage
    localStorage.setItem('appTheme', newTheme);

    // Cambiamos el tema con la función changeTheme
    if (changeTheme) {
      if (newTheme === 'dark') {
        changeTheme('lara-light-green', 'lara-dark-green', 'theme-link', () => {});
      } else {
        changeTheme('lara-dark-green', 'lara-light-green', 'theme-link', () => {});
      }
    }
  };

  return (
    <div>
      <h1>Aplicación con tema dinámico</h1>
      <p>El tema actual es: {currentTheme}</p>
      <Button outlined label={`Cambiar a ${currentTheme === 'dark' ? 'Light' : 'Dark'}`} onClick={toggleTheme} />
    </div>
  );
};

export default App;
