import mongoose from "mongoose";

const paymentRequestSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    note: { type: String },
    packageName: { type: String },
    credits: { type: Number },
    amountNaira: { type: Number }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const PaymentRequest = mongoose.model("PaymentRequest", paymentRequestSchema);

export default PaymentRequest;
