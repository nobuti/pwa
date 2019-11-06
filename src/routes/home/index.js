import { h, Component } from 'preact';
import Anime from 'react-anime';

import style from './style.scss'

class Motion extends Component {
  state = { isVisible: true };

  componentDidMount() {
  	setInterval(() => {
  		this.setState({ isVisible: !this.state.isVisible });
  	}, 1000);
  }

  render() {
  	const { isVisible } = this.state;
  	return (<Anime opacity={isVisible ? [1, 0] : [0, 1]}>
  		<div class={style.container} />;
  	</Anime>);
  }
}

export default Motion;