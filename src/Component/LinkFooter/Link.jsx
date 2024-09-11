
import { MdNavigateNext } from "react-icons/md";
const LinkNav = (props) => {
  return (
    <li>
      <a href="/#">
        <MdNavigateNext />
        <span>{props.name}</span>
      </a>
    </li>
  );
};

export default LinkNav;
