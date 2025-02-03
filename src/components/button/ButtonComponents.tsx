import React from 'react';
import { Button, Flex } from 'antd';

const ButtonComponents: React.FC = () => (
  <Flex gap="small" wrap>
    <Button type="primary">New</Button>
    <Button type="primary">Update</Button>
  </Flex>
);

export default ButtonComponents;