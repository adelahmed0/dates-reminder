import { Col, Row } from "react-bootstrap";

const DatesList = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        <div className="rectangle p-2">
          {person.length ? (
            person.map((item, index) => {
              return (
                <div key={index} className="d-flex border-bottom mx-3 my-2">
                  <img className="img-avatar" src={item.img} alt="s" />
                  <div className="px-3">
                    <p className="d-inline fs-5">{item.name}</p>
                    <p className="fs-6 opacity-75">{item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="p-5">لا يوجد مواعيد اليوم</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};
export default DatesList;
