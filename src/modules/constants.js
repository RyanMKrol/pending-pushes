/* eslint-disable no-console */

import * as utils from 'noodle-utils';

const info = utils.logger('pending-pushes:info');
info.log = console.log.bind(console);

const error = utils.logger('pending-pushes:error');

const PATHS_STORAGE_FILENAME = `${__dirname}/../../data/paths.json`;

export { info, error, PATHS_STORAGE_FILENAME };
