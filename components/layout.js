
import Head from 'next/Head';
import NavBar from './nav';

const Layout = (props) => (
    <div>
        <Head>
            <title>bitPrize</title>
            <link rel='stylesheet' href='https://bootswatch.com/4/cerulean/bootstrap.min.css' />
        </Head>
        <NavBar />
        {props.children}
    </div>
);

export default Layout;