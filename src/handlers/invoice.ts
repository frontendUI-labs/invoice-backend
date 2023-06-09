import prisma from "../db";

// Get all
export const getInvoices = async (req, res) => {
  const invoice = await prisma.invoice.findMany({
    where: {},
    include: {
      invoiceItems: true,
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
    include: {
      invoiceItems: true,
    },
  });

  res.json({ data: invoice });
};

// Create one
export const createInvoice = async (req, res) => {
  const invoice = await prisma.invoice.create({
    data: {
      ...req.body,
      invoiceItems: {
        create: req.body.invoiceItems,
      },
    },
  });

  res.json({ data: invoice });
};

// Update one
export const updateInvoice = async (req, res) => {
  const invoice = await prisma.invoice.update({
    where: {
      id: req.body.id,
    },
    data: {
      ...req.body,
      invoiceItems: {
        upsert: req.body.invoiceItems
          ? req.body.invoiceItems.map((item) => ({
              where: {
                id: item.id,
              },
              update: item,
              create: item,
            }))
          : [],
      },
    },
  });

  res.json({ data: invoice });
};

// Delete one
// export const deleteInvoice = async (req, res) => {
//   const deleted = await prisma.invoice.delete({
//     where: {
//       id: req.body.invoiceId,
//     },
//   });
//
//   res.json({ data: deleted });
// };
//
// delete an invoice
export const deleteInvoice = async (req, res) => {
  const invoiceId = req.params.id;

  const deleted = await prisma.invoice.delete({
    where: {
      id: invoiceId,
    },
  });

  res.json({ data: deleted });
};

export const deleteInvoiceItem = async (req, res) => {
  const invoiceItemId = req.params.id;

  const deleted = await prisma.invoiceItem.delete({
    where: {
      id: invoiceItemId,
    },
  });

  res.json({ data: deleted });
};
