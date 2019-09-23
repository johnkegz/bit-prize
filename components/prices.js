class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render() {
        const { currency } = this.state;
        let list = '';
        const { bpi: {bpi:{ USD: {code, description, rate}}}} = this.props;
        if(this.state.currency === 'USD'){
            list = <li className="list-group-item">
                        Bitcoin Rate for {this.props.bpi.bpi.USD.description}: 
                        <span className="badge badge-primary">
                            {this.props.bpi.bpi.USD.code}
                        </span>
                        <strong>{this.props.bpi.bpi.USD.rate}</strong>
                    </li>
        }else if(currency === 'GBP') {
            list = <li className="list-group-item">
                    Bitcoin Rate for {this.props.bpi.bpi.GBP.description}: 
                    <span className="badge badge-primary">
                        {this.props.bpi.bpi.GBP.code}
                    </span>
                    <strong>{this.props.bpi.bpi.GBP.rate}</strong>
                </li>
        }
        else if(currency === 'EUR'){
            list = <li className="list-group-item">
                        Bitcoin Rate for {this.props.bpi.bpi.EUR.description}: 
                        <span className="badge badge-primary">
                            {this.props.bpi.bpi.EUR.code}
                        </span>
                        <strong>{this.props.bpi.bpi.EUR.rate}</strong>
                    </li>
        }
        return (
        <div>
            <ul className="list-group">
                {list}
                <br/>
                <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </ul>
        </div>
        );
    }
}

export default Prices;