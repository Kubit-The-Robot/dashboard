import { DashboardConstants } from 'constants';

/**
 * @param {number} value
 */
export const finishLesson = (value) => {
  return {
    type: DashboardConstants.FINISH_LESSON,
    payload: {
      value,
    },
  }
};
