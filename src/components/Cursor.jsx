import { useRef, useEffect, memo } from 'react';

const hasPointerDevice = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const Cursor = memo(function Cursor() {
    const cursorRef = useRef(null);
    const positionRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Skip on devices without a fine pointer (touch-only)
        if (!hasPointerDevice()) return;

        let rafId = null;

        const mouseMove = (e) => {
            positionRef.current = { x: e.clientX, y: e.clientY };

            if (rafId === null) {
                rafId = requestAnimationFrame(() => {
                    if (cursorRef.current) {
                        const offset = 8; // fixed 16px / 2
                        cursorRef.current.style.transform = `translate3d(${positionRef.current.x - offset}px, ${positionRef.current.y - offset}px, 0)`;
                    }
                    rafId = null;
                });
            }
        };

        window.addEventListener("mousemove", mouseMove, { passive: true });

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
    }, []);

    // Skip render on touch-only devices
    if (!hasPointerDevice()) return null;

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block will-change-transform"
            style={{
                width: 16,
                height: 16,
            }}
        >
            <div className="w-full h-full bg-black rounded-full" />
        </div>
    );
});

export default Cursor;
