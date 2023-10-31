/* eslint-disable react/jsx-key */
import React from "react";
import {
  CreateButton,
  Datagrid,
  FilterButton,
  FilterForm,
  List,
  ReferenceField,
  TextField,
  TextInput,
  Toolbar,
} from "react-admin";

const postFilters = [
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="Title" source="title" defaultValue="" />,
  <TextInput label="Id" source="id" defaultValue="1" />,
];

const ListActions = () => (
  <>
    <FilterForm filters={postFilters} />
    <Toolbar>
      <FilterButton filters={postFilters} />
      <CreateButton />
    </Toolbar>
  </>
);

const ListAlbums = () => {
  return (
    <List actions={<ListActions />}>
      <Datagrid rowClick="edit">
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="id" />
        <TextField source="title" />
      </Datagrid>
    </List>
  );
};

export default ListAlbums;
