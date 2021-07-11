import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Inputs, ButtonPrimary, ButtonSecondary } from '../component';
import { Formik } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function ProductAdd(props) {
    const classes = useStyles();
    const { product } = props;

    const [loading, setLoading] = useState(false);
    const [initialData, setInitialData] = useState({
        product_name: '',
        product_description: '',
        product_price: '',
        category_id: '',
    });

    useEffect(() => {
        setInitialData({
            product_name: product?.product_name ?? '',
            product_description: product?.product_description ?? '',
            product_price: product ? String(product.product_price) : '0',
            category_id: product?.category_id ?? '',
        });
    }, [product]);

    const validateSchema = Yup.object().shape({
        product_name: Yup.string().required(
            `Product Name is required`,
        ),
        product_description: Yup.string().required(
            `Product Description is required`,
        ),
        product_price: Yup.string().required(
            `Product Price is required`,
        ),
        category_id: Yup.string().required(
            `Category is required`,
        ),
    });

    const _onPressCancel = () => {

    }

    const _onSubmit = values => {
        // setLoading(true);
        // const bodySave = {
        //   phone_number: values.phone_number,
        // };
        // ObjStorage.set(STORAGE.LOGIN_SAVED, bodySave);
        // API.singleRequest(API.login(values))
        //   .then(response => {
        //     const dataLogin = response.data;
        //     Helper.setToken(dataLogin.access_token);
        //     Helper.setRefreshToken(dataLogin.refresh_token);
        //     _onSubmitDevice();
        //   })
        //   .catch(error => {
        //     props.showAlert(error);
        //     setLoading(false);
        //   });
    };
    return (
        <Fragment>

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
                    <div>
                        <Inputs
                            title={'Product Name'}
                            value={values.product_name}
                            onBlur={() => setFieldTouched('product_name')}
                            onChange={handleChange('product_name')}
                            isError={touched.product_name && errors.product_name}
                            message={errors.product_name}
                            containerStyle={{ marginBottom: 16 }}
                        />
                        <Inputs
                            title={'Product Price'}
                            value={values.product_price}
                            onBlur={() => setFieldTouched('product_price')}
                            onChange={handleChange('product_price')}
                            isError={touched.product_price && errors.product_price}
                            message={errors.product_name}
                            containerStyle={{ marginBottom: 16 }}
                        />
                        <Inputs
                            title={'Product Description'}
                            value={values.product_description}
                            onBlur={() => setFieldTouched('product_description')}
                            onChange={handleChange('product_description')}
                            isError={touched.product_description && errors.product_description}
                            message={errors.product_description}
                            containerStyle={{ marginBottom: 16 }}
                        />
                        <Inputs
                            title={'Category'}
                            value={values.category_id}
                            onBlur={() => setFieldTouched('category_id')}
                            onChange={handleChange('category_id')}
                            isError={touched.category_id && errors.category_id}
                            message={errors.category_id}
                            containerStyle={{ marginBottom: 16 }}
                        />
                        <ButtonSecondary
                            title={'Cancel'}
                            onPress={_onPressCancel}
                            style={{ marginBottom: 16 }}
                        />
                        <ButtonPrimary
                            title={'Add'}
                            disabled={!isValid}
                            onPress={handleSubmit}
                            style={{ marginBottom: 16 }}
                        />
                    </div>
                )}
            </Formik>

        </Fragment>
    )
}
