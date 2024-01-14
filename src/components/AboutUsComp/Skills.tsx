import { useFetchSkillsQuery } from "../../Slices/AboutApiSlice";

const Skills = () => {
  const { data = [], isSuccess } = useFetchSkillsQuery(null);
  return (
    <div className="panel col-span-full">
      <div className="w-full font-semibold text-xl p-3 bg-slate-200">
        Skills
      </div>
      {isSuccess && (
        <div className="p-3 text-justify">
          {data.categories.map((category: any) => (
            <div key={category.id}>
              <p className="text-base font-medium leading-4 py-2">
                {category.label}
              </p>
              <div className="flex justify-normal">
                {category.skills.map((skill: any) => (
                  <span key={skill.skillId} className="skill-badge">
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
