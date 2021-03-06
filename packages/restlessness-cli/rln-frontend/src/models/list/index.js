import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const ModelsList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="dao" />
    </Datagrid>
  </List>
);

export default ModelsList;
