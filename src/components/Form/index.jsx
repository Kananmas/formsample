import { useFormik } from "formik";
import { Button } from "@mantine/core";
import validate from "../../scripts/validate";
import Forminputs from "./components/Forminput";
import Alertform from "./components/Alertform";
import { Checkbox } from "@mantine/core";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      username: "",
      password: "",
      lastName: "",
      email: "",
      phonenumber: "",
      nationalcode: "",
      postalcode: "",
      agree: false,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="info-form">
      <h3>Please Sign Up To Continue</h3>
      <form onSubmit={formik.handleSubmit}>
        <Forminputs formik={formik} Targetkey="firstName" title="Name:">
          {formik.touched.firstName && formik.errors.firstName ? (
            <Alertform text={formik.errors.firstName} />
          ) : null}
        </Forminputs>

        <Forminputs formik={formik} Targetkey="username" title="Userame:">
          {formik.touched.username && formik.errors.username ? (
            <Alertform text={formik.errors.username} />
          ) : null}
        </Forminputs>

        <Forminputs formik={formik} type="password" Targetkey="password" title="Password:">
          {formik.touched.password && formik.errors.password ? (
            <Alertform text={formik.errors.password} />
          ) : null}
        </Forminputs>

        <Forminputs formik={formik} Targetkey="lastName" title="Family Name:">
          {formik.touched.lastName && formik.errors.lastName ? (
            <Alertform text={formik.errors.lastName} />
          ) : null}
        </Forminputs>

        <Forminputs formik={formik} type="email" Targetkey="email" title="Email:">
          {formik.touched.email && formik.errors.email ? (
            <Alertform text={formik.errors.email} />
          ) : null}
        </Forminputs>

        <Forminputs formik={formik} Targetkey="nationalcode" title="National Code:">
          {formik.touched.nationalcode && formik.errors.nationalcode ? (
            <Alertform text={formik.errors.nationalcode} />
          ) : null}
        </Forminputs>

        <Forminputs formik={formik} Targetkey="phonenumber" title="Phone Number:">
          {formik.touched.phonenumber && formik.errors.phonenumber ? (
            <Alertform text={formik.errors.phonenumber} />
          ) : null}
        </Forminputs>

        <Forminputs formik={formik} Targetkey="postalcode" title="Postalcode:">
          {formik.touched.postalcode && formik.errors.postalcode ? (
            <Alertform text={formik.errors.postalcode} />
          ) : null}
        </Forminputs>


        <div className="button-section">
          <Checkbox className="check-box" id="agree" name="agree" onChange={formik.handleChange} label="Agree with terms of service" />
          <Button type="submit" disabled={!formik.values.agree}>Sign up</Button>
        </div>
      </form>
    </div>
  );
}
