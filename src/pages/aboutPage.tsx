import { NavLink } from "react-router";

function aboutPage(){
  return (
    <div className="text-3xl">
      <div>
        <NavLink to="/">main</NavLink>
        <div>AboutPage</div>
      </div>
    </div>
  );
}

export default aboutPage;