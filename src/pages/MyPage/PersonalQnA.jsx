import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import SideBar from "../../components/MyPage/SideBar";
import DropDown from "../../components/SearchPage/DropDown";

const dropdown = ["문의유형", "문의유형", "문의유형"];

function PersonalQnA() {
    const [wordLength, setWordLength] = useState(0);
    const [inputs, setInputs] = useState({
        category: '',
        title: '',
        content: ''
    });
    const {category, title, content} = inputs;

    const onChange = (e) => {
        const {key, value} = e.target;
        const nextInputs = {
            ...inputs,
            [key] : value,
        };
        setInputs(nextInputs);
    };

    const onSubmit = () => {
        axios.post(`/api/v1/mypage/inquiries`, {
            title: inputs[title],
            inquiryType: inputs[category],
            userId: 0,      // 추후 수정
            content: content
        })
            .then(res => console.log(res.data))
            .catch(err => alert(`${err.status}:1:1 문의 전송에 실패하였습니다`));
    };

    return (
        <Container>
            <SideBar />
            <Contents>
                <Header>1:1 문의하기</Header>
                
                <Form>
                    <FormItem>
                        <span>문의 유형</span>
                        <DropDownWrapper>
                            <DropDown title="-선택-" data={dropdown} />
                        </DropDownWrapper>
                    </FormItem>
                    <FormItem>
                        <span>제목</span>
                        <TextArea 
                            type="text" 
                            placeholder="제목을 입력해주세요." 
                            onChange={onChange}
                        />
                    </FormItem>
                    <FormItem>
                        <span>내용</span>
                        <TextArea 
                            className="scroll" 
                            type="text" 
                            placeholder="문의 내용을 입력해주세요."
                            maxLength={500} 
                            onChange={onChange}
                        />
                    </FormItem>
                </Form>
                <ButtonGroup>
                    <CancelButton>취소</CancelButton>
                    <SubmitButton onClick={onSubmit}>문의하기</SubmitButton>
                </ButtonGroup>
            </Contents>
        </Container>
    );
}

export default PersonalQnA;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 3em;
`
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 18em);        
`
const Header = styled.h2`
    padding-bottom: 1em;
    margin: .5em 0;
    border-bottom: 2px solid black;
`
const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
`
const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    gap: .5em;
    padding: .8em;
`
const DropDownWrapper = styled.div`
    display: flex;
    button {
        width: 350px;
        justify-content: space-between;
        border: 1px solid #505458;
        padding: 1.2em;
    }
`
const TextArea = styled.textarea`
    width: calc(350px - 2em);
    border-radius: 7px;
    border: 1px solid #505458;
    padding: 1em;
    resize: none;
    height: 1.3em;
    font-family: "Arial, sans-serif";
    &.scroll {
        height: 10em;
        text-overflow: ellipsis;
    }
`
const ButtonGroup = styled.div`
    display: inline-flex;
    justify-content: center;
    gap: 1em;
    margin: 1em;
`
const Button = styled.button`
    height: 3em;
    width: 8em;
    border: none;
    border-radius: 5px;
    font-size: large;
    cursor: pointer;
`
const CancelButton = styled(Button)`
    background-color: #FFF;
    border: 1px solid #8E9398;
`
const SubmitButton = styled(Button)`
    background-color: #529B40;
    color: #FFF;
`