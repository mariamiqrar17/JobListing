import { useState } from "react";
import Data from "./data";

const Header = () => {
  const [data, setData] = useState(Data);
  const [job, setJob] = useState([]);

  const ongetValue = (value) => {
    if (!job.includes(value)) {
      setJob((prevJob) => [...prevJob, value]);
    }
  };

  const selectedData = data.filter((item) =>
    job.every((lang) => item.languages.includes(lang))
  );

  const clearData = () => {
    setJob([]);
  };

  const removeData = (dataToRemove) => {
    const updatedJob = job.filter((value) => value !== dataToRemove);
    setJob(updatedJob);
  };

  return (
    <div>
      <div className="bg-[#5ba4a4]">
        <div className="backimage">
        <div className="lg:px-[6.5rem] md:px-[3rem] px-[0.5rem] pt-[7.8rem] mx-full">
            <div className="relative mb-[4rem]">
              <div className="flex flex-wrap gap-1 absolute inset-y-0 left-2 items-center lg:pl-[2rem] md:pl-[2rem] pl-[0.3rem]">
                {job.map((value, index) => (
                  <div key={index} className="flex items-center space-x-0 lg:pl-[2rem]">
                    <span className="bg-[#cde7e7] text-[#5ba4a4] px-2 py-1 text-md font-bold">{value}</span>
                    <button onClick={() => removeData(value)} className="ml-1">
                      <span className="bg-[#5ba4a4] text-white px-2 hover:bg-black">X</span>
                    </button>
                  </div>
                ))}
              </div>

              {job.length !== 0 ? (
                <input
                  type="text"
                  id="first_name"
                  className="pl-20 bg-gray-50 shadow-md h-[5rem] md:h-[3rem] lg:h-[3rem] text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  disabled
                />
              ) : (
                ""
              )}

              {job.length !== 0 ? (
                <span
                  onClick={clearData}
                  className="absolute inset-y-0 lg:pr-[4.5rem] hover:underline text-[#5ba4a4] right-0 flex items-center pr-3 font font-bold cursor-pointer"
                >
                  Clear
                </span>
              ) : (
                ""
              )}
            </div>
          </div>

        </div>
      </div>
      {selectedData?.map((value, index) => (
        <div key={index} className="lg:px-[9rem] md:px-[3rem] px-[0.5rem] pt-16 lg:pt-1  md:pt-18  container mx-auto pb-[1rem]">
          <a
            className={`block  max-w-full lg:mt-12 md:mt-18 border-1   ${
              value.featured ? 'border-l-4 border-[#5ba4a4]' : 'border border-blue-400'
            } lg:py-10 md:py-5 md:px-5  lg:px-16 px-3 py-3 mt-[2rem] md:mt-[0rem] bg-white rounded-lg shadow-md  dark:border-gray-700 `}
          >
            <div className="flex justify-between md:flex-col lg:flex-row flex-col">
              <div className="flex flex-col lg:flex-row md:flex-row">
                <div className="mt-[-50px] lg:pt-[50px] md:pt-[50px]">
                  <img src={value.logo} alt="" />
                </div>
                <div className="lg:pl-10 md:pl-10">
                  <div className="flex text-xl font-extrabold">
                    <p className="text-[#5ba4a4]">{value.company}</p>
                    {value.featured ? (
                      <>
                        <span className="bg-[#5ba4a4] text-white lg:ml-[0.7rem] md:ml-[0.7rem] text-sm font-medium ml-2 px-2.5 py-0.5 rounded-2xl pt-[0.2rem]">
                          New
                        </span>
                        <span className="bg-[#242e2e] text-white text-sm font-medium ml-2 px-2.5 py-0.5 rounded-2xl pt-[0.2rem]">
                          Featured
                        </span>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="font font-extrabold pt-[0.5rem]">{value?.position}</p>
                  <p className="text-[#7b8e8e] text-[0.875rem] pt-[0.5rem]">
                    {value.postedAt} <b>.</b> {value.contract} <b>.</b> {value.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 lg:gap-0 md:pl-32 lg:pl-0 md:pt-2 pt-2 lg:pt-0">
                {value.languages.map((language, index) => (
                  <span
                    onClick={() => ongetValue(language)}
                    key={index}
                    className="bg-blue-200 pt-[0.3rem] lg:mt-[2rem] lg:ml-2 text-[#55a8a8] hover:cursor-pointer hover:bg-[#5ba4a4] hover:text-white text-xs font-lg ml-2 h-6 w-18 px-2.5 py-0.5 rounded "
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Header;
