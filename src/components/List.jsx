import React from "react";
import { useSelector } from "react-redux";
// import { updateStudent } from "../store/store";
import { useNavigate } from "react-router-dom";

const List = () => {
  const students = useSelector((state) => state.students)
  const navigate = useNavigate();

  // const [editIndex, setEditIndex] = useState(null)
  // const [editedStudent, setEditedStudent] = useState({})

  // // const handleEdit = (index, student) => {
  // //   setEditIndex(index)
  // //   setEditedStudent({ ...student })
  // // };

const handleEdit = (index, student) => {
    navigate('/form', { state: { student, index } });
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setEditedStudent({ ...editedStudent, [name]: value })
  // };

  // const handleSave = () => {
  //   dispatch(updateStudent({ index: editIndex, student: editedStudent }))
  //   setEditIndex(null)
  // };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center mb-6 font-semibold">Student List</h1>
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-left">Name</th>
            <th className="border-b px-4 py-2 text-left">Email</th>
            <th className="border-b px-4 py-2 text-left">Phone</th>
            <th className="border-b px-4 py-2 text-left">DOB</th>
            <th className="border-b px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {students.map((student, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border-b px-4 py-2">
                {editIndex === index ? (
                  <input
                    type="text"
                    name="name"
                    value={editedStudent.name || ""}
                    onChange={handleChange}
                    className="border rounded px-2 py-1 w-full"
                  />
                ) : (
                  student.name
                )}
              </td>
              <td className="border-b px-4 py-2">
                {editIndex === index ? (
                  <input
                    type="text"
                    name="email"
                    value={editedStudent.email || ""}
                    onChange={handleChange}
                    className="border rounded px-2 py-1 w-full"
                  />
                ) : (
                  student.email
                )}
              </td>
              <td className="border-b px-4 py-2">
                {editIndex === index ? (
                  <input
                    type="number"
                    name="phone"
                    value={editedStudent.phone || ""}
                    onChange={handleChange}
                    className="border rounded px-2 py-1 w-full"
                  />
                ) : (
                  student.phone
                )}
              </td>
              <td className="border-b px-4 py-2">
                {editIndex === index ? (
                  <input
                    type="date"
                    name="dob"
                    value={editedStudent.dob || ""}
                    onChange={handleChange}
                    className="border rounded px-2 py-1 w-full"
                  />
                ) : (
                  student.dob
                )}
              </td>
              <td className="border-b px-4 py-2 text-center">
                {editIndex === index ? (
                  <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(index, student)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))} */}
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.dob}</td>
              <td>{student.education}</td>
              <td className="border-b px-4 py-2 text-center">
                <button
                  onClick={() => handleEdit(index, student)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
