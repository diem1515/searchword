import React, { useState } from 'react';
import styled from "styled-components";
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';
import { useRealState } from '../realContext';
import SearchItem from './SearchItem'



const HeadBlock = styled.div`
.col-sm-12 {
    padding-top: 20px;
    padding-bottom: 20px;
  }

.list-group {
    margin-left:10px;
    margin-right:10px;
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

let searchState = null;

function SearchPage() {
    const state = useRealState();
    const [modalShow, setModalShow] = React.useState(false);
    const [value, setValue] = useState("")
    const onChange = (e) => {
        setValue(e.target.value)

    }

    if (value) {
        searchState = state.filter((todo) => todo.name.includes(value))
        if (!searchState) {
            searchState = state
        }
    }
    else {
        searchState = state
    }




    return (
        <div>
            <HeadBlock>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">공인중개사</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">단어검색</Nav.Link>
                        <Nav.Link href="#features">랜덤학습</Nav.Link>
                    </Nav>
                </Navbar>

                <div class="col-sm-12">
                    <div class="input-group">
                        <input
                            type="text"
                            class="form-control"
                            onChange={onChange}
                            value={value}
                            placeholder="Search for..." />
                        <span class="input-group-btn">
                            <button class="btn btn-primary" type="button" onClick={() => setModalShow(true)}>go!</button>

                            {searchState.map((word) => (
                                <MyVerticallyCenteredModal show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    name={word.name}
                                    text={word.text}
                                    key={word.id}
                                />
                            ))}
                        </span>
                    </div>
                </div>

                <div class="panel panel-primary">

                    <div class="panel-body" >
                        <ul class="list-group" >
                            {searchState.map((word) => (
                                <SearchItem class="list-group-item"
                                    key={word.id}
                                    name={word.name}
                                    text={word.text}
                                    id={word.id} />
                            ))}


                        </ul>
                    </div>
                </div>
            </HeadBlock>
        </div>
    );
}

export default React.memo(SearchPage);