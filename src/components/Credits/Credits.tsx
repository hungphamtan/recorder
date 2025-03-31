import { FC } from 'react';
import cx from 'classnames';

import styles from './Credits.module.css';

const Credits: FC = () => {
  return (
    <div className={cx(styles.root)}>
      <p>
        <b>Credits:</b> This project is a fork of Addy from Google. The original
        https://github.com/contrastio/recorder by https://getcontrast.io
      </p>
    </div>
  );
};

export default Credits;
