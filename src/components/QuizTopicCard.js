import React from "react";
import { Link } from "react-router-dom";

const QuizTopicCard = ({ topic }) => {
  const { name, logo, total, id } = topic;
  return (
    <div className="bg-blue-200 w-80 mx-auto p-3 rounded-md">
      <img className=" object-contain" src={logo} alt="" />
      <h1 className="text-2xl m-3 text-blue-900 my-5">{name}</h1>
      <div className="flex justify-between">
        <p className="bg-white px-6 py-2 rounded">Total Quiz: {total}</p>
        <Link
          className="bg-blue-900 px-5 py-2 text-white rounded-md"
          to={`/quiz/${id}`}
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default QuizTopicCard;
