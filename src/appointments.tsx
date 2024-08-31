import { Datagrid, DateField, List, ReferenceField, TextField, SimpleList } from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';

export const AppointmentList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={record => `${record.id} - ${record.status}`}
                    secondaryText={record => `${record.date}`}
                    tertiaryText={record => record.notes}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField source="customer_id" reference="customers" />
                    <ReferenceField source="provider_id" reference="providers" />
                    <ReferenceField source="service_id" reference="services" />
                    <DateField source="date" />
                    <TextField source="status" />
                    <TextField source="notes" />
                </Datagrid>
            )}
        </List>
    );
};
