import * as S from "./styles";

import ModalForm from "../ModalForm";
import { useState } from "react";
import Render from "../Render";

const FullPage = () => {


  const [selectValue, setSelectValue] = useState<any>();
  const [selectEtapas, setSelectEtapas] = useState<any>();
  const [checkedAtividades, setCheckedAtividades] = useState<any>([]);
  const [tempoExperiencia, setTempoExperiencia] = useState<any>();
  const [grauAcademico, setGrauAcademico] = useState<any>();

  const checkedItems = checkedAtividades.length
    ? checkedAtividades.reduce((total: string, item: string) => {
        return total + ", " + item;
      })
    : "";

  const handleCheckAtividades = (event: {
    target: { checked: any; value: any };
  }) => {
    var updatedList = [...checkedAtividades];
    if (event.target.checked) {
      updatedList = [...checkedAtividades, event.target.value];
    } else {
      updatedList.splice(checkedAtividades.indexOf(event.target.value), 1);
    }
    setCheckedAtividades(updatedList);
  };

  const [checkedHabilidades, setCheckedHabilidades] = useState<any>([]);

  const checkedItensHabilidades = checkedHabilidades.length
    ? checkedHabilidades.reduce((total: string, item: string) => {
        return total + ", " + item;
      })
    : "";

  const handleCheckHabilidades = (event: {
    target: { checked: any; value: any };
  }) => {
    var updatedList = [...checkedHabilidades];
    if (event.target.checked) {
      updatedList = [...checkedHabilidades, event.target.value];
    } else {
      updatedList.splice(checkedHabilidades.indexOf(event.target.value), 1);
    }
    setCheckedHabilidades(updatedList);
  };

  const [checkedBeneficios, setCheckedBeneficios] = useState<any>([]);

  const checkedItensBeneficios = checkedBeneficios.length
    ? checkedBeneficios.reduce((total: string, item: string) => {
        return total + ", " + item;
      })
    : "";

  const handleCheckBeneficios = (event: {
    target: { checked: any; value: any };
  }) => {
    var updatedList = [...checkedBeneficios];
    if (event.target.checked) {
      updatedList = [...checkedBeneficios, event.target.value];
    } else {
      updatedList.splice(checkedBeneficios.indexOf(event.target.value), 1);
    }
    setCheckedBeneficios(updatedList);
  };

  const [salario, setSalario] = useState("0");

  const initialValue = {
    cargo: "",
    salariodocargo: "",
    etapas: "",
    atividadesdocargo: "",
    habilidadesdocargo: "",
    tempoexperiencia: "",
    grauexperiencia: "",
    beneficioscargo: "",
  };

  const [values, setValues] = useState(initialValue);

  function onChange(ev: { target: { name: any; value: any } }) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  return (
    <S.FullPage>
      <ModalForm
        setGrauAcademico={setGrauAcademico}
        handleCheckBeneficios={handleCheckBeneficios}
        handleCheckHabilidades={handleCheckHabilidades}
        handleCheckAtividades={handleCheckAtividades}
        setSelectEtapas={setSelectEtapas}
        setSalario={setSalario}
        onChange={onChange}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
        setTempoExperiencia={setTempoExperiencia}
      />
      <Render
        grauAcademico={grauAcademico}
        tempoExperiencia={tempoExperiencia}
        checkedItensBeneficios={checkedItensBeneficios}
        checkedItensHabilidades={checkedItensHabilidades}
        checkedItems={checkedItems}
        selectEtapas={selectEtapas}
        salario={salario}
        selectValue={selectValue}
      />
    </S.FullPage>
  );
};

export default FullPage;