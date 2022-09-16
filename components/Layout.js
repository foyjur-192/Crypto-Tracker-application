import Head from "next/head";
import Link from "next/link";



const Layout = ({children, title="Tracker Application"}) => {
    return (
        <div className="background" >
            <Head>
            <title>{title}</title>
            </Head>
            
            <main>{children}</main>
        </div>
    );
};

export default Layout;