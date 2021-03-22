// 類似co api 會有hoisting問題
//異布 
export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        email: {
            type: Sequelize.STRING(40),

        }, password: {
            type: Sequelize.STRING(60),
        },
        email_verified: {
            type: Sequelize.DATE,
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    })
}

export async function down(queryInterface, sequelize) {

}

