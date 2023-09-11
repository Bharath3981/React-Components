import { useEffect, useState } from "react";
import { baseURL } from "../../Services/Services";

interface hilightObj {
  key: number;
  description: string;
}
interface IntroductionObj {
  inroduction: string;
  highlights: Array<hilightObj>;
}

const Introduction = () => {
  const [Introduction, setIntroduction] = useState<IntroductionObj>();
  console.log(baseURL);
  const fetchIntroduction = async () => {
    const req = await fetch(`${baseURL}Aboutus/Inroduction.json`);
    const res = await req.json();
    setIntroduction(res);
  };
  useEffect(() => {
    fetchIntroduction();
  }, []);
  return (
    <div className="panel col-span-full md:col-start-1 md:col-end-3">
      <div className="w-full font-semibold text-xl p-3 bg-slate-100">Intro</div>
      {Introduction && (
        <div className="p-3 text-justify">
          {Introduction.inroduction}
          <ul className="list-disc pl-4">
            {Introduction.highlights.map((point: any) => (
              <li key={point.key}>{point.descripton}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Introduction;
