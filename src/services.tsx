import { Datagrid, List, NumberField, TextField, SimpleList } from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';

export const ServiceList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={record => `${record.name}`}
                    secondaryText={record => `${record.category}`}
                    tertiaryText={record => `$${record.price}`}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <NumberField source="price" />
                    <NumberField source="duration" />
                    <TextField source="category" />
                    <TextField source="description" />
                </Datagrid>
            )}
        </List>
    );
};
