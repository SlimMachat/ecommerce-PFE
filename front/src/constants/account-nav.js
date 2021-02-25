import React from 'react';
import { FiEdit, FiUser, FiHeart, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const accountNav = [
  {
    to: '/',
    text: 'dashboard'
  },
  {
    to: '/orders',
    text: 'orders'
  },
  {
    to: '/order-details',
    text: 'order details'
  },
  {
    to: '/wishlist',
    text: 'wishlist'
  },
  {
    to: '/logout',
    text: 'logout'
  }
];

const accountDashboard = [
  {
    icon: <FiEdit className='icon' />,
    text: 'orders',
    to: 'orders'
  },
  {
    icon: <FiUser className='icon' />,
    text: 'account details',
    to: 'account-details'
  },
  {
    icon: <FiHeart   className='icon' />,
    text: 'wishlist',
    to: 'wishlist'
  },
  {
    icon: <FiLogOut className='icon' />,
    text: 'logout',
    to: 'logout'
  }
];

export const accountDashboardList = () => {
  return accountDashboard.map(item => (
    <Link key={item.text} to={`/${item.to}`}>
      {item.icon}{item.text}
    </Link>
  ))
}