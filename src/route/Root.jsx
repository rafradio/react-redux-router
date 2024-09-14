import { useDispatch, useSelector } from 'react-redux';
import { selectDatas, selectButtonState, selectNavState, selectCurrentDay, selectFlagForNextDay } from '../store/selectors';
import { Outlet, Link } from "react-router-dom";
import '../index.css';
import { TableData } from '../components/TableData';
import { btnTableClick, toggleNavLink } from '../features/CounterSlice';
import { useState } from "react";
import { NextDay } from '../components/NextDay';

export const Root = () => {
    const dispatch = useDispatch();
    
    const buttonType = useSelector(selectButtonState);
    const clkButton = () => {
      dispatch(btnTableClick());
      dispatch(toggleNavLink());
    }
    
    let dataForTable = {date: useSelector(selectCurrentDay), flag: useSelector(selectFlagForNextDay)};

    return (
      <>
        <div id="sidebar">
          <h1>React Router Redux Project</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <button>New</button>
          </div>
          <nav>
            <ul>
              <li>
                <a>Таблица 1</a>
              </li>
              <li>
                <a>Таблица 2</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail" className='detail'>
          <TableData dataNext={dataForTable}/>
          <div id='info'>Котировки на следующий рабочий день</div>
          <div id='show' onClick={clkButton}>{buttonType}</div>
          {dataForTable.flag ? <NextDay dataNext={dataForTable}/>: <></>}
        </div>
      </>
    );
  }