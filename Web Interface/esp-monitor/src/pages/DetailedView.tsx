import { FC, lazy, useEffect, useState } from 'react'

// Firebase
import db from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const RenderLineChart = lazy(() => import('../components/RenderLineChart'));
const RenderAreaChart = lazy(() => import('../components/RenderAreaChart'))
const RenderBarChart = lazy(() => import('../components/RenderBarChart'))


type detailedProps = {

}

// chart data

let tempData:    any[] = [];
let humData:     any[] = [];
let waterData:   any[] = [];
let groundData:  any[] = [];
let airData:     any[] = [];
let soilData:    any[] = [];

const DetailedView:FC<detailedProps> = ({}) => {
  const chartDataLimit = 10;

  const [sensors, setSensors]: any = useState({});

  // Getting sensor readings
  useEffect(() => 
    onSnapshot(
    (collection(db,"Sensors")), 
        (snapshot) => 
        setSensors(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ), []);

  useEffect(() => {
    for(let i = 0; i < sensors.length; i++){
      switch(sensors[i].name){
        case 'temperature':
          if(tempData.length <= chartDataLimit){
            tempData.push(
              {"Temperature": sensors[i]?.reading,} //sensors[4].reading
            )
          }
          else{
            tempData.shift();
          }
        break;
        case 'humidity':
          if(humData.length <= chartDataLimit){
            humData.push(
              {"Humidity": sensors[i]?.reading,} //sensors[4].reading
            )
          }
          else{
            humData.shift();
          }
        break;
        case 'air quality':
          if(airData.length <= chartDataLimit){
            airData.push(
              {"Air PPM": sensors[i]?.reading,} //sensors[4].reading
            )
          }
          else{
            airData.shift();
          }
        break;
        case 'soil moisture':
          if(soilData.length <= chartDataLimit){
            soilData.push(
              {"Soil Moisture": sensors[i]?.reading,} //sensors[4].reading
            )
          }
          else{
            soilData.shift();
          }
        break;
        case 'ground movements':
          if(groundData.length <= chartDataLimit){
            groundData.push(
              {"Ground Movement": sensors[i]?.reading,} //sensors[4].reading
            )
          }
          else{
            groundData.shift();
          }
        break;
        case 'water level':
          if(waterData.length <= chartDataLimit){
            waterData.push(
              {"Water Level": sensors[i]?.reading,} //sensors[4].reading
            )
          }
          else{
            waterData.shift();
          }
        break;


      }
    }
  }, [sensors[0]?.reading, sensors[1]?.reading, sensors[2]?.reading, 
      sensors[3]?.reading, sensors[4]?.reading, sensors[5]?.reading])


  return (
    <div className="gap-6 mt-16 w-full h-full flex flex-col flex-wrap pb-10 px-2 sm:px-5">
      <div  className="flex items-center justify-center flex-wrap gap-6 w-full h-fit">
        {Array.isArray(sensors) && sensors.map(
          (sensor: any) => (
            <div key={sensor.id}>
              {
                sensor.id === "Temperature" ? 
                  <RenderLineChart 
                    sensorName={sensor.name}
                    sensorData={[...tempData]}
                    lines={[["Temperature", "#05B5C6"]]}
                  /> 
                :
                sensor.id === "Humidity" ? 
                  <RenderLineChart 
                    sensorName={sensor.name}
                    sensorData={[...humData]}
                    lines={[["Humidity", "#05B5C6"]]}
                  /> 
                :
                sensor.id === "AirQuality" ? 
                  <RenderBarChart 
                    sensorName={sensor.name}
                    sensorData={[...airData]}
                    lines={[["Air PPM", "#05B5C6"]]}
                    
                  /> 
                :
                sensor.id === "GroundMovements" ? 
                  <RenderLineChart 
                    sensorName={sensor.name}
                    sensorData={[...groundData]}
                    lines={[["Ground Movement", "#05B5C6"]]}
                  /> 
                :
                sensor.id === "WaterLevel" ? 
                  <RenderAreaChart 
                    sensorName={sensor.name}
                    sensorData={[...waterData]}
                    lines={[["Water Level", "#05B5C6", "#05B5C6"]]}
                  /> 
                :
                sensor.id === "SoilMoisture" ? 
                  <RenderLineChart 
                    sensorName={sensor.name}
                    sensorData={[...soilData]}
                    lines={[["Soil Moisture", "#05B5C6"]]}
                  /> 
                : 
                null
              }
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default DetailedView