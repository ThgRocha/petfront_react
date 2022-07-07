import { Box, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <Box container="nav" className="menu" sx={{ display: 'flex' }}>
            <MenuItem>
                <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/dashboard">Dashboard</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/usuarios">Usuários</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/login">Login</Link>
            </MenuItem>
        </Box>
    );
}
export default Menu;