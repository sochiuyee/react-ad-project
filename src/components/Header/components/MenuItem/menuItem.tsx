import React from 'react';
import './style'
import { menuInfoTypes } from '@components/Header/components/MenuItem/menuInfoTypes';

/**
 * 菜单是否选中 isActive
 * 点击事件
 * 子菜单内容
 */
interface IProps {
  isActive?:boolean;
  onClick?:() => void;
  menuInfo: menuInfoTypes;
}

class MenuItem extends React.Component<IProps> {
  render() {
    return (
      <div className='menuitem-component-box'></div>
    )
  }
}

export default MenuItem