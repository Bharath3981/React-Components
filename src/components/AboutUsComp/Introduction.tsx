import { useFetchIntroductionQuery } from "../../Slices/AboutApiSlice";

const Introduction = () => {
  const { data = [], isSuccess } = useFetchIntroductionQuery(null);
  return (
    <div className="panel col-span-full md:col-start-1 md:col-end-3">
      <div className="w-full font-semibold text-xl p-3 bg-slate-200">Intro</div>
      {isSuccess && (
        <div className="p-3 text-justify">
          {data.inroduction}
          <ul className="list-disc pl-4">
            {data.highlights.map((point: any) => (
              <li key={point.key}>{point.descripton}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Introduction;
