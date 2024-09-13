import { useDispatch, useSelector } from 'react-redux';
import { selectDatas } from '../store/selectors';
import { TableBox } from './TableBox';


export const TableData = (props) => {
    
    let datas = useSelector(selectDatas);
    const currentData = "15.08.2024";
    datas = datas.filter(data => data.date == currentData);
    
    return (
        <>
          <h4>Курс по состоянию на {currentData}</h4>
          <TableBox datas={datas}/>
        </>
    );
}