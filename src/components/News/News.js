import React, { Component } from 'react';
import NewSingle from './NewSingle';
import ErrorComponent from './ErrorComponent';

class News extends Component {
	state = {
		news: [],
		error: false
	}

	componentDidMount(){
		const { news } = this.props;
		const API_KEY = '615f550ef486490fa4205860183d3532';
		const URL = `https://newsapi.org/v2/${news.type}?q=${news.query}&apiKey=${API_KEY}`;
    fetch(URL).then(response => response.json())
    					.then(result => this.setState({ news: result.articles }))
    					.catch(e => this.setState({ error: true }));
  }

	render(){
		return (
			<div className="row">
				{ this.state.error && <ErrorComponent /> }
				{ this.state.news.map(item => <NewSingle key={ item.url } item={ item } />) }
			</div>
		)
	}
}

export default News;