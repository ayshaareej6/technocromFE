import React, { useEffect, useState } from "react";
import { faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AxiosInstance from "../../../../helper/AxiosInstance";
import ViewPopup from "../Common/ViewPopup";
import { Col, Row } from "react-bootstrap";

const ContactQueries = () => {
  const [contactData, setContactData] = useState();

  const [viewPopup, setViewPopup] = useState(false);
  const [viewPopupData, setViewPopupData] = useState("");

  useEffect(() => {
    AxiosInstance.get("contact-us/list").then(
      (res) => {
        setContactData(res.data.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const viewPopupHandler = (data) => {
    setViewPopupData(data);
    setViewPopup(true);
  };

  const ViewPopupView = () => {
    let email = "mailto:" + viewPopupData.email;
    let phone = "tel:" + viewPopupData.contact;
    return (
      <>
        <Row>
          <Col md={4}>
            <div className="dashboard-inputArea">
              <h4>Name</h4>
              <p>{viewPopupData.name}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="dashboard-inputArea">
              <h4>Email</h4>
              <p><a href={email}>{viewPopupData.email}</a></p>
            </div>
          </Col>
          <Col md={4}>
            <div className="dashboard-inputArea">
              <h4>Last Date</h4>
              <p><a href={phone}>{viewPopupData.contact}</a></p>
            </div>
          </Col>
          <Col md={6}>
            <div className="dashboard-inputArea">
              <h4>Website</h4>
              <p>{viewPopupData.website ? viewPopupData.website : "NA"}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="dashboard-inputArea">
              <h4>Posted On</h4>
              <p>{viewPopupData.created_at ? viewPopupData.created_at.split('T')[0] : null}</p>
            </div>
          </Col>
          <Col md={12}>
            <div className="dashboard-inputArea">
              <h4>Message</h4>
              <p>{viewPopupData.message}</p>
            </div>
          </Col>
        </Row>
      </>
    );
  };

  return (
    <>
      <ViewPopup
        visibility={viewPopup}
        setVisiblity={setViewPopup}
        feilds={<ViewPopupView />}
      />
      <div className="dashboard-box">
        <div className="dashboard-title">
          <h3>Contact Queries List</h3>
        </div>
        <div className="dashboard-inputArea">
          <table>
            <thead>
              <tr>
                <th width="60">S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Posted On</th>
                <th width="125">Action</th>
              </tr>
            </thead>
            <tbody>
              {contactData ? (
                contactData.map((item, index) => {
                  let email = "mailto:" + item.email;
                  let phone = "tel:" + item.contact;
                  return (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        <a href={email}>{item.email}</a>
                      </td>
                      <td>
                        <a href={phone}>{item.contact}</a>
                      </td>
                      <td>{item.created_at ? item.created_at.split('T')[0] : null}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => viewPopupHandler(item)}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button className="btn btn-danger">
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6}>No Queries Added Yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContactQueries;
