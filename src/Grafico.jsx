import { LineChart, Line, CartesianGrid, XAxis, YAxis,RadialBarChart,RadialBar, Legend, Tooltip } from 'recharts';
import App from './App.jsx'
const data = [{name: 'Gloss Vermelho', uv: 20, pv: 2400, amt: 2400},{name: 'Gloss Brilho', uv: 40, pv: 2400, amt: 2400}, 
{name: 'Gloss Refletivo', uv: 12, pv: 2400, amt: 2400}, {name: 'gloss chocolate', uv: 56, pv: 2400, amt: 2400}, {name: 'Gloss Verde', uv: 39, pv: 2400, amt: 2400}];



export default function Grafico() {

    return (
    <>
    <App/>
    <div>
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    </div>
    <div>
        <RadialBarChart 
        width={730} 
        height={250} 
        innerRadius="10%" 
        outerRadius="80%" 
        data={data} 
        startAngle={180} 
        endAngle={0}
        >
        <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
        <Tooltip />
        </RadialBarChart>
    </div>
    </>
    );
}


