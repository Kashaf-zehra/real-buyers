'use client';
import React, { useState } from 'react';
import ExpendedSiderBar from './ExpendedSiderBar';
import CollapsedSideBar from './CollapsedSideBar';

const LeftSideBar = ({ menuItem }) => {
  const fullWidth = '100%';
  const iconWidth = '60px';
  const [isCollapsed, setIsCollapsed] = useState(fullWidth);
  const collapsed = () => {
    setIsCollapsed((prevWidth) =>
      prevWidth === fullWidth ? iconWidth : fullWidth
    );
  };
  return (
    <>
      {isCollapsed === fullWidth ? (
        <ExpendedSiderBar
          isCollapsed={isCollapsed}
          menuItem={menuItem}
          isExpended={collapsed}
        />
      ) : (
        <CollapsedSideBar
          isCollapsed={isCollapsed}
          menuItem={menuItem}
          isCollaps={collapsed}
        />
      )}
    </>
  );
};

export default LeftSideBar;
