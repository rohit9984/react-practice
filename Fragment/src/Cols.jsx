

function Cols() {
  return (
    <>
      <h1>Student Details</h1>

      <table border="1" cellPadding="10">
        {/* Table Header */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Marks</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          <tr>
            <td>1</td>
            <td>Rohit</td>
            <td>BCA</td>
            <td>90</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Rahul</td>
            <td>BCA</td>
            <td>85</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Amit</td>
            <td>BCA</td>
            <td>88</td>
          </tr>
        </tbody>

        {/* Table Footer */}
        <tfoot>
          <tr>
            <td colSpan="3">
              <strong>Average Marks</strong>
            </td>
            <td>
              <strong>87.67</strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default Cols;