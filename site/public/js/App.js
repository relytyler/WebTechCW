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

var likeButtons = document.querySelectorAll('.like_button_container');

likeButtons.forEach(function (domContainer) {
    // Read the comment ID from a data-* attribute.
    var commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(React.createElement(LikeButton, {
        commentID: commentID
    }), domContainer);
});

export default App;