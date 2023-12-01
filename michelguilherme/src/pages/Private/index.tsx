import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Private = () => {
    const auth = useContext(AuthContext);

    return (
        <div id="home-2">
            <h2>Página Privada</h2>

            Olá {auth.user?.name}, tudo bem?
        </div>
    );
}