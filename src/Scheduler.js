import { DayPilotScheduler } from "daypilot-pro-react";
import Resource from "./Resource";
import { useCallback, useState, useRef } from "react";

function Scheduler(props) {
  const [cellWidth, setCellWidth] = useState(40);

  const ref = useRef(null);

  const incrementCellWidth = useCallback(() => {
    setCellWidth((currentWidth) => {
      return currentWidth + 10;
    });
  }, [setCellWidth]);

  const incrementCellWidthREF = useCallback(() => {
    if (ref.current) {
      ref.current.control.cellWidth = ref.current.control.cellWidth + 10;
      ref.current.control.update();
    }
  }, []);

  const justUpdate = useCallback(() => {
    if (ref.current) {
      ref.current.control.update();
    }
  }, []);

  const handleBeforeRowHeaderDomAdd = (args) => {
    args.element = <Resource name={args.row.data.name} />;
  };

  return (
    <>
      <button onClick={incrementCellWidth}>Set cell width</button>
      <button onClick={incrementCellWidthREF}>Set cell width REF</button>
      <button onClick={justUpdate}>Just UPDATE</button>
      <DayPilotScheduler
        ref={ref}
        resources={[
          { name: "Resource A", id: "A" },
        ]}
        onBeforeRowHeaderDomAdd={handleBeforeRowHeaderDomAdd}
        cellWidth={cellWidth}
      />
    </>
  );
}

export default Scheduler;
