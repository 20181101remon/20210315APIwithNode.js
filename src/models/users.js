export default (sequelize, DataTypes) => {
    // sequelize資料表預會加s
    const users = sequelize.define('users', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(40),
            unique: true,
        },
        password: {
            type: DataTypes.STRING(60),
        },
        email_verified: {
            type: DataTypes.DATE,
        },
    }, {
        sequelize,
        modelName: 'users',
        freezeTableName: true,
        // 藥用自己取的資料表名稱
    });
    users.associat = (module) => {

    }
    return users;
}
// ORM會幫你組回去語法