import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { checkUser } from "../../store/slices/userSlice";

export default function ProtectedRoute({ children }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.user);

    //authentication check when component mounts
    useEffect(() => {
        if (!isLoggedIn) {
            const isAuthenticated = dispatch(checkUser());
            if (!isAuthenticated) {
                router.push('/login');
            }
        }
    }, [dispatch, isLoggedIn, router])

    // If not logged in, do not render the children
    if (!isLoggedIn) {
        return null;
    }

    return children;
}