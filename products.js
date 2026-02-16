const PRODUCTS = [
    {
        id: "everlane-oxford-navy",
        name: "The Oxford Shirt",
        brand: "Everlane",
        retailer: "Everlane",
        price: 68,
        category: "tops",
        gender: "mens",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop",
        cartUrl: "https://everlane.com/products/mens-oxford-shirt",
        scores: {minimalist: 95, business: 80, casual: 70, luxury: 60, streetwear: 30, vintage: 40}
    },
    {
        id: "apc-chinos-charcoal",
        name: "Slim Chinos",
        brand: "A.P.C.",
        retailer: "Mr Porter",
        price: 128,
        category: "bottoms",
        gender: "mens",
        image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=300&h=300&fit=crop",
        cartUrl: "https://www.mrporter.com/mens/product/apc/slim-fit-cotton-chinos",
        scores: {minimalist: 90, business: 85, casual: 75, luxury: 70, streetwear: 35, vintage: 45}
    },
    {
        id: "cp-achilles-white",
        name: "Achilles Low",
        brand: "Common Projects",
        retailer: "SSENSE",
        price: 165,
        category: "shoes",
        gender: "mens",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&h=300&fit=crop",
        cartUrl: "https://www.ssense.com/men/product/common-projects/white-achilles-low-sneakers",
        scores: {minimalist: 98, business: 75, casual: 85, luxury: 90, streetwear: 60, vintage: 50}
    },
    {
        id: "nike-tech-fleece",
        name: "Tech Fleece Jacket",
        brand: "Nike",
        retailer: "Nike",
        price: 120,
        category: "outerwear",
        gender: "mens",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
        cartUrl: "https://www.nike.com/t/tech-fleece-jacket",
        scores: {minimalist: 65, business: 30, casual: 95, luxury: 50, streetwear: 90, vintage: 40}
    },
    {
        id: "taylor-stitch-oxford",
        name: "The Jack Shirt",
        brand: "Taylor Stitch",
        retailer: "Taylor Stitch",
        price: 98,
        category: "tops",
        gender: "mens",
        image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=300&h=300&fit=crop",
        cartUrl: "https://www.taylorstitch.com/the-jack-shirt",
        scores: {minimalist: 85, business: 75, casual: 80, luxury: 70, streetwear: 40, vintage: 60}
    },
    {
        id: "uniqlo-u-tee",
        name: "U Crew Neck Tee",
        brand: "Uniqlo U",
        retailer: "Uniqlo",
        price: 15,
        category: "tops",
        gender: "mens",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=300&fit=crop",
        cartUrl: "https://www.uniqlo.com/crew-neck-t-shirt",
        scores: {minimalist: 90, business: 40, casual: 95, luxury: 30, streetwear: 70, vintage: 50}
    },
    {
        id: "acne-studios-jeans",
        name: "River Jeans",
        brand: "Acne Studios",
        retailer: "SSENSE",
        price: 240,
        category: "bottoms",
        gender: "mens",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=300&fit=crop",
        cartUrl: "https://www.ssense.com/men/product/acne-studios/river-jeans",
        scores: {minimalist: 88, business: 60, casual: 85, luxury: 85, streetwear: 75, vintage: 55}
    },
    {
        id: "new-balance-550",
        name: "550 Sneakers",
        brand: "New Balance",
        retailer: "New Balance",
        price: 110,
        category: "shoes",
        gender: "mens",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
        cartUrl: "https://www.newbalance.com/550",
        scores: {minimalist: 70, business: 25, casual: 90, luxury: 50, streetwear: 95, vintage: 80}
    },
    {
        id: "suitSupply-blazer",
        name: "Havana Blazer",
        brand: "Suitsupply",
        retailer: "Suitsupply",
        price: 399,
        category: "outerwear",
        gender: "mens",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=300&fit=crop",
        cartUrl: "https://suitsupply.com/havana-blazer",
        scores: {minimalist: 80, business: 98, casual: 50, luxury: 90, streetwear: 20, vintage: 60}
    },
    {
        id: "stussy-hoodie",
        name: "Stock Logo Hoodie",
        brand: "Stussy",
        retailer: "SSENSE",
        price: 95,
        category: "tops",
        gender: "mens",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop",
        cartUrl: "https://www.ssense.com/men/product/stussy/stock-logo-hoodie",
        scores: {minimalist: 45, business: 15, casual: 85, luxury: 40, streetwear: 98, vintage: 70}
    },
    {
        id: "cos-merino-sweater",
        name: "Merino Wool Sweater",
        brand: "COS",
        retailer: "COS",
        price: 89,
        category: "tops",
        gender: "mens",
        image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=300&fit=crop",
        cartUrl: "https://www.cos.com/merino-wool-sweater",
        scores: {minimalist: 95, business: 85, casual: 75, luxury: 80, streetwear: 30, vintage: 50}
    },
    {
        id: "nike-dunk-panda",
        name: "Dunk Low Panda",
        brand: "Nike",
        retailer: "Nike",
        price: 115,
        category: "shoes",
        gender: "mens",
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=300&h=300&fit=crop",
        cartUrl: "https://www.nike.com/dunk-low-panda",
        scores: {minimalist: 75, business: 20, casual: 90, luxury: 55, streetwear: 95, vintage: 60}
    },
    {
        id: "everlane-womens-crew",
        name: "The Organic Cotton Crew",
        brand: "Everlane",
        retailer: "Everlane",
        price: 38,
        category: "tops",
        gender: "womens",
        image: "https://images.unsplash.com/photo-1520975958225-6c2d81b6f0c4?w=300&h=300&fit=crop",
        cartUrl: "https://everlane.com/products/womens-organic-cotton-crew",
        scores: {minimalist: 92, business: 55, casual: 88, luxury: 45, streetwear: 55, vintage: 40}
    },
    {
        id: "levis-womens-501",
        name: "501 Original Jeans",
        brand: "Levi's",
        retailer: "Nordstrom",
        price: 98,
        category: "bottoms",
        gender: "womens",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=300&fit=crop",
        cartUrl: "https://www.nordstrom.com/s/levis-501-original-jeans",
        scores: {minimalist: 75, business: 40, casual: 92, luxury: 40, streetwear: 65, vintage: 85}
    },
    {
        id: "adidas-samba-unisex",
        name: "Samba Classic",
        brand: "Adidas",
        retailer: "Adidas",
        price: 100,
        category: "shoes",
        gender: "unisex",
        image: "https://images.unsplash.com/photo-1528701800489-20be3c17f07b?w=300&h=300&fit=crop",
        cartUrl: "https://www.adidas.com/us/samba",
        scores: {minimalist: 80, business: 35, casual: 90, luxury: 35, streetwear: 88, vintage: 70}
    }
];

const PRE_CURATED_CARTS = [
    {
        id: "weekend-essentials",
        name: "Women's Weekend Essentials",
        description: "Easy, polished staples for casual plans.",
        total: 236,
        items: 5,
        stores: 3,
        productIds: ["everlane-womens-crew", "levis-womens-501", "adidas-samba-unisex"],
        images: [
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1520975867597-0d5f43ff1f12?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1528701800489-20be3c17f07b?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1520975682031-a5e0e2cf14c3?w=300&h=300&fit=crop"
        ]
    },
    {
        id: "work-week",
        name: "Work Week 5-Pack",
        description: "Business casual staples for the office.",
        total: 245,
        items: 5,
        stores: 4,
        productIds: ["everlane-oxford-navy", "apc-chinos-charcoal", "suitSupply-blazer"],
        images: [
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=300&fit=crop"
        ]
    },
    {
        id: "date-night",
        name: "Date Night Look",
        description: "Sharp pieces that make an impression.",
        total: 156,
        items: 4,
        stores: 2,
        productIds: ["taylor-stitch-oxford", "apc-chinos-charcoal", "cp-achilles-white"],
        images: [
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=300&h=300&fit=crop"
        ]
    }
];
