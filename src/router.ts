import { Router } from "express";
import { body } from "express-validator";
import {
  createInvoice,
  deleteInvoice,
  getOneInvoice,
  getInvoices,
  updateInvoice,
} from "./handlers/invoice";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/**
 * Invoices
 */
router.get("/invoice", getInvoices);
router.get("/invoice/:id", getOneInvoice);
router.put(
  "/invoice/:id",
  body("status").isIn(["DRAFT", "PENDING", "PAID"]).optional(),
  handleInputErrors,
  updateInvoice
);
router.post(
  "/invoice",
  body("status").isIn(["DRAFT", "PENDING", "PAID"]).optional(),
  handleInputErrors,
  createInvoice
);
router.delete("/invoice/:id", deleteInvoice);

export default router;
