import { useState } from "react";
import styled from "styled-components";

const AdminSectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const CreateUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const InputWrapper = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonWrapper = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #0077b6;
  color: #fff;
  cursor: pointer;
`;

const TableWrapper = styled.table`
  border-collapse: collapse;
  margin: 2rem 0;
  font-size: 1rem;
  width: 100%;
  max-width: 800px;
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

function HomeAdmin({ employees, handleSetEmpolyees, handleDeleteEmployees }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const setData = () => {
    const data = {
      name: name,
      lastname: lastname,
      position: position,
    };
    handleSetEmpolyees(data);

    setName("");
    setLastname("");
    setPosition("");
  };

  return (
    <AdminSectorWrapper>
      <CreateUserWrapper>
        <h4>Create User Here</h4>
        <div>
          <InputWrapper
            type="text"
            placeholder="Name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <InputWrapper
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={({ target }) => setLastname(target.value)}
          />
          <InputWrapper
            type="text"
            placeholder="Position"
            value={position}
            onChange={({ target }) => setPosition(target.value)}
          />
          <ButtonWrapper onClick={() => setData()}>Save</ButtonWrapper>
        </div>
      </CreateUserWrapper>
      <TableWrapper>
        <thead>
          <tr>
            <ThWrapper>First Name</ThWrapper>
            <ThWrapper>Last Name</ThWrapper>
            <ThWrapper>Position</ThWrapper>
            <ThWrapper>Action</ThWrapper>
          </tr>
        </thead>
        <tbody>
          {employees &&
            employees.map((employee) => (
              <tr key={employee.id}>
                <TdWrapper>{employee.name}</TdWrapper>
                <TdWrapper>{employee.lastname}</TdWrapper>
                <TdWrapper>{employee.position}</TdWrapper>
                <TdWrapper>
                  <ButtonWrapper
                    onClick={() => handleDeleteEmployees(employee.id)}
                  >
                    Delete
                  </ButtonWrapper>
                </TdWrapper>
              </tr>
            ))}
        </tbody>
      </TableWrapper>
    </AdminSectorWrapper>
  );
}

export default HomeAdmin;
