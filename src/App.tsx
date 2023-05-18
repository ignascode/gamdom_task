import Home from 'views/pages/Home/Home';
import MainLayout from 'views/commonComp/Layouts/MainLayout/MainLayout';

const App: React.FC<{}> = () => {
	return (
		<MainLayout>
			<Home />
		</MainLayout>
	);
};

export default App;
