import * as S from "./styles";
import { cargos } from "../../mocks";

interface SelectProps {
  img: string;
  setSelectValue: any;
  onChange?: any;
}

const Select = ({ img, setSelectValue, onChange }: SelectProps) => {
  return (
    <S.SelectOverlay>
      <img src={img} alt="" />
      <S.Select
        name="cargo"
        onChangeCapture={onChange}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option selected disabled>
        Selecione o cargo...
        </option>
        {cargos.map((elem: any) => {
          return (
            <option key={elem.id} value={elem.name}>
              {elem.name}
            </option>
          );
        })}
      </S.Select>
    </S.SelectOverlay>
  );
};

export default Select;
