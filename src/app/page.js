'use client';
import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
// import CityTicker from './CityTicker';
import Script from 'next/script';
import Register from './Register'
import Result from './Result.js'

// import React, { useState, useEffect, useReducer, useRef } from 'react';
// import ReactMarkdown from 'react-markdown';
// // import remarkGfm from 'remark-gfm';
// // import { data } from '../city-data';
// // import DatePicker from 'react-datepicker';
// // import 'react-datepicker/dist/react-datepicker.css';
// import MailchimpFormContainer from './components/MailchimpForm/MailChimpFormContainer';
// // import { AFFILIATE_URL } from '@/constants';
// import Script from 'next/script';



export default function Home() {
  const [request, setRequest] = useState({
    startDate: '',
    daysNum: undefined,
    city: '',
  });
  const [disableButton, setDisableButton] = useState(true);
  const [error, setError] = useState({ daysNum: false });
  const [itinerary, setItinerary] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const currentCity = useRef('');



  let days = itinerary.split('Day');

  if (days.length > 1) {
    days.shift();
  } else {
    days[0] = '1' + days[0];
  }

  return (

    <main>
      <Register />


   </main>
       

  );
}

const styles = {
  cityHeadingStyle: {
    // color: 'white',
    marginBottom: '20px',
  },
  header: {
    textAlign: 'center',
    marginTop: '130px',
    color: '#c683ff',
    fontWeight: '900',
   
  fontFamily: 'Sedgwick Ave Display',
    fontSize: '98px',
  },
  daysError: {
    color: 'red',
    fontSize: '11px',
    margin: '5px 0',
  },
  input: {
    padding: '10px 14px',
    marginBottom: '4px',
    outline: 'none',
    fontSize: '16px',
    width: '100%',
    borderRadius: '8px',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px auto 0px',
    padding: '20px',
    // boxShadow: '0px 0px 12px rgba(198, 131, 255, .2)',
    borderRadius: '10px',
  },
  result: {
    color: 'white',
  },
};
