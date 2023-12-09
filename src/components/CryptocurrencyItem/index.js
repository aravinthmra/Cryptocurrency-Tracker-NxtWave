import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = cryptoData
  return (
    <li className="table-header">
      <div className="table-header-cell coin-name1">
        <div className="coin-info-container1">
          <img className="coin-image1" src={currencyLogo} alt={currencyName} />
          <p className="table-header-cell coin-name1">{currencyName}</p>
        </div>
      </div>
      <p className="table-header-cell">{usdValue}</p>
      <p className="table-header-cell">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
