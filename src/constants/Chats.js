export const chatMessages = {
  conversation: [
    {
      date: '2024-01-17',
      messages: [
        {
          timestamp: '2024-01-17T10:00:00',
          id: 'msg001',
          sender: 'You',
          content:
            "Hi John, I hope you're doing well. Any thoughts on the property in L.A?",
          contentType: 'text',
        },
        {
          timestamp: '2024-01-17T10:15:00',
          id: 'msg002',
          sender: 'John',
          content:
            "Hello! I've been reviewing the details. Could you provide more information about the neighborhood?",
          contentType: 'text',
        },
        // ... additional messages for the day
      ],
      read: true,
    },
    {
      date: '2024-01-18',
      messages: [
        {
          timestamp: '2024-01-18T09:30:00',
          id: 'msg003',
          sender: 'You',
          content:
            "Good day, John! The property is in Westwood, a vibrant and safe neighborhood. It's a spacious 3-story house.",
          contentType: 'text',
        },
        {
          timestamp: '2024-01-18T10:00:00',
          id: 'msg004',
          sender: 'John',
          content:
            "Great! Could you share the total area of the property and whether it's west-facing?",
          contentType: 'text',
        },
        {
          timestamp: '2024-01-18T10:30:00',
          id: 'msg005',
          sender: 'You',
          content:
            "Certainly! The property covers 2,500 sq. ft. and yes, it's west-facing for beautiful sunsets. How many rooms are you looking for?",
          contentType: 'text',
        },
        {
          timestamp: '2024-01-18T11:00:00',
          id: 'msg006',
          sender: 'John',
          content:
            "I'd like at least 4 bedrooms. Can you also tell me about the kitchen and living room spaces?",
          contentType: 'text',
        },
        {
          timestamp: '2024-01-18T11:30:00',
          id: 'msg007',
          sender: 'You',
          content:
            'Absolutely! The kitchen is fully equipped with modern appliances. The living room is spacious with large windows, offering a lot of natural light.',
          contentType: 'text',
        },
        // ... additional messages for the day
      ],
      read: true,
    },
    {
      date: '2024-01-19',
      messages: [
        {
          timestamp: '2024-01-19T09:45:00',
          id: 'msg008',
          sender: 'You',
          content:
            'The property also features a backyard garden, perfect for relaxation. Each story has a bathroom, and the top floor has a terrace.',
          contentType: 'text',
        },
        {
          timestamp: '2024-01-19T10:15:00',
          id: 'msg009',
          sender: 'John',
          content:
            'That sounds great! What about the number of stories and any unique features of the property?',
          contentType: 'text',
        },
        {
          timestamp: '2024-01-19T10:45:00',
          id: 'msg010',
          sender: 'You',
          content:
            "It's a 3-story house with a basement. The basement can be used as a recreational space. Additionally, there's a two-car garage.",
          contentType: 'text',
        },
        // ... additional messages for the day
      ],
      read: true,
    },
    // ... messages for the remaining days with similar details
    {
      date: '2024-01-26',
      messages: [
        {
          timestamp: '2024-01-26T09:30:00',
          id: 'msg011',
          sender: 'You',
          content:
            "Hi John, I wanted to share details about another property we have available. It's in Beverly Hills, a luxurious 5-bedroom mansion.",
          contentType: 'text',
        },
        {
          timestamp: '2024-01-26T10:00:00',
          id: 'msg012',
          sender: 'John',
          content: 'Interesting! Tell me more about this property.',
          contentType: 'text',
        },
        {
          timestamp: '2024-01-26T10:30:00',
          id: 'msg013',
          sender: 'You',
          content:
            'The mansion covers 6,000 sq. ft., features a pool, and has stunning views. Are you interested in scheduling a visit?',
          read: true,
          contentType: 'text',
        },
        {
          timestamp: '2024-01-26T11:00:00',
          id: 'msg014',
          sender: 'John',
          content: "Certainly! Here's my phone number: +923211234567.",
          read: false,
          contentType: 'text',
        },
        {
          timestamp: '2024-01-26T11:30:00',
          id: 'msg015',
          sender: 'John',
          content: 'By the way, will you be available tomorrow for a meeting?',
          read: false,
          contentType: 'text',
        },
      ],
      read: true,
    },
    {
      date: '2024-02-01',
      messages: [
        {
          timestamp: '2024-02-01T11:30:00',
          id: 'msg016',
          sender: 'John',
          // content: ['/images/logo.png'],
          content: [
            '/images/logo.png',
            'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww',
            '/images/logo.png',
            'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww',
            '/images/logo.png',
            'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww',
            '/images/logo.png',
            'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww',
            '/images/logo.png',
            'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww',
          ],
          read: false,
          contentType: 'image',
        },
        {
          timestamp: '2024-02-01T11:30:00',
          id: 'msg017',
          sender: 'You',
          // content: ['/images/logo.png'],
          content: [
            '/images/logo.png',
            'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww',
            '/images/logo.png',
            'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww',
            '/images/logo.png',
            'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww',
            '/images/logo.png',
            'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww',
            '/images/logo.png',
            'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww',
          ],
          read: false,
          contentType: 'image',
        },
      ],
      read: true,
    },
  ],
  archiveConversation: [
    {
      date: '2024-01-17',
      messages: [
        {
          timestamp: '2024-01-17T10:00:00',
          sender: 'You',
          content:
            "Hi John, I hope you're doing well. Any thoughts on the property in L.A?",
        },
        {
          timestamp: '2024-01-17T10:15:00',
          sender: 'John',
          content:
            "Hello! I've been reviewing the details. Could you provide more information about the neighborhood?",
        },
        // ... additional messages for the day
      ],
      read: true,
    },
    {
      date: '2024-01-18',
      messages: [
        {
          timestamp: '2024-01-18T09:30:00',
          sender: 'You',
          content:
            "Good day, John! The property is in Westwood, a vibrant and safe neighborhood. It's a spacious 3-story house.",
        },
        {
          timestamp: '2024-01-18T10:00:00',
          sender: 'John',
          content:
            "Great! Could you share the total area of the property and whether it's west-facing?",
        },
        {
          timestamp: '2024-01-18T10:30:00',
          sender: 'You',
          content:
            "Certainly! The property covers 2,500 sq. ft. and yes, it's west-facing for beautiful sunsets. How many rooms are you looking for?",
        },
        {
          timestamp: '2024-01-18T11:00:00',
          sender: 'John',
          content:
            "I'd like at least 4 bedrooms. Can you also tell me about the kitchen and living room spaces?",
        },
        {
          timestamp: '2024-01-18T11:30:00',
          sender: 'You',
          content:
            'Absolutely! The kitchen is fully equipped with modern appliances. The living room is spacious with large windows, offering a lot of natural light.',
        },
        // ... additional messages for the day
      ],
      read: true,
    },
    {
      date: '2024-01-19',
      messages: [
        {
          timestamp: '2024-01-19T09:45:00',
          sender: 'You',
          content:
            'The property also features a backyard garden, perfect for relaxation. Each story has a bathroom, and the top floor has a terrace.',
        },
        {
          timestamp: '2024-01-19T10:15:00',
          sender: 'John',
          content:
            'That sounds great! What about the number of stories and any unique features of the property?',
        },
        {
          timestamp: '2024-01-19T10:45:00',
          sender: 'You',
          content:
            "It's a 3-story house with a basement. The basement can be used as a recreational space. Additionally, there's a two-car garage.",
        },
      ],
      read: true,
    },
    {
      date: '2024-01-26',
      messages: [
        {
          timestamp: '2024-01-26T09:30:00',
          sender: 'You',
          content:
            "Hi John, I wanted to share details about another property we have available. It's in Beverly Hills, a luxurious 5-bedroom mansion.",
        },
        {
          timestamp: '2024-01-26T10:00:00',
          sender: 'John',
          content: 'Interesting! Tell me more about this property.',
        },
        {
          timestamp: '2024-01-26T10:30:00',
          sender: 'You',
          content:
            'The mansion covers 6,000 sq. ft., features a pool, and has stunning views. Are you interested in scheduling a visit?',
          read: true,
        },
        {
          timestamp: '2024-01-26T11:00:00',
          sender: 'John',
          content: "Certainly! Here's my phone number: +923211234567.",
          read: false,
        },
        {
          timestamp: '2024-01-26T11:30:00',
          sender: 'John',
          content: 'By the way, will you be available tomorrow for a meeting?',
          read: false,
        },
      ],
      read: true,
    },
  ],
};

