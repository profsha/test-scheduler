import {DayPilotScheduler} from "daypilot-pro-react";
import EmptyResource from './EmptyResource';
import { useCallback, useState, useRef } from 'react';

function Scheduler(props) {
  
  const [cellWidth, setCellWidth] = useState(40);

  const ref = useRef(null);

  const incrementCellWidth = useCallback(() => {
    setCellWidth((currentWidth) => {
      return currentWidth+10;
    })
  }, [setCellWidth]);

  
  const incrementCellWidthREF = useCallback(() => {
    if (ref.current) {
      ref.current.control.cellWidth = ref.current.control.cellWidth + 10;
      ref.current.control.update();
    }
  }, []);


  const handleBeforeRowHeaderDomAdd = useCallback((args) => {
    args.element = <EmptyResource />
  }, []);

    return (<>
      <button onClick={incrementCellWidth}>Set cell width</button>
      <button onClick={incrementCellWidthREF}>Set cell width REF</button>
      <DayPilotScheduler
      ref={ref}
                resources = {[
                {name: "Resource A", id: "A"},
                {name: "Resource B", id: "B"},
                {name: "Resource C", id: "C"},
                {name: "Resource D", id: "D"},
                {name: "Resource E", id: "E"},
                {name: "Resource F", id: "F"},
                {name: "Resource G", id: "G"}
            ]}
            onBeforeRowHeaderDomAdd={handleBeforeRowHeaderDomAdd}
            cellWidth={cellWidth}
        /></>
            
    );
}

export default Scheduler;