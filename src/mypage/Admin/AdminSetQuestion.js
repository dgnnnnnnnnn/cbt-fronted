import React, { useState } from 'react';
import { CiSquarePlus, CiUndo } from "react-icons/ci";
import { Dialog, DialogContent, Paper } from '@mui/material';
import Draggable from 'react-draggable';
import WriteQuestion from './WriteQuestion';
import './adminsetquestion.css';
import { styled } from '@mui/material/styles';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: 0,
  },
  '& .MuiDialog-paper': {
    backgroundColor: '#ffffff',
    margin: 0,
    maxHeight: '100%',
  },
}));

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const AdminSetQuestion = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleAddQuestion = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="admin-question-management">
      <div className="admin-question-header">문제 관리</div>
      <div className="admin-set-question-container">
        <div className="admin-set-question-left">
          <span className="admin-item-text">문제 추가</span>
        </div>
        <div className="admin-set-question-right">
          <div className="admin-set-question-box">
            <div className="admin-set-question-top">
              <CiSquarePlus 
                className="admin-set-question-icon add-icon" 
                size={24} 
                onClick={handleAddQuestion}
              />
              <CiUndo className="admin-set-question-icon undo-icon" size={24} />
            </div>
            <div className="admin-set-question-bottom">
              {/* 하단 영역의 내용은 여기에 추가될 예정입니다 */}
            </div>
          </div>
        </div>
      </div>
      <StyledDialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <div id="draggable-dialog-title" style={{ cursor: 'move', padding: '10px', backgroundColor: '#ecc344' }}>
          문제 추가
        </div>
        <DialogContent>
          <WriteQuestion onClose={handleCloseDialog} />
        </DialogContent>
      </StyledDialog>
    </div>
  );
};

export default AdminSetQuestion;