import React, { useRef, useCallback } from 'react';
import { FiEyeOff } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationsErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';

import { useAuth } from '../../hooks/auth';

import { Container, Content, FormLoginArea, ButtonForm } from './styles';

interface loginFormData {
  mail: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: loginFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          mail: Yup.string().required('Mail is required'),
          password: Yup.string().required('Password is required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          mail: data.mail,
          // password: data.password,
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <Content>
        <h1>USER AREA</h1>
        <FormLoginArea>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="mail">USERNAME</label>
            <Input id="mail" name="mail" />

            <label htmlFor="password">PASSWORD</label>
            <Input
              id="password"
              name="password"
              icon={FiEyeOff}
              type="password"
            />

            <ButtonForm type="submit">LOGIN</ButtonForm>
          </Form>
        </FormLoginArea>
      </Content>
    </Container>
  );
};

export default Login;
