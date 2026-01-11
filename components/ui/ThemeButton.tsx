import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

type ThemeButtonProps = {
  theme: "dark" | "light";
  onClick: () => void;
};

export default function ThemeButton(props: ThemeButtonProps) {
  if (props.theme === "dark") {
    return <MdOutlineDarkMode onClick={props.onClick} />;
  }
  return <MdOutlineLightMode onClick={props.onClick} />;
}
