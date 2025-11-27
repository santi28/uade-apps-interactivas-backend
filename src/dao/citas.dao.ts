import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

export const citasDAO = {
  findAll: () =>
    prisma.cita.findMany(),

  findById: (id: number) =>
    prisma.cita.findUnique({ where: { id } }),

  create: (data: any) =>
    prisma.cita.create({ data }),

  update: (id: number, data: any) =>
    prisma.cita.update({
      where: { id },
      data,
    }),

  delete: (id: number) =>
    prisma.cita.delete({ where: { id } }),
};
 