import React, { useState, useCallback } from 'react';
import { ScrollView, Text, Button, TextInput } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  List,
  InputItem,
  WhiteSpace,
  TextareaItem,
  DatePicker,
  Provider,
} from '@ant-design/react-native';
import { createForm } from 'rc-form';
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faQuestionCircle,
  faAlignLeft,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import WrapperError from '~/Components/WrapperError';

const StyledView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const CreateScreen = ({ form }) => {
  const {
    getFieldDecorator,
    getFieldError,
    getFieldProps,
    validateFields,
    getFieldValue,
    setFieldsValue,
  } = form;
  const { Item } = List;

  const [currentcy, setCurrency] = useState('');
  const handleCurrency = (e) => {
    setCurrency(e);
  };

  const [date, setDate] = useState(undefined);
  const handleOnchangeDate = (value) => {
    setDate(value);
  };

  const validateUsername = useCallback((rule, value, callback) => {
    if (value && /^\S+$/gi.test(value) === false) {
      callback('Username contain whitespace');
    } else {
      callback();
    }
  }, []);

  const submit = () => {
    validateFields((error) => {
      if (error) return;
      console.log('Submit error: ', error);
      // Alert('success submit...'); // eslint-disable-line new-cap
    });
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f5f5f9' }}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <List renderHeader={() => 'Money'}>
        <Text>Amount</Text>
        {getFieldDecorator('amountMoney', {
          validateFirst: true,
          rules: [{ required: true, message: 'AmountMoney empty !' }],
        })(
          <WrapperError error={getFieldError('amountMoney')}>
            <InputItem
              value={currentcy}
              type='number'
              onChange={handleCurrency}
              placeholder='0.00'
              extra='$'
            >
              Money
            </InputItem>
          </WrapperError>
        )}
      </List>

      <List renderHeader={() => 'Option'}>
        <StyledView>
          <FontAwesomeIcon icon={faQuestionCircle} size={24} />
          <Item
            // thumb={<FontAwesomeIcon icon={faQuestionCircle} size={24} />}
            disabled
            extra='>'
            align='middle'
            onPress={() => {}}
          >
            Select category
          </Item>
        </StyledView>

        <WhiteSpace size='xs' />

        <StyledView>
          <FontAwesomeIcon icon={faAlignLeft} size={24} />
          <TextareaItem rows={1} placeholder='Description' autoHeight clear />
        </StyledView>

        <WhiteSpace size='xs' />

        <Provider locale={enUS}>
          {/* <StyledView> */}
          <FontAwesomeIcon icon={faCalendarAlt} size={24} />
          <DatePicker
            value={date}
            mode='date'
            defaultDate={new Date()}
            minDate={new Date(1900, 1, 1)}
            maxDate={new Date(9999, 12, 31)}
            onChange={handleOnchangeDate}
            format='YYYY-MM-DD'
          >
            <List.Item>Select Date</List.Item>
          </DatePicker>
          {/* </StyledView> */}
        </Provider>
      </List>

      <List renderHeader={() => 'rc-form:'}>
        {getFieldDecorator('username', {
          validateFirst: true,
          rules: [
            { required: true, message: 'Username empty !' },
            {
              pattern: /\w{8,}/,
              message: 'Enter at least 8 characters!',
            },
            {
              validator: validateUsername,
            },
          ],
        })(
          <WrapperError error={getFieldError('username')}>
            <InputItem type='string' placeholder='User name...' />
          </WrapperError>
        )}
        {/* <Text>{getFieldValue('username')}</Text> */}
        <Button color='#40a9ff' onPress={submit} title='Submit' />
      </List>
    </ScrollView>
  );
};

CreateScreen.prototypes = {
  form: PropTypes.object.isRequired,
};

export default createForm()(CreateScreen);
