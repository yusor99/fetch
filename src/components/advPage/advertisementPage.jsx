import HomeAdv from "../homeAdv";
import AddAdv from "./addAdv";
import { Row, Col } from "antd";
const AdvertisementPage = () => {
  return (
    <div className="container advPage">
      <Row gutter={[8, 16]}>
        <Col sm={24} lg={9}>
          <HomeAdv />
        </Col>
        <Col sm={24} lg={15}>
          <AddAdv />
        </Col>
      </Row>
      ,
    </div>
  );
};
export default AdvertisementPage;
