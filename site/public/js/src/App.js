'use strict';

import Title from './Title.js';
import LikeButton from './like_button.js';

function App() {
    return (
        <div className="App">
            <Title />
        </div> 
    );    
}

const likeButtons = document.querySelectorAll('.like_button_container');

likeButtons.forEach(domContainer => {
// Read the comment ID from a data-* attribute.
const commentID = parseInt(domContainer.dataset.commentid, 10);
ReactDOM.render(
        <LikeButton
            commentID = {commentID}
        />, domContainer);
})

export default App;