// eslint-disable import/perfer-default-export
// 設定編碼方式
export async function up(queryInterface) {
  await queryInterface.sequelize.query(`ALTER DATABASE ${queryInterface.sequelize.config.database} CHARACTER SET utf8 COLLATE utf8_general_ci`);
}
