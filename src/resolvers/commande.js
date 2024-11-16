const produit = async (parent, args, context) => {
    try {
        const produitDetail = await context.prisma.produit.findUnique({
            where: {
                id: parent.produitId, // Vérifiez que `parent.produitId` correspond à un ID unique.
            },
            include: {
                commande: true, // Inclut les détails de la commande associée, si nécessaire.
            },
        });
        return produitDetail;
    } catch (e) {
        console.log("Error:", e);
        throw new Error(e.message);
    }
};
const user = async (parent, args, context) => {
    try {
        const userDetail = await context.prisma.user.findUnique({
            where: {
                id: parent.userId, // Vérifiez que `parent.produitId` correspond à un ID unique.
            },
            include: {
                commandes: true, // Inclut les détails de la commande associée, si nécessaire.
            },
        });
        return userDetail;
    } catch (e) {
        console.log("Error:", e);
        throw new Error(e.message);
    }
};

module.exports = {
    produit,
    user
};
