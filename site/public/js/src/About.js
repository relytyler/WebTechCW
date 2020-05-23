'use strict';
import Title from './Title.js'


class About extends React.Component {
    render() {
        return (
            <div>
                <h1>NothingBut.Net created by Roberto Lau-Soto and Tyler Ward</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <About />,
    document.getElementById('about-container')
  );