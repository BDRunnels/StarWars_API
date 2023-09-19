import { useState, useEffect } from "react";
import { MDBSwitch } from 'mdb-react-ui-kit';

const Toggler = () => {
    const [theme, setTheme] = useState('dark-mode');

    const toggleTheme = () => {
        if (theme === 'light-mode') {
        setTheme('dark-mode')
        } else {
        setTheme('light-mode')
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return(
        <div className="pt-2 text-end">
            <MDBSwitch inline id='flexSwitchCheckDefault' label={theme === 'dark-mode' ? 'Dark' : 'Light'} className='bg-secondary' onClick={toggleTheme} />
        </div>
    );
};

export default Toggler;
