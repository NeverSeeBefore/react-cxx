import React from 'react';
import Form from './index';
export default function Test (props) {

  return (
    <Form onSubmit={(data) => {
      console.log('app -> form', data);
    }}>
      <div>
        <label>账号：</label><Form.Input name="loginId" />
      </div>
      <div>
        <label>密码：</label><Form.Input name="loginPwd" type="password" />
      </div>
      <div>
        <Form.Button>登陆</Form.Button>
      </div>
    </Form>
    )

}

