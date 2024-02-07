import "./Home/Home.css";
import { useFetchInterviewQuestionsQuery } from "../Slices/TopicsApiSlice";

const InterviewTopics = () => {
  const { data = {}, isSuccess } = useFetchInterviewQuestionsQuery(null);
  console.log(data);
  return (
    <div className="h-[calc(100vh_-_108px)] md:h-[calc(100vh_-_96px)]">
      <div className="content-layout w-full h-full">
        <div className="h-full">
          <div className="m-5">
            {isSuccess &&
              data.category.map((topic: any) => {
                return (
                  <div key={topic.id}>
                    <div
                      className={`interview-questions-strip ${topic.stripColor}`}
                    >
                      {topic.title}
                    </div>
                    <div className="flex justify-normal gap-5 p-5 ">
                      <div className="h-36 w-32 cursor-pointer">
                        <div className="h-36 px-2 py-1 w-32 text-center border border-gray-300 rounded-md bg-white hover:shadow-lg">
                          <div className="font-bold text-left">
                            sum(a)(b)...(n)
                          </div>
                          <div className="font-light text-justify">
                            It should return the some of all parameters
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewTopics;
