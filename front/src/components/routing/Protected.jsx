
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useuserContext } from "../context/userContext";

const Protected = ({ children }) => {
  const [autorizado, setAutorizado] = useState(false);
  const navegate = useNavigate();
  const { user } = useuserContext();
  return children;
};

export default Protected;
