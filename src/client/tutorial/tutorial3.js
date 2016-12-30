/**
 * Created by ngnono on 16-12-21.
 */
// tutorial3.js

import React from "react";


var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});
