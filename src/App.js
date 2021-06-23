import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { Container } from '@material-ui/core';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import { Helmet } from 'react-helmet';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Helmet>
				<title>Lights Camera Action</title>
				<meta
					name="description"
					content="Get info for all your favorite movies and series"
				/>
				<meta
					name="keywords"
					content="Movies, TV Series, Search Movies, Trending, Lights Camera Action"
				/>
			</Helmet>
			<div className="app">
				<Container>
					<Switch>
						<Route exact path="/" component={Trending} />
						<Route path="/movies" component={Movies} />
						<Route path="/series" component={Series} />
						<Route path="/search" component={Search} />
						<Redirect to="/" />
					</Switch>
				</Container>
			</div>
			<SimpleBottomNavigation />
		</BrowserRouter>
	);
}

export default App;
