import React from "react";
import { mockData } from "../data/data";

const Spreadsheet = () => {
  const totalRows = 24; 

  return (
    <div className="py-2 overflow-x-scroll h-110">
      <table className="w-full table-auto border-collapse text-sm">
        <thead className="text-left text-gray-600">
          <tr>
            <th className="border px-4 py-2 w-[30px] h-[32px]">#</th>
            <th className="border px-4 py-2 w-[256px] h-[32px]">Job Request</th>
            <th className="border px-4 py-2 w-[124px] h-[32px]">Submitted</th>
            <th className="border px-4 py-2 h-[32px]">Status</th>
            <th className="border px-4 py-2 h-[32px]">Submitter</th>
            <th className="border px-4 py-2 h-[32px]">URL</th>
            <th className="border bg-[#E3F3EC] px-4 py-2 h-[32px]">Assigned</th>
            <th className="border bg-[#F4F0FD] px-4 py-2 h-[32px]">Priority</th>
            <th className="border bg-[#EAE6F8] px-4 py-2 h-[32px]">Due Date</th>
            <th className="border bg-[#FFE9E0] px-4 py-2 h-[32px]">Est. Value</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(totalRows)].map((_, index) => {
            const item = mockData[index];
            return (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2 h-[32px]">{index + 1}</td>
                <td className="border px-4 py-2 w-[256px] h-[32px]">{item?.job || ""}</td>
                <td className="border px-4 py-2 w-[124px] h-[32px]">{item?.submitted || ""}</td>
                <td className="border px-4 py-2 h-[32px]">
                  {item?.status && (
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        item.status === "In-process"
                          ? "bg-yellow-100 text-yellow-800"
                          : item.status === "Complete"
                          ? "bg-green-100 text-green-800"
                          : item.status === "Blocked"
                          ? "bg-red-100 text-red-800"
                          : item.status === "Need to start"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  )}
                </td>
                <td className="border px-4 py-2 h-[32px]">{item?.submitter || ""}</td>
                <td className="border px-4 py-2  underline cursor-pointer h-[32px]">
                  {item?.url || ""}
                </td>
                <td className="border px-4 py-2 h-[32px]">{item?.assigned || ""}</td>
                <td className="border px-4 py-2 h-[32px]">
                  {item?.priority && (
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        item.priority === "High"
                          ? "text-red-600"
                          : item.priority === "Medium"
                          ? "text-yellow-600"
                          : "text-blue-600"
                      }`}
                    >
                      {item.priority}
                    </span>
                  )}
                </td>
                <td className="border px-4 py-2 h-[32px]">{item?.dueDate || ""}</td>
                <td className="border px-4 py-2 h-[32px]">{item?.estValue || ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
