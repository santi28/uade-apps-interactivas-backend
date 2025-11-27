import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

export const obraSocialDAO = {
  findAll: () => prisma.obraSocial.findMany(),

  findById: (id: number) =>
    prisma.obraSocial.findUnique({ where: { id } }),

  create: (data: any) =>
    prisma.obraSocial.create({ data }),

  update: (id: number, data: any) =>
    prisma.obraSocial.update({
      where: { id },
      data,
    }),

  delete: (id: number) =>
    prisma.obraSocial.delete({ where: { id } }),
};
