import React from 'react'
var theme = '';
export default class Gallery extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      theme: 'site'
    };
  }
  handleClick(str) {
    if (str === 'flex') {
      this.setState({theme: 'site fel'});
    }
    if (str === 'row') {
      this.setState({theme: 'site'});
    }
  }
  render() {
    theme = this.state.theme;
    var imageNodes = this.props.data.map((picture)=> {
      return(
        <Picture src={picture.src} key = {picture.id}/>
        );
    });
    return (
      <div id="gallery">
        <img className='topbar' onClick={this.handleClick.bind(this,'row')} src="images/1.jpg" />
        <img className='topbar' onClick={this.handleClick.bind(this,'flex')} src="images/2.jpg" />
        <ul id="pictureList">
          {imageNodes}
        </ul>
      </div>          
    );
  }
}

class Picture extends React.Component{
  render() {
    return (
      <li className={theme}>
        <a className="example-image-link" href={this.props.src} data-lightbox="example-1">
          <img className="thumb" ref="id" data-src = {this.props.src}  alt = {this.props.title} src="images/pre.gif"/>                      
        </a>
      </li>
      );
  }
}