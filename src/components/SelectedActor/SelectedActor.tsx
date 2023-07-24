import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { loadActor } from "../../redux/action-creators/movie-action-creators";
import "./SelectedActor.css";
const SelectedActor = () => {
  const dispatch = useDispatch();
  const { actorId = "" } = useParams();
  useEffect(() => {
    dispatch(loadActor(+actorId));
  }, []);
  const navigate = useNavigate();
  return <div>Actor</div>;
};
export default SelectedActor;
