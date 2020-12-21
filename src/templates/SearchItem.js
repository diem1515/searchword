import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import styled from "styled-components";


const Text = styled.div`

  font-size: 15px;
  color: #495057;
  margin-top: 5px;
  cursor: pointer;

  .kakao_ad_area {
    display:none;
    width:100%;
  }

`;
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <p>
                    {props.text}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


function SearchItem({ name, text, id }) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Text>
                <li className="list-group-item" onClick={() => setModalShow(true)}> {name}</li>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    name={name}
                    text={text}
                    key={id}
                >
                    <ins className="kakao_ad_area"
                        data-ad-unit="DAN-r6Vr582sLtbR1SiV"
                        data-ad-width="728"
                        data-ad-height="90"></ins>
                    <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>

                </MyVerticallyCenteredModal>

            </Text>
        </div>


    );
}



export default SearchItem;