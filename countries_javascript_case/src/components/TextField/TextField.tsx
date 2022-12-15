import { Dispatch, memo, SetStateAction } from "react";
import "./textfield.scss";

type Props = {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const TextField = ({ value, setValue, placeholder, type }: Props) => (
  <input
    className="textfield"
    type={type}
    placeholder={placeholder}
    onChange={(e) => setValue(e.target.value)}
    value={value}
  />
);

export default memo(TextField);
