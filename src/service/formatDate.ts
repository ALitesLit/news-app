export const getMoth = (date: Date): string => {
    const moth: string = date.toLocaleString('en', { month: 'short' });

    return moth;
}