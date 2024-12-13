import { useEffect, useState } from "react";
import axios from "axios";
import { TestRoute } from "../routes/api_routes";
import { Button } from "keep-react";
import { signOut } from "firebase/auth";
import { auth } from "../Config/firebaseconfig";
import { useNavigate } from "react-router-dom";

function App() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
      alert("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(TestRoute);
        setMessage(response.data.message);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setMessage("Error fetching data");
      }
    };

    fetchData();
  }, [message]);

  return (
    <>
      <h1 className="text-heading-1">{message}</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
}

export default App;
