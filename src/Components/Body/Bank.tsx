import {useState} from 'react';

type FilterType = 'All' | 'RUBLS' | 'Dollars';



export const Bank = () => {

  const [money, setMoney] = useState([
    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    {banknots: 'RUBLS', value: 50, number: ' v1234567890'}
  ])

  const [buttonName, setButtonName] = useState<FilterType>('All')

  let currentMoney = money;
  if (buttonName === 'RUBLS') {
    currentMoney = money.filter(fm => fm.banknots === 'RUBLS');
  }
  if (buttonName === 'Dollars') {
    currentMoney = money.filter(fm => fm.banknots === 'Dollars');
  }
  const onClickFilterHandler = (buttonName: FilterType) => {
    setButtonName(buttonName);
  }

  return (

      <div>
        <div style={{height: '200px'}}>
          <ul>
          {currentMoney.map((money, index) => {
            return (
                <li key={index}>
                  <span>{money.banknots}</span>
                  <span>{money.value}</span>
                  <span>{money.number}</span>
                </li>
            )
          })}
        </ul>
        </div>

        <div style={{margin: '20px'}}>
          <button onClick={(event) => onClickFilterHandler('All')}>All</button>
          <button onClick={(event) => onClickFilterHandler('RUBLS')}>RUBLS</button>
          <button onClick={(event) => onClickFilterHandler('Dollars')}>Dollars</button>
        </div>
      </div>
  )
}
