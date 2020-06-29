import React, { Component } from 'react';
import News from './News/News';
import SideNews from './News/SideNews';
import './App.css';

class App extends Component {
  state = {
    news: {
      type: 'everything',
      query: 'ukraine'
    },
    news2: {
      type: 'everything',
      query: 'movie'
    }
  }
  render(){
    return (
       <div className="container-fluid">
         <div className="navbar-fixed">
           <nav>
             <div className="nav-wrapper indigo lighten-4">
               <a href="/" className="brans-logo center">My feed</a>
             </div>
           </nav>
         </div>
         <div className="row">
           <div className="col s8">
             <News news={ this.state.news } />
           </div>
           <div className="col s4">
             <SideNews news={ this.state.news2 } />
           </div>
         </div>
       </div>
    );
  }
}

export default App;
