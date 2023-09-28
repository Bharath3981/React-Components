const Education = () => {
  return (
    <div className="panel col-span-full">
      <div className="w-full font-semibold text-xl p-3 bg-slate-100">
        Education
      </div>
      <div className="p-3 text-justify">
        <div className="flex">
          <a href="#!">
            <img
              src="AndhraUniversity.jpg"
              alt="company logo"
              width="56"
              className="max-w-full h-auto"
            />
          </a>
          <div className="pl-4 relative flex-1">
            <div className="text-blue-800 hover:underline text-base font-medium leading-4">
              <a href="https://www.andhrauniversity.edu.in/">
                Andhra University
              </a>
            </div>
            <p className="text-sm text-gray-500">Computers Science</p>
            <p className="text-sm">May 2009 - May 2012 • 3 yrs 0 mos</p>
            <p className="text-sm">Anakapalli, Visakhapatnam, INDIA</p>
            <hr className="my-3" />
          </div>
        </div>
        <div className="flex">
          <a href="#!">
            <img
              src="Intermediate.png"
              alt="Board of secondary education"
              width="56"
              className="max-w-full h-auto"
            />
          </a>
          <div className="pl-4 relative flex-1">
            <div className="text-blue-800 hover:underline text-base font-medium leading-4">
              <a href="https://bieap-gov.org/index.html">
                Board of Intermediate education
              </a>
            </div>
            <p className="text-sm text-gray-500">Maths Physics Chemistry</p>
            <p className="text-sm">May 2007 - May 2009 • 2 yrs 0 mos</p>
            <p className="text-sm">Anakapalli, Visakhapatnam, INDIA</p>
            <hr className="my-3" />
          </div>
        </div>
        <div className="flex">
          <a href="#!">
            <img
              src="ssc.jpg"
              alt="Board of secondary education"
              width="56"
              className="max-w-full h-auto"
            />
          </a>
          <div className="pl-4 relative flex-1">
            <div className="text-blue-800 hover:underline text-base font-medium leading-4">
              <a href="http://bseaps.in/">Board of Secondary education</a>
            </div>
            <p className="text-sm text-gray-500">SSC</p>
            <p className="text-sm">May 2006 - May 2007 • 1 yrs 0 mos</p>
            <p className="text-sm">Thummapala, Visakhapatnam, INDIA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
