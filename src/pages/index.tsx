import AllContent from 'components/AllContent';
import Layout from 'components/Layout';
import TodoContextProvider from 'context/TodoContext';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
    const [selected, setSelected] = useState<string>('All');

    useEffect(() => {
        console.log(selected);
    }, [selected]);

    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>
            <main>
                <TodoContextProvider>
                    <Layout setSelected={setSelected} selected={selected}>
                        {selected === 'All' && <AllContent />}
                    </Layout>
                </TodoContextProvider>
            </main>
        </>
    );
};

export default Home;
