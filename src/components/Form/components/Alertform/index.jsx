import { Alert } from "@mantine/core";

export default function Alertform(props) {
  return (
    <Alert color="red" className="form-alert">
      {props.text}
    </Alert>
  );
}
