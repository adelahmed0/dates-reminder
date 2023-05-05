import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { person } from "./data";
import DatesCount from "./component/DatesCount";
import DatesList from "./component/DatesList";
import DatesAction from "./component/DatesAction";

function App() {
  const [personData, setPersonData] = useState(person);
  const onDelete = () => {
    setPersonData([]);
  };
  const onViewData = () => {
    setPersonData(person);
  };
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction deleteData={onDelete} showData={onViewData} />
      </Container>
    </div>
  );
}

export default App;
