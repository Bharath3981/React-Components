import { useEffect } from "react";

const ArrayMethodsTopic = () => {
  useEffect(() => {
    const firstMenu: HTMLAnchorElement | any =
      document.querySelector("#subMenu a");
    firstMenu.className = "nav-sub-menu active";
    console.log(firstMenu);
    return () => {
      firstMenu.className = "nav-sub-menu";
    };
  }, []);
  return <div>ArrayMethodsTopic</div>;
};

export default ArrayMethodsTopic;
