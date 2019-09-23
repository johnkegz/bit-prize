import fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';
import Prices from '../components/prices';

const home = (props) => {
  const { bpi: { time: {updated }}} = props;
  return (
  <Layout>
  <div>
    <h1>home</h1>
    <div>Check Bit coin price</div>
    <Prices bpi = {props.bpi} />
  </div>
  </Layout>);
};

home.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data
  }
}
export default home;