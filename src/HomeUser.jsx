import styled from "styled-components";

const TableWrapper = styled.table`
  border-collapse: collapse;
  margin: 2rem 0;
  font-size: 1rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const ThWrapper = styled.th`
  padding: 1rem;
  background-color: #0077b6;
  color: #fff;
  text-align: left;
`;

const TdWrapper = styled.td`
  padding: 1rem;
  border: 1px solid #ccc;
`;

function HomeUser({ employees }) {
  return (
    <TableWrapper>
      <thead>
        <tr>
          <ThWrapper>First Name</ThWrapper>
          <ThWrapper>Last Name</ThWrapper>
          <ThWrapper>Position</ThWrapper>
        </tr>
      </thead>
      <tbody>
        {employees &&
          employees.map((employee) => (
            <tr key={employee.id}>
              <TdWrapper>{employee.name}</TdWrapper>
              <TdWrapper>{employee.lastname}</TdWrapper>
              <TdWrapper>{employee.position}</TdWrapper>
            </tr>
          ))}
      </tbody>
    </TableWrapper>
  );
}

export default HomeUser;
