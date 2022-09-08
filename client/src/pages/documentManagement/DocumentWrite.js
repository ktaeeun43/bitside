import React, { useState } from "react";
import DocumentManagementLayout from "../../templates/DocumentManagementLayout";
import styled from "styled-components";
import { COLOR_LAYOUT_BACKGROUND, COLOR_WHITE, COLOR_ABLE_BUTTON } from "../../constants";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Wrapper = styled.div`
height: ${(props) => (props.isMobile ? "100%" : "")};
display: flex;
flex-direction: column;
background-color: white;
border: 1px solid rgb(230, 230, 230);
padding: ${(props) => (props.isMobile ? "1.1875rem" : "40px 20px")};
overflow: auto;
`;

const TitleWrapper = styled.div`
 display: flex;
 display: -webkit-box;
 -webkit-box-orient: vertical;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`;

const BoxTitle = styled.div`
  width: 70%;
  padding-bottom: ${(props) => (props.isMobile ? "10px" : "18px")};
  display: flex;
  justify-content: center;
  font-size: 23px;
  color: #02215e;
`;

const RegisterInputWrapper = styled.div`
justify-content: center;

`;

const InputLabel = styled.label`
  margin-left: 20px;
  font-size: 12px;
  color: #727272;
  margin: 0px;
`;

const Input = styled.input`
  margin-top: 10px;
  font-size: 12px;
  color: #033e93;
  height: 30px;
  border: 1px solid rgb(200, 200, 200);
  padding-left: 10px;
  padding-right: 10px;
`;

const Button = styled.div`

  width: 300px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0.3rem 0.875rem;
  color: ${COLOR_WHITE};
  font-size: 0.875rem;
  background-color: ${COLOR_ABLE_BUTTON};
  cursor: pointer;
  border-radius: 4px;
  word-break: keep-all;
`;

const BoxWrapper = styled.div`
 flex: 1 0 0%;
 max-width: 1000px;
 width: 100%;
 margin: ${(props) => (props.isMobile ? "0 auto" : "20px auto")};
 position: relative;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const InBoxWrapper = styled.div`
padding: 30px;
display:flex;
justify-content: center;
`;

const Table = styled.div`
  display: table;
  width: 100%;
`;
const Title = styled.div`
  padding: 10px;
  font-size: 25px;
`;

const StyledTableRow = styled.tr`
  display: flex;
`;
const TableCell = styled.td`
  display: flex;
  border-top: 1px solid #e9eaef;
  border-left: 1px solid #e9eaef;
  border-right: 1px solid #e9eaef;
  display: flex;
`;

const StyledTableCellTitle = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f7;
  flex: 0 0 4.8rem;
  padding: 0.5rem 2.46rem;
  word-break: keep-all;
`;


function DocumentWrite() {

  const [파일경로, set파일경로] = useState("");
  const [index, setIndex ] = useState("");
  const [area, setArea] = useState("");
  const [code, setCode] = useState("");
  const [cycle, setCycle] = useState("");
  const [manager, setManager] = useState("");
  const [upload, setUpload] = useState("");
  const [itemName, setItemName] = useState("");
  const user = useSelector((state) => state.User);
  const navigate = useNavigate();
  function onChangeIndex(event) {
    setIndex(event.target.value);
  }

  function onChangeArea(event) {
    setArea(event.target.value);
  }

  function onChangeCode(event) {
    setCode(event.target.value);
  }

  function onChangeItemName(event) {
    setItemName(event.target.value);
  }

  function onChangeCycle(event) {
    setCycle(event.target.value);
  }

  function onChangeManager(event) {
    setManager(event.target.value);
  }

  function onChangeUpload(event) {
    setUpload(event.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const variables = {
      writer: user.userData._id,
      title: "증적자료",
      filePath: 파일경로,
    };

    axios.post("/api/document/uploadDocument", variables).then((response) => {
      if (response.data.success) {
        setTimeout(() => {
          
          return navigate('/page/DocumentsManagement/list')
        }, 2000);
      } else {
        alert("비디오 업로드 실패");
      }
    });
  };

  const uploadDocument = (e) => {
        e.preventDefault();   
      	const formData = new FormData();
      	formData.append('file', e.target.file.files[0]);
        console.log(formData,"증적자료");
        const config = {
          header: {  "content-type": "multipart/form-data", },
        };
        axios.post("/api/document/upload", formData, config).then((response) => {
          console.log(response.data);
          if (response.data.success) {
            let variable = {
              filePath: response.data.url,
              fileName: response.data.fileName,
            };
            set파일경로(variable.filePath);
            alert("증적자료 업로드에 성공하였습니다.");
          } else {
            alert("비디오 업로드에 실패하였습니다.");
          }
        });
    };

  return (
    <>

          
        <BoxWrapper>
          <Wrapper>
          <TitleWrapper>
            <BoxTitle>증적목록 등록</BoxTitle>
          </TitleWrapper>
          <RegisterInputWrapper>
          <InputWrapper>
          <InputLabel>No</InputLabel>
          <Input 
            type={"input"}
            placeholder="No을 입력해주세요."
            onChange={onChangeIndex}
            value={index}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>영역구분</InputLabel>
          <Input 
            type={"input"}
            placeholder="영역구분을 입력해주세요."
            onChange={onChangeArea}
            value={area}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>증적명</InputLabel>
          <Input 
            type={"input"}
            placeholder="증적명을 입력해주세요."
            onChange={onChangeItemName}
            value={itemName}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>이행주기</InputLabel>
          <Input 
            type={"input"}
            placeholder="이행주기를 입력해주세요."
            onChange={onChangeCycle}
            value={cycle}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>담당자</InputLabel>
          <Input 
            type={"input"}
            placeholder="담당자를 입력해주세요."
            onChange={onChangeManager}
            value={manager}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>최근 업로드</InputLabel>
          <Input 
            type={"input"}
            placeholder="최근 업로드를 입력해주세요."
            onChange={onChangeUpload}
            value={upload}
            />
          </InputWrapper> 
          </RegisterInputWrapper>
          </Wrapper>
          <h3>증적자료 업로드</h3>
          <form encType='multipart/form-data' onSubmit={uploadDocument}>
            <input type='file' name='file' />
            <button type='submit'>업로드</button>
        </form>
          <InBoxWrapper>
            
          <Button onClick={onSubmit}>등록하기</Button>
          </InBoxWrapper>
        </BoxWrapper>
    </>
  );
};
export default DocumentWrite;
