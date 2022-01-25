import ActiveContent from 'components/ActiveContent';
import AllContent from 'components/AllContent';
import CompletedContent from 'components/CompletedContent';
import Layout from 'components/Layout';
import TodoContextProvider from 'context/TodoContext';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
    const [selected, setSelected] = useState<string>('All');

    useEffect(() => {
        console.log(selected);
    }, [selected]);

    const contents = [
        {
            name: 'All',
            component: <AllContent />
        },
        {
            name: 'Active',
            component: <ActiveContent />
        },
        {
            name: 'Completed',
            component: <CompletedContent />
        }
    ];

    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>
            <main>
                <TodoContextProvider>
                    <Layout setSelected={setSelected} selected={selected}>
                        <AnimatePresence>
                            {contents.map(({ name, component }) => {
                                return name == selected && component;
                            })}
                        </AnimatePresence>
                    </Layout>
                </TodoContextProvider>
            </main>
        </>
    );
};

export default Home;
