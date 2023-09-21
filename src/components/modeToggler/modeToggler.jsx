import { useState, useEffect } from "react";
import { 
    MDBDropdownItem, 
    MDBSwitch ,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdown
} from 'mdb-react-ui-kit';

const Toggler = () => {
    const [theme, setTheme] = useState('dark-mode');

    const toggleTheme = (theme) => {
        switch(theme) {
            case 'light-mode':
                setTheme('light-mode');
                break;
            case 'dark-mode':      
                setTheme('dark-mode');
                break;
            case 'sith-mode':
                setTheme('sith-mode');
                break;
            case 'jedi-mode':
                setTheme('jedi-mode');
                break;
            default:
                setTheme('dark-mode')
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme])


    return(
        <div className="pt-2 mx-3">
            {/* <MDBSwitch inline id='flexSwitchCheckDefault' label={theme === 'dark-mode' ? 'Dark' : 'Light'} className='bg-secondary' onClick={toggleTheme} /> */}
            <MDBDropdown>
                <MDBDropdownToggle color='secondary' className="shadow" >Mode</MDBDropdownToggle>
                <MDBDropdownMenu dark className="mt-2 ">
                    <MDBDropdownItem onClick={()=> toggleTheme('light-mode')} link >Light</MDBDropdownItem>
                    <MDBDropdownItem onClick={()=> toggleTheme('dark-mode')} link >Dark</MDBDropdownItem>
                    <MDBDropdownItem onClick={()=> toggleTheme('jedi-mode')} link >Jedi</MDBDropdownItem>
                    <MDBDropdownItem onClick={()=> toggleTheme('sith-mode')} link >Sith</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
        </div>
    );
};

export default Toggler;
