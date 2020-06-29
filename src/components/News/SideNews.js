import React, { Component } from 'react';
import SingleSide from './SingleSide';
import ErrorComponent from './ErrorComponent';
import axios from 'axios';

class SideNews extends Component {
	state = {
		sidenews: [],
		error: false
	}

	componentDidMount(){
		const { news } = this.props;
		const API_KEY = '615f550ef486490fa4205860183d3532';
		const URL = `https://newsapi.org/v2/${news.type}?q=${news.query}&apiKey=${API_KEY}`;
		axios.get(URL).then(response => this.setState({ sidenews: response.data.articles }))
									.catch(e => this.setState({ error: true }));
  }

	render(){
		return (
			<div className="row">
				{ this.state.error && <ErrorComponent /> }
				{ this.state.sidenews.map(item => <SingleSide key={ item.url } item={ item } />) }
			</div>
		)
	}
}

export default SideNews;