import { Male as MaleIcon, Female as FemaleIcon, HelpOutline } from '@mui/icons-material';
import { Gender } from "../types";

const GenderIcon = ({gender}:{gender: Gender | undefined} )=>{
    
    if (gender){
        const icon = {
            [Gender.Female]: <FemaleIcon titleAccess={Gender.Female} />,
            [Gender.Male]: <MaleIcon titleAccess={Gender.Male}/>,
            [Gender.Other]: <HelpOutline titleAccess={Gender.Other}/>,
        };

        return icon[gender]; 
    }
    return '';
};
export default GenderIcon;