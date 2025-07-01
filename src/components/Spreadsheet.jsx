import React from "react";
import { mockData } from "../data/data";
const Spreadsheet = () => {
  return (
    <div className="p-6 overflow-x-auto">
      <table className="w-full table-auto border-collapse text-sm">
        <thead className="bg-gray-100 text-left text-gray-600">
          <tr>
            <th className="border px-4 py-2 h-[32]">#</th>
            <th className="border px-4 py-2 w-[256px] h-[32]">Job Request</th>
            <th className="border px-4 py- h-[32]">Submitted</th>
            <th className="border px-4 py- h-[32]">Status</th>
            <th className="border px-4 py- h-[32]">Submitter</th>
            <th className="border px-4 py- h-[32]">URL</th>
            <th className="border px-4 py- h-[32]">Assigned</th>
            <th className="border px-4 py- h-[32]">Priority</th>
            <th className="border px-4 py- h-[32]">Due Date</th>
            <th className="border px-4 py- h-[32]">Est. Value</th>
          </tr>
        </thead>
        <tbody>
            {mockData.map((item,index)=>(
           <tr key={index} className="hover:bg-gray-50">
            <td className="border px-4 py-2 h-[32]">{index+1}</td>
            <td className="border px-4 py-2  w-[256px] h-[32]">{item.job}</td>
            <td className="border px-4 py- h-[32]">{item.submitted}</td>

            <td className="border px-4 py- h-[32]">
              <span className ={`px-2 py-1 rounded text-xs ${item.status==="In-process" ? "bg-yellow-100 text-yellow-800" : item.status === "Complete" ?  "bg-green-100 text-green-800" : item.status === "Blocked" ?  "bg-red-100 text-red-800" : "bg-gray-200 text-gray-700" }`}>
                {item.status}
              </span>
            </td>

            <td className="border px-4 py-2 h-[32]">{item.submitter}</td>
            <td className="border px-4 py-2 text-blue-600 underline cursor-pointer h-[32]">
              {item.url}
            </td>
            <td className="border px-4 py-2 h-[32]">{item.assigned}</td>

            <td className="border px-4 py-2 font-medium h-[32]"><span className={`px-2 py-1 rounded text-xs font-semibold
                  ${
                    item.status === "In-process"
                      ? "bg-yellow-100 text-yellow-800"
                      : item.status === "Complete"
                      ? "bg-green-100 text-green-800"
                      : item.status === "Blocked"
                      ? "bg-red-100 text-red-800"
                      : "bg-gray-200 text-gray-700"
                  }`}>{item.priority}</span></td>

            <td className="border px-4 py-2 h-[32]">{item.dueDate}</td>
            <td className="border px-4 py-2 h-[32]">{item.estValue}</td>
          </tr>
            ))}
         
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
