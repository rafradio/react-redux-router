import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'rsuite';
import './rsuitestyles.css';

const { Column, HeaderCell, Cell } = Table;

export const TableBox = (props) => {
    return (
        <Table
            height={470}
            width={450}
            data={props.datas}
        >
          <Column width={150} align="center" fixed>
            <HeaderCell>Масса слитка, г</HeaderCell>
            <Cell dataKey="weight" />
          </Column>

          <Column width={150} align="center">
            <HeaderCell>Цена за 1г, руб</HeaderCell>
            <Cell dataKey="rate" />
          </Column>

          <Column width={150} align="center">
            <HeaderCell>Стоимость</HeaderCell>
            <Cell dataKey="price" />
          </Column>
        </Table>
    );
}