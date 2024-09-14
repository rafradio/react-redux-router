import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectTitleByDate } from '../store/selectors';
import { TableBox } from './TableBox';

export const NextDay = (props) => {
    const d = new Date();
    let currentHour = d.getHours();
    const currentTitle = useSelector(state => selectTitleByDate(state, props.dataNext.date));
    let datas = props.dataNext.flag ? useSelector(state => state.counter.dataTable.filter(data => data.date == props.dataNext.date)) : null;
    const BlockWithData = () => {
      return (
        <>
          <h4>Курс по состоянию на {currentTitle.title} </h4>
          <TableBox datas={datas}/>
        </>
      );
    }

    return (
      currentHour >= 9 ? <BlockWithData /> : <div>Котировки обновляются в рабочие дни (после 17:00)»</div>
    );

}