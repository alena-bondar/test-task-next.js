'use client';

import {Field, Form, Formik} from "formik";
import styles from './index.scss'

export const Category = ({ isNewItem }) => {

    return (
        <Formik
            initialValues={{ switchState: false }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ values, handleSubmit, setFieldValue }) => (
                <Form onSubmit={handleSubmit}>
                    <div className="category__items-list">
                        <div className="category__item-wrapper">
                            { isNewItem ? <Field  type="email" name="email" placeholder="Enter Category Name" className="category__new-item"/> :
                            <div className="item-title">Item Title</div>
                            }
                            <div className="item__buttons-wrapper">
                                <div className="toggle">
                                    <label className="switch">
                                        <Field
                                            className="toggle-switch"
                                            type="checkbox"
                                            name="switchState"
                                            checked={values.switchState}
                                            onChange={(e) => setFieldValue('switchState', e.target.checked)}
                                        />
                                        <span className="slider round">
                                    </span>
                                    </label>
                                </div>
                                <div className="item__icons-wrapper">
                                    <div className="basket-icon">
                                        <img src="/delete.svg" alt="delete"/>
                                    </div>
                                    <div className="dots-icon">
                                        <img src="/drag.svg" alt="delete"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}