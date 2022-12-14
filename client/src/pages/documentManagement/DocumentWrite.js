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

  const [????????????, set????????????] = useState("");
  const [area, setArea] = useState("");
  const [cycle, setCycle] = useState("");

  const [manager, setManager] = useState("");
  const [itemName, setItemName] = useState("");
  const user = useSelector((state) => state.User);
  const navigate = useNavigate();

  function onChangeArea(event) {
    setArea(event.target.value);
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


  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      area: area,
      itemName: itemName,
      cycle: cycle,
      manager: manager,

    }
    let description = JSON.stringify(body)
    const variables = {
      writer: user.userData._id,
      title: "????????????",
      area: area,
      itemName: itemName,
      cycle: cycle,
      manager: manager,
      filePath: ????????????,
    };
    let content2 = JSON.stringify(variables);
    let body2 ={
      writer: user.userData._id,
      action: "???????????? ??????",
      content: content2
    }
    axios.post("/api/document/uploadDocument", variables).then((response) => {
      if (response.data.success) {
        setTimeout(() => {
          axios.post(`/api/log/saveLog`,body2)
                    .then((response) => {
                      if (response.data.success) {
                      } else {
                      }
                    });
          return navigate('/page/DocumentsManagement/list')
        }, 2000);
      } else {
        alert("???????????? ????????? ??????");
      }
    });
  };

  const uploadDocument = (e) => {
        e.preventDefault();   
      	const formData = new FormData();
      	formData.append('file', e.target.file.files[0]);
        console.log(formData,"????????????");
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
            set????????????(variable.filePath);
            alert("???????????? ???????????? ?????????????????????.");
          } else {
            alert("????????? ???????????? ?????????????????????.");
          }
        });
    };

  return (
    <>

          
        <BoxWrapper>
          <Wrapper>
          <TitleWrapper>
            <BoxTitle>???????????? ??????</BoxTitle>
          </TitleWrapper>
          <RegisterInputWrapper>
          <InputWrapper>
          <InputLabel>????????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="??????????????? ??????????????????."
            onChange={onChangeArea}
            value={area}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>?????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="???????????? ??????????????????."
            onChange={onChangeItemName}
            value={itemName}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>????????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="??????????????? ??????????????????."
            onChange={onChangeCycle}
            value={cycle}
            />
          </InputWrapper>
          <InputWrapper>
          <InputLabel>?????????</InputLabel>
          <Input 
            type={"input"}
            placeholder="???????????? ??????????????????."
            onChange={onChangeManager}
            value={manager}
            />
          </InputWrapper>
          </RegisterInputWrapper>
          </Wrapper>
          <h3>???????????? ?????????</h3>
          <form encType='multipart/form-data' onSubmit={uploadDocument}>
            <input type='file' name='file' />
            <button type='submit'>?????????</button>
        </form>
          <InBoxWrapper>
            
          <Button onClick={onSubmit}>????????????</Button>
          </InBoxWrapper>
        </BoxWrapper>
    </>
  );
};
export default DocumentWrite;
