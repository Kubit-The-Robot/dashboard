/* eslint-disable import/no-extraneous-dependencies */
import {
  getByLabelText,
  getByTestId,
  getByText,
  queryByTestId,
  waitFor,
} from '@testing-library/dom';
import 'requestidlecallback-polyfill';

global.getByLabelText = getByLabelText;
global.getByText = getByText;
global.getByTestId = getByTestId;
global.queryByTestId = queryByTestId;
global.waitFor = waitFor;
