import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4   "
    >
      <form method="POST" action="https://getform.io/f/f254d17c-138c-4fae-86bb-839f1fff589c" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 bg-pink-600 text-gray-300">
            تماس
          </p>
          <p className="text-gray-300 py-4">
            //فرم اینجا رو پر کنید یا برای من ایمیل بفرستید
          </p>
        </div>
        <input
          className=" bg-[#ccd6f6] p-2 "
          type="text"
          placeholder="نام"
          name="name"
        />
        <input
          className=" bg-[#ccd6f6] my-4 p-2 "
          type="text"
          placeholder="نام خانوادگی "
          name="lastname"
        />
        <input
          className=" p-2 bg-[#ccd6f6] "
          type="email"
          placeholder="ایمیل"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] my-4 p-2"
          name="message"
          rows="10"
          placeholder="پیام"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">اغاز همکاری</button>
      </form>
    </div>
  );
};

export default Contact;
