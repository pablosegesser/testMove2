import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { action_auth_startCheck } from "./Redux/actions/auth";
import { AppRouter } from "./Routes";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(action_auth_startCheck());
    }, [dispatch]);

    return <AppRouter />;
};

export default App;
