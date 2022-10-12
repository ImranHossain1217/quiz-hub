import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="m-5 text-5xl">My Blog</h1>
      <div className="md:w-1/2 mx-auto m-5">
        <div className="bg-blue-200 p-5 text-start m-5 rounded-md">
          <h1 className="md:text-2xl text-xl mb-3">
            Question 1: What is the purpose of React Router?
          </h1>
          <p>
            Answer: ReactJS Router is mainly used for developing Single Page Web
            Applications. React Router is used to define multiple routes in the
            application
          </p>
        </div>
        <div className="bg-blue-200 p-5 text-start m-5 rounded-md">
          <h1 className="md:text-2xl text-xl mb-3">
            Question 2: How does context API Works ?
          </h1>
          <p>
            Answer: The React Context API is a way for a React app to
            effectively produce global variables that can be passed around
          </p>
        </div>
        <div className="bg-blue-200 p-5 text-start m-5 rounded-md">
          <h1 className="md:text-2xl text-xl mb-3">
            Question 3: What is useRef Hooks in React ?
          </h1>
          <p>
            Answer: The useRef Hook allows you to persist values between
            renders. It can be used to store a mutable value that does not cause
            a re-render when updated. It can be used to access a DOM element
            directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
