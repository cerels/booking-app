import jsonServerProvider from 'ra-data-json-server';

export const dataProvider = jsonServerProvider(
    'https://my-json-server.typicode.com/cerels/serverjson/'
);