import { useDispatch, useSelector } from 'react-redux';
import { selectDatas, selectTitleByDate, selectDatasByDate } from '../store/selectors';
import { TableBox } from './TableBox';


export const TableData = (props) => {
    const currentDate = "15.08.2024";
    // const datas = useSelector(selectDatas);
    const datas = useSelector(state => selectDatasByDate(state, currentDate));
    const currentTitle = useSelector(state => selectTitleByDate(state, currentDate));
    
    return (
        <>
          <h4>Курс по состоянию на {currentTitle.title}</h4>
          <TableBox datas={datas.data}/>
        </>
    );
}