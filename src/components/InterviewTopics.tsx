import "./Home/Home.css";
import { useFetchInterviewQuestionsQuery } from "../Slices/TopicsApiSlice";
import { Link, Outlet } from "react-router-dom";
import { JSInterviewQuestions } from "../data/Routes";

export const InterviewTopics = () => {
  console.log(JSInterviewQuestions);
  return (
    <div className="h-[calc(100vh_-_108px)] md:h-[calc(100vh_-_96px)]">
      <div className="content-layout w-full h-full">
        <div className="h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export const InterviewTopicsChildren = () => {
  const { data = {}, isSuccess } = useFetchInterviewQuestionsQuery(null);
  console.log(data);
  const topic: any = [];
  return (
    <div className="m-2">
      <div>
        <div className={`interview-questions-strip bg-green-600`}>
          JavaScript interview questions
        </div>
        <div className="flex justify-normal gap-5 p-5 ">
          {JSInterviewQuestions.length &&
            JSInterviewQuestions.map((question: any) => {
              return (
                <Link key={question.id} to={question.path}>
                  <div className="h-36 w-32 cursor-pointer">
                    <div className="auto-hide-scrollbar h-36 px-2 py-1 w-32 text-center border border-gray-300 rounded-md bg-white hover:shadow-lg">
                      <div className="font-bold text-left">
                        {question.title}
                      </div>
                      <div className="font-light text-left ">
                        {question.description}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      <div>
        <div className={`interview-questions-strip bg-sky-600`}>
          ReactJS interview questions
        </div>
        <div className="flex justify-normal gap-5 p-5 ">
          {topic.length &&
            topic.interviewQuestions.map((question: any) => {
              return (
                <div key={question.id} className="h-36 w-32 cursor-pointer">
                  <div className="auto-hide-scrollbar h-36 px-2 py-1 w-32 text-center border border-gray-300 rounded-md bg-white hover:shadow-lg">
                    <div className="font-bold text-left">{question.title}</div>
                    <div className="font-light text-left ">
                      {question.description}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
