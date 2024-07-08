export const SIDE_NAV_WIDTH = 300;
export const Agent_Routes = [
  {
    icon: '/images/icons/agent-icons/live-bidding.svg',
    active: '/images/icons/agent-icons/live-bidding-active.svg',
    text: 'Live Bidding',
    link: '/agent/live-bidding',
    sublinks: null,
  },
  {
    icon: '/images/icons/agent-icons/property-management.svg',
    text: 'Property Management',
    link: undefined,
    sublinks: [
      {
        text: 'Post Listing',
        link: '/agent/property-management/post-listing',
      },
      {
        text: 'My Properties',
        link: '/agent/property-management/my-properties',
      },
    ],
  },
  {
    icon: '/images/icons/agent-icons/my-proposals.svg',
    active: '/images/icons/agent-icons/my-proposals-active.svg',
    text: 'My Proposals',
    link: '/agent/my-proposals',
    sublinks: null,
  },
  {
    icon: '/images/icons/agent-icons/inbox-icon.svg',
    active: '/images/icons/agent-icons/inbox-icon-active.svg',
    text: 'Inbox',
    link: '/agent/inbox',
    sublinks: null,
  },
  {
    icon: '/images/icons/agent-icons/agent-settings.svg',
    text: 'Agent Settings',
    link: undefined,
    sublinks: [
      {
        text: 'Agent Profile',
        link: '/agent/agent-settings/agent-profile',
      },
      {
        text: 'Preferences',
        link: '/agent/agent-settings/preferences',
      },
    ],
  },
  {
    icon: '/images/icons/agent-icons/prop-shop.svg',
    text: 'Prop Shop',
    link: undefined,
    sublinks: [
      { text: 'Buy Product', link: '/agent/prop-shop/buy-product' },
      {
        text: 'Order History',
        link: '/agent/prop-shop/order-history',
      },
    ],
  },
];

export const User_Routes = [
  {
    icon: '/images/icons/user-icons/dashboard.svg',
    active: '/images/icons/user-icons/dashboard-active.svg',
    text: 'Dashboard',
    link: '/user/dashboard',
    sublinks: null,
  },
  {
    icon: '/images/icons/user-icons/post-request.svg',
    active: '/images/icons/user-icons/post-request-active.svg',
    text: 'Post Request',
    link: '/user/post-request',
    sublinks: null,
  },
  {
    icon: '/images/icons/user-icons/inbox.svg',
    active: '/images/icons/user-icons/inbox-active.svg',
    text: 'Inbox',
    link: '/user/inbox',
    sublinks: null,
  },
  {
    icon: '/images/icons/user-icons/user-settings.svg',
    active: '/images/icons/user-icons/user-settings-active.svg',
    text: 'User Settings',
    link: undefined,
    sublinks: [
      {
        text: 'User Profile',
        link: '/user/user-settings/user-profile',
      },
      {
        text: 'Preferences',
        link: '/user/user-settings/preferences',
      },
    ],
  },
];
