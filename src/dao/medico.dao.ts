import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

export const medicoDAO = {
  findAll: () => prisma.medico.findMany(),

  findById: (id: number) =>
    prisma.medico.findUnique({ where: { id } }),

  create: (data: any) =>
    prisma.medico.create({ data }),

  update: (id: number, data: any) =>
    prisma.medico.update({
      where: { id },
      data,
    }),

  delete: (id: number) =>
    prisma.medico.delete({ where: { id } }),
};

