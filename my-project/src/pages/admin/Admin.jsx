import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Table from "../../components/Table";
import { FaSearch } from "react-icons/fa";
const data3 = [
  {
    id: 1,
    name: "Adamu Adama",
    class: "Pri 3",
    sex: "Female",
    classteacher: "Mrs Jane Smith",
    subjects: ["Math", "English", "inter-science"],
    //  duedate:"12-12-12"
  },
  // Add more data items for section 2
];

const headers3 = [
  {
    id: 1,
    sn: "S/N",
  },
  {
    id: 2,
    name: "Name",
  },
  {
    id: 3,
    class: "Class",
  },
  ,
  {
    id: 4,
    sex: "Gender",
  },
  ,
  {
    id: 5,
    classteacher: "CLASS TEACHER",
  },
  ,
  {
    id: 6,
    subjects: "SUBJECTS",
  },
  {
    id: 7,
    duedate: "",
  },
]; // Table headers for section 2
function Admin() {
  const [active, setActive] = useState("dashboard");

  const handleActive = (item) => {
    setActive(item);
  };
  return (
    <>
      <Header />
      <div className="flex bg-gray-100">
        <Navigation handleActive={handleActive} active={active} />
        {active === "dashboard" && (
          <section className="w-full h-screen p-4">
            <h2 className="py-4 text-xl font-semibold">Admin </h2>
            <div className="w-full flex items-center space-x-3">
              <div className="w-full h-[100px] flex flex-col bg-orange-100 items-center justify-center rounded-lg">
                <h2>1000</h2>
                <span>Total students</span>
              </div>
              <div className="w-full h-[100px] flex flex-col bg-blue-100 items-center justify-center rounded-lg">
                <h2>100</h2>
                <span>Total Teachers</span>
              </div>
              <div className="w-full h-[100px] flex flex-col bg-green-100 items-center justify-center rounded-lg">
                <h2>10</h2>
                <span>No of Classes</span>
              </div>
              {/* cards */}
            </div>
          </section>
        )}
        {active === "student" && (
          <section className="w-full h-screen">
            <div className="w-full p-4">
              <h2 className="my-4">Students</h2>

              <div className="w-full flex items-center space-x-3">
                <div className="w-full h-[100px] flex flex-col bg-orange-100 items-center justify-center rounded-lg">
                  <h2>1000</h2>
                  <span>Total students</span>
                </div>
                <div className="w-full h-[100px] flex flex-col bg-blue-100 items-center justify-center rounded-lg">
                  <h2>100</h2>
                  <span>Total Teachers</span>
                </div>
                <div className="w-full h-[100px] flex flex-col bg-green-100 items-center justify-center rounded-lg">
                  <h2>10</h2>
                  <span>No of Classes</span>
                </div>
                {/* cards */}
              </div>
              <div className="w-full mt-10">
                <div className="w-full mb-5 flex items-center justify-between">
                  <div className=" w-2/4 flex items-center space-x-3">
                    {/* search */}
                    <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                      <FaSearch size={20} color="gray" />
                      <input placeholder="search students" className="w-full" />
                    </div>
                    <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                      <select className="w-full outline-none">
                        <option>Class</option>
                        <option>Subject</option>
                      </select>
                    </div>
                    {/* Filter */}
                  </div>
                  <button className="px-2 py-2 bg-blue-300 rounded-2xl text-xs text-white font-semibold">
                    Add Student
                  </button>
                </div>
                <div className="bg-white">
                  <Table data={data3} headers={headers3} nocheckbox />
                </div>
              </div>
            </div>
          </section>
        )}
        {active === "teacher" && (
          <section className="w-full h-screen">
            <div className="w-full p-4">
              <h2 className="my-4">Teachers</h2>

              <div className="w-full flex items-center space-x-3">
                <div className="w-full h-[100px] flex flex-col bg-orange-100 items-center justify-center rounded-lg">
                  <h2>1000</h2>
                  <span>Total teachers</span>
                </div>
                <div className="w-full h-[100px] flex flex-col bg-blue-100 items-center justify-center rounded-lg">
                  <h2>100</h2>
                  <span>Total Teachers</span>
                </div>
                <div className="w-full h-[100px] flex flex-col bg-green-100 items-center justify-center rounded-lg">
                  <h2>10</h2>
                  <span>No of Classes</span>
                </div>
                {/* cards */}
              </div>
              <div className="w-full mt-10">
                <div className="w-full mb-5 flex items-center justify-between">
                  <div className=" w-2/4 flex items-center space-x-3">
                    {/* search */}
                    <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                      <FaSearch size={20} color="gray" />
                      <input placeholder="search students" className="w-full" />
                    </div>
                    <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                      <select className="w-full outline-none">
                        <option>Class</option>
                        <option>Subject</option>
                      </select>
                    </div>
                    {/* Filter */}
                  </div>
                  <button className="px-2 py-2 bg-blue-300 rounded-2xl text-xs text-white font-semibold">
                    Add Student
                  </button>
                </div>
                <div className="bg-white">
                  <Table data={data3} headers={headers3} nocheckbox />
                </div>
              </div>
            </div>
          </section>
        )}
        {active === "class" && (
          <section className="w-full h-screen">
            <div className="w-full p-4">
              <h2 className="my-4">Classes</h2>

              <div className="w-full flex items-center space-x-3">
                <div className="w-full h-[100px] flex flex-col bg-orange-100 items-center justify-center rounded-lg">
                  <h2>10</h2>
                  <span>Classes</span>
                </div>
                <div className="w-full h-[100px] flex flex-col bg-blue-100 items-center justify-center rounded-lg">
                  <h2>17</h2>
                  <span>Total Teachers</span>
                </div>
                <div className="w-full h-[100px] flex flex-col bg-green-100 items-center justify-center rounded-lg">
                  <h2>10</h2>
                  <span>No of Classes</span>
                </div>
                {/* cards */}
              </div>
              <div className="w-full mt-10">
                <div className="w-full mb-5 flex items-center justify-between">
                  <div className=" w-2/4 flex items-center space-x-3">
                    {/* search */}
                    <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                      <FaSearch size={20} color="gray" />
                      <input placeholder="search students" className="w-full" />
                    </div>
                    <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                      <select className="w-full outline-none">
                        <option>Class</option>
                        <option>Subject</option>
                      </select>
                    </div>
                    {/* Filter */}
                  </div>
                  <button className="px-2 py-2 bg-blue-300 rounded-2xl text-xs text-white font-semibold">
                    Add Class
                  </button>
                </div>
                <div className="bg-white">
                  <Table data={data3} headers={headers3} nocheckbox />
                </div>
              </div>
            </div>
          </section>
        )}
        {active === "subject" && (
          <section className="w-full h-screen">
            <div className="w-full p-4">
              <h2 className="my-4">Subjects</h2>

              <div className="w-full flex items-center space-x-3">
                <div className="w-full h-[100px] flex flex-col bg-orange-100 items-center justify-center rounded-lg">
                  <h2>1000</h2>
                  <span>Total students</span>
                </div>
                <div className="w-full h-[100px] flex flex-col bg-blue-100 items-center justify-center rounded-lg">
                  <h2>100</h2>
                  <span>Total Teachers</span>
                </div>
                <div className="w-full h-[100px] flex flex-col bg-green-100 items-center justify-center rounded-lg">
                  <h2>10</h2>
                  <span>No of Classes</span>
                </div>
                {/* cards */}
              </div>
              <div className="w-full mt-10">
                <div className="w-full mb-5 flex items-center justify-between">
                  <div className=" w-2/4 flex items-center space-x-3">
                    {/* search */}
                    <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                      <FaSearch size={20} color="gray" />
                      <input placeholder="search students" className="w-full" />
                    </div>
                    <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                      <select className="w-full outline-none">
                        <option>Class</option>
                        <option>Subject</option>
                      </select>
                    </div>
                    {/* Filter */}
                  </div>
                  <button className="px-2 py-2 bg-blue-300 rounded-2xl text-xs text-white font-semibold">
                    Add subjects
                  </button>
                </div>
                <div className="bg-white">
                  <Table data={data3} headers={headers3} nocheckbox />
                </div>
              </div>
            </div>
          </section>
        )}
        {active === "result" && <section>Result</section>}
        {active === "fee" && <section>Fees</section>}
      </div>

      <Footer />
    </>
  );
}

export default Admin;
