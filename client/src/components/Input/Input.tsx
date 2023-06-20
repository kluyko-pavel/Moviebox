import { IInput } from "../../types";
import "./Input.scss";

export const Input = (props: IInput) => {
  return (
    <label className="input-label">
      {props.labelName}
      <input
        type={props.type}
        className="form-input"
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
        autoFocus={props.autoFocus}
        disabled={!props.isActive}
        value={props.value}
        onChange={(e: any) => props.callback(e)}
      />
    </label>
  );
};
