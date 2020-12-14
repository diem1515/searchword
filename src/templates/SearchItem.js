import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import styled from "styled-components";


const Text = styled.div`

  font-size: 15px;
  color: #495057;
  margin-top: 5px;
  cursor: pointer;

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
                <li class="list-group-item" onClick={() => setModalShow(true)}> {name}</li>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    name={name}
                    text={text}
                    key={id}
                />
            </Text>
        </div>


    );
}



export default SearchItem;