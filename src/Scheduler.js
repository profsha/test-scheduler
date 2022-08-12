import {DayPilotScheduler} from "daypilot-pro-react";
import EmptyResource from './EmptyResource';
import { useCallback, useState } from 'react';

function Scheduler(props) {
  
  const [cellWidth, setCellWidth] = useState(40);

  const incrementCellWidth = useCallback(() => {
    setCellWidth((currentWidth) => {
      return currentWidth+10;
    })
  }, [setCellWidth]);
  const handleBeforeRowHeaderDomAdd = useCallback((args) => {
    args.element = <EmptyResource />
  }, []);

    return (<>
      <button onClick={incrementCellWidth}>Set cell width</button>
      <DayPilotScheduler
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