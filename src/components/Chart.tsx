import ChartBar from "@App/components/ChartBar";
import { default as BarData } from '@App/components/model/ChartBar';
import './Chart.scss';

export type ChartProps = {
  dataPoints: BarData[];
}

function Chart(props: ChartProps): JSX.Element {
  let max = 0;
  for (const point of props.dataPoints) {
    max = (point.value > max)? point.value : max;
  }
  return (
    <div className="chart">
      {
        props.dataPoints.map((dataPoint: BarData, index: number): JSX.Element => 
          <ChartBar 
            value={dataPoint.value} 
            max={max} 
            label={dataPoint.label}
            key={index}
          />
        )
      }
    </div>
  );
}

export default Chart;