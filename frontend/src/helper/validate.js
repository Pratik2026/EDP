import { useNavigate } from "react-router-dom";
import { auth } from "../Config/firebaseconfig";
import { useEffect } from "react";

const useValidateUser = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;

    if (!user) {
      navigate("/login");
    }
  }, [navigate]);
};

export default useValidateUser;
