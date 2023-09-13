import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Assuming your logout endpoint uses the DELETE method
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // The logout was successful, you can clear any local user state here if needed
          // For example, if you were using state to track the user's login status, you can reset it.
          navigate("/");
        } else {
          // Handle logout failure, maybe display an error message
          console.error("Logout failed:", response.statusText);
          navigate("/");
        }
      })
      .catch((error) => {
        // Handle network errors here
        console.error("Network error during logout:", error);
        navigate("/");
      });
  }, [navigate]);

  return null; // Since this component doesn't render anything, return null
}

export default Logout;
