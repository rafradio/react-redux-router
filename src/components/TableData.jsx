import { useDispatch, useSelector } from 'react-redux';
import { selectDatas, selectTitleByDate } from '../store/selectors';
import { TableBox } from './TableBox';


export const TableData = (props) => {
    const currentData = "15.08.2024";
    const datas = useSelector(selectDatas);
    const currentTitle = useSelector(state => selectTitleByDate(state, currentData));
    
    return (
        <>
          <h4>Курс по состоянию на {currentTitle.title}</h4>
          <TableBox datas={datas.filter(data => data.date == currentData)}/>
        </>
    );
}