const Experiance = () => {
  //Calculate the differenct between two dates
  const calcDate = (date1: Date, date2: Date) => {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${Math.floor(diffDays / 365)} yrs ${Math.floor(
      (diffDays % 365) / 30
    )} mos`;
  };

  return (
    <div className="panel col-span-full">
      <div className="w-full font-semibold text-xl p-3 bg-slate-200">
        Experience
      </div>
      <div className="p-3 text-justify">
        <div className="flex">
          <a href="#!">
            <img
              src="inviter.jpg"
              alt="company logo"
              width="56"
              className="max-w-full h-auto"
            />
          </a>
          <div className="pl-4 relative flex-1">
            <div className="text-base font-medium leading-4">UI Developer</div>
            <p className="text-blue-800 hover:underline font-light text-sm">
              <a href="https://inviter.com/">Inviter</a>
            </p>
            <p className="text-sm">May 2014 - May 2016 • 2 yrs 0 mos</p>
            <p className="text-sm">Hyderabad, INDIA</p>
            <hr className="my-3" />
          </div>
        </div>
        <div className="flex">
          <a href="https://www.oracle.com/">
            <img
              src="oracle.jpg"
              alt="company logo"
              width="56"
              className="max-w-full h-auto"
            />
          </a>
          <div className="pl-4 relative flex-1">
            <div className="text-base font-medium leading-4">
              Senior Application Developer
            </div>
            <p className="text-blue-800 hover:underline font-light text-sm">
              <a href="https://www.oracle.com/">Oracle</a>
            </p>
            <p className="text-sm">June 2016 - June 2023 • 7 yrs 1 mos</p>
            <p className="text-sm mb-2">Hyderabad, INDIA</p>
            <hr className="my-3" />
          </div>
        </div>
        <div className="flex">
          <a href="https://www.ibm.com/">
            <img
              src="ibm.jpg"
              alt="company logo"
              width="56"
              className="max-w-full h-auto"
            />
          </a>
          <div className="pl-4 relative flex-1">
            <div className="text-base font-medium leading-4">
              Senior Application Developer
            </div>
            <p className="text-blue-800 hover:underline font-light text-sm">
              <a href="https://www.ibm.com/">IBM</a>
            </p>
            <p className="text-sm">
              June 2023 - Present • {calcDate(new Date(), new Date(2023, 6))}
            </p>
            <p className="text-sm mb-2">Hyderabad, INDIA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
