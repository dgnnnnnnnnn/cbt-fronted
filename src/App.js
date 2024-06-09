import { Button, Nav, Navbar, Container, NavDropdown, Row, Col, Card } from 'react-bootstrap';
import './App.css';
import './custom.css';
import './card.css';  // 카드 전용 css파일
import MenuBar from './menu/Menu';
import SearchBox from './search/SearchBox';
// import AlertBar from './alert/AlertBar';

// import Navbar1 from './navbar.js'; // 메뉴 바 import
import React, { useState } from 'react';

function App() {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="App">
      {/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">YUJA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">기출문제</Nav.Link>
              <Nav.Link href="#pricing">캘린더</Nav.Link>
              <NavDropdown title="게시판" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      { /* 알림바 import... 수정필요 */}
      {/* <div>
        <AlertBar/>
      </div> */}

      { /* 메뉴바 import */}
      <div>
        <MenuBar setIsHovered={setIsHovered} />  { /* 블러처리를 위한 상태함수 전달 */}
      </div>




      <div className={`main-bg ${isHovered ? 'blur' : ''}`}>  { /* 블러처리 스위치를 위한 코드 */}
        <div className="title-message">
          <h1><span className='title-message-top'>Yuhan</span> <br />
            <span className='title-message-bottom'>Students Certificate</span></h1>
        </div>

        { /* 검색상자 import */}
        <div>
          <SearchBox />
        </div>




        <div className="card-container">
          <div className="grid">
            <div className="card">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z" />
                </svg>
              </span>
              <h4>Products</h4>
              <p>
                Standard chunk of Lorem Ipsum used since the 1500s is showed below
                for those interested.
              </p>
              <div className="shine"></div>
              <div className="background">
                <div className="tiles">
                  <div className="tile tile-1"></div>
                  <div className="tile tile-2"></div>
                  <div className="tile tile-3"></div>
                  <div className="tile tile-4"></div>
                  <div className="tile tile-5"></div>
                  <div className="tile tile-6"></div>
                  <div className="tile tile-7"></div>
                  <div className="tile tile-8"></div>
                  <div className="tile tile-9"></div>
                  <div className="tile tile-10"></div>
                </div>
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
            </div>
            <div className="card">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z" />
                  <path d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z" />
                  <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
                  <path d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z" />
                </svg>
              </span>
              <h4>Categories</h4>
              <p>
                Standard chunk of Lorem Ipsum used since the 1500s is showed below
                for those interested.
              </p>
              <div className="shine"></div>
              <div className="background">
                <div className="tiles">
                  <div className="tile tile-1"></div>
                  <div className="tile tile-2"></div>
                  <div className="tile tile-3"></div>
                  <div className="tile tile-4"></div>
                  <div className="tile tile-5"></div>
                  <div className="tile tile-6"></div>
                  <div className="tile tile-7"></div>
                  <div className="tile tile-8"></div>
                  <div className="tile tile-9"></div>
                  <div className="tile tile-10"></div>
                </div>
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
            </div>

            <div className="card">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z" />
                  <path d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z" />
                  <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
                  <path d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z" />
                </svg>
              </span>
              <h4>Categories</h4>
              <p>
                Standard chunk of Lorem Ipsum used since the 1500s is showed below
                for those interested.
              </p>
              <div className="shine"></div>
              <div className="background">
                <div className="tiles">
                  <div className="tile tile-1"></div>
                  <div className="tile tile-2"></div>
                  <div className="tile tile-3"></div>
                  <div className="tile tile-4"></div>
                  <div className="tile tile-5"></div>
                  <div className="tile tile-6"></div>
                  <div className="tile tile-7"></div>
                  <div className="tile tile-8"></div>
                  <div className="tile tile-9"></div>
                  <div className="tile tile-10"></div>
                </div>
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
            </div>

          </div>
        </div>

        {/* 요소 추가 예정 (임시) */}
        <div className='temp-area'
          style={{ backgroundColor: '#33363b', height: '500px', width: '100%' }}>
        </div>








      </div>


    </div>
  );
}

export default App;


