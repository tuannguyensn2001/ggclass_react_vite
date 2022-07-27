import useAuthStore from '~/store/useAuthStore';
import { Navigate } from 'react-router-dom';

function AuthComposition(Component) {
    return function (props) {
        const user = useAuthStore((state) => state.user);

        if (!Boolean(user)) {
            return <Navigate to={'/login'} />;
        }

        return <Component {...props} />;
    };
}

export default AuthComposition;
