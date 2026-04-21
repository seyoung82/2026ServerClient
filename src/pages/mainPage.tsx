import { NavLink } from "react-router";

function mainPage(){
  return (
    <>
      <div className="text-3xl">
          <div className="flex">
            <NavLink to="/about">about</NavLink>
          </div>
        <div>Main Page</div>
      </div>
    </>
  );
}

export default mainPage;
