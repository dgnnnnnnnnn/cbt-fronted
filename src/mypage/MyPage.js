import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faBook, faPencilAlt, faChartBar } from '@fortawesome/free-solid-svg-icons';
import RotatingGradientBorder from '../menu/RotatingGradientBorder';
import userimg from '../img/userimg/user-img2.png';
import './mypage.css'; 

const MyPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const userLevel = 7; // 임시로 사용자 레벨 하드코딩

  const menuItems = [
    { id: 'edit', icon: faCog, label: '정보수정' },
    { id: 'purchased', icon: faBook, label: '구매한 족보' },
    { id: 'written', icon: faPencilAlt, label: '작성한 족보' },
    { id: 'frequently', icon: faChartBar, label: '자주 공부한 내역' },
  ];

  const renderContent = () => {
    if (!selectedMenu) {
      return <div className="mypage-empty-content">왼쪽 영역에서 메뉴를 선택해주세요</div>;
    }

    // 선택된 메뉴에 따라 다른 내용을 렌더링합니다.
    switch (selectedMenu) {
      case 'edit':
        return <div>정보수정 내용</div>;
      case 'purchased':
        return <div>구매한 족보 목록</div>;
      case 'written':
        return <div>작성한 족보 목록</div>;
      case 'frequently':
        return <div>자주 공부한 내역</div>;
      default:
        return null;
    }
  };

  return (
    <div className="mypage-container">
      <div className="mypage-left-section">
        <div className="mypage-profile-area">
          <div className="mypage-user-icon-wrapper">
            <RotatingGradientBorder level={userLevel} />
            <img src={userimg} alt="User" className="mypage-user-icon" />
          </div>
          <div className="mypage-nickname">사용자 닉네임</div>
        </div>
        <nav className="mypage-menu-list">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`mypage-menu-item ${selectedMenu === item.id ? 'mypage-active' : ''}`}
              onClick={() => setSelectedMenu(item.id)}
            >
              <FontAwesomeIcon icon={item.icon} className="mypage-menu-icon" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="mypage-right-section">
        {renderContent()}
      </div>
    </div>
  );
};

export default MyPage;