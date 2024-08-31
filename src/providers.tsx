import { Datagrid, EmailField, List, NumberField, TextField, SimpleList } from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';

export const ProviderList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={record => `${record.name}`}
                    secondaryText={record => `${record.phone}`}
                    tertiaryText={record => record.email}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <NumberField source="experience" />
                    <NumberField source="rating" />
                    <TextField source="phone" />
                    <EmailField source="email" />
                </Datagrid>
            )}
        </List>
    );
};
