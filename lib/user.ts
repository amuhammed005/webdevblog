export const getUserByEmail = (email: string) => {
    try {
        const user = prisma.user.findUnique({
            where: {
                email,
            },
        });
        return user; 
    } catch (error) {
        console.error("Error fetching user by email:", error);
        return null;
    }

}