import React, { useState } from 'react';
import styled from "styled-components";
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';
import { useRealState } from '../realContext';
import SearchItem from './SearchItem'
import { MdAdd } from "react-icons/md";



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

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: block;
  align-items: center;
  margin: 10px auto;
//   justify-content: center;
  font-size: 60px;
//   position: absolute;
//   left: 50%;
//   bottom: 0px;
//   transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
//   align-items: center;
//   justify-content: center;


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
    const [nextId, setNextId] = useState(20)
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const increseNum = () => {
        setNextId(nextId + 20)
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
                            {/* {
                                (() => {
                                    for (let i = 0; i < 10; i++) {
                                        <SearchItem class="list-group-item"
                                            key={searchState[i].id}
                                            name={searchState[i].name}
                                            text={searchState[i].text}
                                            id={searchState[i].id}
                                        />
                                    }
                                })
                            } */}
                            {searchState.filter((word) => (
                                word.id < nextId
                            )).map((word) => (
                                <SearchItem class="list-group-item"
                                    key={word.id}
                                    name={word.name}
                                    text={word.text}
                                    id={word.id} />
                            ))}
                        </ul>
                    </div>
                </div>

                <CircleButton onClick={() => increseNum()}>
                    <MdAdd />
                </CircleButton>

                {/* <div className="container">
                    <MdAdd />
                    <button className="btn btn-primary" type="button" onClick={() => increseNum()}>go!</button>
                </div> */}
            </HeadBlock>
        </div>
    );
}

export default React.memo(SearchPage);