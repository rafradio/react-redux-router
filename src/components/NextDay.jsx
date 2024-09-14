import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectTitleByDate, selectDatasByDate } from '../store/selectors';
import { TableBox } from './TableBox';

export const NextDay = (props) => {
    const d = new Date();
    let currentHour = d.getHours();
    const currentTitle = useSelector(state => selectTitleByDate(state, props.dataNext.date));
    let datas = props.dataNext.flag ? useSelector(state => selectDatasByDate(state,  props.dataNext.date)) : null;
    const BlockWithData = () => {
      return (
        <>
          <h4>Курс по состоянию на {currentTitle.title} </h4>
          <TableBox datas={datas.data}/>
        </>
      );
    }

    return (
      currentHour >= 17 ? <BlockWithData /> : <div>Котировки обновляются в рабочие дни (после 17:00)»</div>
    );

}