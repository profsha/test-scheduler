import {DayPilotScheduler} from "daypilot-pro-react";
import EmptyResource from './EmptyResource';
import {defaultSchedulerConfig} from './config'
import { useCallback, useState } from 'react';

function Scheduler(props) {
  
  const [key, setKey] = useState(40);

  const incrementKey = useCallback(() => {
    setKey((currentKey) => {
      return currentKey+10;
    })
  }, [setKey]);
  const handleBeforeRowHeaderDomAdd = useCallback((args) => {
    console.log(args)

    args.element =
        <EmptyResource />
  }, []);

    return (<>
      <button onClick={incrementKey}>ttteeeesssttt</button>
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
            {...defaultSchedulerConfig}
            cellWidth={key}
        /></>
            
    );
}

export default Scheduler;