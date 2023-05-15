import Home from './views/Home/Home';
import MainLayout from 'components/Layouts/MainLayout/MainLayout';

const App: React.FC<{}> = () => {
	return (
		<MainLayout>
			<Home />
		</MainLayout>
	);
};

export default App;
