export default function initDrummerModel(sequelize, DataTypes) {
  return sequelize.define(
    'drummer',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      price: {
        type: DataTypes.DECIMAL,
      },
    },
    {
      underscored: true,
    },
  );
}
