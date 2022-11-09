import React from "react";

const CurrentForm = () => {

  return (
    <div>
      <div className=" mx-[78px] md:mx-[25px] mt-10 flex flex-wrap gap-[50px] justify-between">
        <div className="w-[45%] grow flex flex-col mb-5">
          <label className="mb-[17px] text-base " htmlFor="">
            First Name
          </label>
          <input className="border rounded" type="text" />
        </div>
        <div className="w-[45%] grow flex flex-col mb-5">
          <label className="mb-[17px] text-base" htmlFor="">
            Last Name
          </label>
          <input className="border rounded" type="text" />
        </div>
        <div className="w-[45%] grow flex flex-col mb-5">
          <label className="mb-[17px] text-base" htmlFor="">
            First Name
          </label>
          <input className="border rounded" type="text" />
        </div>
        <div className="w-[45%] grow flex flex-col mb-5">
          <label className="mb-[17px] text-base" htmlFor="">
            Last Name
          </label>
          <input className="border rounded" type="text" />
        </div>
        <div className="w-[45%] grow flex flex-col mb-5">
          <label className="mb-[17px] text-base" htmlFor="">
            First Name
          </label>
          <input className="border rounded" type="text" />
        </div>
        <div className="w-[45%] grow flex flex-col mb-5">
          <label className="mb-[17px] text-base" htmlFor="">
            Last Name
          </label>
          <input className="border rounded" type="text" />
        </div>
        <div className="w-[100%] flex flex-col mb-5">
          <label className="mb-[17px] text-base" htmlFor="">
            Address
          </label>
          <input className="border rounded" type="text" />
        </div>
        <div className="w-[45%] grow flex flex-col mb-5">
          <label className="mb-[17px] text-base" htmlFor="">
            Country
          </label>
          <input className="border rounded" type="text" />
        </div>
        <div className="w-[45%] grow flex flex-col mb-5">
          <label className="mb-[17px] text-base" htmlFor="">
            State
          </label>
          <input className="border rounded" type="text" />
        </div>
      </div>
    </div>
  );
};

export default CurrentForm;
