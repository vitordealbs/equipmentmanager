import db from '../models/index.js';

export const createLoan = async (userId, equipmentId) => {
  return await db.Loan.create({ userId, equipmentId });
};

export const returnLoan = async (id) => {
  const loan = await db.Loan.findByPk(id);
  if (!loan) return null;
  loan.dataDevolucao = new Date();
  return await loan.save();
};

export const getAllLoans = async () => {
  return await db.Loan.findAll({
    include: ['usuario', 'equipamento']
  });
};

export const getLoanById = async (id) => {
  return await db.Loan.findByPk(id, {
    include: ['usuario', 'equipamento']
  });
};
