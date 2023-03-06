import React from 'react';
import { MENU_CONFIG } from '@/common/constans/menu';

import './style'

interface IProps {}

interface IState {}

class Header extends React.Component<IProps, IState> {
  state = {}

  componentDidMount() {
  }
  

  render() {
    return (
      <div className='header-component-box'>
        <div className='left'>
          <div className='logo'></div>
          <div className='menu'>
            {
              MENU_CONFIG.map((menuItem, index) => {
                <div>菜单</div>
              })
            }
          </div>
        </div>
        <div className='user-info'>user info</div>
      </div>
    )
  }
}

export default Header