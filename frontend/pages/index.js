import Script from "next/script";
import dynamic from 'next/dynamic';

const Interface = dynamic(() => import('../components/Interface.js'), {
  ssr: false
});

const Index = () => {
    return (
        <div>
            <link rel="stylesheet" href="/css/bootstrap.min.css"></link>
            <Script src="/js/snarkjs.min.js" />
            <Interface />
        </div>
    )
};

export default Index;