import prisma from "../db";

// Get all
export const getInvoices = async (req, res) => {
  const invoice = await prisma.invoice.findMany({
    where: {},
    include: {
      items: true,
    },
  });

  res.json({ data: invoice });
};

// Get one
export const getOneInvoice = async (req, res) => {
  const id = req.params.id;

  const invoice = await prisma.invoice.findFirst({
    where: {
      id,
    },
  });

  res.json({ data: invoice });
};

// Create one
export const createInvoice = async (req, res) => {
  const invoice = await prisma.invoice.create({
    data: req.body,
  });

  res.json({ data: invoice });
};

// Update one
export const updateInvoice = async (req, res) => {
  const updated = await prisma.invoice.update({
    where: {
      id: req.body.productId,
    },
    data: req.body,
  });

  res.json({ data: updated });
};

// Delete one
export const deleteInvoice = async (req, res) => {
  const deleted = await prisma.invoice.delete({
    where: {
      id: req.body.productId,
    },
  });

  res.json({ data: deleted });
};
