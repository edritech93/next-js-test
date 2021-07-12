import React, { useState, useEffect } from 'react';
import { Inputs, ButtonPrimary, CardView, } from '../component';
import { Formik } from 'formik';
import * as Yup from 'yup';

const styles = {
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    wrapForm: {
        width: '30%',
        marginTop: '15%',
    },
    wrapButton: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-end'
    }
}

export default function Login(props) {

    const [loading, setLoading] = useState(false);
    const [initialData, setInitialData] = useState({
        phone_number: '',
        password: '',
    });

    const validateSchema = Yup.object().shape({
        phone_number: Yup.string().required(
            `Phone Number is required`,
        ),
        password: Yup.string().required(
            `Password is required`,
        ),
    });

    const _onSubmit = values => {
        // setLoading(true);
        // API.singleRequest(API.login(values))
        //   .then(response => {
        //   })
        //   .catch(error => {
        //     props.showAlert(error);
        //     setLoading(false);
        //   });
    };
    return (
        <div style={styles.container}>

            <Formik
                initialValues={initialData}
                enableReinitialize={true}
                onSubmit={_onSubmit}
                validationSchema={validateSchema}>
                {({
                    values,
                    handleChange,
                    errors,
                    setFieldTouched,
                    touched,
                    isValid,
                    handleSubmit,
                }) => (
                    <CardView style={styles.wrapForm}>
                        <Inputs
                            title={'Phone Number'}
                            value={values.phone_number}
                            onBlur={() => setFieldTouched('phone_number')}
                            onChange={handleChange('phone_number')}
                            isError={touched.phone_number && errors.phone_number}
                            message={errors.phone_number}
                            style={{ marginBottom: 16 }}
                        />
                        <Inputs
                            title={'Password'}
                            value={values.password}
                            onBlur={() => setFieldTouched('password')}
                            onChange={handleChange('password')}
                            isError={touched.password && errors.password}
                            message={errors.password}
                            style={{ marginBottom: 16 }}
                        />
                        <div style={styles.wrapButton}>
                            <ButtonPrimary
                                title={'Login'}
                                disabled={!isValid}
                                onPress={handleSubmit}
                            />
                        </div>
                    </CardView>
                )}
            </Formik>

        </div>
    )
}