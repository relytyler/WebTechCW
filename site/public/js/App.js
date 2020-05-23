'use strict';

import Title from './Title.js';
import LikeButton from './like_button.js';

function App() {
    return React.createElement(
        'div',
        { className: 'App' },
        React.createElement(Title, null)
    );
}

export default App;