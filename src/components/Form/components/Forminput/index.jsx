import { Input } from "@mantine/core";

export default function Forminputs(props) {
  return (
    <div className = 'form-input'>
      <label htmlFor="firstName">{props.title}</label>
      <Input
        id={props.Targetkey}
        name={props.Targetkey}
        type={props.type ? props.type : "text"}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        value={props.formik.values[props.Targetkey]}
      />
      {props.children}
    </div>
  );
}
