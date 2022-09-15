import { useState } from "react";
import InputCheckbox from "../InputCheckbox";
import InputText from "../InputNumber";
import Select from "../Select";
import * as S from "./styles";
import { atividades } from "../../mocks";

const ModalForm = () => {
  const [selectValue, setSelectValue] = useState("");

  let salario = "";

  if (selectValue === "Balconista") {
    salario = Number(salario + 1400).toFixed(2);
  }

  return (
    <div>
      <S.FormOverlay>
        <S.InputContainer>
          <Select
            selected={"Cargo..."}
            img={"https://i.imgur.com/LNAjnQH.png"}
            selectValue={selectValue}
            setSelectValue={setSelectValue}
          ></Select>
          <InputText
            salario={salario}
            value={"1.000,00"}
            placeholder={"Salário..."}
            img={"https://i.imgur.com/LNAjnQH.png"}
          ></InputText>
        </S.InputContainer>
        <S.Titulo>Atividades que o cargo exerce</S.Titulo>
        <S.CheckboxContainer>
          {atividades.map((elem) => {
            return <InputCheckbox atividades={elem.name}/>
          })}
        </S.CheckboxContainer>
        {/* <S.CheckboxContainer>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
        </S.CheckboxContainer> */}
      </S.FormOverlay>
    </div>
  );
};

export default ModalForm;
