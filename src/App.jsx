import { useEffect, useState } from 'react';
import './App.css'
import { Banner } from './components/Banner';
import { PlaneBg } from './components/PlaneBg';
import { TodosBox } from './components/todos-container/TodosBox';

function App() {

  const [bgCol, setBgCol] = useState('dark-theme');
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setBgCol((prevTheme) => (prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'));
    setIsLightTheme((prevTheme) => !prevTheme);
  };


  useEffect(() => {
    setBgCol(JSON.parse(localStorage.getItem("bgCol")));
    setIsLightTheme(JSON.parse(localStorage.getItem("isLightTheme")));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("bgCol", JSON.stringify(bgCol));
      localStorage.setItem("isLightTheme", JSON.stringify(isLightTheme));
    }, 100);

  }, [bgCol, isLightTheme]);

  return (
    <div className={`app ${bgCol}`}>
      <Banner isLightTheme={isLightTheme} />
      <PlaneBg />
      <TodosBox isLightTheme={isLightTheme} toggleTheme={toggleTheme} />
    </div>
  )
}

export default App
