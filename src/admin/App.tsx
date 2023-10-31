import * as React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  required,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import ListAlbums from "./ListAlbums";
import Dashboard from "./Dashboard";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import CommentIcon from "@mui/icons-material/Comment";
import AlbumIcon from "@mui/icons-material/Album";
import GroupIcon from "@mui/icons-material/Group";
import BurstModeIcon from "@mui/icons-material/BurstMode";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

export const AlbumCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" validate={[required()]} fullWidth />
      <TextInput source="id" validate={[required()]} />
      <TextInput source="user" validate={[required()]} />
      <ReferenceInput source="name" reference="users" />
    </SimpleForm>
  </Create>
);

const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={LocalPostOfficeIcon}
    />
    <Resource
      name="comments"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={CommentIcon}
    />
    <Resource
      name="albums"
      list={ListAlbums}
      edit={EditGuesser}
      show={ShowGuesser}
      create={AlbumCreate}
      icon={AlbumIcon}
    />
    <Resource
      name="photos"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={BurstModeIcon}
    />
    <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={GroupIcon}
      recordRepresentation="name"
    />
  </Admin>
);

export default App;
