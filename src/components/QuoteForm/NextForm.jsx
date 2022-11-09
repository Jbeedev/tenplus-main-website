import React, { useRef } from "react";

const NextForm = () => {
  const fileRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleChange = (e) => {
    console.log('called...')
   const files = e.target.files
   console.log(e)
  }

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = [...e.dataTransfer?.files];
   //Do whatever with your files
   console.log(files)
  };

  return (

    <div>
      <div className=" mx-[78px] mb-5 md:mx-[25px] mt-10 flex flex-wrap gap-[30px] justify-between">
        <div className="w-[45%] grow flex flex-col ">
          <label className="mb-[10px] text-base " htmlFor="">
            About Your Business
          </label>
          <textarea className="border rounded" rows="5" type="text" />
        </div>
        <div className="w-[45%] grow flex flex-col ">
          <label className="mb-[10px] text-base" htmlFor="">
            Competitors
          </label>
          <textarea className="border rounded" rows="5" type="text" />
        </div>
        <div className="w-full grow flex flex-col ">
          <label className="mb-[10px] text-base" htmlFor="">
            Product/Services
          </label>
          <select
            className="  w-[100%] md:w-[100%] bg-white h-[50px] rounded-[5px] pl-7"
            style={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}
            name="service"
            id="select-service"
          >
            <option className="bg-[#01303F] text-white" value="">
              Select Services
            </option>
            <option className="bg-[#01303F] text-white" value="web">
              Web Development
            </option>
            <option className="bg-[#01303F] text-white" value="mobileApp">
              Mobile App Development
            </option>
            <option className="bg-[#01303F] text-white" value="graphics">
              Graphics Design
            </option>
            <option className="bg-[#01303F] text-white" value="ai">
              Artificial Intelligence
            </option>
            <option className="bg-[#01303F] text-white" value="digMkt">
              Digital Marketing{" "}
            </option>
            <option className="bg-[#01303F] text-white" value="projjectMgt">
              Project Management
            </option>
            <option className="bg-[#01303F] text-white" value="printingService">
              Printing Services
            </option>
            <option className="bg-[#01303F] text-white" value="videoEditing">
              Video Editing
            </option>
            <option className="bg-[#01303F] text-white" value="cuberSecurity">
              {" "}
              Cybersecurity
            </option>
            <option className="bg-[#01303F] text-white" value="blockChain">
              Blockchain
            </option>
            <option
              className="bg-[#01303F] text-white"
              value="computerAcessories"
            >
              Computers and Accessories
            </option>
            <option className="bg-[#01303F] text-white" value="itTraining">
              IT Training
            </option>
          </select>
        </div>
        <div className="w-[45%] grow flex flex-col ">
          <label className="mb-[10px] text-base" htmlFor="">
            Scope of work
          </label>
          <textarea className="border rounded" rows="5" type="text" />
        </div>
        <div className="w-[45%] grow flex flex-col ">
          <label className="mb-[10px] text-base" htmlFor="">
            Additional details
          </label>
          <textarea className="border rounded" rows="5" type="text" />
        </div>
        <div className="w-[45%] grow flex flex-col ">
          <label className="mb-[10px] text-base" htmlFor="">
            Target Audience
          </label>
          <input
            className="border rounded h-[50px] pl-4"
            placeholder="eg. Businesss, students, age categories, etc"
            type="text"
          />
        </div>
        <div className="w-[45%] flex flex-col ">
          <label className="mb-[10px] text-base" htmlFor="">
            Target audience size
          </label>
          <input
            className="border rounded h-[50px] pl-4"
            placeholder="eg. 50,000"
            type="text"
          />
        </div>
        <div className="w-[45%] grow flex flex-col ">
          <label className="mb-[10px] text-base" htmlFor="">
            Deadline
          </label>
          <input
            className="border rounded h-[50px] pl-4"
            placeholder="dd/mm/yyyy"
            type="date"
          />
        </div>
        <div className="w-[45%] grow flex flex-col ">
          <label className="mb-[10px] text-base" htmlFor="">
            Budget
          </label>
          <input
            className="border rounded h-[50px] pl-4"
            placeholder="100,000 - 200,000"
            type="text"
          />
        </div>
        <div className="w-[100%] grow flex flex-col ">
          <label className="mb-[10px] text-base" htmlFor="">
            Upload documents
          </label>
          <input
            type={"file"}
            onChange={handleChange}
            accept="image/*"
            className="hidden"
            ref={fileRef}
          />
          <div
            className="border-2 border-[#29ABE2] border-dashed  p-7 flex flex-col justify-center items-center "
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onClick={() => fileRef.current?.click()}
          >
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29 0C24.2159 0.0150021 19.5949 1.74049 15.9718 4.86475C13.195 7.25725 11.1831 10.3748 10.6648 13.5031C4.58925 14.8444 0 20.1369 0 26.5278C0 33.9517 6.1915 39.875 13.7061 39.875H27.1875V20.6879L19.4083 28.4708C19.0679 28.8111 18.6063 29.0023 18.125 29.0023C17.6437 29.0023 17.1821 28.8111 16.8417 28.4708C16.5014 28.1304 16.3102 27.6688 16.3102 27.1875C16.3102 26.7062 16.5014 26.2446 16.8417 25.9042L27.7167 15.0292C27.8851 14.8605 28.0851 14.7265 28.3053 14.6352C28.5255 14.5438 28.7616 14.4968 29 14.4968C29.2384 14.4968 29.4745 14.5438 29.6947 14.6352C29.9149 14.7265 30.1149 14.8605 30.2833 15.0292L41.1582 25.9042C41.4986 26.2446 41.6898 26.7062 41.6898 27.1875C41.6898 27.6688 41.4986 28.1304 41.1582 28.4708C40.8179 28.8111 40.3563 29.0023 39.875 29.0023C39.3937 29.0023 38.9321 28.8111 38.5918 28.4708L30.8125 20.6879V39.875H45.994C52.5697 39.875 58 34.6912 58 28.1771C58 22.2466 53.4978 17.4145 47.7268 16.5989C46.8459 7.24638 38.7513 0 29 0ZM27.1875 52.5625V39.875H30.8125V52.5625C30.8125 53.0432 30.6215 53.5042 30.2816 53.8441C29.9417 54.184 29.4807 54.375 29 54.375C28.5193 54.375 28.0583 54.184 27.7184 53.8441C27.3785 53.5042 27.1875 53.0432 27.1875 52.5625Z"
                fill="#666666"
              />
            </svg>
            <p className="text-sm text-gray-400">
              Drag file here or browse for file upload
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextForm;
