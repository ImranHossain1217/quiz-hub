import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeIcon } from "@heroicons/react/24/solid";

const Qustion = () => {
  const qustions = useLoaderData();
  const quizQustions = qustions.data.questions;
  const handleQuizAnswer = (question, option) => {
    if (question.correctAnswer === option) {
      toast.success("Your Answer is Correct!!", {
        position: "top-center",
        theme: "colored",
      });
    } else {
      toast.error("Your Answer is Wrong!!", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  const handleAnswer = (answer) => {
    toast.success(answer.correctAnswer, {
      position: "top-center",
      theme: "colored",
    });
  };

  return (
    <div>
      <h1 className="mt-5 text-3xl">Start Your Quiz</h1>
      <div className="">
        {quizQustions.map((qustion) => {
          return (
            <div
              key={qustion.id}
              className="border w-8/12 m-5 p-3 mx-auto bg-blue-200 rounded"
            >
              <h3 className="md:text-xl mb-2">Qustion: {qustion.question}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-2/3 mx-auto">
                {qustion.options.map((option) => (
                  <p
                    onClick={() => handleQuizAnswer(qustion, option)}
                    className="border p-2 m-2 bg-blue-900 text-white rounded-md cursor-pointer"
                  >
                    {option}
                  </p>
                ))}
                <ToastContainer></ToastContainer>
              </div>
              <EyeIcon
                onClick={() => handleAnswer(qustion)}
                className="h-6 w-6 text-blue-900"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Qustion;
