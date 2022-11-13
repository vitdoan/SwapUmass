import React from "react";
import "./RenderPost.css";

export default function RenderPost({ post, user }) {
  return (
    <div className="row">
      <div className="col-2 card cardPost">
        <div className="card-body cardPostDetail p-3">
          <h5> <span><img className="roboImg" src={`https://robohash.org/${post.username}?set=set4`} alt="robot"></img></span> {post.username}</h5>
          <h6 className="card-title">Area: {post.area}</h6>
          <hr></hr>
          <p className="card-text">Gender: {post.gender}</p>
          <p className="card-text">Hobby: {post.hobby}</p>
          <p className="card-text">Extra Note: {post.extra_note}</p>
          <p className="card-text">Contact: {post.contact}</p>
          {/* <button type="button" className="btn btn-danger likeButton">
            Like
          </button> */}
        </div>
        <div className="cardFooter">
          </div>
      </div>
    </div>
  );
}
