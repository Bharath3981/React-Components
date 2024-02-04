import React from "react";

const HOC = (WrappedComponent: any, entity: any) => {
  return class extends React.Component {
    state = {
      data: [],
      term: "",
    };
    componentDidMount(): void {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await res.json();
        this.setState({ ...this.state, data: json });
      };
      fetchData();
    }

    render() {
      const { term, data }: any = this.state;
      const filteredData = data.filter((d) => {
        if (entity === "users") {
          const { name } = d;
          return name.indexOf(term) >= 0;
        }
        if (entity === "todos") {
          const { title } = d;
          return title.indexOf(term) >= 0;
        }
      });
      return (
        <div>
          <div className="side-title">{entity}</div>
          <input
            type="text"
            onChange={(e) =>
              this.setState({ ...this.state, term: e.target.value })
            }
          />
          <WrappedComponent data={filteredData}></WrappedComponent>
        </div>
      );
    }
  };
};

export default HOC;
