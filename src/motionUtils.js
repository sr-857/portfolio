export const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay, type: "spring", stiffness: 120 }
    }
});

export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15
        }
    }
};
