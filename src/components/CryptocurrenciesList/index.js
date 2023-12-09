import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoPriceList: []}

  componentDidMount() {
    this.fetchCryptoPrices()
  }

  fetchCryptoPrices = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(item => ({
      id: item.id,
      currencyLogo: item.currency_logo,
      currencyName: item.currency_name,
      usdValue: item.usd_value,
      euroValue: item.euro_value,
    }))
    this.setState({cryptoPriceList: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, cryptoPriceList} = this.state
    return (
      <div className="bg-container1">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="bg-container1">
            <h1 className="main-heading1">Cryptocurrency Tracker</h1>
            <img
              className="bg-image1"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <ul className="table-body">
              <li className="table-header">
                <p className="table-header-cell coin-name1">Coin Type</p>
                <p className="table-header-cell">USD</p>
                <p className="table-header-cell">EURO</p>
              </li>
              {cryptoPriceList.map(item => (
                <CryptocurrencyItem key={item.id} cryptoData={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
