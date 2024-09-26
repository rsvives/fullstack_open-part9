import { Dialog, DialogTitle, DialogContent, Divider, Alert } from '@mui/material';



// import { PatientFormValues } from "../../types";
import AddEntryForm from './AddEntryForm';
import { EntryWithoutId } from '../../types';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (entry:EntryWithoutId)=>void;
  error?: string;
}

const AddEntryModal = ({ modalOpen, onClose, onSubmit, error }: Props) => (
  <Dialog fullWidth={true} open={modalOpen} onClose={() => onClose()}>
    <DialogTitle>Add a new patient</DialogTitle>
    <Divider />
    <DialogContent>
      {error && <Alert severity="error">{error}</Alert>}
      {/* <AddPatientForm onSubmit={onSubmit} onCancel={onClose}/> */}
        <AddEntryForm onCancel={onClose} onSubmit={onSubmit}/>
    </DialogContent>
  </Dialog>
);


export default AddEntryModal;