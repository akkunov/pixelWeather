import React, { useRef, useState } from 'react';

const ScrollableDiv = ({ children,style }) => {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
	setIsDragging(true);
	setStartX(e.pageX- containerRef.current.scrollLeft);
	setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseUp = (e) => {
	setIsDragging(false);

    };

    const handleMouseMove = (e) => {
	if (!isDragging) return;
	e.preventDefault();
	const x = e.pageX - containerRef.current.offsetLeft;
	const walk = (x - startX) + 1; // Измените значение, чтобы ускорить или замедлить скроллирование
	containerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
	<div
	    ref={containerRef}
	    className={`${style} ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
	    onMouseDown={handleMouseDown}
	    onMouseUp={handleMouseUp}
	    onMouseLeave={handleMouseUp}
	    onMouseMove={handleMouseMove}
	    onScroll={scroll}
	>
	    {children}
	</div>
    );
};

export default ScrollableDiv;