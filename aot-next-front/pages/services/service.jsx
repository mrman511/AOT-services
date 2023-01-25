import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Head from 'next/head';

import Header from '../../components/global/Header';
import Footer from '../../components/global/Footer'
import styles from '../../styles/Home.module.scss';

import ServiceHeader from '../../components/services/ServiceHeader';
import ServiceFullPage from '../../components/services/ServiceFullPage';
import servicePageStyles from '../../styles/ServicePage.module.scss';
import servicesStyles from '../../styles/Services.module.scss';

import getServiceData from '../../utils/helpers/api';

export default function Service(){
  const router = useRouter();
  const [serviceId, setServiceId] = useState(+router.query.id);
  const [currentService, setCurrentService] = useState(undefined);

  useEffect(() => {

    if (+router.query.id !== serviceId){
      setServiceId(+router.query.id);
    }
    
    if (serviceId && (!currentService || serviceId !== currentService.id)){
      getServiceData(serviceId, setCurrentService)
    }
    
  },[serviceId, currentService, router.query.id])

  return (
    <>
      <Head>
        <title>Contact - AOT Services</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header styles={ styles } alt={ true }/>

      <main className={ styles.main } >
        {/* <ServiceHeader styles={ servicesStyles }/> */}
        { currentService && <ServiceFullPage styles={ servicePageStyles } service={ currentService } />}
      </main>

      <Footer styles={ styles }/>
    </>
  );
}