import React from "react";
import classNames from "classnames";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: 100,
      dislikes: 25
    };
  }

  updateLikes = num => {
    this.setState({
      liked: !this.state.liked,
      likes: this.state.likes + num
    });
  };

  updateDislikes = num => {
    this.setState({
      disliked: !this.state.disliked,
      dislikes: this.state.dislikes + num
    });
  };

  onClickLike = () => {
    const { liked, disliked } = this.state;

    if (disliked) {
      this.updateDislikes(-1);
    }

    this.updateLikes(liked ? -1 : +1);
  };

  onClickDislike = () => {
    const { liked, disliked } = this.state;

    if (liked) {
      this.updateLikes(-1);
    }

    this.updateDislikes(disliked ? -1 : +1);
  };

  render() {
    const { likes, dislikes, liked, disliked } = this.state;
    const likeClasses = classNames({
      btn: true,
      "btn-success": liked
    });
    const dislikeClasses = classNames({
      btn: true,
      "btn-danger": disliked
    });

    return (
      <div>
        <button class={likeClasses} onClick={this.onClickLike}>
          Likes | <span>{likes}</span>
        </button>
        <button class={dislikeClasses} onClick={this.onClickDislike}>
          Dislike | <span>{dislikes}</span>
        </button>
      </div>
    );
  }
}

