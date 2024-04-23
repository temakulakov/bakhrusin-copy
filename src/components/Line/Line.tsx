import React from 'react';

// Пропсы, которые принимает компонент
interface IProps {
    items: Array<{
        title: string;
        link: string;
    }>;
}



// Компонент InfiniteScrollLinks
const InfiniteScrollLinks: React.FC<IProps> = ({ items }) => {
    return (
        <div className="scroll-container" style={{ overflowX: 'hidden', width: '100vw', height: '100px' }}>
            <div className="scroll-content" style={{ display: 'flex', animation: 'scroll 20s linear infinite' }}>
                {items.map((item, index) => (
                    <a key={index} href={item.link} style={{ marginRight: '24px', whiteSpace: 'nowrap' }}>
                        {item.title}
                    </a>
                ))}
                {/* Дублирование контента для плавного перехода */}
                {items.map((item, index) => (
                    <a key={`duplicate-${index}`} href={item.link} style={{ marginRight: '24px', whiteSpace: 'nowrap' }}>
                        {item.title}
                    </a>
                ))}
            </div>
            <style>
                {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
            </style>
        </div>
    );
};

export default InfiniteScrollLinks;
