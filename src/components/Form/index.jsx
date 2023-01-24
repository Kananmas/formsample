import { useFormik } from "formik";
import { Button } from "@mantine/core";
import validate from "../../scripts/validate";
import Forminputs from "./components/Forminput";
import Alertform from "./components/Alertform";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phonenumber: "",
      nationalcode: "",
      postalcode: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="info-form">
      <h3>Please fill this form to continue</h3>
      <form onSubmit={formik.handleSubmit}>
        <Forminputs formik={formik} Targetkey="firstName" title="First Name" />

        {formik.touched.firstName && formik.errors.firstName ? (
          <Alertform text={formik.errors.firstName} />
        ) : null}

        <Forminputs formik={formik} Targetkey="lastName" title="Last Name" />

        {formik.touched.lastName && formik.errors.lastName ? (
          <Alertform text={formik.errors.lastName} />
        ) : null}

        <Forminputs formik={formik} Targetkey="email" title="Email Address" />

        {formik.touched.email && formik.errors.email ? (
          <Alertform text={formik.errors.email} />
        ) : null}

        <Forminputs
          formik={formik}
          Targetkey="nationalcode"
          title="National Code"
        />

        {formik.touched.nationalcode && formik.errors.nationalcode ? (
          <Alertform text={formik.errors.nationalcode} />
        ) : null}

        <Forminputs
          formik={formik}
          Targetkey="phonenumber"
          title="Phone Number"
        />

        {formik.touched.phonenumber && formik.errors.phonenumber ? (
          <Alertform text={formik.errors.phonenumber} />
        ) : null}

        <Forminputs
          formik={formik}
          Targetkey="postalcode"
          title="Postal Code"
        />

        {formik.touched.postalcode && formik.errors.postalcode ? (
          <Alertform text={formik.errors.postalcode} />
        ) : null}

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
