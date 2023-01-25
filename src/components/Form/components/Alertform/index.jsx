import { Alert } from "@mantine/core";
import { ExclamationCircleOutlined } from "@ant-design/icons"

export default function Alertform(props) {
  return (
    <Alert icon={<ExclamationCircleOutlined />} color="red" className="form-alert" variant="outline">
      {props.text}
    </Alert>
  );
}
