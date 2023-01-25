export default function validate(values) {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less"
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.nationalcode) {
        errors.nationalcode = 'Required';       
    } else if (values.nationalcode.length !== 10) {
        errors.nationalcode = "Must be 10 characters"
    } else if (isNaN(Number(values.nationalcode))) {
        errors.nationalcode = 'Please enter a correct national code'
    }

    if (!values.phonenumber) {
        errors.phonenumber = 'Required';        
    } else if (values.phonenumber.length !== 11) {
        errors.phonenumber = 'Must be 11 characters';
    } else if (isNaN(Number(values.phonenumber))) {
        errors.phonenumber = 'Please enter a correct phone number'
    }

    if (!values.postalcode) {
        errors.postalcode = 'Required';
    } else if (values.postalcode.length !== 11) {
        errors.postalcode = 'Must be 11 characters';
    } else if (isNaN(Number(values.postalcode.slice(0, 5))) || isNaN(Number(values.postalcode.slice(6, 11)))) {
        errors.postalcode = 'Must only includes numbers'
    }

    if(!values.password){
        errors.password = "Required"
    }else if(values.password.length < 8){
        errors.password = "Must be 8 character or more"
    }

    if(!values.username){
        errors.username = "Required"
    }else if(values.username.length > 12){
        errors.username = "Must be 12 character or less"
    }
    console.log(errors.username);
    return errors;
}