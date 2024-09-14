import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const SelectorContainer = styled.div`
  --gap: 1.2px;
  background-color: #d9d9d9;
  border-radius: 25px;
  padding: var(--gap);
  display: inline-flex;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  align-self: flex-start;
`;

const Option = styled.div`
  font-family: 'NanumSquareNeoBold', sans-serif !important;
  height: 38px;
  padding: 0 19px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
  color: ${props => props.isSelected ? '#333333' : '#767676'};
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${props => props.isFirst ? 'bold' : 'normal'}; 
  // 첫 번째 옵션에 대해 bold 적용 -> props.isFirst가 true일 때 'bold' 그렇지 않으면 'normal'
`;

const Slider = styled.div`
  position: absolute;
  top: var(--gap);
  left: var(--gap);
  height: calc(100% - calc(var(--gap) * 2));
  width: calc(100% - calc(var(--gap) * 2));
  border-radius: 24px;
  transition: 0.3s ease;
  background-color: #ffffff;
  z-index: 1;
`;

const CertificationSelector = ({ options, selectedOption, onSelect }) => {
  const [sliderStyle, setSliderStyle] = useState({});
  const containerRef = useRef(null);
  const optionRefs = useRef([]);

  useEffect(() => {
    const updateSliderStyle = () => {
      const selectedIndex = options.findIndex(option => option === selectedOption);
      if (optionRefs.current[selectedIndex]) {
        const option = optionRefs.current[selectedIndex];
        setSliderStyle({
          width: `${option.offsetWidth - 2}px`,
          transform: `translateX(${option.offsetLeft}px)`
        });
      }
    };

    updateSliderStyle();
    window.addEventListener('resize', updateSliderStyle);
    return () => window.removeEventListener('resize', updateSliderStyle);
  }, [selectedOption, options]);

  return (
    <SelectorContainer ref={containerRef}>
      <Slider style={sliderStyle} />
      {options.map((option, index) => (
        <Option
          key={option}
          isSelected={option === selectedOption}
          isFirst={index === 0} // 첫 번째 옵션 여부를 prop으로 전달
          onClick={() => onSelect(option)}
          ref={el => optionRefs.current[index] = el}
        >
          {option}
        </Option>
      ))}
    </SelectorContainer>
  );
};

export default CertificationSelector;