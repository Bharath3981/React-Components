import { useEffect, useState } from "react";

const HOC = (WrappedComponent: any, entity: any) => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const filteredData = data.filter((d: any) => {
    if (entity === "users") {
      const { name } = d;
      return name.indexOf(term) >= 0;
    }
    if (entity === "todos") {
      const { title } = d;
      return title.indexOf(term) >= 0;
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      let json;
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        json = await res.json();
      } catch (e) {
        alert("Some error occured");
      }

      setData(json);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="side-title">{entity}</div>
      <input type="text" onChange={(e) => setTerm(e.target.value)} />
      <WrappedComponent data={filteredData}></WrappedComponent>
    </div>
  );
};

export default HOC;
