import styles from './Typography.module.scss';
import React from 'react';

interface Props {
    children: React.ReactNode
}

const Typography: React.FC<Props> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>
};

export default Typography;