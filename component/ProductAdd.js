import React, { useState, useEffect } from 'react';
import {ButtonPrimary, ButtonSecondary} from './Buttons' 
import { Formik } from 'formik';
import TextPicker from './TextPicker';
import CardView from './CardView';
import Inputs from './Inputs';
import * as Yup from 'yup';

const styles = {
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    wrapForm: {
        width: '60%',
    },
    wrapButton: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-end'
    }
}

export default function ProductAdd(props) {
    const { product } = props;

    const [loading, setLoading] = useState(false);
    const [dataCategory, setdataCategory] = useState([
        {
            label: 'Pakaian Pria',
            value: '123qwe'
        },
        {
            label: 'Pakaian Wanita',
            value: 'qweasd'
        },
    ]);
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
            product_price: product ? String(product.product_price) : '',
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
                            title={'Product Name'}
                            value={values.product_name}
                            onBlur={() => setFieldTouched('product_name')}
                            onChange={handleChange('product_name')}
                            isError={touched.product_name && errors.product_name}
                            message={errors.product_name}
                            style={{ marginBottom: 16 }}
                        />
                        <Inputs
                            title={'Product Price'}
                            value={values.product_price}
                            onBlur={() => setFieldTouched('product_price')}
                            onChange={handleChange('product_price')}
                            isError={touched.product_price && errors.product_price}
                            message={errors.product_name}
                            style={{ marginBottom: 16 }}
                        />
                        <Inputs
                            title={'Product Description'}
                            value={values.product_description}
                            onBlur={() => setFieldTouched('product_description')}
                            onChange={handleChange('product_description')}
                            isError={touched.product_description && errors.product_description}
                            message={errors.product_description}
                            style={{ marginBottom: 16 }}
                        />
                        <TextPicker
                            data={dataCategory}
                            label={'Category'}
                            value={values.category_id}
                            onBlur={() => setFieldTouched('category_id')}
                            onChange={handleChange('category_id')}
                            isError={touched.category_id && errors.category_id}
                            message={errors.category_id}
                            containerStyle={{ marginBottom: 16 }}
                        />
                        <div style={styles.wrapButton}>
                            <ButtonSecondary
                                title={'Cancel'}
                                onPress={_onPressCancel}
                                style={{ marginRight: 16 }}
                            />
                            <ButtonPrimary
                                title={'Add'}
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
