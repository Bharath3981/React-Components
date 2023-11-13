import { useState } from "react";
import { InitialTravelPlan } from "./InitialTravelPlan.js";

function PlaceTree({ id, placesById }: any) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <>
      <li className="ml-4">
        {place.title}
        {childIds.length > 0 && (
          <ol className="ml-4">
            {childIds.map((childId: any) => (
              <PlaceTree key={childId} id={childId} placesById={placesById} />
            ))}
          </ol>
        )}
      </li>
    </>
  );
}

const DeeplyNestedState = () => {
  const [plan, setPlan] = useState(InitialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <div className="pb-5">
      <h2 className="font-bold">Places to visit</h2>
      <ol className="ml-2">
        {planetIds.map((id: number) => (
          <PlaceTree key={id} id={id} placesById={plan} />
        ))}
      </ol>
    </div>
  );
};

export default DeeplyNestedState;
