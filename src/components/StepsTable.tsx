import { Step } from "../interface";
import StepsRow from "./StepsRow";

function StepsTable(props: {steps: Step[], editRow: Function, deleteRow: Function}): JSX.Element {
  const { steps, deleteRow } = props;

  console.log(steps);

  return (
    <>
      <div className="steps-table">
        <div className="result-row row-header">
          <div className="resilt-head result-date">Дата (ДД.ММ.ГГГГ)</div>
          <div className="result-head result-distance">Пройдено км</div>
          <div className="result-head-resilt-controls">Действия</div>
        </div>
        {
          steps.length > 0
            ? (<div className="result-body">
                {steps.map((item) => <StepsRow {...item} deleteRow={deleteRow} editRow={(id) => console.log(id)} />)}
              </div>)
            : null
        }
      </div>
    </>
  );
}

export default StepsTable;
