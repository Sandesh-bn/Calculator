import React, { useMemo } from 'react';
import { useParams } from 'react-router';
import { useList } from 'react-firebase-hooks/database';
import Grid from '@material-ui/core/Grid';
import Calculator from "./Calculator";
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import firebase from '../../services/firebase';
import Loader from '../../components/loader';


const List = () => {
  const { id } = useParams();
  const currentListRef = firebase.database().ref(`list/${id}`).orderByKey().limitToLast(10);
  const [snapshots, loading, error] = useList(currentListRef);

  const rows = useMemo(() => {
    if (snapshots) {
      const memoizedSnapshots = [...snapshots];
      memoizedSnapshots.reverse();
      return memoizedSnapshots;
    }
    return [];
  }, [snapshots]);



  if (loading) {
    return (
      <Grid container justify="center"
      alignItems="center">
        <Loader  />
      </Grid>
    )
  }
  if (error) return console.error(error);

  const handleSave = (calculation) => {
    currentListRef.ref.push(calculation);
  };

  const handleDelete = deletableId => () => {
    firebase.database().ref(`list/${id}/${deletableId}`).remove();
  };

  return (
    <div>
      <Grid container direction="row" spacing={8} justify="center"
  alignItems="center">
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <div >
            <Calculator handleSave={handleSave}/>
          </div>
        </Grid>

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {rows.map((value, index) => (
                  <TableRow key={value.key}>
                    <TableCell>
                      <Grid container spacing={4}>
                        <Grid item>
                          <IconButton aria-label="delete" size="small" onClick={handleDelete(value.key)}>
                            <DeleteIcon />
                          </IconButton>
                        </Grid>

                        <Grid item>
                          <Typography>
                            {value.val()}
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default List;
