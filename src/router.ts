import { Router } from "express";
import { body } from "express-validator";
import {
  createInvoice,
  deleteInvoice,
  getOneInvoice,
  getInvoices,
  updateInvoice,
  deleteInvoiceItem,
} from "./handlers/invoice";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/**
 * Invoices
 */
router.get("/invoice", getInvoices);
router.get("/invoice/:id", getOneInvoice);
router.put("/invoice", updateInvoice);
router.post(
  "/invoice",
  body("status").isIn(["DRAFT", "PENDING", "PAID"]).optional(),
  handleInputErrors,
  createInvoice
);
router.delete("/invoice/:id", deleteInvoice);
router.delete("/invoice-item/:id", deleteInvoiceItem);

export default router;
