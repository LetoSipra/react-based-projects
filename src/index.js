import XX from './components/TicTacToe';
//import XX from './newApp'
import "./index.css"
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<XX />);