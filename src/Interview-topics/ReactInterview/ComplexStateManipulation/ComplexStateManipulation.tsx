import User from "./User/User";

const ComplexStateManipulation = () => {
  const url: string =
    "https://script.google.com/macros/s/AKfycbyIK3KXV43puN-vjl-a7Xcl01DoIgB7wWtds_PG45DxI-NK47hBuIy21NqrrNiWyu3F/exec";
  const postData = async () => {
    const postdata = {
      first_name: "Adithya",
      last_name: "Baisetty",
      gender: "male",
      married: false,
      mobile_no: "998902648",
      city: "Thummapala",
      pincode: 565654,
    };
    const req = await fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(postdata),
    });
    const response = await req.json();
    console.log(response);
  };
  return (
    <div>
      <div className="main-title">Complex state manipulation</div>
      <div className="pt-3">
        <button onClick={() => postData()}>Post data</button>
        <User />
        {/* <RcMultiSelectBox
          startingText={"No options selected"}
          list={list}
          setList={setList}
          doneClickEvent={doneClickEvent}
        /> */}
      </div>
    </div>
  );
};

export default ComplexStateManipulation;
