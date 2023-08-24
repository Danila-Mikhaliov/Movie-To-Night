import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { signUpActivation } from "../../redux/action-creators/user-action-creators";

const SignUpActivation = () => {
  const { uid = "", token = "" } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      signUpActivation({
        uid,
        token,
      })
    );
  }, []);
  return <div>Activation Completed</div>;
};

export default SignUpActivation;
