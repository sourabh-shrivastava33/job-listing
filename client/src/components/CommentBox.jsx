import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import styled from "styled-components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
const Wrapper = styled.div`
  border-radius: var(--border-radius);

  &.comment {
    color: inherit;
    position: relative;
    height: 12rem;
    margin-top: -12rem;
    visibility: hidden;

    transition: all 0.3s ease-in-out;
    padding: 0.5rem 1rem;
    z-index: -100;
  }

  &.commenting {
    margin-top: 0rem;
    visibility: visible;
    z-index: 0;
  }
  .input-box {
    position: relative;
    display: flex;
    align-items: center;

    justify-content: center;
  }

  .input-comment {
    width: 100%;
    height: 30px;
    padding: 0 2rem;
    border-radius: 100px;
    border: 1px solid var(--grey-200);
    justify-self: center;
    color: var(--grey-300);
    font-size: 1.2rem;
    &:focus {
      outline: none;
    }
  }
  .comment-item {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: var(--grey-300);
    margin-bottom: 0.8rem;
    column-gap: 1rem;
  }
  .comment-item::before {
    content: "";
    display: inline-block;
    min-width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--grey-700);
  }
  .comment-arrow {
    position: absolute;
    cursor: pointer;
    top: 50%;
    right: 1%;
    transform: translateY(-50%);
  }
  .comments {
    margin-top: 1rem;
    height: 7.6rem;
    border-radius: var(--border-radius);
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 0.8rem 1.5rem;
    width: 100%;
    background-color: var(--white);
  }
  .comments::-webkit-scrollbar {
    width: 12px;
  }
  .comments::-webkit-scrollbar-thumb {
    width: 100%;
    border-radius: 100px;
    background-color: var(--primary-200);
  }
`;

const CommentBox = ({ commenting, jobId, comments: allComments }) => {
  const [comments, setComments] = useState(allComments || []);
  const [commentInput, setCommentInput] = useState("");

  const handleInputChange = (e) => {
    setCommentInput(e.target.value);
  };
  const handlePostComment = async () => {
    if (!commentInput) return;
    try {
      const { data } = await customFetch.patch(`/jobs/comments/${jobId}`, {
        text: commentInput,
      });
      setCommentInput("");
      const { comments: commentsArr } = data;
      setComments(commentsArr);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      console.log(error);
    }
  };
  return (
    <Wrapper className={`comment ${commenting ? "commenting" : ""}`}>
      <div className="input-box">
        <input
          type="text"
          className="input-comment"
          value={commentInput}
          onChange={handleInputChange}
        />
        <FaArrowRight className="comment-arrow" onClick={handlePostComment} />
      </div>
      <ul className="comments">
        {comments.map((item) => {
          return (
            <li key={item._id} className="comment-item">
              {item.text}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default CommentBox;
