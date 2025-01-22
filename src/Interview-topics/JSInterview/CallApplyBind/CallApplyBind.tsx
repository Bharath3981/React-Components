import CodeSnippet from "../../../util/CodeSnippet";

const CallApplyBind = () => {
  //Write methods to understand call, apply and bind
  const name = {
    firstName: "Bharath",
    lastName: "Kumar",
  };
  interface Name {
    firstName: string;
    lastName: string;
  }

  interface PrintFullName {
    (this: Name, homeTown: string, state: string): void;
  }

  const printFullName: PrintFullName = function (
    this: Name,
    homeTown: string,
    state: string
  ) {
    console.log(
      this.firstName + " " + this.lastName + " " + homeTown + " " + state
    );
  };
  printFullName.call(name, "Hyderabad", "Telangana");

  const name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
  };

  //Function borrowing
  //In the below example, we are borrowing the printFullName method from name object and calling it on name2 object
  // First parmater is the object on which the method is to be called
  // Second parameter is the arguments that the method accepts
  printFullName.call(name2, "Visakhapatnam", "Andhra Pradesh");

  //Example for apply
  //The only difference between call and apply is the way we pass the arguments
  //In call, we pass the arguments as comma separated values
  //In apply, we pass the arguments as an array
  printFullName.apply(name2, ["Visakhapatnam", "Andhra Pradesh"]);

  //Example for bind
  //The bind method returns a new function
  //It does not call the function
  //It just returns a new function
  //The new function can be called later
  const printMyName = printFullName.bind(
    name2,
    "Visakhapatnam",
    "Andhra Pradesh"
  );
  console.log(printMyName);
  printMyName();

  return (
    <>
      <div className="main-title">Call Apply Bind exmple.</div>
      <div className="pt-2">
        <CodeSnippet>
          {`const name = {
    firstName: "Bharath",
    lastName: "Kumar",
  };
  const printFullName = function (homeTown, state) {
    console.log(
      this.firstName + " " + this.lastName + " " + homeTown + " " + state
    );
  };
  printFullName.call(name);

  const name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
  };

  //Function borrowing
  //In the below example, we are borrowing the printFullName method from name object and calling it on name2 object
  // First parmater is the object on which the method is to be called
  // Second parameter is the arguments that the method accepts
  printFullName.call(name2, "Visakhapatnam", "Andhra Pradesh");

  //Example for apply
  //The only difference between call and apply is the way we pass the arguments
  //In call, we pass the arguments as comma separated values
  //In apply, we pass the arguments as an array
  printFullName.apply(name2, ["Visakhapatnam", "Andhra Pradesh"]);

  //Example for bind
  //The bind method returns a new function
  //It does not call the function
  //It just returns a new function
  //The new function can be called later
  const printMyName = printFullName.bind(
    name2,
    "Visakhapatnam",
    "Andhra Pradesh"
  );
  console.log(printMyName);
  printMyName();`}
        </CodeSnippet>
      </div>
    </>
  );
};

export default CallApplyBind;
