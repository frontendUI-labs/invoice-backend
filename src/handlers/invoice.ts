import prisma from "../db";

// Get all
export const getInvoices = async (req, res, next) => {
  try {
    const invoice = await prisma.invoice.findMany({
      where: {},
      include: {
        invoiceItems: true,
      },
    });

    res.json({ data: invoice });
  } catch (error) {
    next(error);
  }
};

// Get one
export const getOneInvoice = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

// Create one
export const createInvoice = async (req, res, next) => {
  try {
    const invoice = await prisma.invoice.create({
      data: {
        ...req.body,
        invoiceItems: {
          create: req.body.invoiceItems,
        },
      },
    });

    res.json({ data: invoice });
  } catch (error) {
    next(error);
  }
};

// Update one
export const updateInvoice = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
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
export const deleteInvoice = async (req, res, next) => {
  try {
    const invoiceId = req.params.id;

    const deleted = await prisma.invoice.delete({
      where: {
        id: invoiceId,
      },
    });

    res.json({ data: deleted });
  } catch (error) {
    next(error);
  }
};

export const deleteInvoiceItem = async (req, res, next) => {
  try {
    const invoiceItemId = req.params.id;

    const deleted = await prisma.invoiceItem.delete({
      where: {
        id: invoiceItemId,
      },
    });

    res.json({ data: deleted });
  } catch (error) {
    next(error);
  }
};
