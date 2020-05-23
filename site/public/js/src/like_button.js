'use strict';
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked comment number ' + this.props.commentID;
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like
      </button>
    );
  }  
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

export default LikeButton;