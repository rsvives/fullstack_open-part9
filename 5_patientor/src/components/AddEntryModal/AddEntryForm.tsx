
import { SyntheticEvent, useState } from "react";
import { EntryType, EntryWithoutId } from "../../types";
import { Button, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { assertNever } from "../../utils";

interface Props {
    onSubmit: (entry: EntryWithoutId) => void;
    onCancel: () => void
}

const typeOptions: EntryType[] = Object.values(EntryType).map(e => e);
console.log(typeOptions);

const AddEntryForm = ({ onSubmit, onCancel }: Props) => {

    const [description, setDescription] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [specialist, setSpecialist] = useState<string>('');
    const [diagnosisCodes, setDiagnosisCodes] = useState<string>('');
    const [selectedType, setSelectedType] = useState<EntryType>(EntryType.HealthCheck);
    const [healthCheckRating, setHealthCheckRating] = useState(0);
    const [dischargeDate, setDischargeDate] = useState('');
    const [dischargeCriteria, setDischargeCriteria] = useState('');
    const [sickLeaveStart, setSickLeaveStart] = useState('');
    const [sickLeaveEnd, setSickLeaveEnd] = useState('');
    const [employerName, setEmployerName] = useState('');


    const onTypeChange = (event: SelectChangeEvent<string>) => {
        event.preventDefault();
        if (typeof event.target.value === 'string') {
            const selected = Object.values(EntryType).find(t => t.toString() === event.target.value);
            console.log('selected value:', selected);
            if (selected) {
                setSelectedType(selected);
            }
        }
    };

    const healthCheckEntryForm = () => {
        return (
            <>
                <TextField label="healthCheckRating" type="number" value={healthCheckRating} fullWidth onChange={(ev) => setHealthCheckRating(Number(ev.target.value))} />
            </>
        );
    };
    const hospitalEntryForm = () => {
        return (
            <>
                <TextField label="Discharge Date" type="date" value={dischargeDate} fullWidth onChange={(ev) => setDischargeDate(ev.target.value)} />
                <TextField label="Discharge Criteria" value={dischargeCriteria} fullWidth onChange={(ev) => setDischargeCriteria(ev.target.value)} />
            </>
        );
    };
    const occupationalHealthcareEntryForm = () => {
        return (
            <>
                <TextField label="Sick Leave Start" type="date" value={sickLeaveStart} fullWidth onChange={(ev) => setSickLeaveStart(ev.target.value)} />
                <TextField label="Sick Leave End" type="date" value={sickLeaveEnd} fullWidth onChange={(ev) => setSickLeaveEnd(ev.target.value)} />
                <TextField label="employerName" value={employerName} fullWidth onChange={(ev) => setEmployerName(ev.target.value)} />
            </>
        );
    };

    const baseEntryToSubmit = {
        date,
        specialist,
        diagnosisCodes: diagnosisCodes.split(','),
        description,
    };

    const entryToSubmit: { [key in EntryType]: EntryWithoutId } = {
        [EntryType.HealthCheck]: {
            ...baseEntryToSubmit,
            type: EntryType.HealthCheck,
            healthCheckRating,
        },
        [EntryType.Hospital]: {
            ...baseEntryToSubmit,
            type: EntryType.Hospital,
            discharge: {
                criteria: dischargeCriteria,
                date: dischargeDate
            },
        },
        [EntryType.OccupationalHealthcare]: {
            ...baseEntryToSubmit,
            type: EntryType.OccupationalHealthcare,
            employerName,
            sickLeave: {
                startDate: sickLeaveStart,
                endDate: sickLeaveEnd
            },
        }
    }

    const selectedEntryForm = (): JSX.Element => {
        switch (selectedType) {
            case EntryType.HealthCheck:
                return healthCheckEntryForm()
            case EntryType.Hospital:
                return hospitalEntryForm()
            case EntryType.OccupationalHealthcare:
                return occupationalHealthcareEntryForm()
            default:
                return assertNever(selectedType);
        }

    }


    const addEntry = (event: SyntheticEvent) => {
        event.preventDefault();
        if (entryToSubmit) {
            onSubmit(entryToSubmit[selectedType]);
        }

        // console.log(entryToSubmit);
    };




    return (
        <>
            <form onSubmit={addEntry} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <TextField label="Date" type="date" placeholder="" value={date} fullWidth onChange={(ev) => setDate(ev.target.value)} />
                <TextField label="Description" value={description} fullWidth onChange={(ev) => setDescription(ev.target.value)} />
                <TextField label="Specialist" value={specialist} fullWidth onChange={(ev) => setSpecialist(ev.target.value)} />
                <TextField label="diagnosisCodes" value={diagnosisCodes} fullWidth onChange={(ev) => setDiagnosisCodes(ev.target.value)} />
                <InputLabel>Type:</InputLabel>
                <Select label={'Type'} onChange={onTypeChange} value={selectedType}>
                    {typeOptions.map(t => <MenuItem key={t} value={t} >{t}</MenuItem>)}
                </Select>
                {selectedEntryForm()}
                {/* <DifferentEntryForm type={selectedType} data={data}/> */}
                <Grid style={{ justifySelf: 'flex-end', marginLeft: 'auto' }}>
                    <Button color="primary" type="button" onClick={onCancel}>Close</Button>
                    <Button color="primary" variant="contained" type="submit">Add</Button>
                </Grid>
            </form>

        </>
    );
};

export default AddEntryForm;