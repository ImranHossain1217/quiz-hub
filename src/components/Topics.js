import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopicCard from "./QuizTopicCard";

const Topics = () => {
  const topics = useLoaderData();
  const quizTopics = topics.data;
  return (
    <div>
      <h1 className="text-blue-500 mt-10 text-3xl">Select Your Quiz Topic</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:w-10/12 mx-auto m-10">
        {quizTopics.map((topic) => (
          <QuizTopicCard key={topic.id} topic={topic}></QuizTopicCard>
        ))}
      </div>
    </div>
  );
};

export default Topics;
