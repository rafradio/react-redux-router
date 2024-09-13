import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { TableBox } from './TableBox';

export const NextDay = (props) => {
    const { dateID } = useParams();
    let datas = props.dataNext.flag ? useSelector(state => state.counter.dataTable.filter(data => data.date == props.dataNext.date)) : null;
    // if (dateID == 2) {
    //   datas = useSelector(state => state.counter.dataTable.filter(data => data.date == "16.08.2024"));
    // }
    
    return (
      <>
        <h4>Курс по состоянию на {props.dataNext.date} </h4>
        <TableBox datas={datas}/>
      </>
    );
}