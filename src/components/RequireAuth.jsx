import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser, selectUserLoading } from '../redux/user/selectors';

export default function RequireAuth({ children }) {
    const user = useSelector(selectUser);
    const loading = useSelector(selectUserLoading);

    if (loading) {
        return <div>Loading...</div>
    }

    if (!user?.id) {
        return <Navigate to="/login" replace />
    }
    
    return children
}