import { default as BarData } from '@App/components/model/ChartBar';
import './ChartBar.scss';


export type ChartBarProps = BarData & { 
  max: number;
}

function ChartBar(props: ChartBarProps): JSX.Element {
  const barFillHeight = (props.max > 0)? `${Math.round((props.value / props.max) * 100)}%` : "0%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}} />
      </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
  )
}

export default ChartBar;