export const chatRooms = [
  {
    title: 'John Doe',
    isRead: false,
    lastMessage: 'Lorem ipsum dolor sit amet. Bibendum feugiat sapien....',
    avatar: 'avatar',
    lastMessageTimestamp: '2024-01-17T22:14:05',
    unReadMessages: 2,
  },
  {
    title: 'Faisal Hanif',
    isRead: false,
    lastMessage: 'Lorem ipsum dolor sit amet. Bibendum feugiat sapien....',
    lastMessageTimestamp: '2024-01-17T18:03:11',
    unReadMessages: 2,
  },
  {
    title: 'Muzammil',
    isRead: false,
    lastMessage: 'Lorem ipsum dolor sit amet. Bibendum feugiat sapien....',
    lastMessageTimestamp: '2024-01-17T14:05:33',
    unReadMessages: 1,
  },
  {
    title: 'Ali Naqi Hasni',
    isRead: true,
    lastMessage: 'Lorem ipsum dolor sit amet. Bibendum feugiat sapien....',
    lastMessageTimestamp: '2024-01-17T11:17:56',
  },
  {
    title: 'Muhammad Ali',
    isRead: true,
    lastMessage: 'Lorem ipsum dolor sit amet. Bibendum feugiat sapien....',
    lastMessageTimestamp: '2024-01-17T10:15:00',
  },
];
