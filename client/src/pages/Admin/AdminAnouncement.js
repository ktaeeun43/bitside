import React, { useState } from 'react'
import AdminLayout from '../../templates/AdminLayout'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styled from "styled-components";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StyledTableRow = styled.tr`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

function AdminAnouncement() {


  const [type, setType] = useState('공지');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const user = useSelector((state) => state.User);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const onSubmit = () => {
    let body ={
      writer: user.userData._id,
      title: title,
      type: type,
      content: content,
    }
    let content2 = JSON.stringify(body);
    let body2 ={
      writer: user.userData._id,
      action: "공지사항 등록",
      content: content2
    }
    axios.post(`/api/anouncement/upload`,body)
        .then((response) => {
          if (response.data.success) {
            axios.post(`/api/log/saveLog`,body2)
                    .then((response) => {
                      if (response.data.success) {
                      } else {
                      }
                    });
            alert("공지사항이 등록되었습니다.")
            setTimeout(() => {
              navigate('/')
            }, 1000);
          } else {
            alert("공지사항 등록 실패");
          }
        });

  console.log(body);
  };

  return (
    <AdminLayout>
        <h1>공지사항 </h1>
        <StyledTableRow>
        <TextField
          required
          id="outlined-required"
          label="제목"
          value={title}
          onChange={handleTitleChange}
          placeholder='제목을 입력해주세요'
          />
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">종류</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="type"
          onChange={handleChange}
        >
          <MenuItem value={"공지"}>공지</MenuItem>
          <MenuItem value={"알림"}>알림</MenuItem>
          <MenuItem value={"긴급"}>긴급</MenuItem>
        </Select>
      </FormControl>

    </Box>
      <Button variant="contained" onClick={onSubmit}>등록하기</Button>
        </StyledTableRow>
         <TextareaAutosize
      maxRows={10}
      style={{ width: 1000, height: 400}}
      value={content}
      onChange={handleContentChange}
      placeholder="내용을 입력해주세요"
      
    />
    </AdminLayout>
  )
}

export default AdminAnouncement