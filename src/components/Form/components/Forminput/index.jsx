import { Input } from "@mantine/core";

export default function Forminputs(props) {
  return (
    <>
      <label htmlFor="firstName">{props.title}</label>
      <Input
        id={props.Targetkey}
        name={props.Targetkey}
        type={props.Targetkey === "email" ? "email" : "text"}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        value={props.formik.values[props.Targetkey]}
      />
    </>
  );
}
