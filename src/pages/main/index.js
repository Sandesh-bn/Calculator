import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import firebase from '../../services/firebase';
import Loader from '../../components/loader';


const Main = () => {
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const listRef = firebase.database().ref('/list');
    listRef.push().then(({ key }) => {
      setId(key);
      setLoading(false);
    });

  }, []);

  if (loading) return <Loader />;

  return (
    <Redirect to={`/list/${id}`} />
  );
};

export default Main;
