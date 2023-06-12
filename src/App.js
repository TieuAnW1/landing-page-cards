import NavBar from './components/navBar/navBar';
import Slogan from './components/slogan/slogan';

function App() {
	return (
		<div className="font-sora overflow-y-auto overflow-x-hidden text-white h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-500">
			<NavBar />
			<Slogan />
		</div>
	);
}

export default App;
