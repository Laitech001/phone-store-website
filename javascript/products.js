const products = [{
  id: 'apple-iphone-17-256gb-0001',
  brand: 'iphone',
  image: 'image/iphone-17-jumia-img.jpg',
  name: 'iPhone 17',
  specs: {
    ram: '8GB RAM',
    storage: '256GB ROM',
    size: '6.7 inches',
    display: '6.7-inch Super Retina XDR',
    processor: 'A17 Bionic chip',
  },
  price: 1560000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    },
  isHotDeal: true,
  isFeatured: true,
  description: 'The iPhone 17 Pro Max is the latest flagship smartphone from Apple.'
}, {
  id: 'apple-iphone-17-pro-max-512gb-0002',
  brand: 'iphone',
  image:'image/iphone-17pm-jumia-img.jpg',
  name: 'iPhone 17 Pro Max',
  specs: {
    ram: '12GB RAM',
    storage: '512GB ROM',
    size: '6.9 inches',
  },
  price: 2750000,
  isHotDeal: true,
  isFeatured: true,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-16-pro-max-512gb-0003',
  brand: 'iphone',
  image:'image/iphone-16pm-jumia-img.jpg',
  name: 'iPhone 16 Pro Max',
  specs: {
    ram: '8GB RAM',
    storage: '512GB ROM',
    size: '6.7 inches',
  },
  price: 1900000,
  isHotDeal: true,
  isFeatured: true,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-16-pro-512gb-0004',
  brand: 'iphone',
  image:'image/iphone-16p-(128gb)-laitech-img.jpg',
  name: 'iPhone 16 Pro',
  specs: {
    ram: '8GB RAM',
    storage: '128GB ROM',
    size: '6.3 inches',
  },
  price: 1650000,
  isHotDeal: true,
  isFeatured: true,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-15-plus-256gb-0005',
  brand: 'iphone',
  image:'image/iphone-15plus-(256).jpg',
  name: 'iPhone 15 Plus (Blue)',
  specs: {
    ram: '6GB RAM',
    storage: '256GB ROM',
    size: '6.7 inches',
  },
  price: 900000,
  isHotDeal: true,
  isFeatured: true,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-15-pro-max-256gb-0006',
  brand: 'iphone',
  image:'image/iphone-15promax-jumia-mg.jpg',
  name: 'iPhone 15 Pro Max',
  specs: {
    ram: '8GB RAM',
    storage: '256GB ROM',
    size: '6.7 inches',
  },
  price: 950000,
  isHotDeal: true,
  isFeatured: true,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-15-pro-256gb-0007',
  brand: 'iphone',
  image:'image/iphone-15p(128)-laitech.jpg',
  name: 'iPhone 15 Pro',
  specs: {
    ram: '8GB RAM',
    storage: '128GB ROM',
    size: '6.1 inches',
  },
  price: 850000,
  isHotDeal: true,
  isFeatured: true,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-17-pro-256gb-0008',
  brand: 'iphone',
  image:'image/iphone-17pro-jumia-img.jpg',
  name: 'Iphone 17 Pro',
  specs: {
    ram: '8GB RAM',
    storage: '256GB ROM',
    size: '6.3 inches',
  },
  price: 2250000,
  isHotDeal: true,
  isFeatured: true,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-16-256gb-0009',
  brand: 'iphone',
  image:'image/iphone-16-jumia-img.jpg',
  name: 'Iphone 16',
  specs: {
    ram: '8GB RAM',
    storage: '256GB ROM',
    size: '6.1 inches',
  },
  price: 1200000,
  isHotDeal: true,
  isFeatured: true,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    } 
}, {
  id: 'apple-iphone-16-pro-512gb-00010',
  brand: 'iphone',
  image:'image/iphone-16p-(512)-laotech-img.jpg',
  name: 'Iphone 16 Pro',
  specs: {
    ram: '8GB RAM',
    storage: '512GB ROM',
    size: '6.3 inches',
  },
  price:  1850000,
  isHotDeal: true,
  isFeatured: true,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-16-plus-128gb-0011',
  brand: 'iphone',
  image:'image/iphone-16plus-jumia-img.jpg',
  name: 'Iphone 16 Plus',
  specs: {
    ram: '8GB RAM',
    storage: '128GB ROM',
    size: '6.7 inches',
  },
  price: 1350000,
  isHotDeal: true,
  isFeatured: true,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-13-pro-128gb-0012',
  brand: 'iphone',
  image:'image/iphone-13pro-jumia-img.jpg',
  name: 'Iphone 13 Pro  ',
  specs: {
    ram: '6GB RAM',
    storage: '128GB ROM',
    size: '6.1 inches',
  },
  price: 590000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-13-128gb-0013',
  brand: 'iphone',
  image:'image/iphone-13-jumia-img.jpg',
  name: 'Iphone 13',
  specs: {
    ram: '4GB RAM',
    storage: '128GB ROM',
    size: '6.1 inches',
  },
  price: 480000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-12-pro-max-128gb-0014',
  brand: 'iphone',
  image:'image/iphone-12pm-jumia-img.jpg',
  name: 'Iphone 12 Pro Max',
  specs: {
    ram: '6GB RAM',
    storage: '128GB ROM',
    size: '6.7 inches',
  },
  price: 550000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-14-128gb-0015',
  brand: 'iphone',
  image:'image/iphone-14-jumia-img.jpg',
  name: 'Iphone 14',
  specs: {
    ram: '6GB RAM',
    storage: '128GB ROM',
    size: '6.1 inches',
  },
  price: 700000,
  isHotDeal: true,
  isFeatured: true,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-13-pro-max-128gb-0016',
  brand: 'iphone',
  image:'image/iphone-13pm-jumia-img.jpg',
  name: 'Iphone 13 Pro Max',
  specs: {
    ram: '6GB RAM',
    storage: '128GB ROM',
    size: '6.7 inches',
  },
  price: 670000,
  isHotDeal: true,
  isFeatured: true,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-12-pro-256gb-0017',
  brand: 'iphone',
  image:'image/iphone-12pro-jumia-img.jpg',
  name: 'Iphone 12 Pro',
  specs: {
    ram: '6GB RAM',
    storage: '128GB ROM',
    size: '6.1 inches',
  },
  price: 470000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, { 
  id: 'apple-iphone-15-128gb-pink-0018',
  brand: 'iphone',
  image:'image/iphone-15-(128).jpg',
  name: 'Iphone 15 (Pink)',
  specs: {
    ram: '6GB RAM',
    storage: '128GB ROM',
    size: '6.1 inches',
  },
  price: 800000,
  isHotDeal: true,
  isFeatured: true,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-14-pro-max-256gb-0019',
  brand: 'iphone',
  image:'image/iphone-14pm-jumia-img.jpg',
  name: 'Iphone 14 Pro Max',
  specs: {
    ram: '8GB RAM',
    storage: '256GB ROM',
    size: '6.7 inches',
  },
  price: 950000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-13(green)-128gb-0020',
  brand: 'iphone',
  image:'image/iphone-13(green)-jumia-img.jpg',
  name: 'Iphone 13 (Green)',
  specs: {
    ram: '4GB RAM',
    storage: '128GB ROM',
    size: '6.1 inches',
  },
  price: 490000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-12-64gb-0021',
  brand: 'iphone',
  image:'image/iphone-12-jumia-img.jpg',
  name: 'Iphone 12',
  specs: {
    ram: '4GB RAM',
    storage: '64GB ROM',
    size: '6.1 inches',
  },
  price: 400000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-11pro-256gb-0022',
  brand: 'iphone',
  image:'image/iphone-11pro-jumia-img.jpg',
  name: 'iPhone 11 Pro',
  specs: {
    ram: '4GB RAM',
    storage: '256GB ROM',
    size: '6.1 inches',
  },
  price: 420000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-12pro-max-(silver)-256gb-0023',
  brand: 'iphone',
  image:'image/iphone-12pm(silver)-jumia-img.jpg',
  name: 'iPhone 12 Pro Max (Silver)',
  specs: {
    ram: '6GB RAM',
    storage: '256GB ROM',
    size: '6.7 inches',
  },
  price: 550000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-15-128gb-0024',
  brand: 'iphone',
  image:'image/iphone-15-jumia-img.jpg',
  name: 'iPhone 15',
  specs: {
    ram: '8GB RAM',
    storage: '128GB ROM',
    size: '6.1 inches',
  },
  price: 800000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-15-plus-128gb-black-0025',
  brand: 'iphone',
  image:'image/iphone-15plus-(128,black).jpg',
  name: 'iPhone 15 Plus (Black)',
  specs: {
    ram: '6GB RAM',
    storage: '128GB ROM',
    size: '6.7 inches',
  },
  price: 700000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-11-64gb-0026',
  brand: 'iphone',
  image:'image/iphone-11(64gb)-jumia-img.jpg',
  name: 'iPhone 11',
  specs: {
    ram: '4GB RAM',
    storage: '64GB ROM',
    size: '6.1 inches',
  },
  price: 300000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-se-64gb-0027',
  brand: 'iphone',
  image:'image/iphone-se-3rdgen-jumia-img.jpg',
  name: 'iPhone SE',
  specs: {
    ram: '3GB RAM',
    storage: '64GB ROM',
    size: '5.8 inches',
  },
  price: 220000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'apple-iphone-11-pro-max-64gb-0028',
  brand: 'iphone',
  image:'image/iphone-11pm-jumia-img.jpg',
  name: 'iPhone 11 Pro Max',
  specs: {
    ram: '4GB RAM',
    storage: '64GB ROM',
    size: '6.5 inches',
  },
  price: 450000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id:'iphone-xsmax-(64gb)-0029',
  brand: 'iphone',
  image:'image/iphone-xsmax(white)-jumia-img.jpg',
  name: 'iPhone XS MAX',
  specs: {
    ram: '4GB RAM',
    storage: '64GB ROM',
    size: '6.5 inches',
  },
  price: 300000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id:'iphone-14-plus-512gb-0030',
  brand: 'iphone',
  image:'image/iphone-14plus-(512).jpg',
  name: 'iPhone 14 Plus',
  specs: {
    ram: '6GB RAM',
    storage: '512GB ROM',
    size: '6.7 inches',
  },
  price: 1150000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, { 
  id: 'samsung-s25-ultra-256gb-0031',
  brand: 'samsung',
  image: 'image/samsung-s25ultra-(256).jpg',
  name: 'Samsung GALAXY S25 Ultra',
  specs: {
    ram: '12GB RAM',
    storage: '256GB ROM',
    size: '6.9 inches',
  },
  price: 1550000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'samsung-s25-plus-512gb-0032',
  brand: 'samsung',
  image: 'image/samsung-s25plus(512).jpg',
  name: 'Samsung GALAXY S25 Plus',
  specs: {
    ram: '12GB RAM',
    storage: '512GB ROM',
    size: '6.7 inches',
  },
  price: 1200000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'samsung-s25-256gb-0033',
  brand: 'samsung',
  image: 'image/samsung-s25-(256).jpg',
  name: 'Samsung GALAXY S25',
  specs: {
    ram: '12GB RAM',
    storage: '256GB ROM',
    size: '6.2 inches',
  },
  price: 900000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'samsung-s24-ultra-256gb-0034',
  brand: 'samsung',
  image: 'image/samsung-s24ultra(1tr).jpg',
  name: 'Samsung GALAXY S24 Ultra',
  specs: {
    ram: '12GB RAM',
    storage: '256GB ROM',
    size: '6.8 inches',
  },
  price: 1300000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'samsung-s24-plus-256gb-0035',
  brand: 'samsung',
  image: 'image/samsung-s24plus(256).jpg',
  name: 'Samsung GALAXY S24 Plus',
  specs: {
    ram: '12GB RAM',
    storage: '256GB ROM',
    size: '6.7 inches',
  },
  price: 1000000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'samsung-s23-128gb-0036',
  brand: 'samsung',
  image: 'image/samsung-s23(128).jpg',
  name: 'Samsung GALAXY S23',
  specs: {
    ram: '8GB RAM',
    storage: '128GB ROM',
    size: '6.1 inches',
  },
  price: 600000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'samsung-s22-ultra-512gb-0037',
  brand: 'samsung',
  image: 'image/samsung-s22ultra(128).jpg',
  name: 'Samsung GALAXY S22 Ultra',
  specs: {
    ram: '12GB RAM',
    storage: '128GB ROM',
    size: '6.8 inches',
  },
  price: 850000,
  button:{
      type: 'whatsapp',
      text: 'Buy Now'
    }
}, {
  id: 'samsung-s23-plus-256gb-0038',
  brand: 'samsung',
  image: 'image/samsung-s23plus(256).jpg',
  name: 'Samsung GALAXY S23 Plus',
  specs: {
    ram: '8GB RAM',
    storage: '256GB ROM',
    size: '6.6 inches',
  },
  price: 750000,
  button:{
    text: 'Buy Now',
    type: 'whatsapp',
  }
}, {
  id: 'samsung-s23-ultra-256gb-0039',
  brand: 'samsung',
  image: 'image/samsung-s23utra(256).jpg',
  name: 'Samsung GALAXY S23 Ultra',
  specs: {
    ram: '8GB RAM',
    storage: '256GB ROM',
    size: '6.8 inches',
  },
  price: 950000,
   button: {
    type: 'whatsapp',
    text: 'Buy Now'
   }
}, {
  id: 'samsung-s22-128gb-0040',
  brand: 'samsung',
  image: 'image/samsung-s22(128).jpg',
  name: 'Samsung GALAXY S22',
  specs: {
    ram: '8GB RAM',
    storage: '128GB ROM',
    size: '6.1 inches',
  },
  price: 400000,
   button: {
    type: 'whatsapp',
    text: 'Buy Now'
   }
}, {
  id: 'samsung-s24-128gb-0041',
  brand: 'samsung',
  image: 'image/samsung-s24(128).jpg',
  name: 'Samsung GALAXY S24',
  specs: {
    ram: '8GB RAM',
    storage: '128GB ROM',
    size: '6.1 inches',
  },
  price: 600000,
   button: {
    type: 'whatsapp',
    text: 'Buy Now'
   }
}, {
  id: 'samsung-s22-plus-256gb-0042',
  brand: 'samsung',
  image: 'image/samsung-s22plus(256).jpg',
  name: 'Samsung GALAXY S22 Plus',
  specs: {
    ram: '8GB RAM',
    storage: '256GB ROM',
    size: '6.6 inches',
  },
  price: 450000,
   button: {
    type: 'whatsapp',
    text: 'Buy Now'
   }
}, {
  id: 'samsung-s21-ultra-256gb-0043',
  brand: 'samsung',
  image: 'image/samsung-s21ultra(256).jpg',
  name: 'Samsung GALAXY S21 Ultra',
  specs: {
    ram: '12GB RAM',
    storage: '256GB ROM',
    size: '6.8 inches',
  },
  price: 400000,
   button: {
    type: 'whatsapp',
    text: 'Buy Now'
   }
}, {
  id: 'samsung-s21-128gb-0044',
  brand: 'samsung',
  image: 'image/samsung-s21(128).jpg',
  name: 'Samsung GALAXY S21',
  specs: {
    ram: '8GB RAM',
    storage: '128GB ROM',
    size: '6.2 inches',
  },
  price: 310000,
   button: {
    type: 'whatsapp',
    text: 'Buy Now'
   }
}, {
  id: 'samsung-s24-fe-256gb-0045',
  brand: 'samsung',
  image: 'image/samsung-s24fe(256).jpg',
  name: 'Samsung GALAXY S24 FE',
  specs: {
    ram: '8GB RAM',
    storage: '256GB ROM',
    size: '6.7 inches',
  },
  price: 630000,
   button: {
    type: 'whatsapp',
    text: 'Buy Now'
   }
}, {
  id: 'samsung-a56-128gb-0046',
  brand: 'samsung',
  image: 'image/samsung-a56(128).jpg',
  name: 'Samsung GALAXY A56',
  specs: {
    ram: '8GB RAM',
    storage: '128GB ROM',
    size: '6.7 inches',
  },
  price: 480000,
   button: {
    type: 'whatsapp',
    text: 'Buy Now'
   }
}, {
  id: 'samsung-a07-128gb-0047',
  brand: 'samsung',
  image: 'image/samsung-a07(128).jpg',
  name: 'Samsung GALAXY A07',
  specs: {
    ram: '4GB RAM',
    storage: '128GB ROM',
    size: '6.7 inches',
  },
  price: 160000,
   button: {
    type: 'whatsapp',
    text: 'Buy Now'
   }
}, {
  id: 'samsung-a16-256gb-0048',
  brand: 'samsung',
  image: 'image/samsung-a16(256).jpg',
  name: 'Samsung GALAXY A16',
  specs: {
    ram: '8GB RAM',
    storage: '256GB ROM',
    size: '6.7 inches',
  },
  price: 340000,
   button: {
    type: 'whatsapp',
    text: 'Buy Now'
   }
}, {
  id: 'samsung-a56-128gb-0049',
  brand: 'samsung',
  image: 'image/samsung-a56(128).jpg',
  name: 'Samsung GALAXY A56',
  specs: {
    ram: '8GB RAM',
    storage: '128GB ROM',
    size: '6.7  inches',
  },
  price: 485000,
   button: {
    type: 'whatsapp',
    text: 'Buy Now'
   }
}, {
  id: 'samsung-a16-128gb-0050',
  brand: 'samsung',
  image: 'image/samsung-a16(128).jpg',
  name: 'Samsung GALAXY A16',
  specs: {
    ram: '6GB RAM',
    storage: '128GB ROM',
    size: '6.7 inches',
  },
  price: 235000,
   button: {
    type: 'whatsapp',
    text: 'Buy Now'
   }
}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];