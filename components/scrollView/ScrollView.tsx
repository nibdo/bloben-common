import React from 'react';
import './ScrollView.scss';
import { parseCssDark } from '../../utils/common';

interface IScrollViewProps {
  isDark: boolean;
  children: any;
}
const ScrollView = (props: IScrollViewProps) => {
  const { isDark, children } = props;

  return (
    <div className={parseCssDark('scroll-view__wrapper', isDark)}>
      <div className={'scroll-view__container'}>{children}</div>
    </div>
  );
};

export default ScrollView;
