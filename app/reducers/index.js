/*
 * combines all the existing reducers
 */

import * as weblogReducer from './weblogReducer';

export default Object.assign(weblogReducer);
