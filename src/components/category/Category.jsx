// // src/components/CategoryCards.jsx
import React from 'react';

const category = [
    {
        id: 1,
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'fashion'
    },
    {
        id: 2,
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'shirt'
    },
    {
        id: 3,
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'jacket'
    },
    {
        id: 4,
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'mobile'
    },
    {
        id: 5,
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'laptop'
    },
    {
        id: 6,
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'shoes'
    },
    {
        id: 7,
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'home'
    },
    {
        id: 8,
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'books'
    }
];

const CategoryCards = () => {
    return (
        <div className='w-11/12 mx-20 border border-gray-400 rounded-md my-4 h-56'>
        <div className=" flex my-7  grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-10 px-12">
            {category.map((item) => (
                <div 
                    key={item.id} 
                    className=" w-60 bg-white shadow-sm rounded-md overflow-hidden border border-gray-200"
                >
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-24 object-contain p-2"
                    />
                    <div className="p-2">
                        <h3 className="text-center text-sm font-medium text-gray-700">
                            {item.name}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default CategoryCards;
